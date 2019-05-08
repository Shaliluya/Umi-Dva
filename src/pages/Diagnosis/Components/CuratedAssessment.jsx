import React, { Component } from 'react';

import './CuratedAssessment.css';

class CuratedAssessment extends Component {
  handleRemoveSelectedCuratedAssessmentOnClick = (e) => {
    e.preventDefault();
  };

  render() {
    const { curatedAssessmentsItems } = this.props;

    const curatedAssessmentItemsList = curatedAssessmentsItems.map(
      (curatedassessmentitem, index) => {
        const { name } = curatedassessmentitem;
        const generateKey = index + name.toLowerCase().replace(/\s+/g, '');

        return (
          <div key={generateKey} className="curatedAssessmentItem">
            <span className="curatedAssessmentDescription">{name}</span>
            <button
              type="button"
              title="Remove this item from the list."
              className="button button-clear removeSelectedCuratedAssessment"
              onClick={(e) => {
                this.handleRemoveSelectedCuratedAssessmentOnClick(e);
              }}
            >
              x
            </button>
          </div>
        );
      },
    );
    return <div className="curatedAssessmentsList">{curatedAssessmentItemsList}</div>;
  }
}

export default CuratedAssessment;
