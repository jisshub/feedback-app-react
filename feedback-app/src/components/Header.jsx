import React from 'react'

function Header({text, bgColor, textColor}) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor
  }
  return (
    <header style={headerStyles}
      >
      <div className='container'>
        <h1>{text}</h1>
      </div>
    </header>
  ) 
}

export default Header