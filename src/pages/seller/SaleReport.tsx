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

function SaleReport() {
  const rows = (): any[] => {
    const loopArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const returnArray: any[] = [];
    loopArray.forEach((num) => {
      returnArray.push({
        id: num,
        date: new Date(),
        orderId: "BF2023",
        customerName: "Rosemary Sunday",
        prodouct: "Toyota Camry",
        quantity: "1",
        salePrice: "₦2,000,000",
        totalSale: "₦2,000,000",
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

      type: "date",
    },
    {
      field: "orderId",
      headerName: "Order ID",
      flex: 0.5,
    },
    {
      field: "customerName",
      headerName: "Customer Name",
      flex: 1,
    },
    {
      field: "prodouct",
      headerName: "Prodouct",

      flex: 0.7,
    },
    {
      field: "quantity",
      headerName: "Quantity",

      flex: 0.3,
    },
    {
      field: "salePrice",
      headerName: "Sale Price",
      flex: 1,
    },
    {
      field: "totalSale",
      headerName: "Total Price Amount",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 0.3,
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
            Sales Report
          </span>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-between items-center gap-7">
            <p className="flex items-center gap-2 text-[#585858] text-sm font-normal">
              Sale Report
              <FaSquare size={10} />
            </p>
            <p className="flex items-center gap-2 text-[#585858] text-sm font-normal">
              {" "}
              Revenue <FaRegSquare />
            </p>
            <p className="flex items-center gap-2 text-[#585858] text-sm font-normal">
              {" "}
              Expense <FaRegSquare />
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

       
        <p className="font-semibold text-base text-[#1E1A1C] mt-[30px] mb-[25px]">
          Sales Report Table
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
                  <TableCell sx={{ border: "none" }}>
                    {row.customerName}
                  </TableCell>
                  <TableCell sx={{ border: "none" }}>{row.prodouct}</TableCell>
                  <TableCell sx={{ border: "none" }}>{row.quantity}</TableCell>
                  <TableCell sx={{ border: "none" }}>{row.salePrice}</TableCell>
                  <TableCell sx={{ border: "none" }}>{row.totalSale}</TableCell>
                  <TableCell sx={{ border: "none" }}>{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default SaleReport;
