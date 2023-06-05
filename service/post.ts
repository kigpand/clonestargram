import { assetURL, client, urlFor } from "./sanity";
import { IPost } from "../interface/IPost";

export const getPosts = async () => {
  const simplePostProjection = `
    ...,
    "username": author->name,
    "userImage": author->image,
    "image": photo,
    "likes": likes[]->username,
    "content": content,
    "comments": comments,
    "id":author->username,
    "createdAt": _createdAt,
    "postId":_id
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

export async function addComment(
  postId: string,
  userId: string,
  comment: string
) {
  console.log(postId);
  console.log(userId);
  console.log(comment);
  return client
    .patch(postId)
    .setIfMissing({ comments: [] })
    .append("comments", [
      {
        comment,
        author: { _ref: userId, _type: "reference" },
      },
    ])
    .commit({ autoGenerateArrayKeys: true });
}
