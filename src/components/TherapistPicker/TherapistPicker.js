/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './TherapistPicker.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class TherapistPicker extends React.Component {

  state = { therapistSlected : false };

  selectTherapist = function(e){
    e.preventDefault();
    this.setState({ therapistSlected : true})
  }

  render() {
    var therapistSelectionForm = (
      <form onSubmit={this.selectTherapist.bind(this)}>
      <h2>Please select a therapist: </h2>
      {this.props.therapists.map(function(therapist){
        return (
          <div className="Therapist-container" key={therapist.id}>
          <span className="TherapistName">{therapist.name}</span>
          <span className="TherapistPhone">{therapist.telephone}</span>
          <input type="radio" name="therapist" value={therapist.id} required/>
          </div>
        );
      })}
      <input type="submit" value="Choose Therapist"/>
      </form>
    );

    return (
      <div className="TherapistPicker">
      <div className="TherapistPicker-container">
      {this.state.therapistSlected === false ? therapistSelectionForm : (<div>Thank You for choosing a therapist</div>) }
      </div>
      </div>
    );
  }

}

export default TherapistPicker;
