import { instance } from "../contacts/operations";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearToken = () => {
  instance.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const { data } = await instance.post("/users/signup", userData);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const { data } = await instance.post("/users/login", userData);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const { data } = await instance.post("/users/logout");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    setToken(token);
    try {
      const { data } = await instance.get("/users/current");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      if (!token) return false;
      return true;
    },
  }
);