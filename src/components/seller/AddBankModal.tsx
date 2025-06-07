import { FormControl, InputLabel, Modal, Box, TextField, Select, MenuItem, Button } from "@mui/material";
import { useState } from "react";
import { FaCcVisa, FaCcMastercard, FaCcAmex } from "react-icons/fa6";
import { IoCardOutline, IoLockClosed } from "react-icons/io5";

export default function AddBankModal({
    open,
    onClose,
    onAddBank,
  }: {
    open: boolean;
    onClose: () => void;
    onAddBank: (newBank: {
      accountNumber: string;
      accountName: string;
      bank: string;
    }) => void;
  }) {
    const [newBank, setNewBank] = useState({
      accountNumber: "",
      accountName: "",
      bank: "",
    });
  
    // Detect card type based on number
    const getCardTypeIcon = () => {
      const { accountNumber } = newBank;
      if (/^4/.test(accountNumber)) return <FaCcVisa size={24} color="#1A1F71" />;
      if (/^5[1-5]/.test(accountNumber))
        return <FaCcMastercard size={24} color="#EB001B" />;
      if (/^3[47]/.test(accountNumber))
        return <FaCcAmex size={24} color="#007BC1" />;
      return <IoCardOutline size={24} color="#5E5E5E" />;
    };
  
    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewBank({ ...newBank, [e.target.name]: e.target.value });
    };
  
    return (
      <Modal open={open} onClose={onClose}>
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[400px] ">
          <h2 className="text-lg font-semibold mb-4 text-center">Add Bank</h2>
  
          {/* Card Number */}
            <InputLabel sx={{fontSize: "12px"}} id="accountNumber">Account Number</InputLabel>
            <TextField
                placeholder="000 000 0000"
                fullWidth
                name="accountNumber"
                value={newBank.accountNumber}
                onChange={handleInputChange}
                sx={{ m: 1, marginBottom: "20px" }}
                size="small"
            />

                <InputLabel sx={{fontSize: "12px"}} id="bank">Bank Name</InputLabel>
                <Select
                    fullWidth
                    labelId="bank-label"
                    label="Bank"
                    sx={{ m: 1, marginBottom: "20px" }}
                    size="small"
                >
                    <MenuItem>Access</MenuItem>
                    <MenuItem>GTBank</MenuItem>
                    <MenuItem>UBA</MenuItem>
                </Select>
  
            <InputLabel sx={{fontSize: "12px"}} id="accountName">Account Name</InputLabel>
            <TextField
                label="Account Name"
                fullWidth
                name="accountName"
                value={newBank.accountName}
                onChange={handleInputChange}
                sx={{ m: 1, marginBottom: "20px" }}
                size="small"
            />
  
          <div className="flex justify-center mt-4">
            <div className="flex w-1/2">
                <Button
                variant="contained"
                sx={{ background: "#14199C", color: "#fff", flex: 1 }}
                onClick={() => onAddBank(newBank)}
                >
                Save
                </Button>
            </div>
          </div>
        </Box>
      </Modal>
    );
  }