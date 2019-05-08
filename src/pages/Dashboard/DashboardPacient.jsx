import React, { Component } from 'react';

import DashboardPacientPanel from './Components/DashboardPacientPanel';

class DashboardPacient extends Component {
  state = {
    pacient: {
      id: 1,
      name: 'John Doe',
      age: 23,
      gender: 'male',
      diagnostics: [
        {
          id: 1,
          date: '2019/03/24',
        },
        {
          id: 2,
          date: '2019/05/02',
        },
        {
          id: 3,
          date: '2019/02/01',
        },
      ],
    },
  };

  render() {
    const { pacient } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="column">
            <h1>
              <strong>Pacient</strong> Dashboard
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="headingGroup">
              <hr />
              <h2 className="heading">Pacient Details</h2>
            </div>

            <DashboardPacientPanel userRole="pacient" pacient={pacient} />
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardPacient;
