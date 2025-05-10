import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import FactoryTable from "./components/Dashboard/components/Factory";
import User from "./components/Dashboard/components/User";
import Layout from "./components/Dashboard/Layout";
import OffsetCompanyList from "./components/Offset/Company";
import JobCardList from "./components/Offset/Jobcards";
import MatterList from "./components/Offset/Matter";
import OffsetStockTable from "./components/Offset/Stock";
import ReelStockProductStock from "./components/reel-stock/ProductStock";
import ReelStockPurchaseTable from "./components/reel-stock/Purchase";
import ReelStockSupplierForm from "./components/reel-stock/Supplier";
import ReelStockSwapTable from "./components/reel-stock/Swapping";
import ReelStockUsage from "./components/reel-stock/Usage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes (No layout) */}
        {/* <Route path="/" element={<WhatsAppLogin />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes (With Layout) */}
        <Route element={<Layout />}>
          <Route path="/purchase" element={<ReelStockPurchaseTable />} />
          {/* <Route path="/purchase2" element={<PurchaseForm />} /> */}
          <Route path="/usage" element={<ReelStockUsage />} />
          <Route path="/product-stock" element={<ReelStockProductStock />} />
          <Route path="/supplier" element={<ReelStockSupplierForm />} />
          <Route path="/companyList" element={<OffsetCompanyList />} />
          <Route path="/stockTable" element={<OffsetStockTable />} />
          <Route path="/job-cards" element={<JobCardList />} />
          <Route path="/matter" element={<MatterList />} />
          <Route path="/user" element={<User />} />
          <Route path="/factory" element={<FactoryTable />} />
          <Route path="/swapping" element={<ReelStockSwapTable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
