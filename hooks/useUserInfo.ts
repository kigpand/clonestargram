import { useEffect } from "react";
import useUser from "../store/user";
import { useRouter } from "next/navigation";

export default function useUserInfo() {
  const { user, setUser } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      onFetchUser();
    }
  }, []);

  async function onFetchUser() {
    fetch("/api/login/", {
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
      })
      .catch(() => {
        router.push("/");
      });
  }

  function onClearUser() {
    setUser(null);
  }

  return { user, onFetchUser, onClearUser };
}
