import React, { FC } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const WalletConnect: FC = () => {
  const { publicKey, connected } = useWallet();

  return (
    <div className="wallet-connect">
      <WalletMultiButton />
      
      {connected && publicKey && (
        <div className="wallet-info">
          <p> Connected!</p>
          <p>Wallet Address: {publicKey.toString()}</p>
        </div>
      )}
    </div>
  );
};

export default WalletConnect;