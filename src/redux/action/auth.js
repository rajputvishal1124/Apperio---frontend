import { createAsyncThunk } from "@reduxjs/toolkit";

export const signInUser = createAsyncThunk("signInUser", async (formData) => {
  try {
    const res = await fetch("http://localhost:4000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message);
    }
    const data = await res.json();
    localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    throw new Error(error);
  }
});

export const getUser = createAsyncThunk("getUser", async () => {
  try {
    const token = localStorage.getItem("token");

    console.log(token);
    const res = await fetch("http://localhost:4000/api/user/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
});

export const logOut = createAsyncThunk("logout", async () => {
  try {
    localStorage.removeItem("token");
    const res = await fetch("http://localhost:4000/api/user/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
});
