import React, { useEffect } from "react";
import { Card, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "../store";
import InvoiceDetails from "../components/InvoiceDetails";

const InvoiceDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { selectedInvoice } = useSelector((state: RootState) => state.invoice);

  useEffect(() => {
    if (!selectedInvoice) {
      navigate("/invoices");
    }
  }, [selectedInvoice, navigate]);

  if (!selectedInvoice) return null;

  return (
    <div
      style={{
        padding: "24px",
        background: "#f0f2f5",
        minHeight: "calc(100vh - 64px)",
      }}
    >
      <Card
        title={t("invoice.detail")}
        extra={
          <Button type="default" onClick={() => navigate("/invoices")}>
            {t("invoice.backToList")}
          </Button>
        }
      >
        <InvoiceDetails invoice={selectedInvoice} />
      </Card>
    </div>
  );
};

export default InvoiceDetailPage;
