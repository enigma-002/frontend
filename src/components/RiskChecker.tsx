import React, { FC, useState } from 'react';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

const RiskChecker: FC = () => {
  const { publicKey, connected } = useWallet();
  const { connection } = useConnection();
  const [loading, setLoading] = useState<boolean>(false);

  const checkWalletRisk = async (): Promise<void> => {
    if (!connected || !publicKey) {
      alert('Please connect your wallet first!');
      return;
    }

    console.log('Checking risk for:', publicKey.toString());
  };

  return (
    <div className="risk-checker">
      <h2>Check Your Wallet Risk</h2>
      
      {connected && publicKey ? (
        <div>
          <p>Ready to analyze: {publicKey.toString().slice(0, 8)}...</p>
          <button onClick={checkWalletRisk} disabled={loading}>
            {loading ? 'Analyzing...' : 'Check Wallet Risk'}
          </button>
        </div>
      ) : (
        <p>Please connect your wallet to check risk</p>
      )}
    </div>
  );
};

export default RiskChecker; 