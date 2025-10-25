import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { Badge } from './ui/badge';

interface Transaction {
  id: string;
  amountGBP: string;
  recipientAddress: string;
  chain: string;
  timestamp: string;
  senderAddress: string;
  merchantType: string;
  transactionHash: string;
}

// Mock transaction data
const mockTransactions: Transaction[] = [
  {
    id: '1',
    amountGBP: '£1,234.56',
    recipientAddress: '0x742d...4e9c',
    chain: 'Ethereum',
    timestamp: '2025-10-25 14:32:18',
    senderAddress: '0x89ab...23cd',
    merchantType: 'Exchange',
    transactionHash: '0x5f3a...8d2e',
  },
  {
    id: '2',
    amountGBP: '£567.89',
    recipientAddress: '0x123f...7a8b',
    chain: 'Polygon',
    timestamp: '2025-10-25 13:15:42',
    senderAddress: '0x456c...89de',
    merchantType: 'DeFi',
    transactionHash: '0x9c4b...3f1a',
  },
  {
    id: '3',
    amountGBP: '£2,890.12',
    recipientAddress: '0x987e...1d2c',
    chain: 'BSC',
    timestamp: '2025-10-25 12:08:56',
    senderAddress: '0x321a...67ef',
    merchantType: 'NFT Marketplace',
    transactionHash: '0x2e7d...6a9b',
  },
  {
    id: '4',
    amountGBP: '£45.00',
    recipientAddress: '0x654b...9f0e',
    chain: 'Arbitrum',
    timestamp: '2025-10-25 11:45:23',
    senderAddress: '0x789d...45ab',
    merchantType: 'Gaming',
    transactionHash: '0x8b1c...4d5e',
  },
  {
    id: '5',
    amountGBP: '£8,234.67',
    recipientAddress: '0x432a...8c7d',
    chain: 'Ethereum',
    timestamp: '2025-10-25 10:22:11',
    senderAddress: '0x567b...12cd',
    merchantType: 'Exchange',
    transactionHash: '0x3f9a...7e2b',
  },
];

const getChainColor = (chain: string) => {
  const colors: Record<string, string> = {
    Ethereum: 'bg-blue-100 text-blue-700 hover:bg-blue-100',
    Polygon: 'bg-purple-100 text-purple-700 hover:bg-purple-100',
    BSC: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100',
    Arbitrum: 'bg-cyan-100 text-cyan-700 hover:bg-cyan-100',
  };
  return colors[chain] || 'bg-gray-100 text-gray-700 hover:bg-gray-100';
};

const getMerchantColor = (type: string) => {
  const colors: Record<string, string> = {
    Exchange: 'bg-green-100 text-green-700 hover:bg-green-100',
    DeFi: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-100',
    'NFT Marketplace': 'bg-pink-100 text-pink-700 hover:bg-pink-100',
    Gaming: 'bg-orange-100 text-orange-700 hover:bg-orange-100',
  };
  return colors[type] || 'bg-gray-100 text-gray-700 hover:bg-gray-100';
};

export function TransactionTable() {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 p-6">
      <h2 className="mb-6 text-gray-900">Recent Transactions</h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-gray-200 hover:bg-transparent">
              <TableHead className="text-gray-700">Amount</TableHead>
              <TableHead className="text-gray-700">Recipient Address</TableHead>
              <TableHead className="text-gray-700">Chain/Network</TableHead>
              <TableHead className="text-gray-700">Timestamp</TableHead>
              <TableHead className="text-gray-700">Sender Address</TableHead>
              <TableHead className="text-gray-700">Merchant Type</TableHead>
              <TableHead className="text-gray-700">Transaction Hash</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockTransactions.map((transaction) => (
              <TableRow 
                key={transaction.id} 
                className="border-gray-200 hover:bg-blue-50/50 transition-colors"
              >
                <TableCell className="text-gray-900">
                  {transaction.amountGBP}
                </TableCell>
                <TableCell>
                  <code className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-700">
                    {transaction.recipientAddress}
                  </code>
                </TableCell>
                <TableCell>
                  <Badge className={getChainColor(transaction.chain)}>
                    {transaction.chain}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-600 text-sm">
                  {transaction.timestamp}
                </TableCell>
                <TableCell>
                  <code className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-700">
                    {transaction.senderAddress}
                  </code>
                </TableCell>
                <TableCell>
                  <Badge className={getMerchantColor(transaction.merchantType)}>
                    {transaction.merchantType}
                  </Badge>
                </TableCell>
                <TableCell>
                  <code className="text-sm bg-gray-100 px-2 py-1 rounded text-blue-600 hover:text-blue-700 cursor-pointer">
                    {transaction.transactionHash}
                  </code>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
