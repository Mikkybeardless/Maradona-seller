import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { useSelector } from "react-redux"
import { RootState } from "./redux/store"
import Login from "./pages/Login"
import Dashboard from "./pages/seller/Dashboard"
import ResetPassword from "./pages/ResetPassword"
import LoggedInAuthenticator from "./components/LoggedInAuthenticator"
import LoggedOutAuhtenticator from "./components/LoggedOutAuhtenticator"
import Products from "./pages/seller/Products"
import AddProducts from "./pages/seller/AddProducts"
import ProductDetails from "./pages/seller/ProductDetails"
import Customers from "./pages/seller/Customers"
import Customer from "./pages/seller/Customer"
import AddCustomer from "./pages/seller/AddCustomer"
import Orders from "./pages/seller/Orders"
import Order from "./pages/seller/Order"
import Reports from "./pages/seller/Reports"
import Promotions from "./pages/seller/Promotions"
import Documents from "./pages/seller/Documents"
import Shipments from "./pages/seller/Shipments"
import NotFound from "./pages/NotFound"
import AdminLogin from "./pages/admin/AdminLogin"
import AdminCustomer from "./pages/admin/AdminCustomer"
import AdminOrder from "./pages/admin/AdminOrder"
import TransactionHistory from "./pages/admin/TransactionHistory"
import CustomerNotifications from "./pages/admin/CustomerNotifications"
import CustomerFeedback from "./pages/admin/CustomerFeedback"
import Listings from "./pages/admin/Listings"
import Listing from "./pages/admin/Listing"
import TrackShipment from "./pages/admin/TrackShipment"
import FieldAgents from "./pages/admin/FieldAgents"
import Agent from "./pages/admin/Agent"
import Auction from "./pages/admin/Auction"
import AddAuction from "./pages/admin/AddAuction"
import AuctionDetails from "./pages/admin/AuctionDetails"

function App() {
    const {} = useSelector((state: RootState) => state.user)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoggedOutAuhtenticator />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
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
                    <Route path="reports" element={<Reports />} />
                    <Route path="promotions" element={<Promotions />} />
                    <Route path="documents" element={<Documents />} />
                    <Route path="shipments" element={<Shipments />} />
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
                            <Route
                                path="notifications"
                                element={<CustomerNotifications />}
                            />
                            <Route
                                path="feedback"
                                element={<CustomerFeedback />}
                            />
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
                        <Route
                            path="track-shipment"
                            element={<TrackShipment />}
                        />
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
    )
}

export default App
