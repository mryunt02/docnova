import React, { useEffect, useCallback } from "react";
import { Card, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "../store";
import {
  setInvoices,
  setSelectedInvoice,
  setLoading,
} from "../store/slices/invoiceSlice";
import { Invoice } from "../types";
import { searchInvoices, InvoiceSearchParams } from "../services/api";
import InvoiceTable from "../components/InvoiceTable";

const InvoiceListPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { user } = useSelector((state: RootState) => state.auth);
  const { invoices, loading } = useSelector(
    (state: RootState) => state.invoice
  );

  const fetchInvoices = useCallback(async () => {
    if (!user) return;

    dispatch(setLoading(true));
    try {
      const params: InvoiceSearchParams = {
        companyId: "01c880ca-46b5-4699-a477-616b84770071",
        documentType: "OUTGOING",
        endDate: "2025-07-04T08:31:10.422Z",
        page: 0,
        size: 20,
        startDate: "2025-06-27T00:00:00.000Z",
        referenceDocument: "",
        type: null,
        status: null,
        paymentStatus: null,
        isDeleted: false,
      };
      const data = await searchInvoices(user.jwt, params);
      dispatch(setInvoices(data.invoices.content || []));
    } catch (error) {
      console.error("Invoice fetch error:", error);
      message.error(t("common.error"));
    } finally {
      dispatch(setLoading(false));
    }
  }, [user, dispatch, t]);

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }
    fetchInvoices();
  }, [user, navigate, fetchInvoices]);

  const handleViewDetail = (record: Invoice) => {
    dispatch(setSelectedInvoice(record));
    navigate(`/invoice/${record.id}`);
  };

  return (
    <div
      style={{
        padding: "24px",
        background: "#f0f2f5",
        minHeight: "calc(100vh - 64px)",
      }}
    >
      <Card title={t("invoice.list")}>
        <InvoiceTable
          invoices={invoices}
          loading={loading}
          onViewDetail={handleViewDetail}
        />
      </Card>
    </div>
  );
};

export default InvoiceListPage;
