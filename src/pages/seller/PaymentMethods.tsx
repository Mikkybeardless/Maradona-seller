import { Button, Divider } from "@mui/material";
import { useState } from "react";
import { IoCardOutline, IoCheckmarkCircleSharp } from "react-icons/io5";
import AddCardModal from "../../components/seller/AddCardModal";

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
export function CardItem({
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
