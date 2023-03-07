import axios from "axios";

export const onIdCheck = async (id: string) => {
  try {
    const result = await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/user/check`, { data: id })
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
    const result = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/user`,
      data
    );
    return result.data;
  } catch {
    return alert("회원가입에 실패했습니다.");
  }
};
