import React, { Component } from 'react';

import DiagnosisDiseaseItem from './DiagnosisDiseaseItem';

class DiagnosisAccuracyDegree extends Component {
  render() {
    return (
      <div className="column">
        <div className="row">
          <div className="column">
            <div className="headingGroup">
              <hr />
              <h2 className="heading">{this.props.title}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <h3>ML</h3>
            <div className="accuracyDegreeMlListWrap">
              <DiagnosisDiseaseItem description="Disease 1" itemStatus="remove" />
              <DiagnosisDiseaseItem description="Disease 2" itemStatus="remove" />
              <DiagnosisDiseaseItem description="Disease 3" itemStatus="remove" />
              <DiagnosisDiseaseItem description="Disease 4" itemStatus="remove" />
              <DiagnosisDiseaseItem description="Disease 5" itemStatus="remove" />
              <DiagnosisDiseaseItem description="Disease 6" itemStatus="remove" />
              <DiagnosisDiseaseItem description="Disease 7" itemStatus="remove" />
              <DiagnosisDiseaseItem description="Disease 8" itemStatus="remove" />
              <DiagnosisDiseaseItem description="Disease 9" itemStatus="remove" />
            </div>
          </div>
          <div className="column">
            <h3>L</h3>
            <div className="accuracyDegreeMlListWrap">
              <DiagnosisDiseaseItem description="Disease 5" itemStatus="remove" />
            </div>
          </div>
          <div className="column">
            <h3>LL</h3>
            <div className="accuracyDegreeMlListWrap">
              <DiagnosisDiseaseItem description="Disease 10" itemStatus="remove" />
              <DiagnosisDiseaseItem description="Disease 1" itemStatus="remove" />
            </div>
          </div>
          <div className="column">
            <h3>NTBM</h3>
            <div className="accuracyDegreeMlListWrap">
              <DiagnosisDiseaseItem description="Disease 12" itemStatus="remove" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DiagnosisAccuracyDegree;
