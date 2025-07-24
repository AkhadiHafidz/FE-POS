import { BrowserRouter, Route, Routes } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import Home from "../components/Home.jsx";
import Login from "../components/Login.jsx";
import { ToastContainer } from "react-toastify";
import Logout from "../components/Logout.jsx";
import Listcategory from "../components/category/ListCategory.jsx";
import Addcategory from "../components/category/AddCategory.jsx";
import Editcategory from "../components/category/EditCategory.jsx";
import NoPage from "../components/NoPage.jsx";
import Listsupplier from "../components/supplier/ListSupplier.jsx";
import Addsupplier from "../components/supplier/AddSupplier.jsx";
import Editsupplier from "../components/supplier/EditSupplier.jsx";
import Listproduct from "../components/product/ListProduct.jsx";
import Addproduct from "../components/product/AddProduct.jsx";
import Editproduct from "../components/product/EditProduct.jsx";
import Listsales from "../components/sales/ListSales.jsx";
import OrderSend from "../components/sales/OrderSend.jsx";
import ListsalesHistory from "../components/salesHistory/ListSalesHistory.jsx";
import SalesReturn from "../components/salesHistory/SalesReturn.jsx";
import Listpurchase from "../components/purchase/ListPurchase.jsx";
import Addpurchase from "../components/purchase/AddPurchase.jsx";
import Printpurchase from "../components/purchase/PrintPurchase.jsx";
import SupplierReport from "../components/report/supplier/SupplierReport.jsx";
import ProductReport from "../components/report/product/ProductReport.jsx";
import SalesReport from "../components/report/sales/SalesReport.jsx";
import PurchaseReport from "../components/report/purchase/PurchaseReport.jsx";

const RouteNavigation = () => {
  const refreshToken = secureLocalStorage.getItem("refreshToken");
  const buildNav = () => {
    if (refreshToken) {
      return (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/api/logout" element={<Logout />} />
              {/* category */}
              <Route path="/api/category" element={<Listcategory />} />
              <Route path="/api/category/add" element={<Addcategory />} />
              <Route path="/api/category/:id" element={<Editcategory />} />
              {/* supplier */}
              <Route path="/api/supplier" element={<Listsupplier />} />
              <Route path="/api/supplier/add" element={<Addsupplier />} />
              <Route path="/api/supplier/:id" element={<Editsupplier />} />
              {/* product */}
              <Route path="/api/product" element={<Listproduct />} />
              <Route path="/api/product/add" element={<Addproduct />} />
              <Route path="/api/product/:id" element={<Editproduct />} />
              {/* sales */}
              <Route path="/api/sales" element={<Listsales />} />
              <Route path="/api/orders/:id" element={<OrderSend />} />
              {/* sales History */}
              <Route path="/api/sales-history" element={<ListsalesHistory />} />
              <Route path="/api/sales-return/:id" element={<SalesReturn />} />
              {/* purchase */}
              <Route path="/api/purchase" element={<Listpurchase />} />
              <Route path="/api/purchase/add" element={<Addpurchase />} />
              <Route path="/api/purchase/print/:id" element={<Printpurchase />} />
              {/* report */}
              <Route path="/api/supplier-report" element={<SupplierReport />} />
              <Route path="/api/product-report" element={<ProductReport />} />
              <Route path="/api/sales-report" element={<SalesReport />} />
              <Route path="/api/purchase-report" element={<PurchaseReport />} />
              {/* page notfound */}
              <Route path="*" element={<NoPage />} />
            </Routes>
          </BrowserRouter>
        </>
      );
    } else {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Login />} />
          </Routes>
        </BrowserRouter>
      );
    }
  };
  return (
    <>
      {buildNav()}
      <ToastContainer />
    </>
  );
};

export default RouteNavigation;
