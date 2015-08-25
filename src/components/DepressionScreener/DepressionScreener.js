
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

  state = {view: 'test', displayErrorMsg: false};

  score = 0;

  //Build the array of PH-Q9 question objects [ { text: .. , name: .. , answers: .. } ]

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
  ].map(function(text, i){

    var questionNumber = i +1;

    return {
      text: questionNumber + '. ' + text,
      name: 'PHQ-9-question-' + questionNumber,
      answers : [
        {text: 'Not at all', value: 0},
        {text: 'Several Days', value: 1},
        {text: 'More than half the days', value: 2},
        {text: 'Nearly every day', value: 3}
      ]
    };
  });

  calculateScore = function (e){
    e.preventDefault();
    var form = e.target;
    if (!e.target.checkValidity()) {
      //The form uses native form validation but some browsers (Safari) will still submit the form
      //Most browsers will not fire this handler if form is not valid
      this.setState({displayErrorMsg : true});
    } else {
      for (var i=1; i <= this.questions.length; i++){
        this.score += parseInt(form.elements['PHQ-9-question-' + i].value);
      }
      this.setState({view: 'results'});
    }
  }

  render() {
    var title = 'Patient Health Questionnaire (PHQ-9)';

    this.context.onSetTitle(title);

    var Questionaire = (
        <form name="DepressionScreener-form" onSubmit={this.calculateScore.bind(this)}>
          <h1>{title}</h1>
          <p>Over the last two weeks, how often have you been bothered by any of the following problems?</p>
          <div className="DepressionScreener-questionList">
            {this.questions.map(function (q) {
              return ( <MultipleChoiceQuestion key={q.name} text={q.text} answers={q.answers} required={true} name={q.name}/> );
            })}
          </div>
          <input type="submit" value="See your Score"/>
          {this.state.displayErrorMsg ? <div className='DepressionScreener-error'>Please fill out all the questions</div> : null }
        </form>
    );

    return (
      <div className="DepressionScreener">
        <div className="DepressionScreener-container">
          { this.state.view === 'test' ? Questionaire : null }
          { this.state.view === 'results' ? <DepressionScreenerResult score={this.score} /> : null}
        </div>
      </div>
    );
  }

}

export default DepressionScreener;
