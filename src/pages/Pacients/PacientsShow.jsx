import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ArchivedDiagnosisList from '../Diagnosis/Components/ArchivedDiagnosisList';

import initialData from '../../InitialData/initial-data';

class PacientsShow extends Component {
  constructor() {
    super();
    this.state = {
      pacients: [],
    };
  }

  componentWillMount() {
    const { pacients } = initialData;

    this.setState({
      pacients,
    });
  }

  render() {
    const { match } = this.props;
    const { userId } = match.params;

    const { pacients } = this.state;

    const {
      name, age, gender, diagnostics,
    } = pacients[userId];

    return (
      <div className="row">
        <div className="column">
          <div className="row">
            <div className="column">
              <div className="headingGroup">
                <hr />
                <h2 className="heading">Pacient Details</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <div className="pacientDetailsPanelWrap">
                <div className="pacientDetailGroup">
                  <div className="pacientDetailGroupInner">
                    <div className="pacientDetailItemWrap">
                      <div className="detailDescription">{name}</div>
                      <div className="detailLabel">Name</div>
                    </div>

                    <div className="pacientDetailItemWrap">
                      <div className="detailDescription">{age}</div>
                      <div className="detailLabel">Age</div>
                    </div>

                    <div className="pacientDetailItemWrap">
                      <div className="detailDescription">{gender}</div>
                      <div className="detailLabel">Gender</div>
                    </div>
                  </div>

                  <Link to={`${match.url}/edit`} className="button button-primary">
                    Edit
                  </Link>
                </div>

                <ArchivedDiagnosisList
                  userid={userId}
                  diagnostics={diagnostics}
                  name={name}
                  classes=""
                  userRole="examiner"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PacientsShow;
