import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts, fetchUser, fetchPostsAndUsers } from '../actions'
import UserHeader from './UserHeader'


class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers()
  }
  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="huge middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              
            </div>
            <UserHeader userId={post.userId}/>
          </div>
          
        </div>
      )
    })
  }
  render() {
    return (
      <div className="ui relaxed divided list">
        Post List:
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  
  return {
    posts: state.posts,
    users: state.users
  }
}

export default connect(mapStateToProps, { fetchPosts: fetchPosts, fetchUser: fetchUser, fetchPostsAndUsers })(PostList)