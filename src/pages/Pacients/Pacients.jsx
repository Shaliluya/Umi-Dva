import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'dva';
import DashboardPacientItem from '../Dashboard/Components/DashboardPacientItem';
import PacientsShow from './PacientsShow';
import PacientsEdit from './PacientsEdit';

import initialData from '../../InitialData/initial-data';

@connect(({ wechatResult }) => ({
  wechatResult
}))

class Pacients extends Component {
  constructor() {
    super();
    this.state = {
      searchString: '',
      pacients: [],
    };
  }

  componentWillMount() {
    const { pacients } = initialData;

    this.setState({
      pacients,
    });
  }

  searchHandleChange = (e) => {
    this.setState({
      searchString: e.target.value,
    });
  };

  render() {
    const { match, currentUser } = this.props;
    console.log(currentUser)
    const { searchString, pacients } = this.state;

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
            <Link to={`${match.url}/${id}`}>
              <DashboardPacientItem name={name} age={age} gender={gender} />
            </Link>
          </button>
        </li>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="column">
            <h1>
              <strong>Pacients</strong> Archive
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="row">
              <div className="column">
                <div className="headingGroup">
                  <hr />
                  <h2 className="heading">Pacient List</h2>
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
            </div>
            <div className="row">
              <div className="column">
                <Link to="/create/pacients" className="button button-primary">
                  Add New Pacient
                </Link>
              </div>
            </div>
          </div>
          <div className="column transitionAnchorElement">
            <Route
              render={({ location }) => (
                <TransitionGroup>
                  <CSSTransition key={location.key} timeout={300} classNames="fade">
                    <Switch location={location}>
                      <Route path={`${match.path}/:userId`} exact component={PacientsShow} />
                      <Route path={`${match.path}/:userId/edit`} exact component={PacientsEdit} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Pacients;

Pacients.propTypes = {
  match: PropTypes.string.isRequired,
};
