import axios from "axios";

export const onLoadPost = () => {
  return axios.get("http://localhost:5000/posts");
};
