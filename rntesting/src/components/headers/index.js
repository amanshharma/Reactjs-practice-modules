import React from 'react';

const Header = (props) => (
  <header className={props.className}>
    <div className='brand' data-test='brand'>
      Brand Name
    </div>
    <div className='subtitle' data-test='subtitle'>
      {' '} Subtitle
    </div>
  </header>
)

export default Header;