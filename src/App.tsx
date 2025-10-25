import { useState } from 'react';
import { CircularScoreMeter } from './components/CircularScoreMeter';
import { RiskCheckerFrame } from './components/RiskCheckerFrame';
import { DangerModal } from './components/DangerModal';
import { WalletConnection } from './components/WalletConnection';
import { TransactionTable } from './components/TransactionTable';
import { Shield } from 'lucide-react';

export default function App() {
  const [riskScore, setRiskScore] = useState(0);
  const [isChecking, setIsChecking] = useState(false);
  const [showDangerModal, setShowDangerModal] = useState(false);
  const [checkedAddress, setCheckedAddress] = useState('');

  const handleCheckRisk = async (address: string) => {
    setIsChecking(true);
    setCheckedAddress(address);
    setRiskScore(0);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Generate a random risk score for demo purposes
    const randomScore = Math.floor(Math.random() * 100);
    setRiskScore(randomScore);
    setIsChecking(false);
  };

  const handleHighRisk = () => {
    setShowDangerModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 relative overflow-hidden">
      {/* Enhanced gradient overlay with increased ombre */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/60 via-indigo-100/40 to-purple-100/50"></div>
      <div className="absolute inset-0 backdrop-blur-2xl bg-white/20"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header - Full Width */}
        <header className="border-b border-gray-200/50 bg-white/50 backdrop-blur-md">
          <div className="w-full px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary-blue)] to-[var(--soft-blue)] flex items-center justify-center shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-gray-900">
                  Crypto Wallet Risk Checker
                </h1>
              </div>

              <div className="flex items-center gap-3">
                {/* Area 5: Wallet Connection */}
                <WalletConnection />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="w-full px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Area 2: Risk Checker Frame */}
            <div className="lg:col-span-2">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 p-8 h-full">
                <RiskCheckerFrame 
                  onCheckRisk={handleCheckRisk}
                  isChecking={isChecking}
                />
              </div>
            </div>

            {/* Area 4: Circular Score Meter */}
            <div className="lg:col-span-1">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 h-full min-h-[500px]">
                <CircularScoreMeter 
                  score={riskScore}
                  onHighRisk={handleHighRisk}
                />
              </div>
            </div>
          </div>

          {/* Transaction Table */}
          <div className="max-w-7xl mx-auto mt-6">
            <TransactionTable />
          </div>
        </main>
      </div>

      {/* Danger Modal */}
      <DangerModal
        open={showDangerModal}
        onOpenChange={setShowDangerModal}
        score={riskScore}
        address={checkedAddress}
      />
    </div>
  );
}
