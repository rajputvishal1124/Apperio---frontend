import { createAsyncThunk } from "@reduxjs/toolkit";

export const newRegisterPatient = createAsyncThunk(
  "newRegisterPatient",
  async (formData) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:4000/api/patient/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(formData),
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
  }
);

export const getAllRegisteredPatient = createAsyncThunk(
  "getAllRegisteredPatient",
  async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:4000/api/patient/register", {
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
  }
);

export const newPatientAppointment = createAsyncThunk(
  "newPatientAppointment",
  async (formData) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:4000/api/patient/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(formData),
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
  }
);

export const getPatientAppointment = createAsyncThunk(
  "getPatientAppointment",
  async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        "http://localhost:4000/api/patient/appointment/today",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message);
      }
      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const updateVideoCallStatus = createAsyncThunk(
  "updateVideoCallStatus",
  async (formData) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        "http://localhost:4000/api/patient/videocall/status",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify(formData),
        }
      );
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message);
      }
      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const createPrescription = createAsyncThunk(
  "createPrescription",
  async (formData) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        "http://localhost:4000/api/patient/prescription",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify(formData),
        }
      );
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message);
      }
      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const searchPatient = createAsyncThunk(
  "searchPatient",
  async (formData) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:4000/api/patient/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(formData),
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
  }
);

export const getAppointedPatientById = createAsyncThunk(
  "getAppointedPatientById",
  async (formData) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `http://localhost:4000/api/patient/appointed/${formData}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message);
      }
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const getPatientPrescription = createAsyncThunk(
  "getPatientPrescription",
  async (formData) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `http://localhost:4000/api/patient/prescription-detail/${formData}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message);
      }
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const getPatientById = createAsyncThunk(
  "getPatientById",
  async (formData) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `http://localhost:4000/api/patient/registereddetail/${formData}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message);
      }
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
);
