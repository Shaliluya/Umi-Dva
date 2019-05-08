import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './ArchivedDiagnosisList.css';

function ArchivedDiagnosisList(props) {
  const {
    userid, diagnostics, classes, userRole,
  } = props;

  const diagnosticsList = diagnostics.map((diagnostic) => {
    const { id, date } = diagnostic;
    const { name } = props;

    return (
      <li key={id}>
        <Link to={`/diagnosis/${id}`}>
          <div className="diagnosisListItem">
            <div className="diagnosisListItemDetails">
              <div className="pacientName">{name}</div>
              <div className="diagnosisDate">{date}</div>
            </div>
            <i className="material-icons">unarchive</i>
          </div>
        </Link>
      </li>
    );
  });

  return (
    <div className={`archivedDiagnosisListWrap ${classes}`}>
      <h3 className="heading">
        Archived Diagnostics <i className="material-icons">list</i>
      </h3>
      <ul className="diagnosisList">{diagnosticsList}</ul>

      {userRole === 'examiner' ? (
        <Link to={`/create/diagnosis/${userid}`} className="button button-primary">
          Start New Diagnosis
        </Link>
      ) : null}
    </div>
  );
}

export default ArchivedDiagnosisList;

ArchivedDiagnosisList.defaultProps = {
  classes: '',
  userRole: '',
};

ArchivedDiagnosisList.propTypes = {
  userid: PropTypes.number.isRequired,
  classes: PropTypes.string,
  userRole: PropTypes.string,
};
