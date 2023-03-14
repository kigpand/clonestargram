import axios from "axios";

export const onLogin = async (id: string, pw: string) => {
  try {
    const result = await axios.post(`http://localhost:4000/user/login`, {
      id,
      pw,
    });
    return result;
  } catch (e) {
    alert("입력된 정보가 잘못됬습니다");
    return null;
  }
};

export const onLogout = async () => {
  try {
    const result = await axios.post(`http://localhost:4000/user/logout`);
    return result;
  } catch (e) {
    alert("오류가 발생했습니다");
    return null;
  }
};
