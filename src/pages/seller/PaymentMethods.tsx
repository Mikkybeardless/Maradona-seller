import {
  Box,
  Button,
  Divider,
  InputAdornment,
  Modal,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { FaCcAmex, FaCcMastercard, FaCcVisa } from "react-icons/fa";
import {
  IoCardOutline,
  IoCheckmarkCircleSharp,
  IoLockClosed,
} from "react-icons/io5";

// Main Component
function PaymentMethods() {
  const [cards, setCards] = useState([
    {
      id: 1,
      bank: "Access",
      cvv: "**3",
      cardNumber: "6213",
      expDate: "12/34",
    },
    {
      id: 2,
      bank: "GTBank",
      cvv: "**7",
      cardNumber: "4321",
      expDate: "08/26",
    },
  ]);

  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState(false);

  // Handle adding a new card
  const handleAddCard = (newCard: {
    bank: string;
    cvv: string;
    cardNumber: string;
    expDate: string;
  }) => {
    setCards([...cards, { ...newCard, id: cards.length + 1 }]);
    setOpenModal(false);
  };

  return (
    <div className="bg-[#F7F7F7] min-h-screen p-5">
      <div className="bg-white mb-10 pt-7 rounded p-5 shadow-md">
        <div className="pb-5 flex items-center gap-3">
          <IoCardOutline size={27} />
          <p className="font-medium text-xl font-inter">Registered Cards</p>
        </div>

        {cards.map((card) => (
          <CardItem
            key={card.id}
            {...card}
            isSelected={selectedCardId === card.id}
            onSelect={() => setSelectedCardId(card.id)}
          />
        ))}
      </div>

      {/* Add New Card Button */}
      <div className="w-[90%] m-auto">
        <Button
          variant="contained"
          fullWidth
          sx={{
            background: "#14199C",
            color: "#ffffff",
            fontSize: "16px",
            fontWeight: 700,
            padding: "15px auto",
          }}
          onClick={() => setOpenModal(true)}
        >
          Add New Card
        </Button>
      </div>

      {/* Add Card Modal */}
      <AddCardModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onAddCard={handleAddCard}
      />
    </div>
  );
}

export default PaymentMethods;

// -------------------------------------------
// Card Item Component
function CardItem({
  bank,
  cvv,
  cardNumber,
  expDate,
  isSelected,
  onSelect,
}: {
  bank: string;
  cvv: string;
  cardNumber: string;
  expDate: string;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const maskCardNumber = (cardNumber: string) => {
    return "******" + cardNumber.slice(-4);
  };

  const maskCvv = (cvv: string) => {
    return "**" + cvv.slice(-1);
  };

  return (
    <div className="cursor-pointer pb-3" onClick={onSelect}>
      <Divider className="!w-[98%] m-auto" />
      <div className="flex justify-between text-center mt-3 font-medium">
        <IoCheckmarkCircleSharp
          size={24}
          color={isSelected ? "#1BB66E" : "#5E5E5E"}
        />
        <p className="text-sm text-[#5E5E5E] flex-1">Bank</p>
        <p className="text-sm text-[#5E5E5E] flex-1">CVV</p>
        <p className="text-sm text-[#5E5E5E] flex-1">CARD NUMBER</p>
        <p className="text-sm text-[#5E5E5E] flex-1">EXP DATE</p>
      </div>

      <div className="flex justify-between items-center text-center mt-2">
        <IoCardOutline size={24} />
        <p className="text-base font-medium text-[#000000] flex-1">{bank}</p>
        <p className="text-base font-medium text-[#000000] flex-1">
          {maskCvv(cvv.replace(/\s+/g, ""))}
        </p>
        <p className="text-base font-medium text-[#000000] flex-1">
          {maskCardNumber(cardNumber.replace(/\s+/g, ""))}
        </p>
        <p className="text-base font-medium text-[#000000] flex-1">{expDate}</p>
      </div>
    </div>
  );
}

// -------------------------------------------
// Add Card Modal Component
function AddCardModal({
  open,
  onClose,
  onAddCard,
}: {
  open: boolean;
  onClose: () => void;
  onAddCard: (newCard: {
    bank: string;
    cvv: string;
    cardNumber: string;
    expDate: string;
  }) => void;
}) {
  const [newCard, setNewCard] = useState({
    bank: "",
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
        <h2 className="text-lg font-semibold mb-4">Add New Card</h2>

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
          label="Bank Name"
          fullWidth
          name="bank"
          value={newCard.bank}
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
