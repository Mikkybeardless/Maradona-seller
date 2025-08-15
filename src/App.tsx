import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoggedInAuthenticator from "./components/LoggedInAuthenticator";
import LoggedOutAuhtenticator from "./components/LoggedOutAuhtenticator";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ResetPassword from "./pages/ResetPassword";
import AddCustomer from "./pages/seller/AddCustomer";
import AddProducts from "./pages/seller/AddProducts";
import AdsSummary from "./pages/seller/AdsSummary";
import CreateAdsPage from "./pages/seller/CreateAdsPage";
import CreatePromotion from "./pages/seller/CreatePromoPage";
import Customer from "./pages/seller/Customer";
import Customers from "./pages/seller/Customers";
import Dashboard from "./pages/seller/Dashboard";
import Documents from "./pages/seller/Documents";
import ExpensesReport from "./pages/seller/ExpensesReport";
import FinancialTracking from "./pages/seller/FinancialTracking";
import Order from "./pages/seller/Order";
import Orders from "./pages/seller/Orders";
import PaymentMethods from "./pages/seller/PaymentMethods";
import ProductDetails from "./pages/seller/ProductDetails";
import Products from "./pages/seller/Products";
import ProfileInfo from "./pages/seller/ProfileInfo";
import ProfilePage from "./pages/seller/ProfilePage";
import PromoAndAdsPayment from "./pages/seller/PromoAndAdsPayment";
import PromoSummary from "./pages/seller/PromoSummary";
import Promotions from "./pages/seller/Promotions";
import Reports from "./pages/seller/Reports";
import RevenueReport from "./pages/seller/RevenueReport";
import SaleReport from "./pages/seller/SaleReport";
import Security from "./pages/seller/Security";
import Settings from "./pages/seller/Settings";
import Shipments from "./pages/seller/Shipments";
import VerificationPage from "./pages/seller/VerificationPage";
import ContactUs from "./pages/ContactUs";
// import Wallet from "./pages/seller/Wallet";
import SellerTransactionHistory from "./pages/seller/TransactionHistory";
import Deposit from "./pages/seller/WalletDeposit";
import Withdraw from "./pages/seller/WalletWithdraw";
import ReturnPolicy from "./pages/ReturnPolicy";
import Terms from "./pages/Terms";
import ReturnForm from "./pages/ReturnForm";
import SellerForm from "./pages/SellerForm";
import AgentForm from "./pages/AgentForm";
import InvestorForm from "./pages/InvestorForm";
import TrackOrder from "./pages/seller/TrackOrder";
import HelpCentre from "./pages/Help";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoggedOutAuhtenticator />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="return-policy" element={<ReturnPolicy />} />
          <Route path="return-form" element={<ReturnForm />} />
          <Route path="seller-form" element={<SellerForm />} />
          <Route path="agent-form" element={<AgentForm />} />
          <Route path="investor-form" element={<InvestorForm />} />
          <Route path="terms" element={<Terms />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="help" element={<HelpCentre />} />
        </Route>

        <Route path="seller" element={<LoggedInAuthenticator />}>
          <Route index path="dashboard" element={<Dashboard />} />
          <Route path="products">
            <Route index element={<Products />} />
            <Route path="add-product" element={<AddProducts />} />
            <Route path="product" element={<ProductDetails />} />
          </Route>
          <Route path="customers">
            <Route index element={<Customers />} />
            <Route path="customer" element={<Customer />} />
            <Route path="add-customer" element={<AddCustomer />} />
          </Route>
          <Route path="orders">
            <Route index element={<Orders />} />
            <Route path="order" element={<Order />} />
          </Route>
          <Route path="reports">
            <Route index element={<Reports />} />
            <Route path="sale-report" element={<SaleReport />} />
            <Route path="revenue-report" element={<RevenueReport />} />
            <Route path="expenses-report" element={<ExpensesReport />} />
            <Route path="financial-tracking" element={<FinancialTracking />} />
          </Route>
          <Route path="promotions">
            <Route index element={<Promotions />} />
            <Route path="create-promotion" element={<CreatePromotion />} />
            <Route path="promotion-summary" element={<PromoSummary />} />{" "}
            <Route path="ads-summary" element={<AdsSummary />} />
            <Route path="promo&ads-payment" element={<PromoAndAdsPayment />} />
            <Route path="create-ads" element={<CreateAdsPage />} />
          </Route>

          <Route path="shipments">
            <Route index element={<Shipments />} />
            <Route path="track" element={<TrackOrder />} />
          </Route>

          <Route path="settings" element={<Settings />}>
            <Route index element={<ProfileInfo />} />
            <Route path="profile-info" element={<ProfileInfo />} />{" "}
            <Route path="security" element={<Security />} />
            <Route path="verification" element={<VerificationPage />} />{" "}
            <Route path="payment-method" element={<PaymentMethods />} />
            <Route path="documents" element={<Documents />} />
          </Route>
          <Route path="profile" element={<ProfilePage />} />
          {/* <Route path="/seller/wallet" element={<Wallet />} /> */}
          {/* <Route path="/seller/wallet/deposit" element={<Deposit />} /> */}
          {/* <Route path="/seller/wallet/withdraw" element={<Withdraw />} /> */}
          {/* <Route path="/seller/wallet/transaction-history" element={<SellerTransactionHistory />} /> */}
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
