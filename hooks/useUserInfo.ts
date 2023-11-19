import { useEffect } from "react";
import useUser from "../store/user";
import { useRouter } from "next/navigation";

// user 정보 갱신 및 유지(jwt token) 담당 custom hook
export default function useUserInfo() {
  const { user, setUser } = useUser();
  const router = useRouter();

  useEffect(() => {}, []);

  // login처리 메소드
  async function onLogin(id: string, pw: string) {
    fetch("/api/login/", {
      method: "post",
      body: JSON.stringify({
        id,
        pw,
      }),
    })
      .then((data) => data.json())
      .then(() => {
        alert("로그인 되었습니다");
      })
      .catch((e) => {
        alert("아이디와 비밀번호를 확인해주세요.");
      });
  }

  // token 확인해서 user가 있을 경우 post page로 이동하도록 해주는 메소드.
  async function onCheckLogin() {
    fetch("/api/login/", {
      method: "get",
    })
      .then((data) => data.json())
      .then(() => {
        router.push("/");
      })
      .catch(() => console.log("로그인 계정 토큰이 없습니다."));
  }

  // user 정보를 새로 받아와서 업데이트 해주는 메소드
  async function onFetchUser() {
    const newUser = await fetch("/api/login/", {
      method: "get",
    })
      .then((data) => data.json())
      .then((res) => {
        const user = res.data;
        setUser({
          id: user.username,
          name: user.name,
          phone: user.phone,
          email: user.email,
          image: user.image || null,
          intro: user.intro || "",
          followings: user.following,
          followers: user.followers,
        });

        return user;
      })
      .catch(() => {
        router.push("/");
      });

    return newUser;
  }

  function onClearUser() {
    setUser(null);
  }

  return { user, onLogin, onCheckLogin, onFetchUser, onClearUser };
}
