import React, { Component } from 'react';

class Header extends Component {
  constructor(props){
    super(props);

    this.state ={
      currentRound: this.props.currentRound,
      roundAnimation: '',
      playerPoints: this.props.playerPoints,
      pointAnimation: ''
    }
  }

  runRoundAnimation(){
    if(this.state.currentRound !== this.props.currentRound){
      const currentRound = this.props.currentRound;
      const roundAnimation = 'stat-animation';
      this.setState({
        currentRound, roundAnimation
      })
    }else if(this.state.roundAnimation !== ''){
      setTimeout(()=>{
        const roundAnimation = '';
        this.setState({
          roundAnimation
        })
      },2000)
    }
  }
  runPointAnimation(){
    if(this.state.playerPoints !== this.props.playerPoints){
      const playerPoints = this.props.playerPoints;
      const pointAnimation = 'point-animation';
      this.setState({
        playerPoints, pointAnimation
      })
    }else if(this.state.pointAnimation !== ''){
      setTimeout(()=>{
        const pointAnimation = '';
        this.setState({
          pointAnimation
        })
      },2000)
    }
  }
  componentDidUpdate(){
    if(this.props.playerPoints<this.props.maxPoints){
      this.runRoundAnimation();
      this.runPointAnimation();
    }
  }

  first0(num){
    return num < 10 ? '0'+num : num;
  }

  render(){
    if(this.props.playerPoints>=this.props.maxPoints){
      const results = Math.round(this.props.maxPoints*100/this.props.currentRound);
      const miliSeconds = Date.now() - this.props.gameStart;
      const seconds = Math.floor((miliSeconds/1000)%60);
      const minutes = Math.floor((miliSeconds/1000/60)%60);
      console.log('End time: '+miliSeconds);
      return(
        <header>
          <span className="results">
            {results}% - {this.first0(minutes)}:{this.first0(seconds)} s
          </span>
        </header>
      );
    }else{
      const roundAnimation = `pos-abs ${this.state.roundAnimation}`
      const pointAnimation = `pos-abs ${this.state.pointAnimation}`
      return(
        <header>
          Rounds: <span className={roundAnimation}> {this.props.currentRound} </span>&nbsp; &nbsp;
          -- &nbsp;Hits:&nbsp; <span className={pointAnimation}>{this.props.playerPoints} </span>
        </header>
      );
    }
  }
}

export default Header;
