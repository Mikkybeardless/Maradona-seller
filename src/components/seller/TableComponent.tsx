import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export default function MuiTableComponent({
  columns,
  rows,
  paginationActive,
  pageSize,
  rowHeight,
  showCheckbox,
}: TableComponentProps) {
  const paginationModel = { page: 0, pageSize };

  return (
    <div className="w-full overflow-x-auto">
      <Paper className="w-full min-w-[600px] overflow-x-auto custom-scrollbar">
        <div style={{ height: 400, width: "100%", overflowX: "auto" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={
              paginationActive ? { pagination: paginationModel } : undefined
            }
            pageSizeOptions={[5, 10, 15, 20]}
            checkboxSelection={
              typeof showCheckbox === "undefined" ? true : showCheckbox
            }
            disableColumnFilter={true}
            disableColumnMenu={true}
            disableRowSelectionOnClick={true}
            rowHeight={rowHeight}
            sx={{ border: 0 }}
          />
        </div>
      </Paper>
    </div>
  );
}
