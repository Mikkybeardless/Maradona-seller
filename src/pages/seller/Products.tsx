import {
  Popper,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { GridRowParams } from "@mui/x-data-grid";
import { useCallback, useEffect, useRef, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaChevronRight, FaRegEye } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useClickAway } from "react-use";
import DashboardSearchBar from "../../components/seller/DashboardSearchBar";
import MuiTableComponent from "../../components/table/TableComponent";
import productService from "../../api/services/product.service";
import { useDebounce } from "../../hooks/useDebounce";
import { ProductColumns } from "../../components/table/columns";
import { FaPlus } from "react-icons/fa";
import { TableSearchInput } from "../../components/common/tableSearchInput";

type IFilter = {
  type: string;
  status: "pending" | "published";
};

export default function Products() {
  const location = useLocation();
  const { pathname } = location;
  const [filters, setFilters] = useState<IFilter>({
    type: "",
    status: "published",
  });
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery);
  const [productData, setProductData] = useState({
    rows: [],
    pagination: {
      page: 1,
      pageSize: 10,
    },
    totalRowCount: 0,
    loading: false,
  });

  const fetchData = useCallback(async () => {
    setProductData((prev) => ({ ...prev, loading: true }));
    try {
      const res = await productService.getProductsByStatus(filters.status, {
        page: productData.pagination.page,
        per_page: productData.pagination.pageSize,
        search: debouncedSearchQuery,
        type: filters.type,
      });
      if (res.status === 200) {
        setProductData((prev) => ({
          ...prev,
          rows: res.data.data,
          pagination: {
            page: res.data.current_page,
            pageSize: res.data.per_page,
          },
          totalRowCount: res.data.total,
          loading: false,
        }));
      }
    } catch (error) {
      console.error("Error fetching seller product data:", error);
    } finally {
      setProductData((prev) => ({ ...prev, loading: false }));
    }
  }, [
    JSON.stringify(filters),
    JSON.stringify(productData.pagination),
    debouncedSearchQuery,
  ]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleTableSelectionChange = (selectedRows: any[]) => {
    console.log("Selected Rows:", selectedRows);
  };
  const handleRowClick = (params: GridRowParams) => {
    console.log("Row clicked:", params.row);
    navigate(`/seller/products/product/${params.row.id}`);
  };
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    switch (tab) {
      case "All":
        setFilters((prev) => ({ ...prev, status: "published" }));
        break;
      case "Published":
        setFilters((prev) => ({ ...prev, status: "published" }));
        break;
      case "Draft":
        setFilters((prev) => ({ ...prev, status: "pending" }));
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col custom-scrollbar pb-10 bg-[#FAFAFA]">
      <div className="w-full py-3 px-6 md:px-12 lg:px-24 border-b border-b-[#E3E3E3]">
        <DashboardSearchBar />
      </div>

      <div className="px-6 md:px-12 lg:px-24 w-full mt-6 flex flex-col flex-1">
        <div className="flex gap-x-2 md:gap-x-4 items-center flex-wrap">
          <Link to={`/${pathname.split("/")[1]}/dashboard`} className="text-xs">
            Dashboard
          </Link>
          <FaChevronRight size={14} className="hidden sm:inline" />
          <span className="text-xs">Products</span>
        </div>

        <div className="flex justify-between items-center mt-1">
          <h1 className="text-3xl font-bold">Products</h1>
          <Link
            to={`/seller/products/add-product`}
            className="rounded-lg px-3 py-1 md:px-5 md:py-3 flex gap-x-3 items-center text-white text-sm bg-defaultOrange hover:bg-defaultOrangeHover"
          >
            <FaPlus size={20} /> Add product
          </Link>
        </div>

        {/* Tabs */}
        <section
          id="tabs"
          className="flex flex-wrap justify-center sm:justify-start gap-x-2 sm:gap-x-4 mt-4 border-b border-[#E6E6E6]"
        >
          {[`All`, `Published`, `Draft`].map((tab) => (
            <button
              key={tab}
              className={`px-3 sm:px-4 py-2 rounded-t-md text-sm font-medium ${
                activeTab === tab
                  ? "border-b-4 border-[#14199C]"
                  : "text-gray-500"
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab} <span className="ml-1">23</span>
            </button>
          ))}
        </section>

        <section
          id="filter-section"
          className="flex flex-wrap justify-between items-center mt-5 w-full gap-4"
        >
          {/* Filters Section */}
          <div className="flex flex-wrap gap-3 sm:gap-x-5 items-center">
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="category-label">
                <span className="text-[#040421]">Category</span>
              </InputLabel>
              <Select
                labelId="category-label"
                label="Category"
                className="text-[#040421]"
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    type: e.target.value as string,
                  }))
                }
              >
                <MenuItem value="Cars">Cars</MenuItem>
                <MenuItem value="Houses">Houses</MenuItem>
                <MenuItem value="Lands">Lands</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* Search Input */}
          <TableSearchInput
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            placeholder="Search products"
          />
        </section>

        <section
          id="table"
          className="mt-3 flex flex-1 w-full overflow-hidden bg-white"
        >
          <MuiTableComponent
            columns={ProductColumns}
            rows={productData.rows}
            onRowClick={handleRowClick}
            loading={productData.loading}
            currentPage={productData.pagination.page}
            totalRowCount={productData.totalRowCount}
            onPageChange={(model) => {
              setProductData((prev) => ({
                ...prev,
                pagination: {
                  page: model.page,
                  pageSize: model.pageSize,
                },
              }));
            }}
            showCheckbox={true}
            onSelect={handleTableSelectionChange}
            rowHeight={60}
            pageSize={productData.pagination.pageSize}
          />
        </section>
      </div>
    </div>
  );
}

export const ProductActionCellComponent = ({ row }: { row: any }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const dotsPopupRef = useRef(null);
  const open = Boolean(anchorEl);
  const id = open ? `popper-${row.id}` : undefined;

  useClickAway(dotsPopupRef, () => {
    setAnchorEl(null);
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleDelete = (id: number) => {
    console.log("deleting product with id:", id);
  };

  const handleEdit = (id: number) => {
    console.log("editing product id:", id);
  };

  return (
    <div className="h-full w-full relative z-10 flex justify-center items-center overflow-visible">
      <button
        aria-describedby={id}
        type="button"
        onClick={handleClick}
        className="cursor-pointer bg-transparent border-none p-2 m-0 rounded-full hover:bg-gray-100"
        style={{ lineHeight: 0 }}
      >
        <BsThreeDotsVertical size={16} />
      </button>
      <Popper
        ref={dotsPopupRef}
        className="p-3 text-sm z-10 flex gap-x-4 items-center rounded-lg border border-primaryBorder bg-white"
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-end"
        style={{ zIndex: 1300 }}
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [0, 8],
            },
          },
          {
            name: "preventOverflow",
            options: {
              boundary: "viewport",
              padding: 8,
            },
          },
        ]}
      >
        <Link to={`/products/product/${row.id}`}>
          <FaRegEye size={18} />
        </Link>
        <button onClick={() => handleEdit(row.id)}>
          <BiEditAlt size={18} />
        </button>

        <button onClick={() => handleDelete(row.id)}>
          <GoTrash size={18} />
        </button>
      </Popper>
    </div>
  );
};
