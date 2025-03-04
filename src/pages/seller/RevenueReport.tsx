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
import { GridColDef } from "@mui/x-data-grid";
import { FaChevronRight, FaRegSquare, FaSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import DashboardSearchBar from "../../components/seller/DashboardSearchBar";

function RevenueReport() {
  const rows = (): any[] => {
    const loopArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    return loopArray.map((num) => ({
      id: num,
      date: new Date(),
      orderId: "BF2023",
      product: "Toyota Camry",
      revenue: "₦2,000,000",
      expenses: "₦2,000,000",
      netRevenue: "₦2,000,000",
    }));
  };

  const columns: GridColDef[] = [
    { field: "date", headerName: "Date", flex: 0.8, type: "date" },
    { field: "orderId", headerName: "Order ID", flex: 0.5 },
    { field: "product", headerName: "Product", flex: 0.7 },
    { field: "revenue", headerName: "Revenue", flex: 0.5 },
    { field: "expenses", headerName: "Expenses", flex: 1 },
    { field: "netRevenue", headerName: "Net Revenue", flex: 1 },
  ];

  return (
    <div className="h-screen overflow-auto">
      {/* Header & Search Bar */}
      <div className="w-full py-3.5 px-6 md:px-24 border-b border-b-primaryBorder">
        <DashboardSearchBar />
      </div>

      {/* Page Content */}
      <div className="w-[95%] md:w-[90%] mx-auto mb-10 pt-8">
        {/* Breadcrumb Navigation */}
        <div className="flex flex-wrap gap-x-4 items-center mb-6">
          <Link
            to="/seller/dashboard"
            className="text-base md:text-lg font-semibold text-[#14199C]"
          >
            Dashboard
          </Link>
          <FaChevronRight size={14} color="#14199C" />
          <span className="text-sm md:text-lg font-semibold bg-[#14199C] px-3 py-2 rounded-md text-white">
            Revenue Tracking
          </span>
        </div>

        {/* Filter & Actions Section */}
        <div className="flex flex-wrap justify-between items-center gap-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-4">
            <p className="flex items-center gap-2 text-[#585858] text-xs md:text-sm">
              Sale Report <FaRegSquare />
            </p>
            <p className="flex items-center gap-2 text-[#585858] text-xs md:text-sm">
              Revenue <FaSquare size={10} />
            </p>
            <p className="flex items-center gap-2 text-[#585858] text-xs md:text-sm">
              Expense <FaRegSquare />
            </p>
            <p className="flex items-center gap-2 text-[#585858] text-xs md:text-sm">
              Financial Tracking <FaRegSquare />
            </p>
          </div>

          {/* Buttons & Filters */}
          <div className="flex flex-wrap gap-2 md:gap-4">
            <Button
              sx={{
                padding: "4px 6px",
                background: "#ffffff",
                border: "1px solid #5C4D58",
                fontSize: "14px",
                color: "#5C4D58",
                textTransform: "capitalize",
              }}
            >
              Print
            </Button>
            <select className="p-2 text-sm md:text-[16px] rounded-lg border border-primaryBorder bg-white outline-none text-[#5C4D58]">
              <option value="month">Month</option>
            </select>
            <select className="p-2 text-sm md:text-[16px] rounded-lg border border-primaryBorder bg-white outline-none text-[#5C4D58]">
              <option value="year">Year</option>
            </select>
          </div>
        </div>

        {/* Table Header */}
        <p className="font-semibold text-sm md:text-base text-[#1E1A1C] mt-6 mb-4">
          Revenue Report Table
        </p>

        {/* Table Wrapper for Scrollability */}
        <div className="overflow-x-auto">
          <TableContainer component={Paper} sx={{ border: "1px solid #ddd" }}>
            <Table sx={{ borderCollapse: "separate", borderSpacing: "0" }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#F0F0F0" }}>
                  {columns.map((col) => (
                    <TableCell
                      key={col.field}
                      sx={{
                        color: "#111111",
                        fontWeight: "bold",
                        border: "none",
                        fontSize: "12px", // Smaller text for mobile
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
                    <TableCell sx={{ border: "none", fontSize: "12px" }}>
                      {row.date.toDateString()}
                    </TableCell>
                    <TableCell sx={{ border: "none", fontSize: "12px" }}>
                      {row.orderId}
                    </TableCell>
                    <TableCell sx={{ border: "none", fontSize: "12px" }}>
                      {row.product}
                    </TableCell>
                    <TableCell sx={{ border: "none", fontSize: "12px" }}>
                      {row.revenue}
                    </TableCell>
                    <TableCell sx={{ border: "none", fontSize: "12px" }}>
                      {row.expenses}
                    </TableCell>
                    <TableCell sx={{ border: "none", fontSize: "12px" }}>
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

export default RevenueReport;
