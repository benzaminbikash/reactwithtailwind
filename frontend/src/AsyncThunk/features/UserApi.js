import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
  "createuser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://65a6807b74cf4207b4f038ae.mockapi.io/api/v1/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUser = createAsyncThunk(
  "getUser",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      "https://65a6807b74cf4207b4f038ae.mockapi.io/api/v1/users",
      { method: "GET" }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://65a6807b74cf4207b4f038ae.mockapi.io/api/v1/users/${id}`,
      { method: "DELETE" }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      `https://65a6807b74cf4207b4f038ae.mockapi.io/api/v1/users/${data.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;
      console.log(result);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const UserApi = createSlice({
  name: "User Api",
  initialState: {
    user: [],
    isLoading: false,
    isError: null,
    searchApi: "",
  },
  reducers: {
    searchData: (state, action) => {
      state.searchApi = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.isLoading = true;
      state.user = action.payload;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.isError = action.payload;
    });
    // for read:
    builder.addCase(getUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.isError = action.payload;
    });
    // delete
    builder.addCase(deleteUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.isLoading = false;
      const { id } = action.payload;
      state.user = state.user.filter((item) => item.id != id);
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.isError = action.payload;
    });
    // update
    builder.addCase(updateUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.isLoading = false;

      state.user = state.user.map((item) =>
        item.id == action.payload.id ? action.payload : item
      );
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.isError = action.payload;
    });
  },
});
export const { searchData } = UserApi.actions;

export default UserApi.reducer;
