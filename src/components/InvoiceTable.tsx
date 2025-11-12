import React from "react";
import { Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useTranslation } from "react-i18next";
import { Invoice } from "../types";

interface InvoiceTableProps {
  invoices: Invoice[];
  loading: boolean;
  onViewDetail: (record: Invoice) => void;
}

const InvoiceTable: React.FC<InvoiceTableProps> = ({
  invoices,
  loading,
  onViewDetail,
}) => {
  const { t } = useTranslation();

  const columns: ColumnsType<Invoice> = [
    {
      title: t("invoice.invoiceNumber"),
      dataIndex: "invoiceNumber",
      key: "invoiceNumber",
    },
    {
      title: t("invoice.customerName"),
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: t("invoice.date"),
      dataIndex: "issueDate",
      key: "issueDate",
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
    {
      title: t("invoice.totalAmount"),
      dataIndex: "payableAmount",
      key: "payableAmount",
      render: (amount: number, record: Invoice) =>
        `${amount?.toFixed(2)} ${record.currency}`,
    },
    {
      title: t("invoice.status"),
      dataIndex: "status",
      key: "status",
    },
    {
      title: t("invoice.actions"),
      key: "actions",
      render: (_: unknown, record: Invoice) => (
        <Button type="primary" onClick={() => onViewDetail(record)}>
          {t("invoice.viewDetail")}
        </Button>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={invoices}
      loading={loading}
      rowKey="id"
      pagination={{ pageSize: 10 }}
      style={{ overflowX: "auto" }}
      onRow={(record) => ({
        onClick: () => onViewDetail(record),
        style: { cursor: "pointer" },
      })}
    />
  );
};

export default InvoiceTable;
