import React from 'react';
import {Button, Card, CardContent, CardFooter, CardHeader, Icon, Link} from "framework7-react";

const PostItem = ({post}) => {
    const renderHtmlMarkup = () => {
        return {
            __html: post.description
        };
    }

    let favoriteIcon = 'bookmark';
    if (post.isFavorite) {
        favoriteIcon = 'bookmark_fill';
    }

    return (
        <div>
            <Card className='no-hairline'>
                <div className='card-header'>
                    <div className='font-bold'>
                        {post.title}
                    </div>
                    <Button className='favoriteButton' color='yellow'><Icon f7={favoriteIcon}/></Button>
                </div>
                <CardHeader
                    className='card-header-image no-hairline h-48 bg-cover bg-center align-items-flex-end'
                    style={{
                        backgroundImage: `url(${post.image})`,
                    }}>
                </CardHeader>
                <CardContent>
                    <p className="date">{post.date}</p>
                    <p dangerouslySetInnerHTML={renderHtmlMarkup()}>
                    </p>
                </CardContent>
                <CardFooter className='no-hairline'>
                    <Link href={`/posts/${post.id}`}>Читать далее</Link>
                    <Link>Like</Link>
                </CardFooter>
            </Card>
        </div>
    );
};

export default PostItem;