import React from 'react';

interface SelectedProjectCardProps {
  image: string;
  onClick?: () => void;
}

const SelectedProjectCard: React.FC<SelectedProjectCardProps> = ({
  image,
  onClick
}) => {
  return (
    <div
      className="group cursor-pointer hover:opacity-80 transition-opacity duration-300 w-full"
      onClick={onClick}
    >
      {/* Image Container with horizontal padding */}
      <div className="w-full px-6 md:px-20 lg:px-[148px]">
        <div className="relative bg-butter rounded-3xl overflow-hidden">
          <img
            src={image}
            alt="Project mockup"
            className="w-full h-auto aspect-[620/426] object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default SelectedProjectCard;