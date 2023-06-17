"use client";

import { useResizeDetector } from "react-resize-detector";
import SideBar, { SideBarOverlay } from "./SideBar";
import { Container } from "react-bootstrap";
import { useCallback, useEffect, useState } from "react";
import Button from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Nav from "./Nav";

export default function AdminLayout({ children }) {
  //Show status for xs screen
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  //Show status for md screen and above
  const [isShowSidebarMd, setIsShowSidebarMd] = useState(true);

  const toggleIsShowSidebar = () => {
    setIsShowSidebar(!isShowSidebar);
  };

  const toggleIsShowSidebarMd = () => {
    const newValue = !isShowSidebarMd;
    localStorage.setItem("isShowSidebarMd", newValue ? "true" : "false");
    setIsShowSidebarMd(newValue);
  };

  //Clear and reset sidebar
  const resetIsShowSidebar = () => {
    setIsShowSidebar(false);
  };

  const onResize = useCallback(() => {
    resetIsShowSidebar();
  }, []);

  const { ref } = useResizeDetector({ onResize });

  //On first time load only
  useEffect(() => {
    if (localStorage.getItem("isShowSidebarMd")) {
      setIsShowSidebarMd(localStorage.getItem("isShowSidebarMd") === "true");
    }
  }, [setIsShowSidebarMd]);

  return (
    <>
      <div ref={ref} className="absolute w-full" />

      <SideBar isShow={isShowSidebar} isShowMd={isShowSidebarMd} />

      <div className="wrapper flex flex-col min-h-screen bg-gray-100">
        <Nav
          toggleSidebar={toggleIsShowSidebar}
          toggleSidebarMd={toggleIsShowSidebarMd}
        />
        <div className="flex-grow px-2 sm:px-2 mb-4">
          <Container fluid="lg">{children}</Container>
        </div>
      </div>

      <SideBarOverlay
        isShowSidebar={isShowSidebar}
        toggleSidebar={toggleIsShowSidebar}
      />
    </>
  );
}
