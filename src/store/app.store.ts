import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./post.store";

export const store = configureStore({
    reducer: {
        posts: postReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
