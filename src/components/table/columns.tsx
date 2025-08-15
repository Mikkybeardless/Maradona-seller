import { GridColDef } from "@mui/x-data-grid";
import { ProductActionCellComponent } from "../../pages/seller/Products";

// product
export const ProductColumns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 0.1 },
  {
    field: "name",
    headerName: "Product",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    renderCell: ({ row }) => {
      return (
        <div className="flex flex-1 h-full  items-center gap-x-2">
          <img
            className="w-20 h-auto rounded-lg object-contain bg-gray-100"
            src={row.media[0] || "/images/placeholder.png"}
            alt={`image-${row.name}`}
          />
          <span className="text-sm">{row.name}</span>
        </div>
      );
    },
    flex: 4,
  },
  { field: "type", headerName: "Category" },
  { field: "price", headerName: "Price(₦)", type: "number" },
  // { field: "current_stock", headerName: "Stock", type: "number", flex: 1 },
  {
    field: "status",
    headerName: "Status",
    renderCell: ({ row }) => {
      return (
        <div className="w-full h-full items-center flex justify-center">
          <span
            className={`${renderStatusColor(
              row.status
            )} rounded-[100px] !text-xs px-2.5 py-1`}
          >
            {row.status}
          </span>
        </div>
      );
    },
    flex: 1,
  },
  {
    field: "Action",
    flex: 0.5,
    renderCell: ({ row }) => {
      return <ProductActionCellComponent row={row} />;
    },
  },
];
function renderStatusColor(status: string) {
  switch (status) {
    case "published":
      return "bg-[#E8F8E8] text-[#0C560B]";
    case "pending":
      return "bg-[#FEF3B8] text-[#897a28]";
    case "draft":
      return "bg-[#DAE9FB] text-[#0B283E]";
    default:
      return "";
  }
}
