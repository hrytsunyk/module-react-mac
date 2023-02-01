import {Component} from "react";




class PostsClassComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {posts:[], comments:[]};

    }


    componentDidMount() {

        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(resp => resp.json())
            .then(resp => this.setState({posts: resp}))


        fetch(`https://jsonplaceholder.typicode.com/comments`)
            .then(resp => resp.json())
            .then(resp => this.setState({comments: resp}))

    }


    render() {

        return (

            <div>

                <div>
                    <h2>Posts:</h2>
                    {this.state.posts.map(post => <div>{post.id}. {post.title}</div>)}

                    <hr/>

                    <h2>Comments:</h2>
                    {this.state.comments.map(comment => <div>{comment.id}. {comment.name}</div>)}
                </div>

            </div>
        )

    }

}



export {
    PostsClassComponent
}
