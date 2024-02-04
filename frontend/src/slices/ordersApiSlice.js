import { apiSlice } from "./apiSlice";
import { ORDERS_URL } from "../constants";

export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: ORDERS_URL,
        method: "POST",
        body: order,
      }),
    }),
    getOrderDetails: builder.query({
      query: (id) => `${ORDERS_URL}/${id}`,
    }),
    fetchOrders: builder.query({
      query: () => ORDERS_URL,
    }),
    keepUnusedDataFor: 5,
  }),
  overrideExisting: false,
});

export const {
  useCreateOrderMutation,
  useGetOrderDetailsQuery,
  useFetchOrdersQuery,
} = ordersApiSlice;
