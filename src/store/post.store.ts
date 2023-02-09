import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./app.store";

export interface Post {
    name: string;
}

export interface PostStoreState {
    allPost: Post[];
}

const initialState: PostStoreState = {
    allPost: [],
}

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        resetPosts: (state) => {
            state.allPost = [];
        },
        setPosts: (state, action: PayloadAction<Post[]>) => {
            state.allPost = action.payload;
        }
    }
});

export const { resetPosts, setPosts } = postSlice.actions;

export const selectAllPosts = (state: RootState) => state.posts.allPost;

export default postSlice.reducer;
