import React, { useEffect } from "react";
import { useParams } from "react-router";

const PostDetails: React.FC = () => {
    const { postId } = useParams();
    
    useEffect(() => {
        console.log(postId);
    }, [ postId ]);

    return (
        <div>
            <p>Post Details</p>
        </div>
    );
}

export default PostDetails;
