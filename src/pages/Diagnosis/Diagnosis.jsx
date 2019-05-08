import React, { Component } from 'react';
import './Diagnosis.css';

import ArchivedDiagnosisList from './Components/ArchivedDiagnosisList';

class DiagnosisArchive extends Component {
  state = {
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
  }

  render() {
    const { diagnostics } = this.state;
    const name = 'Jonny';

    return (
      <div className="container">
        <div className="row">
          <div className="column">
            <h1><strong>Archived</strong>Diagnostics</h1>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <div className="headingGroup">
              <hr />
              <h2 className="heading">Diagnostics List</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <ArchivedDiagnosisList diagnostics={diagnostics} name={name} classes="" />
          </div>
        </div>
      </div>
    );
  }
}

export default DiagnosisArchive;
