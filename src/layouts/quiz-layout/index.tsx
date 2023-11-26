import React, { lazy } from "react";
import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";

const Navbar = lazy(() => import("../../components/Navbar"));
const Aside = lazy(() => import("../../components/Aside"));

const QuizLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout style={{ backgroundColor: "#F9F9F9" }}>
      <Sider width={"fit-content"} className="w-fit hidden md:flex">
        <Navbar />
      </Sider>
      <Content style={{ padding: "20px" }}>
        <section>{children}</section>
      </Content>
      <Sider
        width={"fit-content"}
        className="w-fit hidden md:flex"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <Aside />
      </Sider>
    </Layout>
  );
};

export default QuizLayout;
