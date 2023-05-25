import React from 'react'
import './Posts.css'
import {PostsData} from '../../Data/PostsData'
import Post from '../Post/Post'

const Posts = () => {
  return (
    <div className='Posts'>
        {PostsData.map((post, id) => <Post id={id} data={post}/>)
        }
    </div>
  ) 
}

export default Posts