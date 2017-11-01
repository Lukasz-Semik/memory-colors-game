import React from 'react';

const Navigation = (props)=>{
  // console.log(props)
  return(
    <nav className="navigation">
      <div className="navigation__button" onClick={()=>{props.onClick(24)}}>Long</div>
      <div className="navigation__button" onClick={()=>{props.onClick(16)}}>Medium</div>
      <div className="navigation__button" onClick={()=>{props.onClick(12)}}>Short</div>
      <div className="navigation__button" onClick={()=>{props.onClick(props.tilesQty)}}>Reset</div>
    </nav>
  );
}

export default  Navigation;
