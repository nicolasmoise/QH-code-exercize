/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './DepressionScreener.css';
import withStyles from '../../decorators/withStyles';
import QuestionList from '../QuestionList';

@withStyles(styles)

class PHQ9_Question extends MultipleChoiceQuestion {
    
    constructor(prompt){
      
      var answers = [
        ['Not at all', 0]
        ['Several Days', 1]
        ['More than half the days', 2]
        ['Nearly every day', 3]
      ];

      super(prompt, answers);
    }
}

class MultipleChoiceAnswer {

  constructor(answer, score){
    this.text = new String(answer.text);
    this.score = new Number(answer.score);
    this.required = new Boolean(required) || true;
    this.selected = false
  }
}

class MultipleChoiceQuestion {

  constructor(prompt, answers){
    this.prompt = prompt;
    this.answers = Array.prototype.map.apply(answers, multipleChoiceAnswer);
  }

}

class DepressionScreener {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'Patient Health Questionnaire (PHQ-9)';
    let prompt = 'Over the last two weeks, how often have you been bothered by any of the following problems?'
    let questions = [
      'Little interest or pleasure in doing things?',
      'Feeling down, depressed, or hopeless?'
    ].map(PHQ9_Question);

    this.context.onSetTitle(title);
    return (
      <div className="DepressionScreener">
        <div className="DepressionScreener-container">
          <h1>{title}</h1>
          <p>{prompt}</p>
          <QuestionList questions={questions} />
        </div>
      </div>
    );
  }

}

export default DepressionScreener;
