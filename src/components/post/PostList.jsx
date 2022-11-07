import React from 'react';
import PostItem from "@/components/post/PostItem";
import {Block} from "framework7-react";

const PostList = ({posts}) => {
    return (
        <div>
            {
                posts
                    ? posts.map(post =>
                        <PostItem key={post.id} post={post}/>
                    )
                    : <Block>Нет постов</Block>
            }
        </div>
    );
};

export default PostList;