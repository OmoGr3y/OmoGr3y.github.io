import React, { Component } from "react";

const posts = [
  {
    id: 2,
    text: "Lorem ipsum",
    user: {
      avatar: "/uploads/avatar1.png",
      username: "Test User"
    }
  },
  {
    id: 1,
    text: "Lorem ipsum",
    user: {
      avatar: "/uploads/avatar2.png",
      username: "Test User 2"
    }
  }
];

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = { posts, postContent: "" };
  }

  handleSubmit = e => {
    e.preventDefault();
    const newPost = {
      id: this.state.posts.length + 1,
      text: this.state.postContent,
      user: {
        avatar: "/uploads/avatar1.png",
        username: "fake user"
      }
    };
    this.setState(prevState => ({
      posts: [newPost, ...prevState.posts],
      postcontent: ""
    }));
    console.log("Handling submit");
  };

  handlePostChange = ({ target: { value, name } }) => {
    this.setState({
      postContent: value
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="feed">
            {posts.map((post, i) => (
              <div key={post.id} className="post">
                <div className="header">
                  <img src={post.user.avatar} />
                  <h2>{post.user.username}</h2>
                </div>
                <p className="content">{post.text}</p>
              </div>
            ))}
          </div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <textarea
                value={this.state.postContent}
                id=""
                cols="30"
                rows="10"
                onChange={this.handlePostChange}
                placeholder="Write your customer name"
              ></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Hello;
