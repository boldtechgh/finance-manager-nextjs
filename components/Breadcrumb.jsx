import { Breadcrumb as BSBreadcrumb } from "react-bootstrap";

const Breadcrumb = () => {
  return (
    <BSBreadcrumb listProps={{ className: "mb-0 items-center" }}>
      <BSBreadcrumb.Item linkProps={{ className: "no-underline" }} href="/">
        Dashboard
      </BSBreadcrumb.Item>
      <BSBreadcrumb.Item linkProps={{ className: "no-underline" }} href="/">
        Cash Flow
      </BSBreadcrumb.Item>
      <BSBreadcrumb.Item active>Income</BSBreadcrumb.Item>
    </BSBreadcrumb>
  );
};

export default Breadcrumb;
