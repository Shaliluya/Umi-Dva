import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ArchivedDiagnosisList from '../../Diagnosis/Components/ArchivedDiagnosisList';

import './DashboardPacientPanel.css';

function DashboardPacientPanel(props) {
  const { pacient } = props;
  const {
    id, name, age, gender, diagnostics, userRole,
  } = pacient;

  return (
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

        <Link to={`/pacients/${id}/edit`} className="button button-primary">
          Edit
        </Link>
      </div>

      <ArchivedDiagnosisList diagnostics={diagnostics} name={name} classes="" userRole={userRole} />
    </div>
  );
}

export default DashboardPacientPanel;

DashboardPacientPanel.propTypes = {
  pacient: PropTypes.isRequired,
};
