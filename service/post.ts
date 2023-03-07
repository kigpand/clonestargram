import axios from "axios";

export const onLoadPost = () => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
};

export const onImgUpload = (data: any) => {
  return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/post/images`, data);
};

export const onAddPost = (data: any) => {
  return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/post`, data);
};

export const onAddComment = (data: any) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/post/${data.postid}/comment`,
    data
  );
};

export const onDeletePost = (id: number, data: any) => {
  return axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/post/${id}`, {
    data,
  });
};
