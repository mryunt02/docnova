import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ConfigProvider, Layout, Spin } from "antd";
import { store, persistor } from "./store";
import LoginPage from "./pages/LoginPage";
import InvoiceListPage from "./pages/InvoiceListPage";
import InvoiceDetailPage from "./pages/InvoiceDetailPage";
import Header from "./components/Header";
import "./i18n";

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate 
        loading={
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            height: "100vh" 
          }}>
            <Spin size="large" />
          </div>
        } 
        persistor={persistor}
      >
        <ConfigProvider>
          <BrowserRouter>
            <Layout style={{ minHeight: "100vh" }}>
              <Header />
              <Content>
                <Routes>
                  <Route path="/" element={<LoginPage />} />
                  <Route path="/invoices" element={<InvoiceListPage />} />
                  <Route path="/invoice/:id" element={<InvoiceDetailPage />} />
                </Routes>
              </Content>
            </Layout>
          </BrowserRouter>
        </ConfigProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
