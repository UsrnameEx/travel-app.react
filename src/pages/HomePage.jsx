import React, {useEffect, useState} from 'react';
import {Page, Navbar, Icon, Button,} from 'framework7-react';

import PostService from "@/api/PostService";
import PostList from "@/components/post/PostList";

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [countPages, setCountPages] = useState(1);

    useEffect(() => {
        getPosts();
    }, [page]);

    const getPosts = async () => {
        const response = await PostService.getPosts(page);

        if (response) {
            setPosts([...posts, ...response.items]);
            setCountPages(response.countPages);
        }
    }

    const loadMore = () => {
        if (page < countPages) {
            setPage(page + 1);
        }
    }

    return (
        <Page name="home" infinite infiniteDistance={50} onInfinite={loadMore}>
            <Navbar title="Travel App">
                <Button slot="right" panelOpen="right"><Icon f7='menu'/></Button>
            </Navbar>
            <PostList posts={posts}/>
        </Page>
    );
};

export default HomePage;