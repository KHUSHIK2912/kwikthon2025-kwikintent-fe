import "antd/dist/reset.css";
import "./index.css";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import PDPWidgetPreviewPage from "./pages/pdp-widget";
import { Button, Layout, Menu, Space, Switch } from "antd";
import { Header } from "antd/es/layout/layout";
import {
  AppstoreOutlined,
  BarChartOutlined,
  BulbOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import DashboardPage from "./pages/dashboard";
import ConfigurationPage from "./pages/configuration";
import { BrowserRouter, Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";
import { Login } from "./pages/login-page";

function AppLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('authToken'));
  const navigate = useNavigate();
  const location = useLocation();

  // Map routes to menu keys
  const routeToKey: Record<string, string> = {
    "/": "dashboard",
    "/dashboard": "dashboard",
    "/configuration": "configuration",
    "/pdp-widget": "widgets",
    "/widgets": "widgets",
    "/analytics": "analytics",
  };

  // Find the selected key based on the current path
  const selectedKey = routeToKey[location.pathname] || "dashboard";

  if (!isLoggedIn && location.pathname !== "/login") {
    // Redirect to login if not logged in
    return <Navigate to="/login" replace />;
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {isLoggedIn && (
        <Header style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <BulbOutlined style={{ color: "#f43f5e", fontSize: 24 }} />
            <span style={{ fontSize: 20, fontWeight: 600, color: "#fff" }}>
              KwikIntent
            </span>
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[selectedKey]}
            style={{ flex: 1, marginLeft: 32 }}
            items={[
              { key: "dashboard", label: "Dashboard", icon: <AppstoreOutlined /> },
              {
                key: "configuration",
                label: "Configuration",
                icon: <SettingOutlined />,
              },
              { key: "widgets", label: "Widgets", icon: <AppstoreOutlined /> },
            //   { key: "analytics", label: "Analytics", icon: <BarChartOutlined /> },
            ]}
            onClick={({ key }) => {
              if (key === "dashboard") navigate("/");
              else if (key === "configuration") navigate("/configuration");
              else if (key === "widgets") navigate("/pdp-widget");
              else if (key === "analytics") navigate("/analytics");
            }}
          />
        </Header>
      )}
      <Routes>
      <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        {isLoggedIn && <Route path="/pdp-widget" element={<PDPWidgetPreviewPage />} />}
        {isLoggedIn && <Route path="/configuration" element={<ConfigurationPage />} />}
        {isLoggedIn && <Route path="/" element={<DashboardPage />} />}
      </Routes>
    </Layout>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <BrowserRouter>
    <AppLayout />
  </BrowserRouter>
);
