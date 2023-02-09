import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts, selectAllPosts } from "../store/post.store";

const PostFeed: React.FC = () => {
    const posts = useSelector(selectAllPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        const action = setPosts([ {name: "hello"}]);
        dispatch(action);
    }, []);

    return (
        <div>
            <p>All Posts</p>
            { posts.map(p => <p>{p.name}</p>) }
        </div>
    );
}

export default PostFeed;
