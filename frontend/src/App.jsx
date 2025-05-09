import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components /auth/Login';
import Register from './components /auth/Register';
import Layout from './components /Dashboard/Layout';
import ReelStockUsage from './components /Reel Stock/Usage';
import ReelStockProductStock from './components /Reel Stock/ProductStock';
import WhatsAppLogin from './components /auth/WhatsappLogin';
import OffsetCompanyList from './components /Offset/Company';
import JobCardList from './components /Offset/Jobcards';
import OffsetStockTable from './components /Offset/Stock';
import MatterList from './components /Offset/Matter';
import User from './components /Dashboard/components/User';
import FactoryTable from './components /Dashboard/components/Factory';
import ReelStockSupplierForm from './components /Reel Stock/Supplier';
import ReelStockPurchaseTable from './components /Reel Stock/Purchase';
import ReelStockSwapTable from './components /Reel Stock/Swapping';

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
          <Route path="/supplier" element={<ReelStockSupplierForm/>} />
          <Route path="/companyList" element={<OffsetCompanyList />} />
          <Route path="/stockTable" element={<OffsetStockTable />} />
          <Route path="/job-cards" element={<JobCardList />} />
          <Route path="/matter" element={<MatterList />} />
          <Route path="/user" element={<User />} />
          <Route path="/factory" element={<FactoryTable/>} />
          <Route path="/swapping" element={<ReelStockSwapTable/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}




export default App;

