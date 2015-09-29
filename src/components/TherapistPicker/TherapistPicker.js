import React, { PropTypes } from 'react';
import styles from './TherapistPicker.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class TherapistPicker extends React.Component {

  static propTypes = {
    therapists: React.PropTypes.array.isRequired,  /* an array of {name: .. , telephone: .. , id: .. } therapist objects */
  };

  state = { therapistSlected : false };

  selectTherapist = function(e){
    e.preventDefault();
    this.setState({ therapistSlected : true})
  }

  render() {
    var therapistSelectionForm = (
      <form onSubmit={this.selectTherapist.bind(this)}>
        <div className="TherapistPicker__prompt">Please select a therapist: </div>
        <div className="TherapistPicker__list">
        {this.props.therapists.map(function(therapist){
          return (
            <div className="Therapist__container" key={therapist.id}>
              <span className="Therapist__name">{therapist.name}</span>
              <span className="Therapist__tel">{therapist.tel}</span>
              <input className="Therapist__selector" type="radio" name="therapist" value={therapist.id} required/>
            </div>
          );
        })}
        </div>
        <input type="submit" value="Choose Therapist"/>
      </form>
    );

    return (
      <div className="TherapistPicker">
        <div className="TherapistPicker__container">
          {this.state.therapistSlected === false ? therapistSelectionForm : (<div>Thank You for choosing a therapist</div>) }
        </div>
      </div>
    );
  }

}

export default TherapistPicker;
