import makeBlockie from "ethereum-blockies-base64";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import {
  LucideArrowLeftRight,
  LucideArrowRight,
  LucidePieChart,
  LucideWallet,
} from "lucide-react";
import axios from "axios";

export default function HomePage({ reload }: { reload: () => void }) {
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState({ balance: 0, txCount: 0 });
  const [txns, settxns] = useState({ data: [], total: 0 });
  const address = window.localStorage.getItem("account") || "";

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setloading(true);

    try {
      const rpc = "https://rpc1-m.anolabs.site/";
      const provider = new ethers.JsonRpcProvider(rpc);
      await Promise.all([
        provider.getBalance(address),
        provider.getTransactionCount(address),
      ]).then(([balance, txCount]) => {
        setdata({
          balance: parseFloat(ethers.formatEther(balance)),
          txCount: txCount,
        });
      });

      const rxns = await axios.get(
        "https://api-scanm.anolabs.site/api/accounts-transactions/" + address,
      );
      settxns(rxns.data);
    } catch (error) {}

    setloading(false);
  };

  const logout = () => {
    window.localStorage.removeItem("account");
    reload();
  };

  if (loading)
    return (
      <div className="w-screen text-center text-[#f8fafc]">Loading...</div>
    );

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <div className="w-full h-16 min-h-16 bg-[#1e293b] px-6 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-3 transition-smooth hover:opacity-80"
        >
          <img
            className="w-10 h-10 rounded-md bg-[#3b82f6]/10"
            alt="MANO"
            src="./app.png"
          />
          <span className="text-xl font-mono font-semibold text-[#f8fafc] hidden sm:block">
            MANO Dapp
          </span>
        </a>
        <div className="flex items-center gap-3">
          <div
            className="text-sm cursor-pointer text-[#94a3b8] hover:text-[#f8fafc]"
            onClick={logout}
          >
            Logout
          </div>
          <div className="text-[#f8fafc] font-mono flex items-center gap-2 border border-[#64748b33] px-4 py-2 rounded-lg bg-[#334155]">
            {address.slice(0, 6)}...{address.slice(-4)}
            <img src={makeBlockie(address)} className="w-8 h-8 rounded-full" />
          </div>
        </div>
      </div>
      <div className="p-8 flex flex-col gap-5 overflow-y-auto w-full max-w-2xl">
        <div className="font-bold flex gap-1 mt-4">
          <LucidePieChart color="#06b6d4" />
          Statistics
        </div>
        <div className="flex-grow w-full flex justify-center gap-6">
          <div className="flex w-74 bg-[#1e293b] rounded-lg p-2 md:p-3 shadow-elevation-sm hover:shadow-elevation-md transition-smooth border border-[#64748b33]">
            <div className="w-16 h-16 md:w-18 md:h-18 rounded-md flex items-center justify-center flex-shrink-0 bg-[#3b82f620]">
              {/* <img src="./wallet.svg" className="w-10" /> */}
              <LucideWallet color="#3b82f6" size={40} />
            </div>
            <div className="mx-2 flex flex-col justify-center gap-1">
              <div className="text-xs font-caption text-[#94a3b8] uppercase tracking-wide">
                Wallet Banance
              </div>
              <h3 className="text-sm md:text-base font-data text-[#f8fafc] truncate">
                {Number(data.balance.toFixed(2)).toLocaleString()} MANO
              </h3>
            </div>
          </div>
          <div className="flex w-74 bg-[#1e293b] rounded-lg p-2 md:p-3 shadow-elevation-sm hover:shadow-elevation-md transition-smooth border border-[#64748b33]">
            <div className="w-16 h-16 md:w-18 md:h-18 rounded-md flex items-center justify-center flex-shrink-0 bg-[#06b6d4]/10">
              {/* <img src="./txns.svg" className="w-10" /> */}
              <LucideArrowLeftRight color="#06b6d4" size={40} />
            </div>
            <div className="mx-2 flex flex-col justify-center gap-1">
              <div className="text-xs font-caption text-[#94a3b8] uppercase tracking-wide">
                Total Transactions
              </div>
              <h3 className="text-sm md:text-base font-data text-[#f8fafc] truncate">
                {data.txCount}
              </h3>
            </div>
          </div>
        </div>
        <div className="font-bold flex gap-1 mt-4">
          <LucideArrowLeftRight color="#06b6d4" />
          Transactions
        </div>
        {txns.data.map((it: any, k) => (
          <div
            className="w-full bg-[#1e293b] rounded-lg p-6 md:p-4 shadow-elevation-sm hover:shadow-elevation-md transition-smooth border border-[#64748b33]"
            key={k}
          >
            <div className="flex gap-2">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-md bg-[#06b6d4]/10 flex items-center justify-center flex-shrink-0">
                <LucideArrowLeftRight color="#06b6d4" />
              </div>
              <div className="flex flex-col justify-center gap-1">
                <div className="flex items-center gap-2">
                  <div className="text-xs text-[#94a3b8] uppercase tracking-wide font-caption">
                    Coin Transfer
                  </div>
                  <div className="px-2 py-0.5 rounded-full text-xs font-medium bg-[#10b98120] text-[#10b981]">
                    Succes
                  </div>
                </div>
                <div className="text-sm md:text-base font-data text-[#f8fafc] truncate">
                  {it.hash.slice(0, 18)}...{it.hash.slice(-18)}
                </div>
              </div>
            </div>
            <br />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-[#64748b33]">
              <div className="flex items-center gap-4">
                <div>
                  <div className="text-xs text-[#94a3b8]">Value</div>
                  <div className="text-sm md:text-base font-semibold text-[#f8fafc] font-data">
                    {ethers.formatEther(it.value)} MANO
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[#94a3b8]">Gas Price</div>
                  <div className="text-sm md:text-base font-semibold text-[#f8fafc] font-data">
                    {ethers.formatEther(it.gasFee)} MANO
                  </div>
                </div>
              </div>
              <button
                className="inline-flex text-white items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-[#0f172a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06b6d4] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-[#334155] hover:bg-[#06b6d4] hover:text-[#FFFFFF] h-9 rounded-xl px-3"
                onClick={() =>
                  window.open("https://scanm.anolabs.site/tx/" + it.hash)
                }
              >
                View Details
                <LucideArrowRight color="#fff" size={14} className="ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
