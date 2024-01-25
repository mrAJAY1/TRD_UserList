import { Route, Routes } from "react-router-dom";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Users />} />
      <Route path="/details/:id" element={<UserDetails />} />
    </Routes>
  );
}

export default App;
