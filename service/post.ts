import axios from "axios";

export const onLoadPost = () => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
};
