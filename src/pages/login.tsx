export default function LoginPage({ reload }: { reload: () => void }) {
  // const [account, setAccount] = useState<string | null>(null);

  const connectMetaMask = async () => {
    if (!window.ethereum) {
      alert("MetaMask not detected");
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      await window.ethereum.request({
        method: "personal_sign",
        params: ["message", accounts[0]],
      });

      localStorage.setItem("account", accounts[0]);
      reload();
    } catch (err) {
      console.error("User rejected or error:", err);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-between items-center">
      <div className="w-full h-16 bg-[#1e293b] px-6 flex items-center">
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
      </div>

      <div className="max-w-full w-120 bg-[#1e293b] rounded-2xl p-8 md:p-12 shadow-elevation-md text-center flex flex-col items-center">
        <img
          className="w-20 h-20 rounded-md bg-[#3b82f6]/10"
          alt="MANO"
          src="./app.png"
        />
        <h2 className="text-xl md:text-2xl font-semibold text-[#f8fafc] m-6">
          Login to DApp
        </h2>
        <div
          className="flex items-center gap-2 px-16 py-3 rounded-xl font-medium transition-smooth bg-[#3b82f6] text-[#FFFFFF] cursor-pointer"
          onClick={connectMetaMask}
        >
          <img src="./metamask.svg" className="w-6 mr-1" />
          <span>Login with metamask</span>
        </div>
      </div>

      <div></div>
    </div>
  );
}
