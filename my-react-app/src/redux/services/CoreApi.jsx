// CoreApi.jsx
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CoreApi = createApi({
  reducerPath: "DatabaseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "", 
    prepareHeaders: (headers) => {
      // Các cài đặt header nếu cần
      return headers;
    },
    credentials: "same-origin",
  }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => `user/${id}`,
    }),
    getAppointments: builder.query({
      query: () => "appointments",
    }),
    createAppointment: builder.mutation({
      query: (newAppointment) => ({
        url: "appointments",
        method: "POST",
        body: newAppointment,
      }),
    }),
    deleteAppointment: builder.mutation({
      query: (id) => ({
        url: `appointments/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetAppointmentsQuery,
  useCreateAppointmentMutation,
  useDeleteAppointmentMutation,
} = CoreApi;
