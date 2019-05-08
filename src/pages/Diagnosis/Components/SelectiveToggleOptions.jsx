import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SelectiveToggleOption from './SelectiveToggleOption';

class SelectiveToggleOptions extends Component {
  state = {
    showAddOptionsGroupModal: false,
    optionsParentGroupName: '',
  };

  handleShowAddOptionsGroupModalonClick = (e, optionsparentgroupname) => {
    e.preventDefault();

    this.setState({
      showAddOptionsGroupModal: true,
      optionsParentGroupName: optionsparentgroupname,
    });
  };

  handleHideAddOptionsGroupModalonClick = (e) => {
    e.preventDefault();

    this.setState({
      showAddOptionsGroupModal: false,
    });
  };

  handleAddOptionsGroupOnSubmit = (e) => {
    e.preventDefault();

    const { addOptionsGroup } = this.props;
    const optionNewGroupName = e.target.optionsGroupNameField.value;

    const { optionsParentGroupName } = this.state;

    if (optionNewGroupName !== '') {
      addOptionsGroup(optionNewGroupName, optionsParentGroupName);
    }

    this.setState({
      showAddOptionsGroupModal: false,
    });
  };

  render() {
    const {
      title,
      options,
      optionsparentgroupname,
      handleSelectOptionOnClick,
      addOption,
    } = this.props;

    const buildSelectiveToggleOptionList = options.map((optionsGroup) => {
      const { groupid, groupname, groupitems } = optionsGroup;

      return (
        <SelectiveToggleOption
          key={groupid}
          groupname={groupname}
          groupitems={groupitems}
          optionsgroupid={groupid}
          optionsparentgroupname={optionsparentgroupname}
          handleSelectOptionOnClick={handleSelectOptionOnClick}
          addOption={addOption}
        />
      );
    });

    const { showAddOptionsGroupModal } = this.state;
    const showAddOptionsGroupModalClass = showAddOptionsGroupModal ? 'showModal' : 'hideModal';

    return (
      <div className="column">
        <div className="row">
          <div className="column">
            <div className="headingGroup">
              <hr />
              <h2 className="heading">{title}</h2>
              <div className="addSubjectiveAssessment">
                <button
                  type="button"
                  className="button-primary formControlAdd"
                  onClick={(e) => {
                    this.handleShowAddOptionsGroupModalonClick(e, optionsparentgroupname);
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="optionToggleContainerWrap">{buildSelectiveToggleOptionList}</div>
          </div>
        </div>

        <div className={`modalWrap ${showAddOptionsGroupModalClass}`}>
          <form onSubmit={this.handleAddOptionsGroupOnSubmit}>
            <div className="modalInner successInner">
              <div className="successMessage">
                <div className="successMessageIcon">
                  <i className="material-icons">done</i>
                </div>
                <h2 className="successMessageHeading">
                  <strong>Add</strong> {title}
                </h2>
                <p className="successMessageDetails">Patient added successfully to the database.</p>
                <input type="text" id="optionsGroupNameField" name="optionsGroupNameField" />
              </div>
              <div>
                <button type="submit">Add Assessment</button>
                <div className="float-right">
                  <button
                    type="button"
                    className="button-primary buttonCancel"
                    onClick={this.handleHideAddOptionsGroupModalonClick}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SelectiveToggleOptions;

SelectiveToggleOptions.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      groupid: PropTypes.number.isRequired,
      groupname: PropTypes.string.isRequired,
      groupitems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    }),
  ).isRequired,
};
