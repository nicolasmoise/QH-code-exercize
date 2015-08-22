/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

'use strict';

import React, { PropTypes } from 'react';
import styles from './DepressionScreener.css';
import withStyles from '../../decorators/withStyles';
import MultipleChoiceQuestion from '../MultipleChoiceQuestion';
import DepressionScreenerResult from '../DepressionScreenerResult';

@withStyles(styles)


class DepressionScreener extends React.Component {

  

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  state = {
    view: 'test'
  };

  score = 0;

  questions = [
    'Little interest or pleasure in doing things?',
    'Feeling down, depressed, or hopeless?',
    'Trouble falling or staying asleep, or sleeping too much?',
    'Feeling tired or having little energy?',
    'Poor appetite or overeating?',
    'Feeling bad about yourself - or that you are a failure or have let yourself or your family down?',
    'Trouble concentrating on things, such as reading the newspaper or watching television?',
    'Moving or speaking so slowly that other people could have noticed?\nOr the opposite - being so fidgety or restless that you have been moving around a lot more than usual?',
    'Thoughts that you would be better off dead, or of hurting yourself in some way?'
  ].map(function(text){
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

  calculateScore = function (e){
    e.preventDefault();
    var form = e.target;
    for (var i=0; i<this.questions.length; i++){
      this.score += parseInt(form.elements['question'+i].value);
    }
    this.setState({view: 'results'});
  }

  render() {
    var title = 'Patient Health Questionnaire (PHQ-9)';

    this.context.onSetTitle(title);

    var Questionaire = (
      <div className="DepressionScreener-container">
        <form name="DepressionScreenerForm" onSubmit={this.calculateScore.bind(this)}>
          <h1>{title}</h1>
          <p>'Over the last two weeks, how often have you been bothered by any of the following problems?'</p>
          
          {this.questions.map(function (question, index) {
            question.key = index;

            return (
              <MultipleChoiceQuestion key={question.key} question={question}/>
            );

          })}

          <input type="submit" value="See your Score"/>
        </form>
      </div>
    );

    return (
      <div className="DepressionScreener">
        { this.state.view === 'test' ? Questionaire : null }
        { this.state.view === 'results' ? <DepressionScreenerResult score={this.score} /> : null}
      </div>
    );
  }

}

export default DepressionScreener;
