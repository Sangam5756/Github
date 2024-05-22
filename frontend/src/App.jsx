import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import LikesPage from "./pages/LikesPage";
import ExplorePage from "./pages/ExplorePage";

import SideBar from "./components/Sidebar";
import { useAuthContext } from "./context/authContext";

function App() {

   const { authUser, loading}= useAuthContext();
   console.log("Authenticated user :",authUser)

   if(loading) return null;
  
  return (
    <div className="flex">
      <SideBar />
      <div className="max-w-5lxl my-5 text-white mx-auto transition-all duratiion-300 flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to={"/"}/> } />
          <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to={"/"}/> } />
          <Route path="/explore" element={ authUser ? <ExplorePage /> : <Navigate to={"/login"}/>} />
          <Route path="/likes" element={authUser ? < LikesPage /> : <Navigate to={"/login"}/>} />
        </Routes>
        <Toaster/>
      </div>
    </div>
  );
}

export default App;
