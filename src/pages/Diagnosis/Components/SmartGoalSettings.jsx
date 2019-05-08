import React, { Component } from 'react';

class SmartGoalSettings extends Component {
  state = {};

  render() {
    return (
      <div className="column">
        <div className="row">
          <div className="column">
            <div className="headingGroup">
              <hr />
              <h2 className="heading">SMART Goal Setting</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <div className="smartGoalSettingsItemsWrap">
              <div className="smartGoalSettingsItemsListHeadings">
                <div className="row">
                  <div className="column">
                    <div className="smartGoalSettingsColumnHeadingWrap">
                      <h3 className="smartGoalSettingsColumnHeading">S</h3>
                      <p className="smartGoalSettingsColumnDescription">Specific</p>
                    </div>
                  </div>

                  <div className="column">
                    <div className="smartGoalSettingsColumnHeadingWrap">
                      <h3 className="smartGoalSettingsColumnHeading">M</h3>
                      <p className="smartGoalSettingsColumnDescription">Measurable</p>
                    </div>
                  </div>

                  <div className="column">
                    <div className="smartGoalSettingsColumnHeadingWrap">
                      <h3 className="smartGoalSettingsColumnHeading">A</h3>
                      <p className="smartGoalSettingsColumnDescription">Attainable</p>
                    </div>
                  </div>

                  <div className="column">
                    <div className="smartGoalSettingsColumnHeadingWrap">
                      <h3 className="smartGoalSettingsColumnHeading">R</h3>
                      <p className="smartGoalSettingsColumnDescription">Relevant</p>
                    </div>
                  </div>

                  <div className="column">
                    <div className="smartGoalSettingsColumnHeadingWrap">
                      <h3 className="smartGoalSettingsColumnHeading">T</h3>
                      <p className="smartGoalSettingsColumnDescription">Timely</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="smartGoalSettingsItemsList">
                <div className="smartGoalSettingsItem">
                  <div className="row">
                    <div className="column">
                      <div className="smartGoalSettingsInputWrap">
                        <input type="text" />
                      </div>
                    </div>

                    <div className="column">
                      <div className="smartGoalSettingsInputWrap">
                        <input type="text" />
                      </div>
                    </div>

                    <div className="column">
                      <div className="smartGoalSettingsInputWrap">
                        <input type="text" />
                      </div>
                    </div>

                    <div className="column">
                      <div className="smartGoalSettingsInputWrap">
                        <input type="text" />
                      </div>
                    </div>

                    <div className="column">
                      <div className="smartGoalSettingsInputWrap">
                        <input type="date" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="smartGoalSettingsItem">
                  <div className="row">
                    <div className="column">
                      <div className="smartGoalSettingsInputWrap">
                        <input type="text" />
                      </div>
                    </div>

                    <div className="column">
                      <div className="smartGoalSettingsInputWrap">
                        <input type="text" />
                      </div>
                    </div>

                    <div className="column">
                      <div className="smartGoalSettingsInputWrap">
                        <input type="text" />
                      </div>
                    </div>

                    <div className="column">
                      <div className="smartGoalSettingsInputWrap">
                        <input type="text" />
                      </div>
                    </div>

                    <div className="column">
                      <div className="smartGoalSettingsInputWrap">
                        <input type="date" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="addSmartGoalSettingsWrap">
                <div className="addSmartGoalSettingsDescription">
                  <p>Add Another SMART Goal Setting</p>
                </div>
                <button type="button" className="button-clear addSmartGoalSettings">
                  <i className="material-icons">add_circle</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SmartGoalSettings;
