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
  const [openModal, setOpenModal] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [showResultModal, setShowResultModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();

  const handleAddCard = (newCard: {
    id: number;
    bank: string;
    cvv: string;
    cardNumber: string;
    expDate: string;
  }) => {
    setCards([...cards, { ...newCard, id: cards.length + 1 }]);
    setOpenModal(false);
  };

  const handleNextClick = () => {
    if (selectedCardId) {
      setIsSuccess(true); // Show success animation
      setShowResultModal(true);
    } else {
      setIsSuccess(false); // Show fail animation
      setShowResultModal(true);
    }
  };

  const handleCloseResultModal = () => {
    setShowResultModal(false);
    if (isSuccess) {
      navigate("/seller/promotions"); // Redirect only if successful
    }
  };

  return (
    <div className="h-screen overflow-auto">
      <div className="w-full py-3.5 px-24 border-b border-b-primaryBorder">
        <DashboardSearchBar />
      </div>
      <div className="w-[80%] mx-auto mb-20 pt-12">
        <div className="flex gap-x-4 items-center mb-12">
          <Link
            to="/seller/promotions"
            className="text-[15px] font-normal font-sans text-[#262626]"
          >
            Promotions & Ads
          </Link>
          <FaChevronRight size={20} />
          <Link
            to="/seller/promotions/create-promotion"
            className="text-[15px] font-normal font-sans text-[#262626]"
          >
            Create Promotion
          </Link>
          <FaChevronRight size={20} />
          <Link
            to="/seller/promotions/promotion-summary"
            className="text-[15px] font-normal font-sans text-[#262626]"
          >
            Summary
          </Link>
          <FaChevronRight size={20} />
          <span className="text-sm font-normal font-sans text-[#040421]">
            Create Promotion
          </span>
        </div>
        <div className="flex justify-between mb-[25px]">
          <p className="font-semibold text-[32px]">Payment</p>
          <Button
            variant="contained"
            sx={{
              background: "#FD6100",
              color: "#ffffff",
              fontSize: "16px",
              fontWeight: 600,
              borderRadius: "12px",
            }}
            onClick={() => setOpenModal(true)}
          >
            <FaPlus />
            New Card
          </Button>
          <AddCardModal
            open={openModal}
            onClose={() => setOpenModal(false)}
            onAddCard={handleAddCard}
          />
        </div>
        <div className="w-[50%]">
          <div className="pb-5 flex items-center gap-3 mt-10">
            <IoCardOutline size={27} />
            <p className="font-medium text-xl font-inter ">Registered Cards</p>
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
        <div style={{ textAlign: "right", marginTop: "20px" }}>
          <Link to="/seller/promotions/promotion-summary">
            <Button
              variant="contained"
              sx={{
                background: "#F2F2F2",
                color: "#14199C",
                borderRadius: "12px",
                marginRight: "10px",
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
            Next
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

function SuccessFailModal({ open, success, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: 300,
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
          <div className=" flex flex-col  items-center ">
            {" "}
            <FaCheckCircle size={125} color="#FD6100" />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Payment Successful!
            </Typography>
          </div>
        ) : (
          <div className=" flex flex-col  items-center ">
            <FaTimesCircle size={125} color="red" />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Payment Declined
            </Typography>
          </div>
        )}
      </Box>
    </Modal>
  );
}
