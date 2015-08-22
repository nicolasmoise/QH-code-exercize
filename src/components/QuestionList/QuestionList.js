/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './QuestionList.css';
import withStyles from '../../decorators/withStyles';
import MultipleChoiceQuestion from '../MultipleChoiceQuestion';

@withStyles(styles)
class QuestionList {

  render() {

    return (
      <div className="QuestionList">
        <div className="QuestionList-container">
          {this.props.mcQuestions.map(function (question, index) {
            question.key = index;
            return (
              <MultipleChoiceQuestion key={question.key} question={question}/>
            );
          })}
        </div>
      </div>
    );
  }

}

export default QuestionList;