import {SerializedError, createAsyncThunk, createSlice} from "@reduxjs/toolkit";

interface InitialState {
  error: SerializedError | undefined;
  isLoading: boolean;
}

const initialState: InitialState = {
  error: undefined,
  isLoading: false,
};

export const getMainData = createAsyncThunk(
  "main/getMainData",
  async (data, thunkAPI) => {
    try {
      // const sliders = await getDocs(firestore().collection("sliders"));
      // const courses = await getDocs(
      //   firestore().collection("courses").where("published", "==", true),
      // );
      // return {sliders, courses};
    } catch (error) {}
  },
);

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {},
  extraReducers: builder => {
    // builder.addCase(getMainData.pending, state => {
    //   state.isLoading = true;
    // });
    // builder.addCase(getMainData.fulfilled, (state, action: any) => {
    //   state.sliders = action.payload.sliders;
    //   state.courses = action.payload.courses;
    //   state.isLoading = false;
    // });
    // builder.addCase(getMainData.rejected, (state, action) => {
    //   state.error = action.error;
    //   state.isLoading = false;
    // });
  },
});
export default mainSlice;
