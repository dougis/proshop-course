import { apiSlice } from "./apiSlice";
import { ORDERS_URL, PAYPAL_URL } from "../constants";

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
    payOrder: builder.mutation({
      query: (orderId, paymentResult) => ({
        url: `${ORDERS_URL}/${orderId}/pay/`,
        method: "PUT",
        body: { ...paymentResult },
      }),
    }),
    getPaypalClientId: builder.query({
      query: () => PAYPAL_URL,
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
  usePayOrderMutation,
  useGetPaypalClientIdQuery,
} = ordersApiSlice;
