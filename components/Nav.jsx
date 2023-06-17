"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import FeaturedNav from "./FeaturedNav";
import ProfileNav from "./ProfileNav";
import { Button, Container } from "react-bootstrap";
import Image from "next/image";
import Breadcrumb from "./Breadcrumb";

const Nav = ({ toggleSidebar, toggleSidebarMd }) => {
  return (
    <header className="header sticky top-0 mb-4 py-2 px-2 sm:px-2 border-b">
      <Container fluid className="header-navbar flex items-center">
        <Button
          variant="link"
          className="header-toggler md:hidden block md:px-0 md:me-3 rounded-none shadow-none"
          type="button"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={faBars} />
        </Button>
        <Button
          variant="link"
          className="header-toggler hidden md:inline-block md:px-0 md:mr-3 rounded-none shadow-none"
          type="button"
          onClick={toggleSidebarMd}
        >
          <FontAwesomeIcon icon={faBars} />
        </Button>

        <Link href="/" className="header-brand md:hidden block">
          <Image
            src="/assets/logo.png"
            alt="BoldTech Logo"
            className="sidebar-brand-full"
            width={50}
            height={50}
            priority
          />
        </Link>
        <div className="header-nav hidden md:flex">
          <FeaturedNav />
        </div>
        <div className="header-nav ml-auto">
          <ProfileNav />
        </div>
      </Container>
      <div className="header-divider border-t my-2 mx-n2 sm:mx-0" />
      <Container fluid>
        <Breadcrumb />
      </Container>
    </header>
  );
};

export default Nav;
