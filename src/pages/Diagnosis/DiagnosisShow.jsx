import React, { Component } from 'react';

import ArchivedDiagnosisList from './Components/ArchivedDiagnosisList';

class DiagnosisShow extends Component {
  state = {
    pacient: {
      details: {
        name: 'John Doe',
        age: 34,
        gender: 'male',
      },
      diagnostic: {
        id: 10,
        date: '2019/12/25',
      },
      diagnostics: [
        {
          id: 1,
          date: '2019/03/24',
        },
        {
          id: 2,
          date: '2019/05/02',
        },
        {
          id: 3,
          date: '2019/02/01',
        },
      ],
    },
  };

  render() {
    const { pacient } = this.state;
    const { details, diagnostic, diagnostics } = pacient;
    const { name, age, gender } = details;

    return (
      <div className="container">
        <div className="row">
          <div className="column">
            <h1>
              <strong>Archived</strong> Diagnostic
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="column column-25">
            <div className="headingGroup">
              <hr />
              <h2 className="heading">Pacient</h2>
            </div>

            <div className="pacientDetailWrap">
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

            <div className="archiveDiagnosticDate">
              <div className="detailDescription">Diagnostic Date</div>
              <div className="detailLabel">{diagnostic.date}</div>
            </div>

            <ArchivedDiagnosisList diagnostics={diagnostics} name={name} classes="small mt4" />
          </div>
          <div className="column">
            <div className="row">
              <div className="column">
                <div className="headingGroup">
                  <hr />
                  <h2 className="heading">Diagnostic Details</h2>
                  <div className="diagnosticNavigation">
                    <button type="button" className="button-clear">
                      <i className="material-icons">chevron_left</i> <span>Prev</span>
                    </button>
                    <button type="button" className="button-clear">
                      <span>Next</span> <i className="material-icons">chevron_right</i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="column">
                <div className="anatomyPartsSelectedWrap boxWrap">
                  <h4 className="heading">Anatomy / Body part selected</h4>
                  <hr />
                  <ul className="anatomyPartsList boxItemsList">
                    <li className="anatomyPartItem boxItem">Shoulder</li>
                    <li className="anatomyPartItem boxItem">Clavicle</li>
                  </ul>
                </div>
                <div className="subjectiveAssessmentListSelected boxWrap">
                  <h4 className="heading">Subjective Assessment</h4>
                  <hr />
                  <ul className="subjectiveAssessmentList boxItemsList">
                    <li className="subjectiveAssessmentItem boxItem">Shoulder</li>
                    <li className="subjectiveAssessmentItem boxItem">Clavicle</li>
                  </ul>
                </div>
                <div className="objectiveAssessmentListSelected boxWrap">
                  <h4 className="heading">Objective Assessment</h4>
                  <hr />
                  <ul className="objectiveAssessmentPartsList boxItemsList">
                    <li className="objectiveAssessmentItem boxItem">Shoulder</li>
                    <li className="objectiveAssessmentItem boxItem">Clavicle</li>
                  </ul>
                </div>
              </div>
              <div className="column">
                <div className="diseasesListSelected boxWrap">
                  <h4 className="heading">Diseases</h4>
                  <hr />

                  <div className="diseasesTableWrap">
                    <table>
                      <thead>
                        <tr>
                          <th>ML</th>
                          <th>L</th>
                          <th>LL</th>
                          <th>NTBM</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Disease 1</td>
                          <td>Disease 2</td>
                          <td>Disease 10</td>
                          <td>Disease 11</td>
                        </tr>
                        <tr>
                          <td>Disease 3</td>
                          <td>Disease 4</td>
                          <td />
                          <td />
                        </tr>
                        <tr>
                          <td>Disease 7</td>
                          <td>Disease 9</td>
                          <td />
                          <td />
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="exerciseSuggestionsNotes boxWrap">
                  <h4 className="heading">Exercise Suggestions</h4>
                  <hr />
                  <div className="exerciseSuggestionContent">
                    <p>
                      The max width can be changed with one line of CSS and all columns will resize
                      accordingly. Milligram is different than most because of its use of the CSS
                      Flexible Box Layout Module standard. The advantage is the simplicity, and we
                      know that a functional code is very important for maintainability and
                      scalability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DiagnosisShow;
