import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DiagnosisDiseaseSelection.css';
import './DiagnosisDiseaseItem.css';

class DiagnosisDiseaseSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDiseaseModal: false,
      showDiseaseSuccessModal: false,
      showDiseaseErrorModal: false,
      searchString: '',
      diseases: [],
    };
  }

  componentDidMount() {
    const { diseases } = this.props;

    this.setState({
      diseases,
    });
  }

  componentDidUpdate(prevProps) {
    const { diseases } = this.props;

    if (diseases !== prevProps.diseases) {
      this.setState({
        diseases,
      });
    }
  }

  searchHandleChange = (e) => {
    this.setState({
      searchString: e.target.value,
    });
  };

  buildSelectedDiseasesList = (accuracyLevel) => {
    const { handleOnDragStart, handleRemoveSelectedDiseaseOnClick } = this.props;
    const { accuracy } = this.props;
    const diseasesItems = accuracy[accuracyLevel];

    const diseasesItemsList = diseasesItems.map((disease) => {
      const { id, name, previousAccuracySelected } = disease;

      return (
        <div
          key={id}
          className="diseaseItem diseaseItemSeleted"
          onDragStart={(e) => {
            handleOnDragStart(e, id, name, previousAccuracySelected);
          }}
          draggable
        >
          <span className="diseaseDescription">{name}</span>
          <button
            type="button"
            title="Remove this item from the list."
            className="button button-clear removeSelectedDisease"
            onClick={(e) => {
              handleRemoveSelectedDiseaseOnClick(e, id, accuracyLevel);
            }}
          >
            x
          </button>
        </div>
      );
    });

    return diseasesItemsList;
  };

  handleAddDiseaseOnClick = (e) => {
    e.preventDefault();

    this.setState({
      showDiseaseModal: true,
    });
  };

  handleCancelDiseaseOnClick = (e) => {
    e.preventDefault();

    this.setState({
      showDiseaseModal: false,
    });
  };

  handleDiseaseOnSubmit = (e) => {
    e.preventDefault();

    const { diseases } = this.state;

    const newDiseaseItemValue = e.target.diseaseField.value;
    e.target.diseaseField.value = '';

    if (newDiseaseItemValue === '') {
      this.setState({
        showDiseaseModal: false,
      });
      return;
    }

    const newDiseaseItem = {
      id: Math.floor(Math.random() * 100 + 1),
      name: newDiseaseItemValue,
    };

    const newDiseasesList = [...diseases, newDiseaseItem];

    this.setState({
      showDiseaseModal: false,
      showDiseaseSuccessModal: true,
      diseases: newDiseasesList,
    });

    setTimeout(() => {
      this.setState({
        showDiseaseSuccessModal: false,
      });
    }, 2000);
  };

  render() {
    const { handleOnDragStart, handleOnDragOver, handleOnDrop } = this.props;
    const { diseases, searchString } = this.state;

    let newDiseases = diseases;
    const newDiseaseSearch = searchString.trim().toLowerCase();

    if (newDiseaseSearch.length > 0) {
      newDiseases = newDiseases.filter(disease => disease.name.toLowerCase().match(newDiseaseSearch));
    }

    const diseasesList = newDiseases.map((disease) => {
      const { id, name, diseaseSelected } = disease;
      const diseaseSelectedClass = diseaseSelected ? 'itemSelected' : '';
      const diseaseDraggable = diseaseSelected;

      return (
        <span
          key={id}
          className={`diseaseItem ${diseaseSelectedClass}`}
          onDragStart={(e) => {
            handleOnDragStart(e, id, name);
          }}
          draggable={!diseaseDraggable}
        >
          <span className="diseaseDescription">{name}</span>
        </span>
      );
    });

    const { showDiseaseModal, showDiseaseSuccessModal, showDiseaseErrorModal } = this.state;
    const showAddDiseaseModalClass = showDiseaseModal ? 'showModal' : 'hideModal';
    const showAddDiseaseSuccessModalClass = showDiseaseSuccessModal ? 'showModal' : 'hideModal';
    const showAddDiseaseErrorModalClass = showDiseaseErrorModal ? 'showModal' : 'hideModal';

    const { title } = this.props;

    return (
      <div className="column">
        <div className="row">
          <div className="column">
            <div className="headingGroup">
              <hr />
              <h2 className="heading">{title}</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <div className="formHorizontal">
              <div className="formGroup">
                <label htmlFor="searchField" className="formLabel">
                  Search disease
                </label>
                <div className="formGroupIcon">
                  <input
                    type="text"
                    placeholder="Search a disease"
                    className="formControl"
                    onChange={this.searchHandleChange}
                  />
                  <i className="material-icons">search</i>
                </div>
              </div>
              <div className="formControlGroup">
                <button
                  type="button"
                  className="button-primary formControlAdd"
                  onClick={this.handleAddDiseaseOnClick}
                >
                  Add
                </button>
              </div>
            </div>

            <div className="diseasesListWrap">{diseasesList}</div>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <div className="row">
              <div className="column">
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="column accuracyDegreeMLWrap">
                <div className="selectedDiseasesColumnHeadingWrap">
                  <h3 className="selectedDiseasesColumnHeading">ML</h3>
                  <p className="selectedDiseasesColumnDescription">Most likely</p>
                </div>
                <div
                  className="accuracyDegreeListWrap"
                  onDragOver={(e) => {
                    handleOnDragOver(e);
                  }}
                  onDrop={(e) => {
                    handleOnDrop(e, 'ml');
                  }}
                >
                  {this.buildSelectedDiseasesList('ml')}
                </div>
              </div>
              <div className="column accuracyDegreeLWrap">
                <div className="selectedDiseasesColumnHeadingWrap">
                  <h3 className="selectedDiseasesColumnHeading">L</h3>
                  <p className="selectedDiseasesColumnDescription">Likely</p>
                </div>
                <div
                  className="accuracyDegreeListWrap"
                  onDragOver={(e) => {
                    handleOnDragOver(e);
                  }}
                  onDrop={(e) => {
                    handleOnDrop(e, 'l');
                  }}
                >
                  {this.buildSelectedDiseasesList('l')}
                </div>
              </div>
              <div className="column accuracyDegreeLLWrap">
                <div className="selectedDiseasesColumnHeadingWrap">
                  <h3 className="selectedDiseasesColumnHeading">LL</h3>
                  <p className="selectedDiseasesColumnDescription">Less likely</p>
                </div>
                <div
                  className="accuracyDegreeListWrap"
                  onDragOver={(e) => {
                    handleOnDragOver(e);
                  }}
                  onDrop={(e) => {
                    handleOnDrop(e, 'll');
                  }}
                >
                  {this.buildSelectedDiseasesList('ll')}
                </div>
              </div>
              <div className="column accuracyDegreeNTBMWrap">
                <div className="selectedDiseasesColumnHeadingWrap">
                  <h3 className="selectedDiseasesColumnHeading">NTBM</h3>
                  <p className="selectedDiseasesColumnDescription">Not to mention</p>
                </div>
                <div
                  className="accuracyDegreeListWrap"
                  onDragOver={(e) => {
                    handleOnDragOver(e);
                  }}
                  onDrop={(e) => {
                    handleOnDrop(e, 'ntbm');
                  }}
                >
                  {this.buildSelectedDiseasesList('ntbm')}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`modalWrap ${showAddDiseaseModalClass}`}>
          <form onSubmit={this.handleDiseaseOnSubmit}>
            <div className="modalInner defaultInner">
              <div className="defaultMessage">
                <div className="defaultMessageIcon">
                  <i className="material-icons">add</i>
                </div>
                <h2 className="defaultMessageHeading">
                  <strong>Add</strong> Disease
                </h2>
                <p className="defaultMessageDetails">Add new disease to the database.</p>
                <input type="text" id="diseaseField" name="diseaseField" />
              </div>
              <div>
                <button type="submit">Add Disease</button>
                <div className="float-right">
                  <button
                    type="button"
                    className="button-primary buttonCancel"
                    onClick={this.handleCancelDiseaseOnClick}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className={`modalWrap ${showAddDiseaseSuccessModalClass}`}>
          <div className="modalInner successInner">
            <div className="successMessage">
              <div className="successMessageIcon">
                <i className="material-icons">done</i>
              </div>
              <h2 className="successMessageHeading">
                <strong>Disease</strong> added
              </h2>
              <p className="successMessageDetails">Disease added successfully to the database.</p>
            </div>
          </div>
        </div>

        <div className={`modalWrap ${showAddDiseaseErrorModalClass}`}>
          <div className="modalInner errorInner">
            <div className="errorMessage">
              <div className="errorMessageIcon">
                <i className="material-icons">warning</i>
              </div>
              <h2 className="errorMessageHeading">
                <strong>Disease</strong> not added
              </h2>
              <p className="errorMessageDetails">There was an error adding the new disease.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DiagnosisDiseaseSelection;

DiagnosisDiseaseSelection.propTypes = {
  title: PropTypes.string.isRequired,
};
