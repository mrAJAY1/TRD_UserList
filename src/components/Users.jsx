import { useContext } from "react";
import { userContext } from "../UserContext";
import { Link } from "react-router-dom";

const Users = () => {
  const userList = useContext(userContext);
  if (!userList) return <h1>Data is Loading...</h1>;
  return (
    <div className="container mx-auto mt-5">
      <h1 className=" text-2xl text-center mb-5 font-bold uppercase">
        Users List
      </h1>
      <div className="flex flex-col gap-10">
        {userList?.results?.map((user) => {
          return (
            <Link
              key={`${user.name.first} ${user.name.last}`}
              to={`/details/${user.name.first} ${user.name.last}`}
              className="flex h-20 border rounded items-center justify-center shadow-xl"
            >
              {user.name.first + " " + user.name.last}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
