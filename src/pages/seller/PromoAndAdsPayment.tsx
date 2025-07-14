import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { FaChevronRight, FaPlus } from "react-icons/fa6";
import { IoCardOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import AddCardModal from "../../components/seller/AddCardModal";
import DashboardSearchBar from "../../components/seller/DashboardSearchBar";

import { CardItem } from "./PaymentMethods";

function PromoAndAdsPayment() {
  const [cards, setCards] = useState([
    { id: 1, bank: "Access", cvv: "**3", cardNumber: "6213", expDate: "12/34" },
    { id: 2, bank: "GTBank", cvv: "**7", cardNumber: "4321", expDate: "08/26" },
  ]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
  const [showResultModal, setShowResultModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();

  const handleAddCard = (newCard: {
    nameOnCard: string;
    cvv: string;
    cardNumber: string;
    expDate: string;
  }) => {
    setCards([
      ...cards,
      {
        id: cards.length + 1,
        bank: newCard.nameOnCard,
        cvv: newCard.cvv,
        cardNumber: newCard.cardNumber,
        expDate: newCard.expDate,
      },
    ]);
    setOpenModal(false);
  };

  const handleNextClick = () => {
    setIsSuccess(!!selectedCardId);
    setShowResultModal(true);
  };

  const handleCloseResultModal = () => {
    setShowResultModal(false);
    if (isSuccess) navigate("/seller/promotions");
  };

  return (
    <div className="h-screen overflow-auto">
      {/* Top Navigation */}
      <div className="w-full py-3.5 px-4 sm:px-8 lg:px-24 border-b border-b-primaryBorder">
        <DashboardSearchBar />
      </div>

      {/* Content Container */}
      <div className="w-full max-w-[90%] md:max-w-[80%] mx-auto mb-20 pt-12">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-x-4 items-center mb-12 text-sm sm:text-[15px]">
          <Link to="/seller/promotions" className="text-[#262626]">
            Promotions & Ads
          </Link>
          <FaChevronRight size={16} />
          <Link
            to="/seller/promotions/create-promotion"
            className="text-[#262626]"
          >
            Create Promotion
          </Link>
          <FaChevronRight size={16} />
          <Link
            to="/seller/promotions/promotion-summary"
            className="text-[#262626]"
          >
            Summary
          </Link>
          <FaChevronRight size={16} />
          <span className="text-[#040421]">Payment</span>
        </div>

        {/* Header and Button */}
        <div className="flex flex-wrap justify-between items-center mb-[25px]">
          <p className="font-semibold text-2xl sm:text-[32px]">Payment</p>
          <Button
            variant="contained"
            sx={{
              background: "#14199C",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: 600,
              borderRadius: "12px",
            }}
            onClick={() => setOpenModal(true)}
          >
            <FaPlus className="mr-2" />
            New Card
          </Button>
        </div>

        {/* Add Card Modal */}
        <AddCardModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          onAddCard={handleAddCard}
        />

        {/* Registered Cards Section */}
        <div className="w-full md:w-[70%] lg:w-[50%]">
          <div className="pb-5 flex items-center gap-3 mt-10">
            <IoCardOutline size={24} />
            <p className="font-medium text-lg sm:text-xl">Registered Cards</p>
          </div>
          {cards.map((card) => (
            <CardItem
              nameOnCard={""}
              key={card.id}
              {...card}
              isSelected={selectedCardId === card.id}
              onSelect={() => setSelectedCardId(card.id)}
            />
          ))}
        </div>

        {/* Buttons Section */}
        <div className="flex flex-wrap justify-end gap-3 mt-8">
          <Link to="/seller/promotions/promotion-summary">
            <Button
              variant="contained"
              sx={{
                background: "#F2F2F2",
                color: "#14199C",
                borderRadius: "12px",
              }}
            >
              Cancel
            </Button>
          </Link>
          <Button
            variant="contained"
            sx={{
              background: "#14199C",
              color: "#FFFFFF",
              borderRadius: "12px",
            }}
            onClick={handleNextClick}
          >
            Proceed
          </Button>
        </div>
      </div>

      {/* Success/Fail Modal */}
      <SuccessFailModal
        open={showResultModal}
        success={isSuccess}
        onClose={handleCloseResultModal}
      />
    </div>
  );
}

export default PromoAndAdsPayment;

type SuccessFailModalProps = {
  open: boolean;
  success: boolean;
  onClose: () => void;
};

function SuccessFailModal({ open, success, onClose }: SuccessFailModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: "90%",
          maxWidth: 300,
          backgroundColor: "white",
          padding: 4,
          textAlign: "center",
          borderRadius: "12px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: 24,
        }}
      >
        {success ? (
          <div className="flex flex-col items-center">
            <FaCheckCircle size={100} color="#FD6100" />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Payment Successful!
            </Typography>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <FaTimesCircle size={100} color="red" />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Payment Declined
            </Typography>
          </div>
        )}
      </Box>
    </Modal>
  );
}
