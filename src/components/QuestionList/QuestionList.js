/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './QuestionList.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class QuestionList {

  render() {
    var QuestionNodes = this.props.questions.map(function (question) {
      return (
        <div>{question}</div>
      );
    });

    return (
      <div className="QuestionList">
        <div className="QuestionList-container">
          {QuestionNodes}
        </div>
      </div>
    );
  }

}

export default QuestionList;