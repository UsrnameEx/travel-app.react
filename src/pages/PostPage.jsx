import React, {useEffect, useState} from 'react';
import {
    Block,
    Card,
    Navbar,
    Page,
    Swiper,
    SwiperSlide,
    f7, CardContent,
} from "framework7-react";
import PostService from "@/api/PostService";
import FavoriteBookmark from "@/components/post/FavoriteBookmark";
import Like from "@/components/post/Like";

const PostPage = ({postId}) => {
    const [post, setPost] = useState({});

    useEffect(() => {
        getPost();
    }, [])

    const getPost = async () => {
        const response = await PostService.getPost(postId);

        if (response) {
            setPost(response.item);
        }
    }

    const openImage = (id) => {
        const imageBrowser = f7.photoBrowser.create({
            photos: [
                post.images[id]
            ],
            theme: 'dark',
            toolbar: false,
            popupCloseLinkText: 'X',
        });
        
        imageBrowser.open();
    }

    const renderHtmlMarkup = () => {
        return {
            __html: post.description
        };
    }

    return (
        <Page name='PostPage'>
            <Navbar backLink='Back' title={post.title}>
                <div slot='right' className='display-flex align-items-center margin-right'>
                    <Like stopPropagation isLiked={post.isLiked}/>
                    <FavoriteBookmark isFavorite={post.isFavorite}/>
                </div>
            </Navbar>
            <Block>
                <Swiper pagination navigation scrollbar>
                    {post.images?.map((image, index) =>
                        <SwiperSlide key={index}>
                            <div className='flex justify-center'>
                                <img
                                    onClick={() => {
                                        openImage(index)
                                    }}
                                    className='swiperImg'
                                    src={image}
                                    alt={post.title}
                                />
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </Block>
            <Card>
                <CardContent>
                    <p dangerouslySetInnerHTML={renderHtmlMarkup()}></p>
                </CardContent>
            </Card>
        </Page>
    );
};

export default PostPage;