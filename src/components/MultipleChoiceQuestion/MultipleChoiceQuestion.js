/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './MultipleChoiceQuestion.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class MultipleChoiceQuestion {

  static propTypes = {
    text: PropTypes.string.isRequired, /* the prompt of your question */
    name: PropTypes.string.isRequired, /* the name of your question to indentify it in the form */
    answers: React.PropTypes.array.isRequired,  /* an array of {text: .. , value: .. } answer objects */
    required: React.PropTypes.bool  /* wether or not the question is required */
  };

  render() {
    var that = this;

    var answerNodes = this.props.answers.map(function(answer, index){

      return (
        <div key={index}>
          <input type="radio" name={that.props.name} value={answer.value} required={that.props.required}/>
          <span>{answer.text}</span>
        </div>
      );
    });

    return (
      <div className="MultipleChoiceQuestion">
        <div className="MultipleChoiceQuestion-container">
          <p>{this.props.text}</p>
          {answerNodes}
        </div>
      </div>
    );
  }

}

export default MultipleChoiceQuestion;
