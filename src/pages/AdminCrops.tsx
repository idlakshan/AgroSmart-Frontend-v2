import { PlusCircle, Image, ChevronDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useCreateCropMutation } from "../redux/features/crop/cropApi";
import { toast } from "react-toastify";
import { cropSchema } from "../validation/cropShema";
type CropFormData = z.infer<typeof cropSchema>;

const categories = ["Vegetable", "Fruit", "Grain", "Legume", "Nut", "Other"];

const AdminCrops = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CropFormData>({
    resolver: zodResolver(cropSchema),
    mode: "onChange",
  });

  const [createCrop, { isLoading }] = useCreateCropMutation();

  const onSubmit = async (data: CropFormData) => {
    try {
      await createCrop(data).unwrap();
      toast.success("Crop created successfully!");
      reset();
    } catch (err) {
      toast.error("Failed to create crop " + err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-6 p-5 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center mb-6">
        <PlusCircle className="h-6 w-6 text-green-600 mr-2" />
        <h1 className="text-xl font-bold text-gray-800">Add New Crop</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="bg-green-50/50 p-4 rounded-lg border border-green-100">
          <h2 className="text-base font-semibold text-green-800 mb-3 flex items-center">
            <span className="w-1.5 h-4 bg-green-500 rounded-full mr-2"></span>
            Basic Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-600">
                Crop Name*
              </label>

              <input
                {...register("name")}
                type="text"
                placeholder="e.g., Tomato"
                className="w-full text-sm border rounded-md p-2 focus:ring-2 focus:ring-green-500"
              />

              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-600">
                Category*
              </label>

              <div className="relative">
                <select
                  {...register("category")}
                  className="w-full text-sm border rounded-md p-2 pr-7 focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select category</option>

                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <ChevronDown className="h-3 w-3 text-gray-400 absolute right-2 top-1/2 transform -translate-y-1/2" />
              </div>

              {errors.category && (
                <p className="text-red-500 text-xs">
                  {errors.category.message}
                </p>
              )}
            </div>

            <div className="md:col-span-2 space-y-1">
              <label className="text-xs font-medium text-gray-600">
                Description*
              </label>

              <textarea
                {...register("description")}
                rows={2}
                placeholder="Brief description..."
                className="w-full text-sm border rounded-md p-2 focus:ring-2 focus:ring-green-500"
              />

              {errors.description && (
                <p className="text-red-500 text-xs">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div className="md:col-span-2 space-y-1">
              <label className="text-xs font-medium text-gray-600">
                Image URL*
              </label>

              <div className="flex items-center">
                <Image className="h-4 w-4 text-gray-400 mr-1" />

                <input
                  {...register("image")}
                  type="text"
                  placeholder="Paste image URL"
                  className="w-full text-sm border rounded-md p-2 focus:ring-2 focus:ring-green-500"
                />
              </div>

              {errors.image && (
                <p className="text-red-500 text-xs">{errors.image.message}</p>
              )}
            </div>
          </div>
        </div>

        <div className="bg-amber-50/50 p-4 rounded-lg border border-amber-100">
          <h2 className="text-base font-semibold text-amber-800 mb-3 flex items-center">
            <span className="w-1.5 h-4 bg-amber-500 rounded-full mr-2"></span>
            Growth Requirements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-600">
                Growth Period
              </label>

              <input
                {...register("growthPeriod")}
                type="text"
                placeholder="e.g., 90-120 days"
                className="w-full text-sm border rounded-md p-2 focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-600">
                Water Requirements
              </label>

              <input
                {...register("waterRequirements")}
                type="text"
                placeholder="e.g., Moderate"
                className="w-full text-sm border rounded-md p-2 focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-emerald-50/50 p-4 rounded-lg border border-emerald-100">
          <h2 className="text-base font-semibold text-emerald-800 mb-3 flex items-center">
            <span className="w-1.5 h-4 bg-emerald-500 rounded-full mr-2"></span>
            Soil & Fertilization
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-600">
                Soil Requirements*
              </label>

              <textarea
                {...register("soilRequirements")}
                rows={2}
                placeholder="e.g., Loamy soil"
                className="w-full text-sm border rounded-md p-2 focus:ring-2 focus:ring-emerald-500"
              />

              {errors.soilRequirements && (
                <p className="text-red-500 text-xs">
                  {errors.soilRequirements.message}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-600">
                Fertilizers
              </label>

              <textarea
                {...register("fertilizers")}
                rows={2}
                placeholder="e.g., NPK 10-10-10"
                className="w-full text-sm border rounded-md p-2 focus:ring-2 focus:ring-lime-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-sky-50/50 p-4 rounded-lg border border-sky-100">
          <h2 className="text-base font-semibold text-sky-800 mb-3 flex items-center">
            <span className="w-1.5 h-4 bg-sky-500 rounded-full mr-2"></span>
            Weather Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-600">
                Avg Temperature
              </label>

              <input
                {...register("avgTemperature")}
                type="text"
                placeholder="20-25"
                className="w-full text-sm border rounded-md p-2 focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-600">
                Avg Humidity
              </label>

              <input
                {...register("avgHumidity")}
                type="text"
                placeholder="50-60"
                className="w-full text-sm border rounded-md p-2 focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-600">
                Rainfall
              </label>

              <input
                {...register("rainfall")}
                type="text"
                placeholder="200-300"
                className="w-full text-sm border rounded-md p-2 focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-linear-to-r from-green-600 to-emerald-600 text-white text-sm font-semibold py-2 rounded-lg hover:shadow-md transition-all flex items-center justify-center disabled:opacity-50"
        >
          <PlusCircle className="h-4 w-4 mr-1" />

          {isLoading ? "Saving..." : "Save Crop"}
        </button>
      </form>
    </div>
  );
};

export default AdminCrops;
