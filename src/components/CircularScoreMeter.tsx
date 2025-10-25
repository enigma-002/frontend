import { useEffect, useState } from 'react';

interface CircularScoreMeterProps {
  score: number; // 0-100
  onHighRisk?: () => void;
}

export function CircularScoreMeter({ score, onHighRisk }: CircularScoreMeterProps) {
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayScore(score);
    }, 100);
    return () => clearTimeout(timer);
  }, [score]);

  useEffect(() => {
    if (score >= 70 && onHighRisk) {
      onHighRisk();
    }
  }, [score, onHighRisk]);

  const getRiskLevel = () => {
    if (score < 30) return { label: 'Low Risk', color: '#10b981' };
    if (score < 70) return { label: 'Medium Risk', color: '#f59e0b' };
    return { label: 'High Risk', color: '#ef4444' };
  };

  const { label, color } = getRiskLevel();
  const circumference = 2 * Math.PI * 90;
  const strokeDashoffset = circumference - (displayScore / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center h-full p-8">
      <h3 className="mb-8 text-center text-gray-900">Risk Assessment</h3>
      <div className="relative w-64 h-64">
        <svg className="transform -rotate-90 w-64 h-64">
          <circle
            cx="128"
            cy="128"
            r="90"
            stroke="currentColor"
            strokeWidth="16"
            fill="none"
            className="text-gray-200"
          />
          <circle
            cx="128"
            cy="128"
            r="90"
            stroke={color}
            strokeWidth="16"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-5xl" style={{ color }}>{Math.round(displayScore)}</span>
          <span className="text-sm mt-2 text-gray-600">Risk Score</span>
        </div>
      </div>
      <div className="mt-8 text-center">
        <div 
          className="px-6 py-2 rounded-full inline-block"
          style={{ backgroundColor: `${color}20`, color }}
        >
          {label}
        </div>
      </div>
    </div>
  );
}
