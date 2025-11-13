import React from "react";
import { Descriptions } from "antd";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const InvoiceDetails: React.FC = () => {
  const { t } = useTranslation();
  const { selectedInvoice } = useSelector((state: RootState) => state.invoice);

  if (!selectedInvoice) return null;

  return (
    <Descriptions bordered column={1}>
      <Descriptions.Item label={t("invoice.invoiceNumber")}>
        {selectedInvoice.invoiceNumber}
      </Descriptions.Item>
      <Descriptions.Item label={t("invoice.documentType")}>
        {selectedInvoice.documentType}
      </Descriptions.Item>
      <Descriptions.Item label={t("invoice.status")}>
        {selectedInvoice.status}
      </Descriptions.Item>
      <Descriptions.Item label={t("invoice.issueDate")}>
        {new Date(selectedInvoice.issueDate).toLocaleDateString()}
      </Descriptions.Item>
      <Descriptions.Item label={t("invoice.dueDate")}>
        {new Date(selectedInvoice.dueDate).toLocaleDateString()}
      </Descriptions.Item>

      <Descriptions.Item label={t("invoice.customerName")}>
        {selectedInvoice.customerName}
      </Descriptions.Item>
      <Descriptions.Item label={t("invoice.customerVat")}>
        {selectedInvoice.customerVat}
      </Descriptions.Item>
      <Descriptions.Item label={t("invoice.customerCountry")}>
        {selectedInvoice.customerCountryCode}
      </Descriptions.Item>

      <Descriptions.Item label={t("invoice.supplierName")}>
        {selectedInvoice.supplierName}
      </Descriptions.Item>
      <Descriptions.Item label={t("invoice.supplierVat")}>
        {selectedInvoice.supplierVat}
      </Descriptions.Item>

      <Descriptions.Item label={t("invoice.currency")}>
        {selectedInvoice.currency}
      </Descriptions.Item>
      <Descriptions.Item label={t("invoice.lineExtensionAmount")}>
        {selectedInvoice.lineExtensionAmount?.toFixed(2)}{" "}
        {selectedInvoice.currency}
      </Descriptions.Item>
      <Descriptions.Item label={t("invoice.taxExclusiveAmount")}>
        {selectedInvoice.taxExclusiveAmount?.toFixed(2)}{" "}
        {selectedInvoice.currency}
      </Descriptions.Item>
      <Descriptions.Item label={t("invoice.taxInclusiveAmount")}>
        {selectedInvoice.taxInclusiveAmount?.toFixed(2)}{" "}
        {selectedInvoice.currency}
      </Descriptions.Item>
      <Descriptions.Item label={t("invoice.payableAmount")}>
        {selectedInvoice.payableAmount?.toFixed(2)} {selectedInvoice.currency}
      </Descriptions.Item>

      <Descriptions.Item label={t("invoice.paymentStatus")}>
        {selectedInvoice.paymentDetails.paymentStatus}
      </Descriptions.Item>
      <Descriptions.Item label={t("invoice.paidAmount")}>
        {selectedInvoice.paymentDetails.paidAmount?.toFixed(2)}{" "}
        {selectedInvoice.currency}
      </Descriptions.Item>
      <Descriptions.Item label={t("invoice.remainingAmount")}>
        {selectedInvoice.paymentDetails.remainingAmount?.toFixed(2)}{" "}
        {selectedInvoice.currency}
      </Descriptions.Item>
    </Descriptions>
  );
};

export default InvoiceDetails;
