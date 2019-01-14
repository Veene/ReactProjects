import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // console.log('about to fetch posts')
  await dispatch(fetchPosts())
  // console.log('fetched posts')
  //BELOW - getState().posts was generating the full 100 posts. With lodash, we mapped through the 100 and only pulled the userId, and then with uniq we grabbed unique values only, so the 1-10, instead of the 10x10(each author had 10 posts)
  const userIds = _.uniq(_.map(getState().posts, 'userId'))
  // console.log(userIds)
  userIds.forEach(id => dispatch(fetchUser(id)))
}

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts')

    // return {
    //   type: "FETCH_POSTS",
    //   payload: response
    // }
    dispatch({ type: "FETCH_POSTS", payload: response.data})
  }

  export const fetchUser = (id) => async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`)

    dispatch({ type: 'FETCH_USER', payload: response.data})
  }
    

  // export const fetchUser = (id) => (dispatch) => {
  //   _fetchUser(id, dispatch)
  // }
  // const _fetchUser = _.memoize( async (id, dispatch) => {
  //   const response = await jsonPlaceholder.get(`/users/${id}`)

  //   dispatch({ type: 'FETCH_USER', payload: response.data})
  // })

