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

export const onImgUpload = (data: any) => {
  return axios.post(`http://localhost:4000/post/images`, data);
};

export const onAddPost = (data: any) => {
  return axios.post(`http://localhost:4000/post`, data);
};

export const onAddComment = (data: any) => {
  return axios.post(`http://localhost:4000/post/${data.postid}/comment`, data);
};

export const onDeletePost = (id: number, data: any) => {
  return axios.delete(`http://localhost:4000/post/${id}`, {
    data,
  });
};

export const onSearchHashTag = (text: string) => {
  return axios.get(`http://localhost:4000/hashtag/${text}`);
};
