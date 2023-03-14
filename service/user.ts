import axios from "axios";

export const onIdCheck = async (id: string) => {
  try {
    const result = await axios
      .post(`http://localhost:4000/user/check`, { data: id })
      .then((data) => {
        if (data.data) {
          return true;
        } else {
          return false;
        }
      });
    return result;
  } catch {
    return false;
  }
};

export const onJoin = async (data: any) => {
  try {
    const result = await axios.post(`http://localhost:4000/user`, data);
    return result.data;
  } catch {
    return alert("회원가입에 실패했습니다.");
  }
};

export const onUserImgUpload = async (data: any) => {
  try {
    const result = await axios.post(`http://localhost:4000/user/image`, data);
    return result.data;
  } catch {
    return false;
  }
};

export const onUserUpdate = async (data: any) => {
  try {
    const result = await axios.patch(`http://localhost:4000/user/edit`, data);
    return result;
  } catch {
    return false;
  }
};

export const onGetUser = async () => {
  try {
    const result = await axios.get(`http://localhost:4000/user`);
    return result.data;
  } catch {
    return false;
  }
};
