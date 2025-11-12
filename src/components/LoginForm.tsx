import React from "react";
import { Form, Input, Button } from "antd";
import { useTranslation } from "react-i18next";
import { LoginFormValues } from "../types";

interface LoginFormProps {
  onSubmit: (values: LoginFormValues) => void;
  loading: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, loading }) => {
  const { t } = useTranslation();

  return (
    <Form name="login" onFinish={onSubmit} layout="vertical" autoComplete="off">
      <Form.Item
        label={t("login.email")}
        name="email"
        rules={[{ required: true, message: t("login.emailRequired") }]}
      >
        <Input type="email" />
      </Form.Item>

      <Form.Item
        label={t("login.password")}
        name="password"
        rules={[{ required: true, message: t("login.passwordRequired") }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading} block>
          {t("login.submit")}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
