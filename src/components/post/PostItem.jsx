import React from 'react';
import {Card, CardContent, CardHeader, f7} from "framework7-react";
import FavoriteBookmark from "@/components/post/FavoriteBookmark";
import Like from "@/components/post/Like";

const PostItem = ({post}) => {
    const renderHtmlMarkup = () => {
        return {
            __html: post.description
        };
    }

    const navigateToPost = () => f7.views.main.router.navigate(`/posts/${post.id}`);

    return (
        <div>
            <div
                onClick={navigateToPost}
                className='card-wrapper'
            >
                <Card className='no-hairline'>
                    <div className='card-header'>
                        <div className='font-bold'>
                            {post.title}
                        </div>
                        <div className='display-flex'>
                            <Like stopPropagation isLiked={post.isLiked}/>
                            <FavoriteBookmark stopPropagation isFavorite={post.isFavorite}/>
                        </div>
                    </div>
                    <CardHeader
                        className='card-header-image no-hairline h-48 bg-cover bg-center align-items-flex-end'
                        style={{
                            backgroundImage: `url(${post.image})`,
                        }}>
                    </CardHeader>
                    <CardContent>
                        <p className="date text-color-gray">{post.date}</p>
                        <p dangerouslySetInnerHTML={renderHtmlMarkup()}></p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default PostItem;