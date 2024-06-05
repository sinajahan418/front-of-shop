// import Footer from "./components/index/footer/Footer";
import { Outlet, useNavigate } from "react-router-dom";
// import Home from "./components/index/home/Home";
import { useEffect } from "react";
import swal from "sweetalert";
import { useAuthUser } from "./store/AuthUser";
import Footer from "./components/index/footer/Footer";
import Header from "./components/index/header/Header";
import { ContextProvaider } from "./context/AuthContext";
import Home from "./pages/home/Home";

function App() {
  const navigate = useNavigate();
  const { setAuthUser } = useAuthUser();
  useEffect(() => {
    const isUserEsist = async () => {
      const userStoreg = JSON.parse(localStorage.getItem("user"));
      const user = await fetch("/api/user-details");
      if (!user.status === 200) {
        navigate("/login");
      }
      if (user.status === 200) {

        setAuthUser(userStoreg);
      }
    };
    isUserEsist();
  }, []);

  return (
    <>
      <ContextProvaider>
        <Header />
        <main className="min-h-[calc(100vh-120px)] pt-16">
          <Outlet/>
          <Home/>
        </main>
        <Footer />
      </ContextProvaider>
    </>
  );
}

export default App;
