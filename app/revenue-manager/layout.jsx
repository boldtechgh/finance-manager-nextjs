import Nav from "@components/Nav";
import SideBar from "@components/SideBar";
import AdminLayout from "@components/AdminLayout";

export const metadata = {
  title: "Revenue Manager",
  description: "Generated by create next app",
};

export default function Layout({ children }) {
  return (
    <>
      {/* <Nav />
      <SideBar /> */}
      <AdminLayout>{children}</AdminLayout>
      {/* <div>{children}</div> */}
    </>
  );
}
