import React, { Component } from "react";
import './Hangman.css';
import { Randomkelime } from "./Kelimeler.js";



import step0 from "./images/0.jpg";
import step1 from "./images/1.jpg";
import step2 from "./images/2.jpg";
import step3 from "./images/3.jpg";
import step4 from "./images/4.jpg";
import step5 from "./images/5.jpg";
import step6 from "./images/6.jpg";




class Hangman extends Component {
  static defaultProps = {
    maxwrong: 6,
    images: [step0, step1, step2, step3, step4, step5, step6]
  }
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      mistake: 0,
      guessed: new Set([]),
      answer: Randomkelime()
    }
  }

  handleGuess = e => {
    let letter = e.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(letter),
      mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1)
    }));
  }

  guessedWord() {
    return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
  }
  handleSubmit(event) {
    if (this.state.value === this.state.answer) {

      window.alert("Kazandın :" + this.state.answer)
      this.resetButton();


    } else {
      alert("Yanlış tahmin")

    }
    event.preventDefault();
  }


  generateButtons() {
    return "abcçdefgğhıijklmnoöpqrsştuüvwxyz".split("").map(letter => (
      <button
        class='btn btn-lg btn-primary m-2'
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }

  resetButton = () => {
    this.setState({
      mistake: 0,
      guessed: new Set([]),
      answer: Randomkelime(),
      value: "",
    });
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }



  render() {
    const gameOver = this.state.mistake >= this.props.maxwrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameStat = this.generateButtons();

    if (isWinner) {
      gameStat = "Kazandın"
    }

    if (gameOver) {
      gameStat = "Kaybettin"
    }

    return (
      <div className="Hangman container">

        <h1 className='text-center' >Adam Asmaca</h1>
        <div className="float-right">Yanlış Tahminler : {this.state.mistake} / {this.props.maxwrong}</div>
        <div className="text-center">
          <img src={this.props.images[this.state.mistake]} alt="" />
        </div>
        <div className="text-center">
          <p>Meyveleri Tahmin Ediniz</p>
          <form id="form" onSubmit={this.handleSubmit}>
            <input
              className="Tahmin-input"
              placeholder="Tahmin Kutusu"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <input className="btn btn-info" type="submit" value="Tahmin Et" />
          </form>

          <p>
            {!gameOver ? this.guessedWord() : this.state.answer}
          </p>
          <p>{gameStat}</p>
          <button className='btn btn-info' onClick={this.resetButton}>Yeniden Başlat</button>
        </div>
      </div>
    )
  }
}

export default Hangman;