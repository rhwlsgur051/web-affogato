import { useEffect, useState } from "react";
import { healthCheck } from "../api/axios";
import { HeaderComponent } from "../components/Header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  const [showHeader, setShowHeader] = useState(false);
  const init = async () => {
    await healthCheck();
    setShowHeader(true);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      {!showHeader && (
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
