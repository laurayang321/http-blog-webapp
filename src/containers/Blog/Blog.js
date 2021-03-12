import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: []
    }

    // then() takes a function as input. 
    // The function will get executed once the promise resolves - once the data from backend is returned.
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            // the function then receives a response object as an input 
            .then(response => {
                this.setState({posts: response.data}); // inside the then block is the right place
                // console.log(response);
            });
        // this.setState(); // if call setState immediately after get, the data wouldn't be fetched yet
    }

    render () {
        const posts = this.state.posts.map(post => {
            return <Post
                        key={post.id} 
                        title={post.title} />
        });

        return (
            <div>
                <section className='Posts'>
                    {posts}
                    {/* <Post />
                    <Post />
                    <Post /> */}
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