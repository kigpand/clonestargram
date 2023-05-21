import axios from "axios";
import { client, urlFor } from "./sanity";
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
