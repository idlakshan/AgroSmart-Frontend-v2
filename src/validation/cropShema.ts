import { z } from "zod";

const rangeRegex = /^\s*\d+(\.\d+)?\s*(?:-\s*\d+(\.\d+)?\s*)?$/;

export const cropSchema = z.object({
  name: z.string().min(1, "Crop name is required"),
  category: z.string().min(1, "Category is required"),
  description: z.string().min(5, "Description is too short"),
  image: z.string().url("Valid image URL is required"),
  growthPeriod: z.string().optional(),
  waterRequirements: z.string().optional(),
  soilRequirements: z.string().min(1, "Soil requirements are required"),
  fertilizers: z.string().optional(),

  avgTemperature: z.string()
    .regex(rangeRegex, "Temperature must be a number or a range like 25-27"),
  avgHumidity: z.string()
    .regex(rangeRegex, "Humidity must be a number or a range like 40-60"),
  rainfall: z.string()
    .regex(rangeRegex, "Rainfall must be a number or a range like 200-300"),
});
