"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import classNames from "classnames";
import SideBarNav from "./SideBarNav";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const SideBar = ({ isShow, isShowMd }) => {
  const [isNarrow, setIsNarrow] = useState(false);

  const toggleIsNarrow = () => {
    const newValue = !isNarrow;
    localStorage.setItem("isNarrow", newValue ? "true" : "false");
    setIsNarrow(newValue);
  };

  useEffect(() => {
    if (localStorage.getItem("isNarrow")) {
      setIsNarrow(localStorage.getItem("isNarrow") === "true");
    }
  }, [setIsNarrow]);

  return (
    <div
      className={classNames("sidebar flex flex-col fixed h-screen", {
        "sidebar-narrow": isNarrow,
        show: isShow,
        "md-hide": !isShowMd,
      })}
      id="sidebar"
    >
      <div className="sidebar-brand hidden md:flex items-center justify-center">
        <Image
          src="/assets/logo.png"
          alt="BoldTech Logo"
          className="sidebar-brand-full"
          width={50}
          height={50}
          priority
        />

        <Image
          src="/assets/logo.png"
          alt="BoldTech Logo"
          className="sidebar-brand-narrow hidden"
          width={30}
          height={30}
          priority
        />
      </div>

      <div className="sidebar-nav flex-grow">
        <SideBarNav />
      </div>

      <Button
        variant="link"
        className="sidebar-toggler hidden md:inline-block rounded-none text-right pe-4 font-bold shadow-none"
        onClick={toggleIsNarrow}
        type="button"
        aria-label="sidebar toggler"
      >
        <FontAwesomeIcon
          className="sidebar-toggler-chevron"
          icon={faAngleLeft}
          fontSize={24}
        />
      </Button>
    </div>
  );
};

export const SideBarOverlay = ({ isShowSidebar, toggleSidebar }) => {
  return (
    <div
      tabIndex={-1}
      aria-hidden
      className={classNames(
        "sidebar-overlay fixed top-0 bg-dark w-full h-full opacity-50",
        { hidden: !isShowSidebar }
      )}
      onClick={toggleSidebar}
    />
  );
};

export default SideBar;
