import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PacientsCreate extends Component {
  state = {
    showSuccessModal: false,
  };

  handleOnSubmit = (e) => {
    e.preventDefault();

    const {
      nameField, ageField, genderField, usernameField, emailField,
    } = e.target;

    if (
      nameField.value.length === 0
      || ageField.value.length === 0
      || genderField.value.length === 0
      || usernameField.value.length === 0
      || emailField.value.length === 0
    ) {
      return;
    }

    const newPacient = {
      name: nameField.value,
      age: ageField.value,
      gender: genderField.value,
      username: usernameField.value,
      email: emailField.value,
    };

    console.log(JSON.stringify(newPacient));

    if (true) {
      this.showSuccessModal();
    }
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
    const { showSuccessModal } = this.state;
    const showSuccessModalClass = showSuccessModal ? 'showModal' : 'hideModal';

    return (
      <div className="loginFormWrap">
        <h1 className="textCenter">
          <strong>New</strong> Pacient
        </h1>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="nameField">
            Name
            <input id="nameField" name="nameField" type="text" placeholder="Name" required />
          </label>
          <label htmlFor="ageField">
            Age
            <input id="ageField" name="ageField" type="text" placeholder="Age" required />
          </label>
          <label htmlFor="genderField">
            Gender
            <div className="checkboxGroup">
              <label htmlFor="genderMale" className="label-inline">
                <input
                  type="radio"
                  id="genderMale"
                  name="genderField"
                  value="male"
                  defaultChecked
                />{' '}
                Male
              </label>
              <label htmlFor="genderFemale" className="label-inline">
                <input type="radio" id="genderFemale" name="genderField" value="female" /> Female
              </label>
            </div>
          </label>
          <hr />
          <label htmlFor="usernameField">
            Username
            <input
              id="usernameField"
              name="usernameField"
              type="text"
              placeholder="Username"
              required
            />
          </label>
          <label htmlFor="emailField">
            Email
            <input id="emailField" name="emailField" type="email" placeholder="Email" required />
          </label>

          <input className="button-primary" type="submit" value="Add" />
        </form>

        <div className={`modalWrap ${showSuccessModalClass}`}>
          <div className="modalInner successInner">
            <div className="successMessage">
              <div className="successMessageIcon">
                <i className="material-icons">done</i>
              </div>
              <h2 className="successMessageHeading">
                <strong>Pacient</strong> Added
              </h2>
              <p className="successMessageDetails">Patient added successfully to the database.</p>
            </div>
            <div className="textCenter">
              <Link to="/diagnostic/new/" className="button button-primary">
                Start Diagnosis
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PacientsCreate;
