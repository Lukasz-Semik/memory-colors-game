import React, { Component } from 'react';

class MainDisplay extends Component {
  createTiles(){
    let mainClass = 'main';
    let tileRWDClass = 'main__tile';
    if(this.props.level === 16) {mainClass = 'main main--medium'; tileRWDClass='main__tile main__tile--medium';}
    if(this.props.level === 12) {mainClass = 'main main--short'; tileRWDClass='main__tile main__tile--short';}

    let tiles = new Array(this.props.tiles.length).fill(1);
    const readyTiles = this.props.tiles;
    return(
      <div className={mainClass}>
        {
          tiles.map((tile,i)=>{
            if(readyTiles[0].colorClass !== '' && readyTiles[i].hit === true){
              const newClass = `${tileRWDClass} ${readyTiles[i].colorClass} main__tile--shadow`;
              return(<div className = {newClass} key={i}></div>);
            }else{
              return(<div className={tileRWDClass} key={i} onClick = {()=>this.props.onClick(i)} ></div>);
            }
          })}
        </div>
      );
    }

  render(){
    return(
      <div className="main-display-container">
          {this.createTiles()}
      </div>
    );
  }
}

export default MainDisplay;
