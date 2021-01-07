import React from 'react';

import './game.less';
import Canvas from '../Canvas';

const GameTotal = (): JSX.Element => (
  <>
    <div className="score-right__timer">00:12</div>
    <div className="score-right__score">00001024</div>
    <div className="score-right__lifes">AAAA</div>
  </>
);

const GameOver = (): JSX.Element => (
  <>
    <div className="game__message">
      <h1 className="game__message--title">GAME OVER</h1>
      <h2 className="game__message--text">Поздравляем! Ваш счет</h2>
      <div className="game__message--score">1024</div>
    </div>
  </>
);

const GamePause = (): JSX.Element => (
  <>
    <div className="game__message">
      <h1 className="game__message--title">Пауза</h1>
      <h2 className="game__message--text">Для продолжения нажмите ENTER</h2>
    </div>
  </>
);

const Game = (): JSX.Element => (

  <div className="game">

    <div className="score-right">
      <GameTotal />
    </div>
    <Canvas />
  </div>

);

export default Game;
