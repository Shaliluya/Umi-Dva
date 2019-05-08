import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import initialData from '../../InitialData/initial-data';

class PacientEdit extends Component {
  constructor() {
    super();
    this.state = {
      showSuccessModal: false,
      pacients: [],
    };
  }

  componentWillMount() {
    const { pacients } = initialData;

    this.setState({
      pacients,
    });
  }

  handleOnSubmit = (e) => {
    e.preventDefault();

    this.showSuccessModal();
  };

  showSuccessModal = () => {
    this.setState({
      showSuccessModal: true,
    });
  };

  hideSuccessModal = () => {
    this.setState({
      showSuccessModal: false,
    });
  };

  render() {
    const { match } = this.props;
    const { userId } = match.params;
    const { pacients } = this.state;

    const { showSuccessModal } = this.state;
    const showSuccessModalClass = showSuccessModal ? 'showModal' : 'hideModal';

    const {
      username, email, name, age, gender,
    } = pacients[userId];

    return (
      <div className="row">
        <div className="column">
          <div className="row">
            <div className="column">
              <div className="headingGroup">
                <hr />
                <h2 className="heading">Edit Pacient Details</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <form onSubmit={this.handleOnSubmit} className="pacientEditDetailsWrap">
                <label htmlFor="nameField">
                  Name
                  <input
                    id="nameField"
                    name="nameField"
                    type="text"
                    placeholder="Name"
                    defaultValue={name}
                    required
                  />
                </label>
                <label htmlFor="ageField">
                  Age
                  <input
                    id="ageField"
                    name="ageField"
                    type="text"
                    placeholder="Age"
                    defaultValue={age}
                    required
                  />
                </label>
                <label htmlFor="genderField">
                  Gender
                  <div className="checkboxGroup">
                    <label htmlFor="genderMale" className="label-inline">
                      <input
                        type="radio"
                        name="gender"
                        id="genderMale"
                        value="genderMale"
                        defaultChecked={gender === 'male'}
                      />
                      Male
                    </label>
                    <label htmlFor="genderFemale" className="label-inline">
                      <input
                        type="radio"
                        name="gender"
                        id="genderFemale"
                        value="genderFemale"
                        defaultChecked={gender === 'female'}
                      />
                      Female
                    </label>
                  </div>
                </label>
                <hr />
                <label htmlFor="usernameField">
                  Username
                  <input
                    id="usernameField"
                    type="text"
                    placeholder="Username"
                    defaultValue={username}
                    required
                  />
                </label>
                <label htmlFor="emailField">
                  Email
                  <input
                    id="emailField"
                    type="email"
                    placeholder="Email"
                    defaultValue={email}
                    required
                  />
                </label>

                <input className="button-primary" type="submit" value="Submit" />
                <div className="float-right">
                  <button type="button" className="button-primary buttonCancel">
                    Cancel
                  </button>
                </div>
              </form>

              <div className={`modalWrap ${showSuccessModalClass}`}>
                <div className="modalInner successInner">
                  <div className="successMessage">
                    <div className="successMessageIcon">
                      <i className="material-icons">done</i>
                    </div>
                    <h2 className="successMessageHeading">
                      <strong>Pacient</strong> Edited
                    </h2>
                    <p className="successMessageDetails">Patient edited successfully.</p>
                  </div>
                  <div className="textCenter">
                    <Link to="/dashboard/examiner/" className="button button-primary">
                      Back to Dashboard
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PacientEdit;

PacientEdit.propTypes = {
  match: PropTypes.string.isRequired,
};
