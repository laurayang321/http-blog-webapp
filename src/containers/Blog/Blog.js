import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    // then() takes a function as input. 
    // The function will get executed once the promise resolves - once the data from backend is returned.
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/post')
            // the function then receives a response object as an input 
            .then(resonse => {
                console.log(response);
            });
    }

    render () {
        return (
            <div>
                <section className="Posts">
                    <Post />
                    <Post />
                    <Post />
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;