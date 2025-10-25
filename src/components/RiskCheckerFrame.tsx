import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { AlertCircle, Send as SendIcon, Shield } from 'lucide-react';
import { motion } from 'motion/react';

interface RiskCheckerFrameProps {
  onCheckRisk: (address: string) => void;
  isChecking: boolean;
}

export function RiskCheckerFrame({ onCheckRisk, isChecking }: RiskCheckerFrameProps) {
  const [activeTab, setActiveTab] = useState<'risk' | 'send'>('risk');
  const [walletAddress, setWalletAddress] = useState('');
  const [sendAddress, setSendAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleCheckRisk = () => {
    if (walletAddress.trim()) {
      onCheckRisk(walletAddress);
    }
  };

  const handleSend = () => {
    if (sendAddress.trim() && amount.trim()) {
      // Mock send functionality
      alert(`Sending ${amount} to ${sendAddress}`);
    }
  };

  return (
    <div className="h-full">
      {/* Sliding Toggle - Full Width */}
      <div className="mb-6 relative bg-gray-100 p-1 rounded-xl flex w-full">
        <motion.div
          className="absolute top-1 bottom-1 bg-white rounded-lg shadow-sm"
          initial={false}
          animate={{
            left: activeTab === 'risk' ? '0.25rem' : '50%',
            right: activeTab === 'risk' ? '50%' : '0.25rem',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
        <button
          onClick={() => setActiveTab('risk')}
          className={`relative z-10 flex-1 py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 ${
            activeTab === 'risk' ? 'text-[var(--primary-blue)]' : 'text-gray-600'
          }`}
        >
          <Shield className="w-4 h-4" />
          Risk Checker
        </button>
        <button
          onClick={() => setActiveTab('send')}
          className={`relative z-10 flex-1 py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 ${
            activeTab === 'send' ? 'text-[var(--primary-blue)]' : 'text-gray-600'
          }`}
        >
          <SendIcon className="w-4 h-4" />
          Send
        </button>
      </div>

      {/* Content */}
      <div className="relative overflow-hidden">
        <motion.div
          animate={{ x: activeTab === 'risk' ? 0 : '-100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="flex"
        >
          {/* Risk Checker Panel */}
          <div className="w-full flex-shrink-0 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="wallet-address">Wallet Address</Label>
              <Input
                id="wallet-address"
                placeholder="Enter wallet address to check..."
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                className="bg-white border-gray-200"
                onKeyDown={(e) => e.key === 'Enter' && handleCheckRisk()}
              />
            </div>

            <Button 
              onClick={handleCheckRisk} 
              disabled={isChecking || !walletAddress.trim()}
              className="w-full bg-[var(--primary-blue)] hover:bg-[var(--deep-blue)] text-white"
            >
              {isChecking ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Checking...
                </>
              ) : (
                <>
                  <Shield className="w-4 h-4 mr-2" />
                  Check Risk
                </>
              )}
            </Button>

            <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[var(--primary-blue)] flex-shrink-0 mt-0.5" />
                <div className="space-y-1 text-sm text-gray-700">
                  <p>
                    Enter a cryptocurrency wallet address to analyze its risk profile.
                  </p>
                  <p className="opacity-75">
                    Our system checks transaction history, known scams, and suspicious activity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Send Panel */}
          <div className="w-full flex-shrink-0 space-y-4 pl-6">
            <div className="space-y-2">
              <Label htmlFor="recipient-address">Recipient Address</Label>
              <Input
                id="recipient-address"
                placeholder="Enter recipient wallet address..."
                value={sendAddress}
                onChange={(e) => setSendAddress(e.target.value)}
                className="bg-white border-gray-200"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-white border-gray-200"
              />
            </div>

            <Button 
              onClick={handleSend}
              disabled={!sendAddress.trim() || !amount.trim()}
              className="w-full bg-[var(--primary-blue)] hover:bg-[var(--deep-blue)] text-white"
            >
              <SendIcon className="w-4 h-4 mr-2" />
              Send Transaction
            </Button>

            <div className="p-4 rounded-lg bg-amber-50 border border-amber-200">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="space-y-1 text-sm text-amber-900">
                  <p>
                    Always verify the recipient address before sending.
                  </p>
                  <p className="opacity-75">
                    Cryptocurrency transactions cannot be reversed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
