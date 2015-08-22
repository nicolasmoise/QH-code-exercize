/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './DepressionScreener.css';
import withStyles from '../../decorators/withStyles';
import QuestionList from '../QuestionList';

@withStyles(styles)


class DepressionScreener {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'Patient Health Questionnaire (PHQ-9)';
    let generalPrompt = 'Over the last two weeks, how often have you been bothered by any of the following problems?'
    
    let questionTexts = [
      'Little interest or pleasure in doing things?',
      'Feeling down, depressed, or hopeless?',
      'Trouble falling or staying asleep, or sleeping too much?',
      'Feeling tired or having little energy?',
      'Poor appetite or overeating?',
      'Feeling bad about yourself - or that you are a failure or have let yourself or your family down?',
      'Trouble concentrating on things, such as reading the newspaper or watching television?',
      'Moving or speaking so slowly that other people could have noticed?\nOr the opposite - being so fidgety or restless that you have been moving around a lot more than usual?',
      'Thoughts that you would be better off dead, or of hurting yourself in some way?'
    ];

    let questions = questionTexts.map(function(text){
      return {
        text: text,
        answers : [        
          {text: 'Not at all', score: 0},
          {text: 'Several Days', score: 1},
          {text: 'More than half the days', score: 2},
          {text: 'Nearly every day', score: 3}
        ]
      };
    });

    this.context.onSetTitle(title);

    return (
      <div className="DepressionScreener">
        <div className="DepressionScreener-container">
          <form>
            <h1>{title}</h1>
            <p>{generalPrompt}</p>
            <QuestionList mcQuestions={questions} />
            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    );
  }

}

export default DepressionScreener;
