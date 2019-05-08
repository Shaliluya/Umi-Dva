import React from 'react';
import PropTypes from 'prop-types';

function PacientDetails(props) {
  const {
    name, age, gender, occupation,
  } = props;

  return (
    <div className="newDiagnosisPacientDetailsWrap">
      <div className="pacientDetailsPanelWrap flatPanelWrap">
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

            <div className="pacientDetailItemWrap">
              <div className="detailDescription">{occupation}</div>
              <div className="detailLabel">Occupation</div>
            </div>
          </div>
        </div>
      </div>
      <h4 className="newDiagnosisPacientDetailsHeading">Pacient Details</h4>
    </div>
  );
}

export default PacientDetails;

PacientDetails.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  gender: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
};
