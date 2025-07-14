import { Button, Divider } from "@mui/material";
import { useState } from "react";
import { IoCardOutline, IoCheckmarkCircleSharp } from "react-icons/io5";
import AddCardModal from "../../components/seller/AddCardModal";

// Main Component
function PaymentMethods() {
  const [cards, setCards] = useState([
    {
      id: 1,
      nameOnCard: "Access",
      cvv: "**3",
      cardNumber: "6213",
      expDate: "12/34",
    },
    {
      id: 2,
      nameOnCard: "GTBank",
      cvv: "**7",
      cardNumber: "4321",
      expDate: "08/26",
    },
  ]);

  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState(false);

  // Handle adding a new card
  const handleAddCard = (newCard: {
    nameOnCard: string;
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
      <div className="w-full sm:w-[90%] m-auto">
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
  nameOnCard,
  cvv,
  cardNumber,
  expDate,
  isSelected,
  onSelect,
}: {
  nameOnCard: string;
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
    <div
      className="cursor-pointer pb-3 px-2 sm:px-4 lg:px-6"
      onClick={onSelect}
    >
      <Divider className="!w-[98%] m-auto" />
      <div className="flex items-center justify-between mt-2 font-medium text-center gap-1">
        <div>
          {isSelected ? (
            <IoCheckmarkCircleSharp
              size={24}
              color={isSelected ? "#1BB66E" : "#5E5E5E"}
            />
          ) : null}
        </div>
        <p className="text-[10px] md:text-xs font-light text-[#5E5E5E] flex-1">
          Name on Card
        </p>
        <p className="text-[10px] md:text-xs font-light text-[#5E5E5E] flex-1">
          CVV
        </p>
        <p className="text-[10px] md:text-xs font-light text-[#5E5E5E] flex-1">
          CARD NUMBER
        </p>
        <p className="text-[10px] md:text-xs font-light text-[#5E5E5E] flex-1">
          EXP DATE
        </p>
      </div>

      <div className="flex items-center justify-between mt-2 text-center gap-1">
        <IoCardOutline size={18} />
        <p className="text-[10px] md:text-sm font-medium text-[#000000] flex-1">
          {nameOnCard}
        </p>
        <p className="text-[10px] md:text-sm font-medium text-[#000000] flex-1">
          {maskCvv(cvv.replace(/\s+/g, ""))}
        </p>
        <p className="text-[10px] md:text-sm font-medium text-[#000000] flex-1">
          {maskCardNumber(cardNumber.replace(/\s+/g, ""))}
        </p>
        <p className="text-[10px] md:text-sm font-medium text-[#000000] flex-1">
          {expDate}
        </p>
      </div>
    </div>
  );
}

// Bank Item Component
export function BankItem({
  bank,
  accountNumber,
  accountName,
  isSelected,
  onSelect,
}: {
  bank: string;
  accountNumber: string;
  accountName: string;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const maskAccountNumber = (accountNumber: string) => {
    return "******" + accountNumber.slice(-4);
  };

  return (
    <div
      className="cursor-pointer pb-3 px-2 sm:px-4 lg:px-6"
      onClick={onSelect}
    >
      <div className="">
        <div className="flex items-center">
          {isSelected ? (
            <IoCheckmarkCircleSharp
              size={24}
              color={isSelected ? "#1BB66E" : "#5E5E5E"}
            />
          ) : null}
          <div className="w-full">
            <div className="flex flex-wrap items-center justify-between mt-2 font-medium text-center gap-1">
              <p className="text-[10px] md:text-xs font-light text-[#5E5E5E] flex-1">
                Bank
              </p>
              <p className="text-[10px] md:text-xs font-light text-[#5E5E5E] flex-1">
                Account No
              </p>
              <p className="text-[10px] md:text-xs font-light text-[#5E5E5E] flex-1">
                Account Name
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between text-center mt-2 gap-1">
              <p className="text-[10px] md:text-sm font-medium text-[#000000] flex-1">
                {bank}
              </p>
              <p className="text-[10px] md:text-sm font-medium text-[#000000] flex-1">
                {maskAccountNumber(accountNumber.replace(/\s+/g, ""))}
              </p>
              <p className="text-[10px] md:text-sm font-medium text-[#000000] flex-1">
                {accountName}
              </p>
            </div>
          </div>
        </div>

        <Divider className="!w-[98%] m-auto" />
      </div>
    </div>
  );
}
