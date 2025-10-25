import { useState } from 'react';
import { Button } from './ui/button';
import { Wallet } from 'lucide-react';

export function WalletConnection() {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = () => {
    // Mock wallet connection
    const mockAddress = '0x' + Math.random().toString(16).substring(2, 42);
    setWalletAddress(mockAddress);
    setIsConnected(true);
  };

  const disconnectWallet = () => {
    setWalletAddress('');
    setIsConnected(false);
  };

  const shortenAddress = (address: string) => {
    if (!address) return '';
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <div className="relative">
      {isConnected ? (
        <>
          {/* Active connection indicator dot */}
          <div className="absolute -top-1 -right-1 z-10">
            <div className="relative">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
            </div>
          </div>
          <Button
            onClick={disconnectWallet}
            variant="outline"
            className="bg-white/70 backdrop-blur-sm border-gray-200 hover:bg-white/90"
          >
            <Wallet className="w-4 h-4 mr-2" />
            {shortenAddress(walletAddress)}
          </Button>
        </>
      ) : (
        <Button
          onClick={connectWallet}
          className="bg-[var(--primary-blue)] hover:bg-[var(--deep-blue)] text-white"
        >
          <Wallet className="w-4 h-4 mr-2" />
          Connect Wallet
        </Button>
      )}
    </div>
  );
}
