import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './ui/alert-dialog';
import { AlertTriangle } from 'lucide-react';

interface DangerModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  score: number;
  address: string;
}

export function DangerModal({ open, onOpenChange, score, address }: DangerModalProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="bg-white border-red-500">
        <AlertDialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-red-100 rounded-full">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <AlertDialogTitle className="text-red-600">
              High Risk Detected!
            </AlertDialogTitle>
          </div>
          <AlertDialogDescription className="text-gray-700 space-y-3">
            <p>
              The wallet address you checked has been flagged as <strong>high risk</strong> with a score of <strong>{score}</strong>.
            </p>
            <div className="p-3 bg-red-50 rounded-lg border border-red-200">
              <p className="text-sm break-all">
                <span className="opacity-75">Address:</span> <code className="bg-red-100 px-1 py-0.5 rounded">{address}</code>
              </p>
            </div>
            <p>
              This wallet may be associated with:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Suspicious transaction patterns</li>
              <li>Known scam activities</li>
              <li>Flagged addresses in our database</li>
              <li>High-risk behavior indicators</li>
            </ul>
            <p className="text-sm">
              <strong>Warning:</strong> Proceed with extreme caution when interacting with this address.
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-gray-100">
            Close
          </AlertDialogCancel>
          <AlertDialogAction className="bg-red-600 hover:bg-red-700 text-white">
            I Understand
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
