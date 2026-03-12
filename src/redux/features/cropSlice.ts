import { createSlice, type PayloadAction,  } from "@reduxjs/toolkit";

interface CropState {
  success: boolean;
  error: string | null;
}

const initialState: CropState = {
  success: false,
  error: null,
};

const cropSlice = createSlice({
  name: "crop",
  initialState,
  reducers: {
    setSuccess: (state, action: PayloadAction<boolean>) => {
      state.success = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    resetCropStatus: (state) => {
      state.success = false;
      state.error = null;
    },
  },
});

export const { setSuccess, setError, resetCropStatus } = cropSlice.actions;
export default cropSlice.reducer;