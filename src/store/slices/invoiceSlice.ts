import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Invoice, InvoiceState } from "../../types";

const initialState: InvoiceState = {
  invoices: [],
  selectedInvoice: null,
  loading: false,
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    setInvoices: (state, action: PayloadAction<Invoice[]>) => {
      state.invoices = action.payload;
    },
    setSelectedInvoice: (state, action: PayloadAction<Invoice>) => {
      state.selectedInvoice = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setInvoices, setSelectedInvoice, setLoading } =
  invoiceSlice.actions;
export default invoiceSlice.reducer;
