import { API } from "@/lib/constant";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: API,
    }),
    endpoints: (builder) => ({
        getContractName: builder.query({
            query: () => "",
        }),
    }),
});

export const { useGetContractNameQuery } = api;
