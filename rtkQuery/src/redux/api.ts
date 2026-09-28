import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Post } from "../types/post"
import type { Comment } from "../types/comment"
import type { Profile } from "../types/profile"

export const myApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "posts",
    }),
    getComments: builder.query<Comment[], void>({
      query: () => "comments",
    }),
    getProfile: builder.query<Profile, void>({
      query: () => "profile",
    }),
  }),
})

export const {
  useGetPostsQuery,
  useGetCommentsQuery,
  useGetProfileQuery,
} = myApi