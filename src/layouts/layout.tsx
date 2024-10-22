import { useEffect, useState } from "react";
import { healthCheck } from "../api/axios";
import { HeaderComponent } from "../components/Header";
import { Outlet, useNavigate } from "react-router-dom";

export const Layout = () => {
  const navigate = useNavigate();
  const [showHeader, setShowHeader] = useState(false);
  const init = async () => {
    healthCheck().then(
      () => {
        setShowHeader(true);
      },
      () => {
        navigate("/");
      }
    );
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      {showHeader && (
        <div id="header">
          <HeaderComponent />
        </div>
      )}
      <div id="body">
        <Outlet />
      </div>
    </>
  );
};
