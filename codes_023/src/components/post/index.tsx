import React, { ReactElement } from 'react';
import './style.css'

interface Props {
  title: string,
  qtyLinks: number,
  content: string,
  tags: string[]
}

export const Post = (
  { title, content, qtyLinks, tags }: Props
): ReactElement => {
  return (
    <div className='post'>
      <h3 className='post-title'>{title}</h3>
      <p className='post-content'>{content}</p>
      <p className='post-links'>{qtyLinks}</p>
      <div className='post-tags'>
        {tags.map(tag =>
          <span>#{tag} </span>
        )}
      </div>
    </div>
  )
}