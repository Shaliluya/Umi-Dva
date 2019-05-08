import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import DashboardPacientItem from './Components/DashboardPacientItem';
import DashboardPacientPanel from './Components/DashboardPacientPanel';
import ArchivedDiagnosisList from '../Diagnosis/Components/ArchivedDiagnosisList';

import initialData from '../../InitialData/initial-data';

import './DashboardExaminer.css';

class DashboardExaminer extends Component {
  constructor() {
    super();
    this.state = {
      searchString: '',
      pacientSelected: '',
      pacients: [],
      diagnostics: [],
    };
  }

  componentWillMount() {
    const { pacients, diagnostics } = initialData;

    this.setState({
      pacients,
      diagnostics,
    });
  }

  selectOnClick = (e) => {
    this.setState({
      pacientSelected: e.currentTarget.dataset.key,
    });
  };

  searchHandleChange = (e) => {
    this.setState({
      searchString: e.target.value,
    });
  };

  render() {
    const { searchString, pacients, diagnostics } = this.state;

    let newPacients = pacients;
    const pacientSearch = searchString.trim().toLowerCase();

    if (pacientSearch.length > 0) {
      newPacients = newPacients.filter(pacient => pacient.name.toLowerCase().match(pacientSearch));
    }

    const pacientsList = newPacients.map((pacient) => {
      const {
        id, name, age, gender,
      } = pacient;

      return (
        <li key={id}>
          <button
            type="button"
            className="button button-clear button-100"
            data-key={id}
            onClick={this.selectOnClick}
          >
            <DashboardPacientItem name={name} age={age} gender={gender} />
          </button>
        </li>
      );
    });

    const { pacientSelected } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="column">
            <h1>
              <strong>Examiner</strong> Dashboard
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="pacientsListWrap">
              <div className="headingGroup">
                <hr />
                <h2 className="heading">Pacients</h2>
              </div>

              <div className="formGroup formGroupIcon">
                <input
                  id="searchPacientField"
                  name="searchPacientField"
                  type="text"
                  placeholder="Search a pacient"
                  className="formControl"
                  onChange={this.searchHandleChange}
                />
                <i className="material-icons">search</i>
              </div>

              <ul className="pacientsList">{pacientsList}</ul>
            </div>

            <div className="row">
              <div className="column">
                <Link to="/create/pacients" className="button button-primary">
                  Add New Pacient
                </Link>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="headingGroup">
              <hr />
              <h2 className="heading">Pacient Details</h2>
            </div>

            {pacientSelected !== '' ? (
              <DashboardPacientPanel userRole="examiner" pacient={pacients[pacientSelected - 1]} />
            ) : null}
          </div>

          <div className="column">
            <div className="headingGroup">
              <hr />
              <h2 className="heading">Diagnostics List</h2>
            </div>
            <div className="row">
              <div className="column">
                <ArchivedDiagnosisList diagnostics={diagnostics} name="John Doe" classes="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardExaminer;
