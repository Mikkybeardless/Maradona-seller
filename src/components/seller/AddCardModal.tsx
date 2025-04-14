import { Modal, Box, TextField, InputAdornment, Button } from "@mui/material";
import { useState } from "react";
import { FaCcVisa, FaCcMastercard, FaCcAmex } from "react-icons/fa6";
import { IoCardOutline, IoLockClosed } from "react-icons/io5";

export default function AddCardModal({
    open,
    onClose,
    onAddCard,
  }: {
    open: boolean;
    onClose: () => void;
    onAddCard: (newCard: {
      nameOnCard: string;
      cvv: string;
      cardNumber: string;
      expDate: string;
    }) => void;
  }) {
    const [newCard, setNewCard] = useState({
      nameOnCard: "",
      cvv: "",
      cardNumber: "",
      expDate: "",
    });
  
    // Detect card type based on number
    const getCardTypeIcon = () => {
      const { cardNumber } = newCard;
      if (/^4/.test(cardNumber)) return <FaCcVisa size={24} color="#1A1F71" />;
      if (/^5[1-5]/.test(cardNumber))
        return <FaCcMastercard size={24} color="#EB001B" />;
      if (/^3[47]/.test(cardNumber))
        return <FaCcAmex size={24} color="#007BC1" />;
      return <IoCardOutline size={24} color="#5E5E5E" />;
    };
  
    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewCard({ ...newCard, [e.target.name]: e.target.value });
    };
  
    return (
      <Modal open={open} onClose={onClose}>
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[400px] ">
          <h2 className="text-lg font-semibold mb-4 text-center">Card Details</h2>
  
          {/* Card Number */}
          <TextField
            label="Card Number"
            fullWidth
            name="cardNumber"
            value={newCard.cardNumber}
            onChange={handleInputChange}
            sx={{ marginBottom: "20px" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  {getCardTypeIcon()}
                </InputAdornment>
              ),
            }}
          />
  
          <div className="flex gap-3">
            <TextField
              label="CVV"
              name="cvv"
              value={newCard.cvv}
              onChange={handleInputChange}
              className="flex-1"
              sx={{ marginBottom: "20px" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IoLockClosed size={20} color="#5E5E5E" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Expiry Date"
              name="expDate"
              value={newCard.expDate}
              onChange={handleInputChange}
              className="flex-1"
              sx={{ marginBottom: "20px" }}
            />
          </div>
  
          <TextField
            label="Name on card"
            fullWidth
            name="nameOnCard"
            value={newCard.nameOnCard}
            onChange={handleInputChange}
            sx={{ marginBottom: "20px" }}
          />
  
          <div className="flex gap-3 mt-4">
            <Button
              variant="contained"
              sx={{ background: "#14199C", color: "#fff", flex: 1 }}
              onClick={() => onAddCard(newCard)}
            >
              Save
            </Button>
          </div>
        </Box>
      </Modal>
    );
  }