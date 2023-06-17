"use client";
import { Badge, Dropdown, Nav, NavItem } from "react-bootstrap";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCreditCard,
  faEnvelopeOpen,
  faFile,
  faMessage,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faGear,
  faListCheck,
  faLock,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
// import axios from "axios";
import { useRouter } from "next/navigation";

const ItemWithIcon = ({ icon, children }) => {
  return (
    <>
      <FontAwesomeIcon className="me-2" icon={icon} fixedWidth />
      {children}
    </>
  );
};

const ProfileNav = () => {
  return (
    <Nav>
      <Dropdown as={NavItem}>
        <Dropdown.Toggle
          variant="link"
          bsPrefix="hide-caret"
          className="py-0 px-2 rounded-none"
          id="dropdown-profile"
        >
          <div className="avatar relative">
            <Image
              src="/assets/logo.png"
              alt="BoldTech Logo"
              width={50}
              height={50}
              priority
            />
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu className="pt-0">
          <Dropdown.Header className="bg-gray-100 font-bold rounded-t">
            Account
          </Dropdown.Header>
          <Link href="#" passHref legacyBehavior>
            <Dropdown.Item>
              <ItemWithIcon icon={faBell}>
                Updates
                <Badge bg="info" className="ms-2">
                  3
                </Badge>
              </ItemWithIcon>
            </Dropdown.Item>
          </Link>
          <Link href="#" passHref legacyBehavior>
            <Dropdown.Item>
              <ItemWithIcon icon={faMessage}>
                Messages
                <Badge bg="warning" className="ms-2">
                  42
                </Badge>
              </ItemWithIcon>
            </Dropdown.Item>
          </Link>

          <Dropdown.Header className="bg-gray-100 font-bold rounded-t-lg">
            Settings
          </Dropdown.Header>

          <Link href="#" passHref legacyBehavior>
            <Dropdown.Item>
              <ItemWithIcon icon={faUser}>Profile</ItemWithIcon>
            </Dropdown.Item>
          </Link>
          <Link href="#" passHref legacyBehavior>
            <Dropdown.Item>
              <ItemWithIcon icon={faGear}>Settings</ItemWithIcon>
            </Dropdown.Item>
          </Link>
          <Link href="#" passHref legacyBehavior>
            <Dropdown.Item>
              <ItemWithIcon icon={faCreditCard}>Payments</ItemWithIcon>
            </Dropdown.Item>
          </Link>
          <Link href="#" passHref legacyBehavior>
            <Dropdown.Item>
              <ItemWithIcon icon={faFile}>Projects</ItemWithIcon>
            </Dropdown.Item>
          </Link>

          <Dropdown.Divider />

          <Link href="#" passHref legacyBehavior>
            <Dropdown.Item>
              <ItemWithIcon icon={faLock}>Lock Account</ItemWithIcon>
            </Dropdown.Item>
          </Link>
          <Dropdown.Item onClick={() => {}}>
            <ItemWithIcon icon={faPowerOff}>Logout</ItemWithIcon>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Nav>
  );
};

export default ProfileNav;
