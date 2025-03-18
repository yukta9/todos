import { Row, Col } from "antd";
import Header from "../header";
import Navbar from "../sideNav";
import "./style.scss";
import Content from "../content";
import { Route, Routes } from "react-router-dom";
import TaskDetails from "../taskDetails";
import { Suspense } from "react";

const Layout: React.FC = () => {
  return (
    <section className="layout-section">
      <div>
        <Header />
      </div>
      <div>
        <Navbar />
      </div>
      <div className="container-wrapper">
        <Suspense>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/task-details" element={<TaskDetails />} />
          </Routes>
        </Suspense>
        {/* <Content /> */}
      </div>
    </section>
  );
};

export default Layout;
