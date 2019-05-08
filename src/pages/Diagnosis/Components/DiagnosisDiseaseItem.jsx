import React from 'react';
import PropTypes from 'prop-types';

import './DiagnosisDiseaseItem.css';

function DiagnosisDiseaseItem(props) {
  const { description } = props;

  return (
    <div className="diseaseItem">
      <span className="diseaseDescription">{description}</span>
    </div>
  );
}

export default DiagnosisDiseaseItem;

DiagnosisDiseaseItem.propTypes = {
  description: PropTypes.string.isRequired,
};
