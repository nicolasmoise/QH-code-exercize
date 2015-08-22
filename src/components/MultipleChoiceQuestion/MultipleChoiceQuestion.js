/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './MultipleChoiceQuestion.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class MultipleChoiceQuestion {

  render() {
    var that = this;

    var answerNodes = this.props.question.answers.map(function(answer, index){
      var name = 'question'+ that.props.question.key;
      var score = answer.score;
      return (
        <div key={index}>
          <input type="radio" name={name} value={score} />
          <span>{answer.text}</span>
        </div>
      );
    });

    return (
      <div className="MultipleChoiceQuestion">
        <div className="MultipleChoiceQuestion-container">
          <p>{this.props.question.text}</p>
          {answerNodes}
        </div>
      </div>
    );
  }

}

export default MultipleChoiceQuestion;