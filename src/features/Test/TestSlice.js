import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const ApiKey = "409e72b0221dcd49e0d4fc845cb93f8c";

const initialState = {
  tommorowForecast: [],
  forecast: [],
  inputValue: "",
  status: "loading",
};

export const dataFetchTommorow = createAsyncThunk(
  "test/dataFetchTommorow",
  async (city) => {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=1&appid=${ApiKey}`
    );
    const resp = await response.json();
    const lenghtXY = resp.map((item) => {
      return [item.lat, item.lon];
    });
    const secondResponse = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lenghtXY[0][0]}&lon=${lenghtXY[0][1]}&appid=${ApiKey}`
    );
    const dataTommorow = await (await secondResponse).json();
    console.log("data Tommorov", dataTommorow);
    return dataTommorow;
  }
);

export const dataFetch = createAsyncThunk("test/dataFetch", async (city) => {
  console.log(city);
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=1&appid=${ApiKey}`
  );
  const resp = await response.json();
  const lenghtXY = resp.map((item) => {
    return [item.lat, item.lon];
  });

  const secondResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lenghtXY[0][0]}&lon=${lenghtXY[0][1]}&appid=${ApiKey}`
  );
  const data = await secondResponse.json();
  console.log("data", data);
  return data;
});

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    addInputValue: (state, action) => {
      state.inputValue = action.payload;
      console.log(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(dataFetch.fulfilled, (state, action) => {
      state.forecast = action.payload;
    });
    builder.addCase(dataFetchTommorow.fulfilled, (state, action) => {
      state.tommorowForecast = action.payload;
    });
  },
});

export const { plusValue, minusValue, addInputValue } = testSlice.actions;
export const inputValue = (state) => state.test.inputValue;
export const forecast = (state) => state.test.forecast;
export const tommorowForecast = (state) => state.test.tommorowForecast;

export default testSlice.reducer;
