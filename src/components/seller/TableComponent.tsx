import { Paper } from "@mui/material";
import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid";
type TableComponentProps = {
  columns: GridColDef[];
  rows: any[];
  paginationActive: boolean;
  pageSize: number;
  rowHeight?: number;
  showCheckbox?: boolean;
  headerStyle?: {
    backgroundColor?: string;
    fontWeight?: string | number;
  };
  onRowClick?: (params: GridRowParams) => void;
};

export default function MuiTableComponent({
  columns,
  rows,
  paginationActive,
  pageSize,
  rowHeight,
  onRowClick,
  showCheckbox,
}: TableComponentProps) {
  const paginationModel = { page: 0, pageSize };
  const handleRowClick = (params: GridRowParams) => {
    if (onRowClick) {
      onRowClick(params);
    }
  };
  return (
    <div className="w-full overflow-x-auto">
      <Paper className="w-full min-w-[600px] overflow-x-auto custom-scrollbar">
        <div style={{ height: 400, width: "100%", overflowX: "auto" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: paginationActive ? { paginationModel } : undefined,
            }}
            pageSizeOptions={[5, 10, 15, 20]}
            checkboxSelection={
              typeof showCheckbox === "undefined" ? true : showCheckbox
            }
            disableColumnFilter={true}
            disableColumnMenu={true}
            disableRowSelectionOnClick={true}
            rowHeight={rowHeight}
            onRowClick={handleRowClick}
            sx={{
              border: 0,
              "& .MuiDataGrid-row": {
                cursor: `${onRowClick && "pointer"}`, // Always show pointer cursor on rows
              },
            }}
          />
        </div>
      </Paper>
    </div>
  );
}
