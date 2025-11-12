import React from "react";
import { Descriptions } from "antd";
import { useTranslation } from "react-i18next";
import { Invoice } from "../types";

interface InvoiceDetailsProps {
  invoice: Invoice;
}

const InvoiceDetails: React.FC<InvoiceDetailsProps> = ({ invoice }) => {
  const { t } = useTranslation();

  return (
    <Descriptions bordered column={1}>
      <Descriptions.Item label={t("invoice.invoiceNumber")}>
        {invoice.invoiceNumber}
      </Descriptions.Item>
      <Descriptions.Item label={t("invoice.documentType")}>
        {invoice.documentType}
      </Descriptions.Item>
      <Descriptions.Item label={t("invoice.status")}>
        {invoice.status}
      </Descriptions.Item>
      <Descriptions.Item label={t("invoice.issueDate")}>
        {new Date(invoice.issueDate).toLocaleDateString()}
      </Descriptions.Item>
      <Descriptions.Item label={t("invoice.dueDate")}>
        {new Date(invoice.dueDate).toLocaleDateString()}
      </Descriptions.Item>
      
      <Descriptions.Item label={t("invoice.customerName")}>
        {invoice.customerName}
      </Descriptions.Item>
      <Descriptions.Item label={t("invoice.customerVat")}>
        {invoice.customerVat}
      </Descriptions.Item>
      <Descriptions.Item label={t("invoice.customerCountry")}>
        {invoice.customerCountryCode}
      </Descriptions.Item>
      
      <Descriptions.Item label={t("invoice.supplierName")}>
        {invoice.supplierName}
      </Descriptions.Item>
      <Descriptions.Item label={t("invoice.supplierVat")}>
        {invoice.supplierVat}
      </Descriptions.Item>
      
      <Descriptions.Item label={t("invoice.currency")}>
        {invoice.currency}
      </Descriptions.Item>
      <Descriptions.Item label={t("invoice.lineExtensionAmount")}>
        {invoice.lineExtensionAmount?.toFixed(2)} {invoice.currency}
      </Descriptions.Item>
      <Descriptions.Item label={t("invoice.taxExclusiveAmount")}>
        {invoice.taxExclusiveAmount?.toFixed(2)} {invoice.currency}
      </Descriptions.Item>
      <Descriptions.Item label={t("invoice.taxInclusiveAmount")}>
        {invoice.taxInclusiveAmount?.toFixed(2)} {invoice.currency}
      </Descriptions.Item>
      <Descriptions.Item label={t("invoice.payableAmount")}>
        {invoice.payableAmount?.toFixed(2)} {invoice.currency}
      </Descriptions.Item>
      
      <Descriptions.Item label={t("invoice.paymentStatus")}>
        {invoice.paymentDetails.paymentStatus}
      </Descriptions.Item>
      <Descriptions.Item label={t("invoice.paidAmount")}>
        {invoice.paymentDetails.paidAmount?.toFixed(2)} {invoice.currency}
      </Descriptions.Item>
      <Descriptions.Item label={t("invoice.remainingAmount")}>
        {invoice.paymentDetails.remainingAmount?.toFixed(2)} {invoice.currency}
      </Descriptions.Item>
    </Descriptions>
  );
};

export default InvoiceDetails;
