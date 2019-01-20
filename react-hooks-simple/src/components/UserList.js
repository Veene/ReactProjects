import React from 'react'
import useResources from './useResources'

const UserList = () => {
  //ABOVE we just used the nasty syntax which makes useEffect DEFINE a function that gets immediately invoked with (resource)
  return (
    <ul>
      {useResources('users').map((record) => <li key={record.id}>{record.name}</li>)}
    </ul>
    
  )
}
export default UserList