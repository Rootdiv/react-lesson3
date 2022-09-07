import React from 'react';
import style from './ClassComponent.module.css';

import PropTypes from 'prop-types';

const initialState = {
  result: 'Результат',
  userNumber: '',
  count: 0,
  isEnd: false,
};

export class ClassComponent extends React.Component {
  state = {
    ...initialState,
    randomNumber: Math.floor(Math.random() * this.props.max - this.props.min) + this.props.min,
  };

  handelSubmit = event => {
    event.preventDefault();
    this.setState(state => ({
      count: state.count + 1,
    }));
    this.setState(state => {
      if (!state.userNumber) {
        return {
          result: 'Введите число',
        };
      }
      if (state.userNumber > state.randomNumber) {
        return {
          result: `${state.userNumber} больше загаданного`,
        };
      }
      if (state.userNumber < state.randomNumber) {
        return {
          result: `${state.userNumber} меньше загаданного`,
        };
      }

      return {
        result: `Вы угадали, загаданное число ${state.userNumber}, попыток ${state.count}`,
        isEnd: true,
      };
    });
    this.setState({
      userNumber: '',
    });
    console.log(this.state.randomNumber);
  };

  handelChange = event => {
    this.setState({
      userNumber: event.target.value,
    });
  };

  restartGame = () => {
    this.setState({
      ...initialState,
      randomNumber: Math.floor(Math.random() * this.props.max - this.props.min) + this.props.min,
    });
  };

  render() {
    return (
      <div className={style.game}>
        <p className={style.result}>{this.state.result}</p>
        <form className={style.form} onSubmit={this.handelSubmit}>
          <label className={style.label} htmlFor="user_number">
            Угадай число
          </label>
          <input
            className={style.input}
            type="number"
            id="user_number"
            onChange={this.handelChange}
            value={this.state.userNumber}
          />
          <button className={style.btn}>Угадать</button>
          {this.state.isEnd && (
            <button className={style.btn} onClick={this.restartGame}>
              Сыграть ещё
            </button>
          )}
        </form>
      </div>
    );
  }
}

ClassComponent.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};
