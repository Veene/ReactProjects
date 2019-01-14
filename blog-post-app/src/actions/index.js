// import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // console.log('about to fetch posts')
  await dispatch(fetchPosts())
  // console.log('fetched posts')
  console.log(getState().posts)
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

