import React, {useEffect, useState} from 'react';
import {
    Page,
    Navbar, Icon, Button,
} from 'framework7-react';

import PostService from "@/API/PostService";
import PostList from "@/components/post/PostList";

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(PostService.getPosts());
    }, [])

    return (
        <Page name="home">
            <Navbar title="Travel App">
                <Button slot="right" panelOpen="right"><Icon f7='menu'/></Button>
            </Navbar>
            <PostList posts={posts}/>
        </Page>
    );
};

export default HomePage;