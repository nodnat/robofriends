import React from 'react';

const Scroll = (props) => {
  // console.log(props);
  return(
    <div style={{ overflow:'scroll', scrollbarWidth:'none', height:'520px', border:'0px solid black' }}>
      {props.children}
    </div>
  );
}

export default Scroll;