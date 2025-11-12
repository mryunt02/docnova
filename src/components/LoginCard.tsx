import React from "react";
import { Card } from "antd";
import { useTranslation } from "react-i18next";

interface LoginCardProps {
  children: React.ReactNode;
}

const LoginCard: React.FC<LoginCardProps> = ({ children }) => {
  const { t } = useTranslation();

  return (
    <Card title={t("login.title")} style={{ width: 400 }}>
      {children}
    </Card>
  );
};

export default LoginCard;
