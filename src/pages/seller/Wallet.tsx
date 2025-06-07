import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";
import { MdOutlineHistory } from "react-icons/md";
import { TbBuildingBank } from "react-icons/tb";
import DashboardSearchBar from "../../components/seller/DashboardSearchBar";
import chip from "../../assets/chip.svg";
import deposit from "../../assets/deposit.svg";
import withdraw from "../../assets/withdraw.svg";
import deposit2 from "../../assets/deposit2.svg";
import withdraw2 from "../../assets/withdraw2.svg";

import { BankItem, CardItem } from "./PaymentMethods";
import { useState } from "react";
import { IoCardOutline } from "react-icons/io5";

import AddCardModal from "../../components/seller/AddCardModal";
import AddBankModal from "../../components/seller/AddBankModal";

function Wallet() {
  const navigate = useNavigate();
  
    const [cards, setCards] = useState([
      { id: 1, bank: "Access", cvv: "**3", cardNumber: "6213", expDate: "12/34"},
      { id: 2, bank: "GTBank", cvv: "**7", cardNumber: "4321", expDate: "08/26" },
    ]);

    const [bankAccounts, setBankAccounts] = useState([
        { id: 1, bank: "GTBank", accountNumber: "6213", accountName: "John Doe"},
        { id: 2, bank: "Access", accountNumber: "4537", accountName: "John Carton"},
        { id: 3, bank: "UBA", accountNumber: "3318", accountName: "John Carter"},
      ]);  
  
    const [openAddCardModal, setOpenAddCardModal] = useState(false);
    const [openAddBankModal, setOpenAddBankModal] = useState(false);
    
    const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
    const [selectedAccountId, setSelectedAccountId] = useState<number | null>(null);

  const handleViewTransactionHistry = () => {
    navigate("/seller/wallet/transaction-history");
  };

  const handleDeposit = () => {
    navigate("/seller/wallet/deposit");
  };

  const handleWithdraw = () => {
    navigate("/seller/wallet/withdraw");
  };

  // Handle adding a new card
  const handleAddCard = (newCard: {
    bank: string;
    cvv: string;
    cardNumber: string;
    expDate: string;
  }) => {
    setCards([...cards, { ...newCard, id: cards.length + 1 }]);
    setOpenAddCardModal(false);
  };

  return (
    <div className="bg-[#F7F7F7] h-screen flex flex-col work-sans overflow-y-auto custom-scrollbar">
      {/* Responsive Top Bar */}
        <div className="w-full py-3.5 px-6 md:px-24 border-b border-b-primaryBorder">
            <DashboardSearchBar />
        </div>
      <div className="mt-4 p-4 md:p-10 lg:flex lg:gap-x-12">
        {/* Left Screen  */}
        <div className="w-full lg:w-3/5">
            <div className="flex flex-col md:flex-row md:justify-center lg:justify-start md:items-center gap-y-8 gap-x-24">

                {/* Total Deposit  */}
                <div className="flex gap-x-3 bg-[#FFFFFF] py-4 pr-4 rounded-md">
                    <div className="w-2 h-10 bg-[#E65800] rounded-r-md"></div>
                    <div>
                        <p className="text-xs">Total Deposit</p>
                        <p className="text-2xl font-bold"><span>N</span> 22,OOO,OOO</p>
                        <div className="flex items-center gap-x-2 mt-2">
                            <div className="p-1 bg-[#E6580040] text-[#E65800] rounded-2xl"><FiArrowDownLeft size={10}/></div>
                            <span className="text-sm">15%</span>
                        </div>
                    </div>
                </div>

                {/* Total Spending  */}
                <div className="flex gap-x-3  bg-[#FFFFFF] py-4 pr-4 rounded-md">
                    <div className="w-2 h-10 bg-[#14199C] rounded-r-md"></div>
                    <div>
                        <p className="text-xs">Total Spending</p>
                        <p className="text-2xl font-bold"><span>N</span> 22,OOO,OOO</p>
                        <div className="flex items-center gap-x-2 mt-2">
                            <div className="p-1 bg-[#14199C40] text-[#14199C] rounded-2xl"><FiArrowUpRight size={10}/></div>
                            <span className="text-sm">15%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 flex justify-center lg:justify-start">
                <WalletIllustration/>
            </div>
            <div className="mt-24 bg-[#ffffff] p-6 rounded-md">
                <div className="text-[#14199C] font-bold text-sm md:text-lg">Card Details</div>
                <div className="grid grid-cols-2 justify-between gap-y-4 mt-4">
                    <div>
                        <div className="text-[#14199C] font-bold mb-2 text-xs md:text-sm">Card Name</div>
                        <div className="text-xs font-light">John Doe</div>
                    </div>
                    <div>
                        <div className="text-[#14199C] font-bold mb-2 text-xs md:text-sm">Card No</div>
                        <div className="text-xs font-light">34567***********</div>
                    </div>
                    <div>
                        <div className="text-[#14199C] font-bold mb-2 text-xs md:text-sm">CVV</div>
                        <div className="text-xs font-light">345</div>
                    </div>
                    <div>
                        <div className="text-[#14199C] font-bold mb-2 text-xs md:text-sm">Exp Date</div>
                        <div className="text-xs font-light">04 / 27</div>
                    </div>
                </div>
                <div className="mt-8">
                    <button onClick={()=> setOpenAddCardModal(true)} className="w-full rounded-lg flex justify-center px-4 sm:px-5 py-2 sm:py-2.5 text-white text-sm bg-defaultOrange" >
                       Add New Card
                    </button>
                </div>
            </div>
            
            <div className="mt-12 mb-12">
                {/* Registered Cards Section */}
                <div className="w-full  bg-[#ffffff] p-6 rounded-md">
                    <div className="pb-5 flex items-center gap-3">
                    <IoCardOutline size={24} />
                    <p className="font-medium text-lg sm:text-xl">Registered Cards</p>
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
            </div>
        </div>
        {/* Right Screen  */}
        <div className="w-full lg:w-2/5 sm:mt-10 lg:mt-4">

        {/* Wallet Balance  */}
            <div className=" bg-[#ffffff] p-6 rounded-md">
                <div className="flex flex-col items-center gap-y-1">
                    <p className="sm:text-[14px] lg:text-[8px]">Total Balance</p>
                    <p className="text-4xl font-bold"><span>N</span> 22,000,000</p>
                    <div className="flex items-center gap-x-2">
                        <div className="p-1 bg-[#34A85340] text-[#34A853] rounded-2xl"><FiArrowUpRight size={12}/></div>
                        <span className="text-sm">15%</span>
                    </div>
                </div>

                {/* Wallet Action Buttons   */}
                <div className="flex justify-center items-center gap-x-4 mt-6">
                    <button onClick={() => handleDeposit()} className="rounded-lg flex items-center gap-x-2 px-4 sm:px-5 py-2 sm:py-2.5 text-defaultOrange text-sm border-defaultOrange border-[1px]">
                        <span>Deposit</span>
                        <img className="w-[20px] h-[18px]" src={deposit} alt="Deposit" />
                    </button>
                    
                    <button onClick={() => handleWithdraw()} className="rounded-lg flex items-center gap-x-2 px-2 sm:px-4 py-2 sm:py-2.5 text-defaultOrange text-sm border-defaultOrange border-[1px]">
                        <span>Withdraw</span>
                        <img className="w-[20px] h-[18px]" src={withdraw} alt="Withdraw" />
                    </button>
                </div>
            </div>

            {/* Transaction History  */}
            <div className="mt-10">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-2 text-lg font-bold">
                        <MdOutlineHistory size={24}/>
                        <span>History</span>
                    </div>
                    <div onClick={() => handleViewTransactionHistry()} className="cursor-pointer hover:underline text-[#14199C] text-sm">
                        View All
                    </div>
                </div>

                <div className="mt-2">
                    {[1,2,3].map(() =>
                    <div className="flex items-center justify-between p-2 text-[10px] md:text-xs mb-4 bg-[#ffffff] p-4 rounded-md">
                        <div className="flex items-center gap-x-2">
                            <div>
                                <img className="w-8" src={deposit2} alt="Deposit"/>
                            </div>
                            <div>
                                <p>Deposit</p>
                                <p>Amount: 2,900,000</p>
                            </div>
                        </div>
                        <div className="text-[#00000099]">
                            04 April 2025
                        </div>
                    </div>)}
                </div>

                <div className="mt-12 lg:mt-8 mb-12">
                    {/* Registered Bank Accounts Section */}
                    <div className="w-full">
                        <div className="pb-5 flex items-center gap-3 mt-10">
                        <TbBuildingBank size={24} />
                        <p className="font-medium text-lg sm:text-xl">Bank Details</p>
                        </div>
                        <div className="bg-[#ffffff] p-2 rounded-md">
                            {bankAccounts.map((bankAccount) => (
                            <BankItem
                                key={bankAccount.id}
                                {...bankAccount}
                                isSelected={selectedAccountId === bankAccount.id}
                                onSelect={() => setSelectedAccountId(bankAccount.id)}
                            />
                            ))}
                        </div>
                    </div>
                    
                    <div className="mt-8">
                        <button onClick={()=> setOpenAddBankModal(true)} className="w-full rounded-lg flex justify-center px-4 sm:px-5 py-2 sm:py-2.5 text-white text-sm bg-defaultOrange" >
                        Add Bank
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
      {/* Add Card Modal */}
      <AddCardModal
        open={openAddCardModal}
        onClose={() => setOpenAddCardModal(false)}
        onAddCard={handleAddCard}
        />

        
      {/* Add Bank Modal */}
      <AddBankModal
        open={openAddBankModal}
        onClose={() => setOpenAddBankModal(false)}
        onAddBank={handleAddCard}
        />
    </div>
  );
}

export default Wallet;

function WalletIllustration() {
    const [isHoveringonCard, setIsHoveringonCard] = useState(false)
    const backwallet = document.getElementById("walletbehind")
    if (isHoveringonCard){
        backwallet?.classList.add('walletbackhover')
    }else{
        backwallet?.classList.remove('walletbackhover')
    }
    return(
        <div onMouseEnter={()=> setIsHoveringonCard(true)} onMouseLeave={()=> setIsHoveringonCard(false)} className="wallet transition-all duration-300 ease-in-out">
            <div id="walletbehind" className="walletback -rotate-[8deg] invisible md:visible flex flex-col w-60 h-36 md:w-80 md:h-52 lg:w-96 lg:h-60 rounded-xl transition-all duration-500 ease-in-out relative">
                <div className="bg-gradient-to-r from-[#121212] via-[#272727] to-[#353535] h-1/4 rounded-t-xl"></div>
                <div className="bg-[#5200FF] h-3/4 rounded-b-xl"></div>
            </div>
            <div className="walletfront flex flex-col w-60 h-36 md:w-80 md:h-52 lg:w-96 lg:h-60 rounded-xl relative bottom-36 md:bottom-52 lg:bottom-60 z-10 -mb-36 md:-mb-52 lg:-mb-60">
                <div className="bg-[#E65800] h-2/3 rounded-t-xl p-2 flex items-center text-lg md:text-2xl tracking-widest text-white">
                    3455 **** **** ****
                </div>
                <div className="bg-gradient-to-r from-[#121212] via-[#272727] to-[#353535] h-1/3 rounded-b-xl flex justify-between items-center p-4">
                    <div className="text-white text-xs md:text-sm">
                        <div>02/27</div>
                        <div className="uppercase">John Carter</div>
                    </div>
                    <div>
                        <img className="w-6 md:w-10 lg:w-12" src={chip} alt="Chip"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
