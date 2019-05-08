import React from 'react';

function PrognosticSelectedDiseases() {
  return (
    <div className="column">
      <div className="row">
        <div className="column">
          <div className="headingGroup">
            <hr />
            <h2 className="heading">Prognostic</h2>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <div className="prognosticSelectedDiseasesWrap">
            <div className="prognosticSelectedDiseasesList">
              <div className="diseaseItem prognosticDiseaseItemSeleted">
                <span className="diseaseDescription">Disease 8</span>
                <button
                  type="button"
                  title="Remove this item from the list."
                  className="button button-clear removePrognosticSelectedDisease"
                >
                  x
                </button>
              </div>

              <div className="diseaseItem prognosticDiseaseItemSeleted">
                <span className="diseaseDescription">Disease 5</span>
                <button
                  type="button"
                  title="Remove this item from the list."
                  className="button button-clear removePrognosticSelectedDisease"
                >
                  x
                </button>
              </div>

              <div className="diseaseItem prognosticDiseaseItemSeleted">
                <span className="diseaseDescription">Disease 7</span>
                <button
                  type="button"
                  title="Remove this item from the list."
                  className="button button-clear removePrognosticSelectedDisease"
                >
                  x
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrognosticSelectedDiseases;
