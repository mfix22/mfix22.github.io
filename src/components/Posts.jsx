import React from 'react'
import POSTS from '../../assets/posts'

const postOrder = [
  'alchemy',
  'slippery',
  'ram',
  'purple',
  'airbnb',
  'track'
]

const Posts = () => (
  <div className='writing'>
    <u className='writing__link header'>posts</u>
    {
      postOrder
        .map(key => POSTS[key])
        .map(post => (
          <a
            target='_blank'
            className='writing__link'
            href={post.link}
            key={post.header}
          >
            {post.header}
          </a>
        ))
    }
    <a target='_blank' className='writing__link' href='https://medium.com/@fixitup2'>
      ...
    </a>
  </div>
)

module.exports = Posts
