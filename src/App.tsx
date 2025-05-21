import { useSelector, Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoggedInAuthenticator from "./components/LoggedInAuthenticator";
import LoggedOutAuhtenticator from "./components/LoggedOutAuhtenticator";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ResetPassword from "./pages/ResetPassword";
import AddAuction from "./pages/admin/AddAuction";
import AdminCustomer from "./pages/admin/AdminCustomer";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminOrder from "./pages/admin/AdminOrder";
import Agent from "./pages/admin/Agent";
import Auction from "./pages/admin/Auction";
import AuctionDetails from "./pages/admin/AuctionDetails";
import CustomerFeedback from "./pages/admin/CustomerFeedback";
import CustomerNotifications from "./pages/admin/CustomerNotifications";
import FieldAgents from "./pages/admin/FieldAgents";
import Listing from "./pages/admin/Listing";
import Listings from "./pages/admin/Listings";
import TrackShipment from "./pages/admin/TrackShipment";
import TransactionHistory from "./pages/admin/TransactionHistory";
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
import { RootState } from "./redux/store";

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
        </Route>

        <Route path="/seller" element={<LoggedInAuthenticator />}>
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
          <Route path="/seller/reports" element={<Reports />} />
          <Route path="/seller/reports/sale-report" element={<SaleReport />} />
          <Route
            path="/seller/reports/revenue-report"
            element={<RevenueReport />}
          />
          <Route
            path="/seller/reports/expenses-report"
            element={<ExpensesReport />}
          />
          <Route
            path="/seller/reports/financial-tracking"
            element={<FinancialTracking />}
          />
          <Route path="/seller/promotions" element={<Promotions />} />
          <Route
            path="/seller/promotions/create-promotion"
            element={<CreatePromotion />}
          />
          <Route
            path="/seller/promotions/promotion-summary"
            element={<PromoSummary />}
          />{" "}
          <Route
            path="/seller/promotions/ads-summary"
            element={<AdsSummary />}
          />
          <Route
            path="/seller/promotions/promo&ads-payment"
            element={<PromoAndAdsPayment />}
          />
          <Route
            path="/seller/promotions/create-ads"
            element={<CreateAdsPage />}
          />
          <Route path="shipments" element={<Shipments />} />
          <Route path="shipments/track" element={<TrackOrder />} />
          <Route path="/seller/settings" element={<Settings />}>
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

        <Route path="/admin" element={<LoggedInAuthenticator />}>
          <Route path="login" element={<AdminLogin />} />
          <Route index path="dashboard" element={<Dashboard />} />
          <Route path="products">
            <Route index element={<Products />} />
            <Route path="add-product" element={<AddProducts />} />
            <Route path="product" element={<ProductDetails />} />
          </Route>
          <Route path="customers">
            <Route index element={<Customers />} />
            <Route path="customer">
              <Route index element={<AdminCustomer />} />
              <Route
                path="transaction-history"
                element={<TransactionHistory />}
              />
              <Route path="notifications" element={<CustomerNotifications />} />
              <Route path="feedback" element={<CustomerFeedback />} />
            </Route>
            <Route path="add-customer" element={<AddCustomer />} />
          </Route>
          <Route path="listings">
            <Route index element={<Listings />} />
            <Route path="listing" element={<Listing />} />
          </Route>
          <Route path="orders">
            <Route index element={<Orders />} />
            <Route path="order" element={<AdminOrder />} />
          </Route>
          <Route path="reports" element={<Reports />} />
          <Route path="promotions" element={<Promotions />} />
          <Route path="documents" element={<Documents />} />
          <Route path="shipments">
            <Route index element={<Shipments />} />
            <Route path="track-shipment" element={<TrackShipment />} />
          </Route>
          <Route path="agents">
            <Route index element={<FieldAgents />} />
            <Route path="agent" element={<Agent />} />
            <Route path="request" element={<ProductDetails />} />
          </Route>
          <Route path="auctions">
            <Route index element={<Auction />} />
            <Route path="add-auction" element={<AddAuction />} />
            <Route path="auction" element={<AuctionDetails />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
