import axios from "axios";

export const onLoadPost = () => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
};

export const onImgUpload = (data: any) => {
  return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/post/images`, data);
};
