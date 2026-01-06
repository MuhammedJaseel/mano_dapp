import makeBlockie from "ethereum-blockies-base64";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

export default function HomePage({ reload }: { reload: () => void }) {
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState({ balance: 0, txCount: 0 });
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
    } catch (error) {}

    setloading(false);
  };

  const logout = () => {
    window.localStorage.removeItem("account");
    reload();
  };

  if (loading) return <div className="w-screen text-center text-[#f8fafc]" >Loading...</div>;

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <div className="w-full h-16 bg-[#1e293b] px-6 flex items-center justify-between">
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
      <div className="flex-grow w-full flex items-center justify-center gap-6">
        <div className="flex w-74 bg-[#1e293b] rounded-lg p-2 md:p-3 shadow-elevation-sm hover:shadow-elevation-md transition-smooth border border-[#64748b33]">
          <div className="w-16 h-16 md:w-18 md:h-18 rounded-md flex items-center justify-center flex-shrink-0 bg-[#3b82f620]">
            <img src="./wallet.svg" className="w-10" />
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
            <img src="./txns.svg" className="w-10" />
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
    </div>
  );
}
