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
          {
            that.props.required ?
            <input type="radio" name={that.props.name} value={answer.value} required />
            : <input type="radio" name={that.props.name} value={answer.value} />
          }
          <span className="MultipleChoiceAnswer-text">{answer.text}</span>
        </div>
      );
    });

    return (
      <div className="MultipleChoiceQuestion">
        <div className="MultipleChoiceQuestion-container">
          <div className="MultipleChoiceQuestion-prompt">{this.props.text}</div>
          <div className="MultipleChoiceAnswers-container">
            {answerNodes}
          </div>
        </div>
      </div>
    );
  }

}

export default MultipleChoiceQuestion;
