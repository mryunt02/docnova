import React from "react";
import { Layout, Select, Space, Button, Dropdown } from "antd";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  GlobalOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { RootState } from "../store";
import { logout } from "../store/slices/authSlice";

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  const { i18n, t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const userMenuItems = [
    {
      key: "email",
      label: user?.email,
      disabled: true,
    },
    {
      type: "divider" as const,
    },
    {
      key: "logout",
      label: (
        <span>
          <LogoutOutlined style={{ marginRight: 8 }} />
          {t("common.logout") || "Çıkış Yap"}
        </span>
      ),
      onClick: handleLogout,
    },
  ];

  return (
    <AntHeader
      style={{
        background: "#fff",
        padding: "0 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <div style={{ fontSize: "20px", fontWeight: "bold", color: "#1890ff" }}>
        Docnova
      </div>
      <Space>
        <GlobalOutlined style={{ fontSize: "16px" }} />
        <Select
          value={i18n.language}
          onChange={handleLanguageChange}
          style={{ width: 100 }}
          options={[
            { value: "tr", label: "Türkçe" },
            { value: "en", label: "English" },
          ]}
        />
        {isAuthenticated && (
          <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
            <Button icon={<UserOutlined />} type="text">
              {user?.name || user?.email?.split("@")[0] || "User"}
            </Button>
          </Dropdown>
        )}
      </Space>
    </AntHeader>
  );
};

export default Header;
