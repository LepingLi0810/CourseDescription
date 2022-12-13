import React from 'react'

import DOMPurify from 'dompurify'
import ReactHtmlParser from 'react-html-parser'
import Avatar from 'react-avatar'
import LikeButton from './Like'
import FollowUp from './Follow'
import styles from './post.module.css'

const Post = ({ profileImage, name, content, date, time }) => {
  const clean = DOMPurify.sanitize(content)
  const followups = [{
    name: "Unkown",
    content: "<p>I doubt!</p>",
    },
    {
      name: "Unkown",
      content: "<p>I agree!</p>",
    }
  ];
  const followUps= followups.map((follow) => (
    <FollowUp name={follow.name} content={follow.content}/>
  ));

  return (
    <div className='panel panel-default p-3'>
      <div className='panel-body'>
        <div className='row'>
          <div className='col-2 pr-0'>
            <Avatar
              className='float-right'
              size={50}
              name={name}
              src={profileImage}
            />
          </div>
          <div className='col-7'>
            <p className={`mb-1 ${styles.name}`}>{name}</p>
            <div className={styles.text}>{ReactHtmlParser(clean)}</div>
          </div>
          <div className='col-3'>
            <p className={`mb-0 text-right ${styles.dateTime}`}>{date}</p>
            <p className={`mb-0 text-right ${styles.dateTime}`}>{time}</p>
          </div>
          <div className='col-2' style={{marginTop: 10}}>
            <LikeButton/>
          </div>
        </div>
        <div className='col'>
          {followUps}
        </div>
      </div>
    </div>
  )
}

export default Post
