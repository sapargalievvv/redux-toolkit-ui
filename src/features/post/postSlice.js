import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//https://jsonplaceholder.typicode.com/posts

const initialState = {
    posts: [],
}

export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async (_, { rejectWithValue, dispatch }) => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
        dispatch(setPosts(res.data))
    }
)

export const deletePostById = createAsyncThunk(
    "posts/deletePostById",
    async (userId, { rejectWithValue, dispatch }) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        dispatch(deletePost(userId))
    })

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter(post => post.userId !== action.payload)
        }
    },
    extraReducers: {
        [getPosts.fulfilled]: () => console.log("fullfield"),
        [getPosts.pending]: () => console.log("pending"),
        [getPosts.rejected]: () => console.log("rejected"),
        [deletePostById.fulfilled]: () => console.log("deletePost: fullfield"),
        [deletePostById.pending]: () => console.log("deletePost: pending"),
        [deletePostById.rejected]: () => console.log("deletePost: rejected"),
    }
})

export const { setPosts, deletePost } = postSlice.actions
export default postSlice.reducer