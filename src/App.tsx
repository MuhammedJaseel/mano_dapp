import { useEffect, useState } from "react";
import "./App.css";
import LoginPage from "./pages/login";
import HomePage from "./pages/dashboard";
// import Home from "./pages/me";

function App() {
  const [path, setpath] = useState("");
  const [loading, setloading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setloading(true);
    const address = window.localStorage.getItem("account") || "";
    if (address.length !== 42) setpath("login");
    else setpath("home");

    setloading(false);
  };

  // return <Home />;

  if (loading) return <div>Loading...</div>;

  return (
    <>
      {path === "login" && <LoginPage reload={loadData} />}
      {path === "home" && <HomePage reload={loadData} />}
    </>
  );
}

export default App;
