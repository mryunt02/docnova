import React from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { setUser } from "../store/slices/authSlice";
import { login } from "../services/api";
import { AxiosError } from "axios";
import LoginCard from "../components/LoginCard";
import LoginForm from "../components/LoginForm";
import { LoginFormValues, ErrorResponse } from "../types";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [loading, setLoading] = React.useState(false);

  const onFinish = async (values: LoginFormValues) => {
    setLoading(true);
    try {
      const userData = await login(values.email, values.password);
      dispatch(setUser(userData));
      message.success(t("login.loginSuccess"));
      navigate("/invoices");
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      const errorMessage =
        axiosError.response?.data?.message ||
        axiosError.message ||
        t("login.loginError");
      message.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 64px)",
        background: "#f0f2f5",
      }}
    >
      <LoginCard>
        <LoginForm onSubmit={onFinish} loading={loading} />
      </LoginCard>
    </div>
  );
};

export default LoginPage;
