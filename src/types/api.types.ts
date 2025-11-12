import { User, Invoice } from "./index";

export interface LoginResponse extends User {}

export interface InvoiceSearchParams {
  companyId: string;
  documentType: string;
  endDate: string;
  page: number;
  size: number;
  startDate: string;
  referenceDocument: string;
  type: string | null;
  status: string | null;
  paymentStatus: string | null;
  isDeleted: boolean;
}

export interface InvoicePageable {
  content: Invoice[];
  pageable: {
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    unpaged: boolean;
  };
  totalElements: number;
  totalPages: number;
  last: boolean;
  first: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  empty: boolean;
}

export interface InvoiceSearchResponse {
  invoices: InvoicePageable;
  netTotal: number;
  total: number;
  totalCount: number;
}
