import React, { PropTypes } from 'react';
import styles from './DepressionScreenerResult.css';
import withStyles from '../../decorators/withStyles';
import TherapistPicker from '../TherapistPicker';

@withStyles(styles)


class DepressionScreenerResult extends React.Component {

  static propTypes = {
    score: PropTypes.number.isRequired /* the score you obtained on the PHQ-9 test */
  }

  render() {

    var score = this.props.score;
    var severity;
    var mustSeeTherapist = false;
    var therapists = [
      {name: 'Dr. John Doe', tel:'514-333-3333', id: '1'},
      {name: 'Dr. Jane Dough', tel:'514-123-4567', id: '2'},
      {name: 'Dr. Juan Dios', tel:'514-123-9090', id: '3'},
    ]

    if (score < 5){
      severity = 'none';
    } else if (score < 10){
      severity = 'mild';
    } else if (score < 15){
      mustSeeTherapist = true;
      severity = 'moderate'
    } else if (score < 20){
      mustSeeTherapist = true;
      severity = 'moderately severe';
    } else {
      mustSeeTherapist = true;
      severity = 'severe';
    }

    return (
      <div className="DepressionScreenerResult">
        <div className="DepressionScreenerResult__container">
          <div>{'Result: '+ score + ' / 27'}</div>
          <div>
            <label>Depression Severity: </label>
            <span className="DepressionScreenerResult__severity">{severity}</span>
          </div>
          { mustSeeTherapist === true ? <TherapistPicker therapists={therapists} /> : null }
        </div>
      </div>
    );
  }

}

export default DepressionScreenerResult;
