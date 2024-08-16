import React, { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Drinks from "./pages/Drinks";
import Food from "./pages/Food";
import Order from "./pages/Order";
import Footer from "./assets/Components/Footer";
import QRCodePage from "./pages/QRCodePage";
import CustomerAccessPage from "./pages/CustomerAccessPage";

const App = () => {
  const [isValidated, setIsValidated] = useState(false);
  const location = useLocation();

  const showFooter = !['/access', '/qr'].includes(location.pathname);

  return (
    <>
      <Routes>
        {/* QR Code Page on a separate URL */}
        <Route path="/qr" element={<QRCodePage />} />

        {/* Customer Access Page */}
        <Route
          path="/access"
          element={<CustomerAccessPage onValidate={() => setIsValidated(true)} />}
        />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            isValidated ? <Home /> : <Navigate to="/access" />
          }
        />
        <Route
          path="/drinks"
          element={
            isValidated ? <Drinks /> : <Navigate to="/access" />
          }
        />
        <Route
          path="/food"
          element={
            isValidated ? <Food /> : <Navigate to="/access" />
          }
        />
        <Route
          path="/order"
          element={
            isValidated ? <Order /> : <Navigate to="/access" />
          }
        />
      </Routes>

      {showFooter && <Footer />}
    </>
  );
};

export default App;
