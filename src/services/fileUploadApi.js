import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const fileUploadApi = createApi({
  reducerPath: 'fileUploadApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://httpbin.org/' }),
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "multipart/form-data");
    return headers;
  },
  endpoints: (builder) => ({
    uploadFile: builder.mutation({
      query(formData) {
        return {
          url: 'post',
          method: 'POST',
          body: formData,
        };
      },
    }),
    
  }),
})

export const { useUploadFileMutation } = fileUploadApi;