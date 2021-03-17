import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {

    state = {
        posts: []
    }

    // then() takes a function as input. 
    // The function will get executed once the promise resolves - once the data from backend is returned.
    componentDidMount() {
        axios.get('/posts')
            // the function then receives a response object as an input 
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                })
                this.setState({posts: updatedPosts}); // inside the then block is the right place
                // console.log(response);
            } )
            .catch(error => {
                console.log(error);
                // this.setState({error: true});
            });
        // this.setState(); // if call setState immediately after get, the data wouldn't be fetched yet
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render () {

        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post
                            key={post.id} 
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)} />
            });
        }

        return (
            <section className='Posts'>
                {posts}
            </section>
        );
    }
}

export default Posts;

