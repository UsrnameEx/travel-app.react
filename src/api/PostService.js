import api from '@/api/endpoints';
import request from '@/api/request';
import axios from 'axios';
import endpoints from '@/api/endpoints';

export default class PostService {
    static async getPosts(page, perPage = 15) {
        const response = await axios.post(endpoints['post/getPosts'], {page, perPage});

        if (response?.data?.items && response?.data?.countPages) {
            return {
                items: response.data.items,
                countPages: response.data.countPages
            }
        }

        return false;
    }

    static async getPost(postId) {
        const response = await axios.post(endpoints['posts/getPost'], {postId});

        if (response?.data?.item) {
            return {
                item: response.data.item
            };
        }

        return false;
    }

    static likePost(id) {
        return {
            status: 'ok'
        };
    }
}