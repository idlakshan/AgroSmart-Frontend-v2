import type { CropDetails } from "../redux/features/crop/cropApi";

export interface CropCardProps {
  crop: CropDetails;
  confidence: number;
  onClick: (crop: CropDetails) => void;
}

export const CropCard = ({ crop, confidence, onClick }: CropCardProps) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 cursor-pointer"
      onClick={() => onClick(crop)}
    >
      <div className="relative">
        <img
          src={crop.image}
          alt={crop.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 right-0 bg-green-600 text-white px-2 py-1 text-sm font-semibold rounded-bl-lg">
          {confidence}% Match
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-2">
          <span className="text-xs text-white font-medium px-2 py-1 bg-gray-800/60 rounded-full">
            {crop.category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800">{crop.name}</h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">
          {crop.description}
        </p>
      </div>
    </div>
  );
};
