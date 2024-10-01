import React from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
const Home = ({sidebar}) => {
  return (
    <div>
        <Sidebar sidebar={sidebar}/>
    </div>
  )
}
export default Home
