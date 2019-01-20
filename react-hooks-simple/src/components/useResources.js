import {useEffect, useState} from 'react'
import axios from 'axios'

const useResources = (resource) => {
  const [resources, setResources ] = useState([])

  // const fetchResource = async (resource) => {
  //   const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)

  //   setResources(response.data)
  // }

  //the accumulator style in useEffect (after comma) is the prevProp from componentDidUpdate, which can help stop loop re-renders 
  //if resource stays the same, wont update (GOTCHA-if you dont pass second array, will loop infinite)
  useEffect(() => {
    (async (resource) => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
      setResources(response.data)})(resource)
  }, [resource]) 

  return resources
}
export default useResources