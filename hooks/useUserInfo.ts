import { useEffect } from "react";
import useUser from "../store/user";
import { useRouter } from "next/navigation";

// user 정보 갱신 및 유지(jwt token) 담당 custom hook
export default function useUserInfo() {
  const { user, setUser } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      onFetchUser();
    }
  }, []);

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

  return { user, onFetchUser, onClearUser };
}
