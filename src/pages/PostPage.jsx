import React, {useEffect, useState} from 'react';
import {
    Block,
    BlockTitle,
    Button,
    Card,
    List,
    ListInput,
    Navbar,
    Page,
    Swiper,
    SwiperSlide,
    f7, CardContent, CardFooter, Link, Icon, Panel, View,
} from "framework7-react";
import PostService from "@/API/PostService";

const PostPage = () => {
    const [post, setPost] = useState({});

    useEffect(() => {
        setPost(PostService.getPost(0));
    }, [])

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

    return (
        <Page name='PostPage'>
            <Navbar backLink='Back' title={post.title}>
                <div slot='left' className='display-flex align-items-center'>
                    <Button className='favoriteButton' color='yellow'><Icon f7='bookmark'/></Button>
                </div>
            </Navbar>
            <Block>
                <Swiper pagination navigation scrollbar>
                    {post.images?.map((image, index) =>
                        <SwiperSlide key={index}>
                            <div className='flex justify-center'>
                                <img onClick={() => {
                                    openImage(index)
                                }} className='swiperImg' src={image}
                                     alt='Мыс Капчик'/>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </Block>
            <Card>
                <CardContent>
                    {post.description}
                </CardContent>
                <CardFooter className="no-border">
                    <Link>Like (42)</Link>
                    <Link>Поделиться</Link>
                </CardFooter>
            </Card>

        </Page>
    );
};

export default PostPage;