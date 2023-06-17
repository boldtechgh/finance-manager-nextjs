import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faBell,
  faFileLines,
  faStar,
  IconDefinition,
} from "@fortawesome/free-regular-svg-icons";
import {
  faChevronUp,
  faCogs,
  faGauge,
  faMoneyBill,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useEffect, useState } from "react";
import {
  Accordion,
  AccordionContext,
  Badge,
  Button,
  Nav,
  useAccordionButton,
} from "react-bootstrap";
import classNames from "classnames";
import Link from "next/link";

const SideBarNavItem = ({ href, icon, children }) => {
  return (
    <Nav.Item>
      <Link href={href} passHref legacyBehavior>
        <Nav.Link className="px-3 py-2 flex items-center">
          {icon ? (
            <FontAwesomeIcon className="nav-icon ml-[-0.75rem]" icon={icon} />
          ) : (
            <span className="nav-icon ml-[-0.75rem]" />
          )}
          {children}
        </Nav.Link>
      </Link>
    </Nav.Item>
  );
};

const SIdeBarNavTitle = ({ children }) => {
  return (
    <li className="nav-title px-3 py-2 mt-3 uppercase font-bold">{children}</li>
  );
};

const SideBarNavGroupToggle = ({ eventKey, icon, setIsShow, children }) => {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(eventKey);
  const isCurrentEventKey = activeEventKey === eventKey;
  console.log("Event Key", activeEventKey);
  console.log("Is Current Event Key", eventKey);

  useEffect(() => {
    setIsShow(activeEventKey === eventKey);
  }, [activeEventKey, eventKey, setIsShow]);

  return (
    <Button
      className={classNames(
        "rounded-0 nav-link px-3 py-2 flex items-center flex-grow w-full shadow-none",
        { collapsed: !isCurrentEventKey }
      )}
      variant="link"
      type="button"
      onClick={decoratedOnClick}
    >
      <FontAwesomeIcon className="nav-icon ml-[-0.75rem]" icon={icon} />
      {children}
      <div className="nav-chevron ml-auto text-end">
        <FontAwesomeIcon size="xs" icon={faChevronUp} />
      </div>
    </Button>
  );
};

const SideBarNavGroup = ({ toggleIcon, toggleText, children }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <Accordion
      as="li"
      bsPrefix="nav-group"
      className={classNames({ show: isShow })}
    >
      <SideBarNavGroupToggle
        icon={toggleIcon}
        eventKey="0"
        setIsShow={setIsShow}
      >
        {toggleText}
      </SideBarNavGroupToggle>
      <Accordion.Collapse eventKey="0">
        <ul className="nav-group-items list-none">{children}</ul>
      </Accordion.Collapse>
    </Accordion>
  );
};

const SideBarNav = () => {
  return (
    <ul className="list-none">
      <SideBarNavItem icon={faGauge} href="/revenue-manager">
        Dashboard
        <small className="ml-auto">
          <Badge bg="info" className="ml-auto">
            NEW
          </Badge>
        </small>
      </SideBarNavItem>

      <SideBarNavItem icon={faUsers} href="/revenue-manager">
        Users
        <small className="ml-auto">
          <Badge bg="info" className="ml-auto">
            NEW
          </Badge>
        </small>
      </SideBarNavItem>

      <SideBarNavItem icon={faCogs} href="/revenue-manager">
        Settings
        <small className="ml-auto">
          <Badge bg="info" className="ml-auto">
            NEW
          </Badge>
        </small>
      </SideBarNavItem>

      <SIdeBarNavTitle>Revenue Manager</SIdeBarNavTitle>
      <SideBarNavGroup toggleIcon={faMoneyBill} toggleText="Cash Flow">
        <SideBarNavItem href="#">Record</SideBarNavItem>
        <SideBarNavItem href="#">Record</SideBarNavItem>
        <SideBarNavItem href="#">Record</SideBarNavItem>
      </SideBarNavGroup>
    </ul>
  );
};

export default SideBarNav;
