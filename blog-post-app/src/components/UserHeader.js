import React from 'react'
import { connect } from 'react-redux'
// import { fetchUser } from '../actions'

class UserHeader extends React.Component {
  componentDidMount() {

  }
  render() {
    // console.log(this.props.users) HOLY COW
    const { user } = this.props
    if(!user) {
      return null
    }
    return (
      <div className="header">{user.name}</div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find((user) => user.id === ownProps.userId)
  }
}

export default connect(mapStateToProps)(UserHeader)