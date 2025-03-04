import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { FaChevronRight, FaRegSquare, FaSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import DashboardSearchBar from "../../components/seller/DashboardSearchBar";

function FinancialTracking() {
  const rows = (): any[] => {
    return Array.from({ length: 15 }, (_, index) => ({
      id: index + 1,
      date: new Date(),
      orderId: "BF2023",
      product: "Toyota Camry",
      revenue: "₦2,000,000",
      expenses: "₦2,000,000",
      netRevenue: "₦2,000,000",
      status: "Completed",
    }));
  };

  const columns = [
    { field: "date", headerName: "Date", minWidth: 120 },
    { field: "orderId", headerName: "Order ID", minWidth: 100 },
    { field: "product", headerName: "Product", minWidth: 150 },
    { field: "revenue", headerName: "Revenue", minWidth: 120 },
    { field: "expenses", headerName: "Expenses", minWidth: 120 },
    { field: "netRevenue", headerName: "Net Revenue", minWidth: 120 },
  ];

  return (
    <div className="h-screen overflow-auto">
      {/* Header & Search Bar */}
      <div className="w-full py-3.5 px-4 md:px-8 lg:px-24 border-b border-b-primaryBorder">
        <DashboardSearchBar />
      </div>

      {/* Page Content */}
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 mb-20 pt-12">
        <div className="flex flex-wrap gap-3 md:gap-x-7 items-center mb-6">
          <Link
            to="/seller/dashboard"
            className="text-[16px] md:text-[20px] font-semibold text-[#14199C]"
          >
            Dashboard
          </Link>
          <FaChevronRight size={14} color="#14199C" />
          <span className="text-sm md:text-xl font-semibold bg-[#14199C] p-2 rounded-lg text-[#FFFFFF]">
            Financial Tracking
          </span>
        </div>

        <div className="flex flex-wrap justify-between gap-4 md:items-center">
          <div className="flex flex-wrap gap-3 md:gap-7">
            {["Sale Report", "Revenue", "Expense", "Financial Tracking"].map(
              (item, index) => (
                <p
                  key={index}
                  className="flex items-center gap-2 text-[#585858] text-sm font-normal"
                >
                  {item}{" "}
                  {index === 3 ? <FaSquare size={10} /> : <FaRegSquare />}
                </p>
              )
            )}
          </div>
          <div className="flex gap-3 md:gap-4">
            <Button
              sx={{
                padding: "5px 8px",
                background: "#ffffff",
                border: "1px solid #5C4D58",
                fontWeight: 400,
                fontSize: "14px",
                color: "#5C4D58",
                textTransform: "capitalize",
              }}
            >
              Print
            </Button>
            <select className="p-2 text-sm md:p-2.5 md:text-base rounded-lg border border-primaryBorder bg-white outline-none text-[#5C4D58]">
              <option value="month">Month</option>
            </select>
            <select className="p-2 text-sm md:p-2.5 md:text-base rounded-lg border border-primaryBorder bg-white outline-none text-[#5C4D58]">
              <option value="year">Year</option>
            </select>
          </div>
        </div>

        {/* Table Component */}
        <p className="font-semibold text-base text-[#1E1A1C] mt-6 mb-4">
          Financial Tracking Table
        </p>

        <div className="w-full overflow-x-auto">
          <TableContainer component={Paper} sx={{ border: "1px solid #ddd" }}>
            <Table
              sx={{
                borderCollapse: "separate",
                borderSpacing: "0",
                minWidth: 600,
              }}
            >
              <TableHead>
                <TableRow sx={{ backgroundColor: "#F0F0F0" }}>
                  {columns.map((col) => (
                    <TableCell
                      key={col.field}
                      sx={{
                        color: "#111111",
                        fontWeight: "bold",
                        border: "none",
                      }}
                    >
                      {col.headerName}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              {/* Table Body */}
              <TableBody>
                {rows().map((row) => (
                  <TableRow key={row.id}>
                    <TableCell sx={{ border: "none" }}>
                      {row.date.toDateString()}
                    </TableCell>
                    <TableCell sx={{ border: "none" }}>{row.orderId}</TableCell>
                    <TableCell sx={{ border: "none" }}>{row.product}</TableCell>
                    <TableCell sx={{ border: "none" }}>{row.revenue}</TableCell>
                    <TableCell sx={{ border: "none" }}>
                      {row.expenses}
                    </TableCell>
                    <TableCell sx={{ border: "none" }}>
                      {row.netRevenue}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default FinancialTracking;
