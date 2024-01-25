import { useContext } from "react";
import { useParams } from "react-router-dom";
import { userContext } from "../UserContext";

const UserDetails = () => {
  const { id } = useParams();
  const users = useContext(userContext);
  const user = users?.results?.filter(
    (data) =>
      data.name.first === id.split(" ")[0] &&
      data.name.last === id.split(" ")[1]
  )[0];
  console.log(user);
  return (
    <div className="container mt-5 mx-auto flex flex-col items-center justify-center h-dvh">
      <button
        className="bg-gray-300 mb-5 self-start rounded-lg border py-2 px-5 shadow-md ml-5"
        onClick={() => window.history.back()}
      >
        Home
      </button>
      <div className="w-3/4 md:w-[500px] p-5 border rounded-xl shadow-lg  flex flex-col justify-center items-center">
        <div className="w-14 h-14 mb-5">
          <img
            src={user?.picture?.large}
            className="rounded-full border"
            alt=""
          />
        </div>
        <h1 className=" text-2xl text-center mb-2 font-bold uppercase">
          {user.name.first + " " + user.name.last}
        </h1>
        <p className="text-lg">{user.email}</p>
        <p className="text-sm">
          {user.location.state + ", " + user.location.country}
        </p>
        <div className="flex flex-col"></div>
      </div>
    </div>
  );
};

export default UserDetails;
