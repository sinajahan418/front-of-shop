// import Footer from "./components/index/footer/Footer";
import { useNavigate } from "react-router-dom";
import Header from "./components/index/header/Header";
import Home from "./components/index/home/Home";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate()
  useEffect(()=>{
     const user = localStorage.getItem("user")
  if (!user) {
    navigate("/sing-up")
     console.log("adasdsfsf");
  }
  },[])
 
  return (
    <>
     <Home/>
    </>
  );
}

export default App;
