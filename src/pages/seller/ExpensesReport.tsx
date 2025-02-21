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

function ExpensesReport() {
  const rows = (): any[] => {
    const loopArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const returnArray: any[] = [];
    loopArray.forEach((num) => {
      returnArray.push({
        id: num,
        date: new Date(),
        orderId: "BF2023",

        product: "Toyota Camry",
        revenue: "₦2,000,000",
        expenses: "₦2,000,000",
        netRevenue: "₦2,000,000",
        status: "Completed",
      });
    });
    return returnArray;
  };
  const columns: GridColDef[] = [
    {
      field: "date",
      headerName: "Date",
      flex: 0.8,
      sortable: false,
      type: "date",
    },
    {
      field: "orderId",
      headerName: "Order ID",
      flex: 0.5,
      sortable: false,
    },

    {
      field: "product",
      headerName: "Product",

      flex: 0.7,
    },
    {
      field: "revenue",
      headerName: "Revenue",

      flex: 0.5,
    },
    {
      field: "expenses",
      headerName: "Expenses",
      flex: 1,
      sortable: false,
    },
    {
      field: "netRevenue",
      headerName: "Net Revenue",
      flex: 1,
    },
  ];

  return (
    <div className="h-screen overflow-auto">
      {/* Header & Search Bar */}
      <div className="w-full py-3.5 px-24 border-b border-b-primaryBorder">
        <DashboardSearchBar />
      </div>

      {/* Page Content */}
      <div className="w-[90%] mx-auto mb-20 pt-12">
        <div className="flex gap-x-7 items-center mb-12">
          <Link
            to="/seller/dashboard"
            className="text-[20px] font-semibold text-[#14199C]"
          >
            Dashboard
          </Link>
          <FaChevronRight size={14} color="#14199C" />
          <span className="text-xl font-semibold bg-[#14199C] p-[10px] rounded-[8px] text-[#FFFFFF]">
            Expenses
          </span>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-between items-center gap-7">
            <p className="flex items-center gap-2 text-[#585858] text-sm font-normal">
              Sale Report
              <FaRegSquare />
            </p>
            <p className="flex items-center gap-2 text-[#585858] text-sm font-normal">
              {" "}
              Revenue <FaRegSquare />
            </p>
            <p className="flex items-center gap-2 text-[#585858] text-sm font-normal">
              {" "}
              Expense <FaSquare size={10} />
            </p>
            <p className="flex items-center gap-2 text-[#585858] text-sm font-normal">
              {" "}
              Financial Tracking <FaRegSquare />
            </p>
          </div>
          <div className="flex gap-4">
            <Button
              sx={{
                padding: "5px 8px",
                background: "#ffffff",
                border: "1px solid #5C4D58",
                fontWeight: 400,
                fontSize: "18px",
                color: "#5C4D58",
                textTransform: "capitalize",
              }}
            >
              Print
            </Button>
            <select className="p-2.5 text-[18px] rounded-lg border border-primaryBorder bg-white outline-none text-[#5C4D58]">
              <option value="name">Month</option>
            </select>
            <select className="p-2.5 text-[18px] rounded-lg border border-primaryBorder bg-white outline-none text-[#5C4D58]">
              <option value="name">Year</option>
            </select>
          </div>
        </div>

        {/* Table Component */}
        <p className="font-semibold text-base text-[#1E1A1C] mt-[30px] mb-[25px]">
          Expenses Report Table
        </p>
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
                  <TableCell sx={{ border: "none" }}>{row.expenses}</TableCell>
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
  );
}

export default ExpensesReport;
