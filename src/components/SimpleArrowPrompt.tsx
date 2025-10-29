import { ChevronDown } from 'lucide-react';

interface SimpleArrowPromptProps {
  onHide: () => void;
}

const SimpleArrowPrompt = ({ onHide }: SimpleArrowPromptProps) => {
  return (
    <div className="flex items-center gap-3 mb-6 text-riso-pink">
      {/* Text */}
      <span
        className="font-semibold text-lg"
        style={{ fontFamily: 'Arial, sans-serif' }}
      >
        Click on prototype to begin
      </span>

      {/* Down arrow icon */}
      <ChevronDown
        className="w-6 h-6 animate-pulse"
        style={{ animationDuration: '2s' }}
      />
    </div>
  );
};

export default SimpleArrowPrompt;