import React, { Component } from 'react';
import update from 'immutability-helper';

import DiagnosisAnatomySelection from './Components/DiagnosisAnatomySelection';
import DiagnosisDiseaseSelection from './Components/DiagnosisDiseaseSelection';
import PacientDetails from './Components/PacientDetails';
import PatientConsent from './Components/PatientConsent';
import SmartGoalSettings from './Components/SmartGoalSettings';
import PrognosticSelectedDiseases from './Components/PrognosticSelectedDiseases';
import SelectiveToggleOptions from './Components/SelectiveToggleOptions';

import initialData from '../../InitialData/initial-data';

import './DiagnosisCreate.scss';

class DiagnosisNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pacients: [],
      diseases: [],
      options: {
        subjectiveassessments: [],
        objectiveassessments: [],
        treatments: [],
        exercises: [],
      },
      accuracy: {
        ml: [],
        l: [],
        ll: [],
        ntbm: [],
      },
    };
  }

  componentWillMount() {
    const { pacients, diseases, options } = initialData;

    this.setState({
      pacients,
      diseases,
      options: {
        subjectiveassessments: options[0],
        objectiveassessments: options[1],
        treatments: options[2],
        exercises: options[3],
      },
    });
  }

  handleOnDragStart = (e, id, name, previousAccuracySelected) => {
    let diseaseItem = {
      id,
      name,
      previousAccuracySelected,
    };
    diseaseItem = JSON.stringify(diseaseItem);

    e.dataTransfer.setData('text/html', diseaseItem);
  };

  handleOnDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  handleOnDrop = (e, accuracyLevel) => {
    e.preventDefault();
    e.stopPropagation();

    const diseaseItem = JSON.parse(e.dataTransfer.getData('text/html'));
    const { accuracy } = this.state;
    const {
      ml, l, ll, ntbm,
    } = accuracy;

    let newDiseasesListMl = ml;
    let newDiseasesListL = l;
    let newDiseasesListLl = ll;
    let newDiseasesListNtbm = ntbm;

    const previousAccuracyLevel = diseaseItem.previousAccuracySelected;
    diseaseItem.previousAccuracySelected = accuracyLevel;

    // Removes the disease item from a previous accuracy list.
    switch (previousAccuracyLevel) {
      case 'ml':
        newDiseasesListMl = newDiseasesListMl.filter(disease => disease.id !== diseaseItem.id);
        break;
      case 'l':
        newDiseasesListL = newDiseasesListL.filter(disease => disease.id !== diseaseItem.id);
        break;
      case 'll':
        newDiseasesListLl = newDiseasesListLl.filter(disease => disease.id !== diseaseItem.id);
        break;
      case 'ntbm':
        newDiseasesListNtbm = newDiseasesListNtbm.filter(disease => disease.id !== diseaseItem.id);
        break;
      default:
    }

    // Adds the disease item to an accuracy list.
    switch (accuracyLevel) {
      case 'ml':
        newDiseasesListMl = [...newDiseasesListMl, diseaseItem];
        break;
      case 'l':
        newDiseasesListL = [...newDiseasesListL, diseaseItem];
        break;
      case 'll':
        newDiseasesListLl = [...newDiseasesListLl, diseaseItem];
        break;
      case 'ntbm':
        newDiseasesListNtbm = [...newDiseasesListNtbm, diseaseItem];
        break;
      default:
    }

    const newAccuracyDiseasesArray = {
      ml: newDiseasesListMl,
      l: newDiseasesListL,
      ll: newDiseasesListLl,
      ntbm: newDiseasesListNtbm,
    };

    this.setState({
      accuracy: newAccuracyDiseasesArray,
    });

    e.dataTransfer.clearData();

    // Disable the item, preventing it from being dragged again.
    const diseaseItemId = diseaseItem.id;
    const { diseases } = this.state;

    const diseaseItemIndex = diseases.findIndex(disease => disease.id === diseaseItemId);

    if (diseaseItemIndex !== -1) {
      const newDiseasesArray = diseases.map((disease, index) => {
        const { id, name } = disease;
        let newDisease = disease;

        if (index === diseaseItemIndex) {
          newDisease = {
            id,
            name,
            diseaseSelected: true,
          };
        }

        return newDisease;
      });

      this.setState({
        diseases: newDiseasesArray,
      });
    }
  };

  handleRemoveSelectedDiseaseOnClick = (e, id, accuracyLevel) => {
    e.preventDefault();
    const { diseases } = this.state;

    const diseaseItemIndex = diseases.findIndex(disease => disease.id === id);

    if (diseaseItemIndex === -1) {
      return;
    }

    const { accuracy } = this.state;
    const {
      ml, l, ll, ntbm,
    } = accuracy;

    let newDiseasesListMl = ml;
    let newDiseasesListL = l;
    let newDiseasesListLl = ll;
    let newDiseasesListNtbm = ntbm;

    // Removes the disease item from the accuracy list.
    switch (accuracyLevel) {
      case 'ml':
        newDiseasesListMl = newDiseasesListMl.filter(disease => disease.id !== id);
        break;
      case 'l':
        newDiseasesListL = newDiseasesListL.filter(disease => disease.id !== id);
        break;
      case 'll':
        newDiseasesListLl = newDiseasesListLl.filter(disease => disease.id !== id);
        break;
      case 'ntbm':
        newDiseasesListNtbm = newDiseasesListNtbm.filter(disease => disease.id !== id);
        break;
      default:
    }

    const newAccuracyDiseasesArray = {
      ml: newDiseasesListMl,
      l: newDiseasesListL,
      ll: newDiseasesListLl,
      ntbm: newDiseasesListNtbm,
    };

    this.setState({
      accuracy: newAccuracyDiseasesArray,
    });

    // Enable the item
    if (diseaseItemIndex !== -1) {
      const newDiseasesArray = diseases.map((disease, index) => {
        const { id, name } = disease;
        let newDisease = disease;

        if (index === diseaseItemIndex) {
          newDisease = {
            id,
            name,
            diseaseSelected: false,
          };
        }

        return newDisease;
      });

      this.setState({
        diseases: newDiseasesArray,
      });
    }
  };

  HandlePatientConsentOnChange = (e) => {
    e.preventDefault();
  };

  handleSelectOptionOnClick = (e, optionsparentgroupname, optionsgroupid, optionId) => {
    e.preventDefault();

    const { options } = this.state;

    const optiongroupidIndex = options[optionsparentgroupname].options.findIndex(
      optiongroup => optiongroup.groupid === optionsgroupid,
    );

    const optionIndex = options[optionsparentgroupname].options[
      optiongroupidIndex
    ].groupitems.findIndex(option => option.id === optionId);

    const newOptions = update(options, {
      [optionsparentgroupname]: {
        options: {
          [optiongroupidIndex]: {
            groupitems: { [optionIndex]: { itemSelected: { $apply: toggle => !toggle } } },
          },
        },
      },
    });

    this.setState({
      options: newOptions,
    });
  };

  handleDiagnosisOnSubmit = (e) => {
    e.preventDefault();

    const { accuracy, options } = this.state;
    const { subjectiveassessments, objectiveassessments, treatments } = options;

    const generateOptions = (optionsparent, selectedoptions) => {
      const optionsparentID = optionsparent.id;

      optionsparent.options.forEach((groupoptions) => {
        const groupoptionsID = groupoptions.groupid;
        groupoptions.groupitems.forEach((option) => {
          if (option.itemSelected) {
            selectedoptions.push([optionsparentID, groupoptionsID, option.id]);
          }
        });
      });
    };

    const selectedsubjectiveassessments = [];
    generateOptions(subjectiveassessments, selectedsubjectiveassessments);

    const selectedobjectiveassessments = [];
    generateOptions(objectiveassessments, selectedobjectiveassessments);

    const selectedtreatments = [];
    generateOptions(treatments, selectedtreatments);

    const selectedOptions = {
      selectedsubjectiveassessments,
      selectedobjectiveassessments,
      selectedtreatments,
    };

    const accuracyML = accuracy.ml.map(accuracyItem => accuracyItem.id);

    const accuracyL = accuracy.l.map(accuracyItem => accuracyItem.id);

    const accuracyLL = accuracy.ll.map(accuracyItem => accuracyItem.id);

    const accuracyNTBM = accuracy.ntbm.map(accuracyItem => accuracyItem.id);

    const diseasesAccuracy = {
      accuracy: {
        ml: accuracyML,
        l: accuracyL,
        ll: accuracyLL,
        ntbm: accuracyNTBM,
      },
    };

    const diagnosisArray = {
      selectedOptions,
      diseasesAccuracy,
    };

    console.log(JSON.stringify(diagnosisArray));
  };

  addOptionsGroup = (optionNewGroupName, optionsParentGroupName) => {
    const { options } = this.state;

    const newOptionsGroup = {
      groupid: Math.floor(Math.random() * 100 + 1),
      searchString: '',
      groupname: optionNewGroupName,
      groupitems: [],
    };

    const newOptions = update(options, {
      [optionsParentGroupName]: {
        options: { $push: [newOptionsGroup] },
      },
    });

    this.setState({
      options: newOptions,
    });
  };

  addOption = (optionnewname, optionsparentgroupname, optionsgroupid) => {
    const { options } = this.state;

    const newOption = {
      id: Math.floor(Math.random() * 100 + 1),
      name: optionnewname,
      itemSelected: false,
    };

    const optiongroupidIndex = options[optionsparentgroupname].options.findIndex(
      optiongroup => optiongroup.groupid === optionsgroupid,
    );

    const newOptions = update(options, {
      [optionsparentgroupname]: {
        options: {
          [optiongroupidIndex]: {
            groupitems: { $push: [newOption] },
          },
        },
      },
    });

    this.setState({
      options: newOptions,
    });
  };

  render() {
    const {
      pacients, diseases, accuracy, options,
    } = this.state;

    const { match } = this.props;
    const { userId } = match.params;

    const {
      name, age, occupation, gender,
    } = pacients[userId];

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="column">
              <h1 className="textTransformUppercase">
                <strong>Patient</strong> Diagnosis
              </h1>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <PacientDetails name={name} age={age} occupation={occupation} gender={gender} />
            </div>
          </div>

          <div className="row">
            <div className="column">
              <PatientConsent HandlePatientConsentOnChange={this.HandlePatientConsentOnChange} />
            </div>
          </div>

          <div className="row">
            <div className="column">
              <div className="row">
                <DiagnosisAnatomySelection />
              </div>

              <div className="row stickyContentWrap">
                <DiagnosisDiseaseSelection
                  title="Diseases Accuracy"
                  diseases={diseases}
                  accuracy={accuracy}
                  handleOnDragStart={this.handleOnDragStart}
                  handleOnDragOver={this.handleOnDragOver}
                  handleOnDrop={this.handleOnDrop}
                  handleRemoveSelectedDiseaseOnClick={this.handleRemoveSelectedDiseaseOnClick}
                />
              </div>
            </div>

            <div className="column">
              <div className="row">
                <SelectiveToggleOptions
                  title={options.subjectiveassessments.name}
                  options={options.subjectiveassessments.options}
                  optionsparentgroupname="subjectiveassessments"
                  handleSelectOptionOnClick={this.handleSelectOptionOnClick}
                  addOptionsGroup={this.addOptionsGroup}
                  addOption={this.addOption}
                />
              </div>
              <div className="row">
                <SelectiveToggleOptions
                  title={options.objectiveassessments.name}
                  options={options.objectiveassessments.options}
                  optionsparentgroupname="objectiveassessments"
                  handleSelectOptionOnClick={this.handleSelectOptionOnClick}
                  addOptionsGroup={this.addOptionsGroup}
                  addOption={this.addOption}
                />
              </div>

              <div className="row">
                <PrognosticSelectedDiseases />
              </div>
            </div>
          </div>

          <div className="row">
            <SmartGoalSettings />
          </div>

          <div className="row">
            <div className="column">
              <div className="row">
                <SelectiveToggleOptions
                  title={options.treatments.name}
                  options={options.treatments.options}
                  optionsparentgroupname="treatments"
                  handleSelectOptionOnClick={this.handleSelectOptionOnClick}
                  addOptionsGroup={this.addOptionsGroup}
                  addOption={this.addOption}
                />
              </div>
            </div>
            <div className="column">
              <div className="row">
                <SelectiveToggleOptions
                  title={options.exercises.name}
                  options={options.exercises.options}
                  optionsparentgroupname="exercises"
                  handleSelectOptionOnClick={this.handleSelectOptionOnClick}
                  addOptionsGroup={this.addOptionsGroup}
                  addOption={this.addOption}
                />
              </div>
              <div className="row">
                <div className="column">
                  <fieldset>
                    <label htmlFor="homeExerciseProgramNotesField">
                      Exercise Notes
                      <textarea id="homeExerciseProgramNotesField" />
                    </label>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <div className="row">
                <div className="column">
                  <div className="textCenter">
                    <hr />
                    <button
                      type="button"
                      className="button-primary"
                      onClick={this.handleDiagnosisOnSubmit}
                    >
                      Submit the diagnosis
                    </button>
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

export default DiagnosisNew;
