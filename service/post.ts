import axios from "axios";
import { client } from "./sanity";

export const getPosts = async () => {
  return client.fetch(`*[_type =="post"]`);
};

export const onLoadPost = (lastId: number) => {
  return axios.get(`http://localhost:4000/posts?lastId=${lastId || 0}`);
};

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
