import React, { ReactElement } from 'react';
import './style.css'

export enum Role {
  admin = 'Administrador',
  user = 'Usuário'
}

interface Props {
  title: string,
  qtyLinks: number,
  content: string,
  tags: string[],
  role: Role
}

export const Post = (
  { title, content, qtyLinks, tags, role }: Props
): ReactElement => {
  return (
    <div className='post'>
      <h2>{title}</h2>
      <p>O usuário que postou tem como papel: {role}</p>
      <p>{content}</p>
      <p>Links: {qtyLinks}</p>

      <div>
        {tags.map((tag, index) =>
          <span key={index}>#{tag} </span>
        )}
      </div>
    </div>
  )
}