import { createSlice, type PayloadAction, } from "@reduxjs/toolkit";
import type { CropSearchResult } from "./crop/cropApi";


interface SoilState {
  soilType: string | null;
  confidence: number | null;
  selectedDistrict: string | null;
  ragResults: CropSearchResult[];
}

const initialState: SoilState = {
  soilType: null,
  confidence: null,
  selectedDistrict: null,
  ragResults: [],
};

export const soilSlice = createSlice({
  name: "soil",
  initialState,
  reducers: {
    setSoilType: (state, action: PayloadAction<string>) => {
      state.soilType = action.payload;
    },
    setConfidence: (state, action: PayloadAction<number>) => {
      state.confidence = action.payload;
    },
    setSelectedDistrict: (state, action: PayloadAction<string>) => {
      state.selectedDistrict = action.payload;
    },
    setRagResults: (state, action: PayloadAction<CropSearchResult[]>) => {
      state.ragResults = action.payload;
    },
    clearSoilAnalysis: (state) => {
      state.soilType = null;
      state.confidence = null;
      state.selectedDistrict = null;
      state.ragResults = [];
    },
  },
});

export const {
  setSoilType,
  setConfidence,
  setSelectedDistrict,
  setRagResults,
  clearSoilAnalysis,
} = soilSlice.actions;

export default soilSlice.reducer;