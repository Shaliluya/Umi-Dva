import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectiveToggleOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      groupname: '',
      groupitems: [],
      showAddOptionModal: false,
      optionsParentGroupName: '',
      optionsGroupId: '',
    };
  }

  componentDidMount() {
    const { groupname, groupitems } = this.props;

    this.setState({
      groupname,
      groupitems,
    });
  }

  componentDidUpdate(prevProps) {
    const { groupitems } = this.props;

    if (groupitems !== prevProps.groupitems) {
      this.setState({
        groupitems,
      });
    }
  }

  handleSearchOnChange = (e) => {
    const searchString = e.target.value;

    this.setState({
      searchString,
    });
  };

  handleShowAddOptionModalonClick = (e, optionsparentgroupname, optionsgroupid) => {
    e.preventDefault();

    this.setState({
      showAddOptionModal: true,
      optionsParentGroupName: optionsparentgroupname,
      optionsGroupId: optionsgroupid,
    });
  };

  handleHideAddOptionModalonClick = (e) => {
    e.preventDefault();

    this.setState({
      showAddOptionModal: false,
      optionsParentGroupName: '',
      optionsGroupId: '',
    });
  };

  handleAddOptionOnSubmit = (e) => {
    e.preventDefault();

    const { addOption } = this.props;
    const optionNewName = e.target.optionNameField.value;

    const { optionsParentGroupName, optionsGroupId } = this.state;

    if (optionNewName !== '') {
      addOption(optionNewName, optionsParentGroupName, optionsGroupId);
    }

    this.setState({
      showAddOptionModal: false,
    });
  };

  render() {
    const { groupname, groupitems, searchString } = this.state;
    const { optionsparentgroupname, optionsgroupid, handleSelectOptionOnClick } = this.props;

    let newGroupOptions = groupitems;
    const newSearchOption = searchString.trim().toLowerCase();

    if (newSearchOption.length > 0) {
      newGroupOptions = newGroupOptions.filter(disease => disease.name.toLowerCase().match(newSearchOption));
    }

    const buildSelectiveToggleOptionItems = newGroupOptions.map((optionItem) => {
      const { id, name, itemSelected } = optionItem;
      const optionId = id;

      const itemSelectedClass = itemSelected ? 'assessmentItemSelected' : '';

      return (
        <button
          key={id}
          type="button"
          className={`button-clear buttonOptionToggle ${itemSelectedClass}`}
          onClick={(e) => {
            handleSelectOptionOnClick(e, optionsparentgroupname, optionsgroupid, optionId);
          }}
        >
          <span className="buttonOptionToggleDescription">{name}</span>
        </button>
      );
    });

    const { showAddOptionModal } = this.state;
    const showAddOptionModalClass = showAddOptionModal ? 'showModal' : 'hideModal';

    return (
      <div className="optionToggleListContainer">
        <div className="optionToggleListInnerContainer">
          <h3 className="heading">{groupname}</h3>
          <div className="formVertical">
            <div className="formGroup formGroupIcon">
              <input
                type="text"
                placeholder="Search Treatment One"
                className="formControl searchInput"
                onChange={(e) => {
                  this.handleSearchOnChange(e);
                }}
              />
              <i className="material-icons">search</i>
            </div>
            <div className="formControlGroup">
              <button
                type="button"
                className="button-primary formControlAdd"
                onClick={(e) => {
                  this.handleShowAddOptionModalonClick(e, optionsparentgroupname, optionsgroupid);
                }}
              >
                Add
              </button>
            </div>
          </div>
          <div className="optionToggleListWrap">{buildSelectiveToggleOptionItems}</div>
        </div>

        <div className={`modalWrap ${showAddOptionModalClass}`}>
          <form onSubmit={this.handleAddOptionOnSubmit}>
            <div className="modalInner successInner">
              <div className="successMessage">
                <div className="successMessageIcon">
                  <i className="material-icons">done</i>
                </div>
                <h2 className="successMessageHeading">
                  <strong>Add</strong> New Item
                </h2>
                <p className="successMessageDetails">Patient added successfully to the database.</p>
                <input type="text" id="optionNameField" name="optionNameField" />
              </div>
              <div>
                <button type="submit">Add Assessment</button>
                <div className="float-right">
                  <button
                    type="button"
                    className="button-primary buttonCancel"
                    onClick={(e) => {
                      this.handleHideAddOptionModalonClick(e);
                    }}
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

export default SelectiveToggleOption;

SelectiveToggleOption.propTypes = {
  groupname: PropTypes.string.isRequired,
  groupitems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      itemSelected: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
