import React, { ReactElement } from "react";
import './style.css'

export const Header = (): ReactElement => {
  return (
    <div className="header">
      <nav>
        <a href="">Link 1</a>
        <a href="">Link 2</a>
        <a href="">Link 3</a>
      </nav>
    </div>
  )
}