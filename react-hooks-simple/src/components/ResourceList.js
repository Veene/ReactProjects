import React from 'react'
import useResources from './useResources'

const ResourceList = ({ resource }) => {
  //ABOVE we just used the nasty syntax which makes useEffect DEFINE a function that gets immediately invoked with (resource)
  return (
    <ul>
      {resource}
      {useResources(resource).map((record) => <li key={record.id}>{record.title}</li>)}
    </ul>
    
  )
}
export default ResourceList