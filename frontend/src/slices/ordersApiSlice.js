import { apiSlice } from "./apiSlice";
import { ORDERS_URL } from "../constants";

export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: ORDERS_URL,
        method: "POST",
        body: { ...order },
      }),
    }),
    fetchOrders: builder.query({
      query: () => ORDERS_URL,
    }),
  }),
  overrideExisting: false,
});

export const { useCreateOrderMutation, useFetchOrdersQuery } = ordersApiSlice;
