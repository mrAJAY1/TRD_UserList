import { useEffect, useState } from "react";

const useFetch = () => {
  const [userData, setUserData] = useState(null);

  const fetchUsers = async () => {
    const response = await fetch("https://randomuser.me/api/?results=10");
    const data = await response.json();
    setUserData(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return userData;
};

export default useFetch;
