import { useState, useEffect } from "react";

export default function useFindUser() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function findUser() {
      const userStr = localStorage.getItem("VLUser");
      if (userStr) {
        console.log(userStr);
        setUser(JSON.parse(userStr));
      }
      setIsLoading(false);
    }

    findUser();
  }, []);

  return {
    user,
    setUser,
    isLoading,
  };
}
