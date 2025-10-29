import React from 'react';

interface WorkflowOptimizerIconProps {
  size?: number;
  className?: string;
}

const WorkflowOptimizerIcon: React.FC<WorkflowOptimizerIconProps> = ({
  size = 100,
  className = ""
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 121 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M27.4379 11.0875C43.4867 -4.68427 70.9036 -0.23799 82.6059 3.95662C86.0887 4.79554 95.6456 9.74517 106.01 22.8323C116.375 35.9195 119.802 53.7326 120.22 61.0033C123.898 77.1106 113.673 92.8823 108.1 98.7547C98.9055 103.788 78.4265 109.661 43.7375 107.563C15.9863 105.886 3.75463 85.6116 1.10768 75.6844C0.271798 75.5446 -0.898433 70.567 1.10768 51.7751C3.11379 32.9833 19.497 16.8201 27.4379 11.0875Z" fill="#FF8C73"/>
    </svg>
  );
};

export default WorkflowOptimizerIcon;