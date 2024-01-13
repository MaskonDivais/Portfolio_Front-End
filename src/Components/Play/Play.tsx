import React from 'react'
import module from '../Play/Play.module.css'
import ListTrek from './ListTrek'

const Play = () => {
  return (
    <div className={module.container}>
        <div className={module.fon}>
        <ListTrek/>
        </div>
    </div>
  )
}

export default Play