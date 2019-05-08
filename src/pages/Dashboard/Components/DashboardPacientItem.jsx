import React from 'react';
import PropTypes from 'prop-types';

import './DashboardPacientItem.css';

const DashboardPacientItem = (props) => {
  const { name, age, gender } = props;
  return (
    <div className="pacientItem">
      <div className="pacientName">
        <span className="itemDescription">{name}</span>
      </div>
      <div className="pacientDetailsWrap">
        <div className="pacientAge">
          <span className="itemLabel">Age</span>
          <span className="itemDescription">{age}</span>
        </div>
        <div className="pacientGender">
          <span className="itemLabel">Gender</span>
          <span className="itemDescription">{gender}</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardPacientItem;

DashboardPacientItem.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  gender: PropTypes.string.isRequired,
};
