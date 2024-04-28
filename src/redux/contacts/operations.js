import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://6620c8c63bf790e070b0a565.mockapi.io";

export const instance = axios.create({
    baseURL: "https://connections-api.herokuapp.com/",
});

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get("/contacts");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contactNew, thunkAPI) => {
    try {
      const { data } = await instance.post("/contacts", contactNew);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (idContact, thunkAPI) => {
    try {
      const { data } = await instance.delete(`/contacts/${idContact}`);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);