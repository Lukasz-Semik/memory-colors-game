import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import MainDisplay from './MainDisplay';
import Navigation from './Navigation';

import { prepareTilesColors } from '../functions/functions';

class App extends Component {
  constructor(){
    super();

    this.state={
      tiles: [{
          Id: null,
          colorClass: '',
          hit: false
        }],
        firstClick: false,
        secondClick: false,
        firstTileClickedColor: '',
        secondTileClickedColor: '',
        firstTileClickedId: null,
        secondTileClickedId: null,
        tilesQty: 24,
        playerPoints: 0,
        currentRound: 0,
        gameStart: null
      };
      this.resetState = this.state;
    }


  handleClick(i){
    if(!this.state.firstClick){
      let tiles= this.state.tiles;
      tiles[i].hit = true;
      const firstClick = true;
      const firstTileClickedColor = tiles[i].colorClass;
      const firstTileClickedId = i;
      this.setState({
        tiles,
        firstClick,
        firstTileClickedColor,
        firstTileClickedId
      })
    }else if(!this.state.secondClick){

      let tiles= this.state.tiles;
      tiles[i].hit = true;
      const secondClick =  true;
      const secondTileClickedColor = tiles[i].colorClass;
      const secondTileClickedId = i;
      const currentRound = (this.state.firstTileClickedColor === secondTileClickedColor) ?
      (this.state.currentRound + 1) : this.state.currentRound;
      const playerPoints = (this.state.firstTileClickedColor === secondTileClickedColor) ?
      (this.state.playerPoints + 1) : this.state.playerPoints;
      this.setState({
        tiles,
        secondClick,
        secondTileClickedColor,
        secondTileClickedId,
        currentRound,
        playerPoints
      })
      setTimeout(()=>{

        const {firstTileClickedColor, secondTileClickedColor, firstClick,
          secondClick, firstTileClickedId, secondTileClickedId } = this.resetState;

        if(this.state.firstTileClickedColor === this.state.secondTileClickedColor){
          let tiles = this.state.tiles;
          this.setState({tiles, firstTileClickedColor, secondTileClickedColor,
            firstClick, secondClick, firstTileClickedId, secondTileClickedId})
        }else{
          const currentRound = this.state.currentRound + 1;
          let tiles = this.state.tiles;
          tiles[this.state.firstTileClickedId].hit = false;
          tiles[this.state.secondTileClickedId].hit = false;
          this.setState({tiles, firstTileClickedColor, secondTileClickedColor,
            firstClick, secondClick, firstTileClickedId, secondTileClickedId,
          currentRound})
        }
      },1200)
    }
  }

  gameReset(tilesQty){

    const {firstTileClickedColor, secondTileClickedColor, firstClick,
      secondClick, firstTileClickedId, secondTileClickedId, playerPoints,
      currentRound} = this.resetState;
    const gameStart = Date.now();
    const colors = prepareTilesColors(tilesQty);
    const tiles = colors.map((color, i)=>{
      const tile = {
        id: i,
        colorClass: color,
        hit: false
      }
      return tile;
    })
    this.setState({
      tiles, firstTileClickedColor, secondTileClickedColor, firstClick,
      secondClick, firstTileClickedId, secondTileClickedId,
      playerPoints, tilesQty, currentRound, gameStart
    })
  }

  componentDidMount(){
    this.gameReset(24);
  }

  render(){
    //console.log(this.state.gameStart);
    return(
      <div>
        <Header currentRound={this.state.currentRound}
          playerPoints={this.state.playerPoints}
          maxPoints = {this.state.tiles.length/2}
          gameStart = {this.state.gameStart}/>
        <Navigation onClick = {(rounds)=>{this.gameReset(rounds)}}
          tilesQty={this.state.tilesQty}/>
        <MainDisplay tiles = {this.state.tiles}
          onClick = {(i)=>this.handleClick(i)}
          level = {this.state.tilesQty}/>
        <Footer />
        <div className="background"></div>
      </div>
    );
  }
}

export default App;
