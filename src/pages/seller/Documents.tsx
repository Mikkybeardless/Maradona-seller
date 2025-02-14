import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { IoCloudUploadOutline } from "react-icons/io5";
import MuiTableComponent from "../../components/seller/TableComponent";

const documentsRow = (): any[] => {
  const loopArray = [1, 2, 3, 4, 5];
  const returnArray: any[] = [];
  loopArray.forEach((num) => {
    returnArray.push({
      id: num,
      name: "image5.jpg",
      details: {
        processed: "$undefined",
        vendor: "sed",
        date: new Date().toLocaleDateString(),
        ref: "100" + num,
      },
      uploadedBy: "Rosemary Sunday",
      uploadedOn: new Date(),
    });
  });
  return returnArray;
};

const documentsColumn: GridColDef[] = [
  { field: "name", headerName: "File Name", flex: 1, sortable: false },
  {
    field: "details",
    headerName: "Details",
    renderCell: ({ row }) => (
      <div className="flex flex-col h-full justify-center">
        <p className="text-xs">Processed: {row.details.processed}</p>
        <p className="text-xs">Vendor: {row.details.vendor}</p>
        <p className="text-xs">Date: {row.details.date}</p>
        <p className="text-xs">Ref: #{row.details.ref}</p>
      </div>
    ),
    flex: 1,
  },
  { field: "uploadedBy", headerName: "Uploaded By", flex: 1, sortable: false },
  { field: "uploadedOn", headerName: "Uploaded On", flex: 0.5, type: "date" },
];

export default function Documents() {
  const [uploadModal, setUploadModal] = useState(false);
  const [embedModal, setEmbedModal] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [embedURL, setEmbedURL] = useState("");

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "video/mp4": [],
      "application/pdf": [],
      "application/msword": [],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [],
    },
    maxSize: 50000000,
    multiple: true,
    onDrop: (acceptedFiles) => {
      setUploadedFiles([...uploadedFiles, ...acceptedFiles]);
    },
  });

  function removeFile(index: number) {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  }

  function saveEmbedURL() {
    if (!embedURL.trim()) {
      alert("Please enter a valid URL.");
      return;
    }
    setEmbedModal(false);
  }

  async function uploadFiles() {
    if (uploadedFiles.length === 0) {
      alert("No files selected.");
      return;
    }

    const formData = new FormData();
    uploadedFiles.forEach((file) => {
      formData.append("files", file);
    });

    try {
      const response = await fetch("", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Files uploaded successfully!");
        setUploadedFiles([]);
        setUploadModal(false);
      } else {
        alert("Upload failed.");
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("An error occurred while uploading.");
    }
  }

  return (
    <div className="bg-white pt-5 pl-7 pr-3 h-full flex flex-col custom-scrollbar pb-10">
      {/* Upload Modal */}
      {uploadModal && (
        <div className="w-screen h-screen flex justify-center items-center fixed top-0 left-0 z-30 bg-black/50 backdrop-blur-sm">
          <div className="w-[50%] flex flex-col p-8 rounded-lg bg-white">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-xl">Upload Files</h3>
            </div>

            {/* Embed Media Button */}
            <button
              onClick={() => setEmbedModal(true)}
              className="flex gap-x-1.5 items-center ml-auto mt-2 w-fit text-sm text-[#898989] hover:underline"
            >
              <FaPlus size={14} /> Embed media
            </button>

            {/* Drag and Drop Area */}
            <div
              {...getRootProps()}
              className="w-full h-[10rem] mt-3 flex flex-col justify-center items-center gap-y-1 rounded-lg cursor-pointer border border-[#B0B0B0] border-dashed bg-[#F5F5F5]"
            >
              <input {...getInputProps()} />
              {!isDragActive ? (
                <>
                  <IoCloudUploadOutline size={30} />
                  <p className="text-lg font-semibold text-center">
                    Drag files here or click to select
                  </p>
                  <p className="text-sm text-[#898989]">
                    Images, PDFs, Videos, Word docs (Max: 50MB)
                  </p>
                </>
              ) : (
                <p>Drop file(s) here...</p>
              )}
            </div>

            {/* Display Selected Files */}
            <div className="mt-3">
              {uploadedFiles.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 border p-2 rounded-lg"
                >
                  {file.type.startsWith("image/") ? (
                    <img
                      src={URL.createObjectURL(file)}
                      alt="Preview"
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  ) : (
                    <p>{file.name}</p>
                  )}
                  <button
                    className="text-red-500"
                    onClick={() => removeFile(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-x-3 text-sm mt-4">
              <button
                onClick={() => setUploadModal(false)}
                className="py-3 px-5 rounded-lg border border-primaryBorder"
              >
                Cancel
              </button>
              <button
                onClick={uploadFiles}
                className="py-3 px-5 rounded-lg text-white bg-defaultOrange"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Embed Media Modal */}
      {embedModal && (
        <div className="w-screen h-screen flex justify-center items-center fixed top-0 left-0 z-30 bg-black/50 backdrop-blur-sm">
          <div className="w-[30%] flex flex-col p-6 rounded-lg bg-white">
            <h3 className="font-semibold text-xl">Embed Media</h3>
            <input
              type="text"
              placeholder="Enter media URL"
              value={embedURL}
              onChange={(e) => setEmbedURL(e.target.value)}
              className="w-full mt-3 p-2 border border-gray-300 rounded-lg outline-none"
            />
            <div className="flex justify-end gap-x-3 text-sm mt-4">
              <button
                onClick={() => setEmbedModal(false)}
                className="py-2 px-4 rounded-lg border border-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={saveEmbedURL}
                className="py-2 px-4 rounded-lg text-white bg-defaultOrange"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Page Content */}
      <div className="mt-4 flex flex-col gap-y-5 flex-1">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Documents</h1>
          <button
            onClick={() => setUploadModal(true)}
            className="rounded-lg text-sm flex items-center gap-x-3 p-3 px-4 text-white bg-defaultOrange hover:bg-defaultOrangeHover"
          >
            <FaPlus size={18} />
            Upload File
          </button>
        </div>

        <div className="flex gap-x-2 px-3 w-[25%] ml-auto rounded-lg border border-primaryBorder">
          <CiSearch className="h-fit w-fit my-auto" size={24} />
          <input
            className="w-full py-2.5 outline-none border-none text-sm bg-transparent"
            placeholder="Search documents"
            type="text"
          />
        </div>

        <div className="w-full flex flex-1 mt-4">
          <MuiTableComponent
            columns={documentsColumn}
            rows={documentsRow()}
            paginationActive={true}
            rowHeight={80}
            pageSize={10}
          />
        </div>
      </div>
    </div>
  );
}
