export interface PaymentDetails {
  paymentStatus: string;
  paidAmount: number;
  totalAmount: number;
  remainingAmount: number;
  paymentDate: string | null;
}

export interface Invoice {
  id: string;
  companyId: string;
  userId: string | null;
  customerName: string;
  customerId: string;
  customerVat: string;
  customerCountryCode: string;
  customerEndpoint: string | null;
  supplierName: string;
  supplierId: string;
  supplierVat: string;
  supplierCountryCode: string;
  supplierEndpoint: string;
  documentType: string;
  invoiceNumber: string;
  type: string;
  typeCode: string;
  status: string;
  source: string;

  issueDate: string;
  dueDate: string;
  deliveryDate: string | null;
  createdTime: string;
  lastUpdatedTime: string;
  localCreatedTime: string;
  localLastUpdatedTime: string;
  statusTime: string;

  currency: string;
  lineExtensionAmount: number;
  taxExclusiveAmount: number;
  taxInclusiveAmount: number;
  payableAmount: number;
  allowanceTotalAmount: number | null;
  paymentDetails: PaymentDetails;

  fileName: string | null;
  ocrParser: string | null;

  sendViaPeppol: boolean;

  errorMessage: string | null;
  idDescarcare: string | null;
  idIncarcare: string | null;
}

export interface InvoiceState {
  invoices: Invoice[];
  selectedInvoice: Invoice | null;
  loading: boolean;
}
