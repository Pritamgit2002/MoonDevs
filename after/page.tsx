import { useEffect, useState } from "react";
import BurnButtonBarContent from "./components/BurnButtonBarContent";
import BurnStatsContainerContent from "./components/BurnStatsContainerContent";
import useCoinData from "./hooks/useCoinData";

export const BurnPage = () => {
  const { walletChain } = useWallet();
  const { openChainSelector, setOpenChainSelector } = useChainSelector();
  const { chains: receiveChains } = useWallet();
  const { setSuppliesChain, suppliesChain } = useAppSupplies(true);

  const [isOldToken, setIsOldToken] = useState(false);
  const { toastMsg, toastSev } = useAppToast();

  const coinData = useCoinData();

  const burnTransactions = useBurnTransactions(walletChain, isOldToken);

  return (
    <div>
      <DashboardLayoutStyled className="burnpage">
        <div
          className="top_conatiner burnpage"
          style={{ alignItems: "flex-start" }}
        >
          <div className="info_box filled">
            <h1 className="title">App TOKEN BURN</h1>
            <p className="description medium"></p>

            <BurnButtonBarContent />
          </div>

          <BurnStatsContainerContent />
        </div>
      </DashboardLayoutStyled>

      <TransactionTableStyled>
        <div className="header">
          <p className="header_label">Burn Transactions</p>
        </div>
        <BurnTxTable
          data={burnTransactions}
          priceUSD={coinData?.current_price?.usd}
        />
      </TransactionTableStyled>
      <ChainSelector
        title={"Switch Token Chain"}
        openChainSelector={openChainSelector}
        setOpenChainSelector={setOpenChainSelector}
        chains={receiveChains}
        selectedChain={suppliesChain}
        setSelectedChain={setSuppliesChain}
      />
      <AppToast
        position={{ vertical: "bottom", horizontal: "center" }}
        message={toastMsg}
        severity={toastSev}
      />
    </div>
  );
};
