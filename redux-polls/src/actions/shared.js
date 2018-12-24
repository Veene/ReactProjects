import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receivePolls } from '../actions/polls'
import { setAuthedUser } from '../actions/authedUser'

const AUTHED_USERID = 'tylermcginnis'

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
        .then(( { users, polls }) => {
            dispatch(receiveUsers(users))
            dispatch(receivePolls(polls))
            dispatch(receivePolls(AUTHED_USERID))
        })
    }
}