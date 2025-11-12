import axios from "axios";
import {
  LoginResponse,
  InvoiceSearchParams,
  InvoiceSearchResponse,
} from "../types";

const API_BASE_URL = "https://api-dev.docnova.ai";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export type { InvoiceSearchParams };

export const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const response = await apiClient.post<LoginResponse>("/auth/login/dev", {
    email,
    password,
  });
  return response.data;
};

export const searchInvoices = async (
  jwt: string,
  params: InvoiceSearchParams
): Promise<InvoiceSearchResponse> => {
  const response = await apiClient.post<InvoiceSearchResponse>(
    "/invoice/search",
    params,
    {
      headers: {
        "R-Auth": jwt,
      },
    }
  );
  return response.data;
};

export default apiClient;
