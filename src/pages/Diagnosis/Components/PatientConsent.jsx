import React from 'react';

function PatientConsent(props) {
  const { HandlePatientConsentOnChange } = props;

  return (
    <div className="patientConsentWrap">
      <div className="row">
        <div className="column">
          <div className="patientConsentInformationWrap">
            <h4 className="heading">Patient Consent</h4>
            <p className="paragraph">
              For consent to be valid, it must be voluntary and informed, and the person
              <br />
              consenting must have the capacity to make the decision.
            </p>
            <p className="paragraph">
              If an adult has the capacity to make a voluntary and informed decision
              <br /> to consent to or refuse a particular treatment, their decision must be
              respected.
            </p>
            <div className="patientConsentConfirmation">
              <div className="form-group">
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Patient Consent
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    onChange={HandlePatientConsentOnChange}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientConsent;
