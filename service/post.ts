import { assetURL, client, urlFor } from "./sanity";
import { IPost } from "../interface/IPost";

export const getPosts = async () => {
  const simplePostProjection = `
    ...,
    "username": author->username,
    "userImage": author->image,
    "image": photo,
    "likes": likes[]->username,
    "text": comments[0].comment,
    "comments": count(comment),
    "id":_id,
    "createdAt": _createdAt
  `;
  return client
    .fetch(`*[_type =="post"]{${simplePostProjection}}`)
    .then((posts) =>
      posts.map((post: IPost) => {
        if (post.image) {
          return { ...post, image: urlFor(post.image) };
        }
        return post;
      })
    );
};

export async function addComment(
  postId: string,
  userId: string,
  comment: string
) {
  return client
    .patch(postId)
    .setIfMissing({ comments: [] })
    .append("comments", [
      {
        comment,
        author: { _ref: userId, _type: "reference" },
      },
    ]);
}

export async function createPost(
  id: string,
  tag: string,
  content: string,
  image: Blob
) {
  return fetch(assetURL, {
    method: "POST",
    headers: {
      "content-type": image.type,
      authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_TOKEN}`,
    },
    body: image,
  })
    .then((res) => res.json())
    .then((result) => {
      return client.create(
        {
          _type: "post",
          author: { _ref: id },
          photo: { asset: { _ref: result.document._id } },
          content: content,
          likes: [],
          comments: [],
          tag: tag,
        },
        { autoGenerateArrayKeys: true }
      );
    });
}
