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
              <Route path="/logout" element={<Logout />} />
              {/* category */}
              <Route path="/category" element={<Listcategory />} />
              <Route path="/category/add" element={<Addcategory />} />
              <Route path="/category/:id" element={<Editcategory />} />
              {/* supplier */}
              <Route path="/supplier" element={<Listsupplier />} />
              <Route path="/supplier/add" element={<Addsupplier />} />
              <Route path="/supplier/:id" element={<Editsupplier />} />
              {/* product */}
              <Route path="/product" element={<Listproduct />} />
              <Route path="/product/add" element={<Addproduct />} />
              <Route path="/product/:id" element={<Editproduct />} />
              {/* sales */}
              <Route path="/sales" element={<Listsales />} />
              <Route path="/orders/:id" element={<OrderSend />} />
              {/* sales History */}
              <Route path="/sales-history" element={<ListsalesHistory />} />
              <Route path="/sales-return/:id" element={<SalesReturn />} />
              {/* purchase */}
              <Route path="/purchase" element={<Listpurchase />} />
              <Route path="/purchase/add" element={<Addpurchase />} />
              <Route path="/purchase/print/:id" element={<Printpurchase />} />
              {/* report */}
              <Route path="/supplier-report" element={<SupplierReport />} />
              <Route path="/product-report" element={<ProductReport />} />
              <Route path="/sales-report" element={<SalesReport />} />
              <Route path="/purchase-report" element={<PurchaseReport />} />
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
