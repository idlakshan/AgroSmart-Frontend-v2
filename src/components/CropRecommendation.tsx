import { useState } from "react";
import { useSelector } from "react-redux";
import { FilterSort } from "./FilterSort";
import { CropCard } from "./CropCard";
import type {
  CropDetails,
  CropSearchResult,
} from "../redux/features/crop/cropApi";
import type { RootState } from "../redux/store";

interface CropRecommendationProps {
  onCropClick?: (crop: CropDetails) => void;
}

export const CropRecommendation = ({onCropClick = () => {}}: CropRecommendationProps) => {
  const ragResults = useSelector((state: RootState) => state.soil.ragResults) as CropSearchResult[];

  const [sortBy, setSortBy] = useState<"confidence" | "name">("confidence");
  const [filterCategory, setFilterCategory] = useState<string>("all");

  console.log(ragResults);

  const filtered = ragResults.filter(
    (item) =>
      filterCategory === "all" ||
      item.crop.category.toLowerCase() === filterCategory,
  );

  const sorted = [...filtered].sort((a, b) =>
    sortBy === "confidence"
      ? b.confidence - a.confidence
      : a.crop.name.localeCompare(b.crop.name),
  );

  if (ragResults.length === 0) {
    return (
      <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 mt-8">
        <p className="text-gray-500 text-center">
          Crop recommendations will appear here after soil analysis.
        </p>
      </div>
    );
  }

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50 mt-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Recommended Crops
          </h2>
          <p className="text-gray-600 mt-2">
            Tailored crop recommendations based on your soil analysis.
          </p>
        </div>

        <FilterSort
          sortBy={sortBy}
          setSortBy={setSortBy}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
        />

        <hr className="my-6 border-t border-gray-200" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((item) => (
            <CropCard
              key={item.crop.id}
              crop={item.crop}
              confidence={Math.round(item.confidence * 100)}
              onClick={onCropClick}
            />
          ))}
        </div>

        {sorted.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">
              No crops match your current filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CropRecommendation;
