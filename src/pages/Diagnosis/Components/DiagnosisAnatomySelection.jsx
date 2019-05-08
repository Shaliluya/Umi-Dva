import React, { Component } from 'react';

class DiagnosisAnatomySelection extends Component {
  state = {
    bodyPartSelected: 0,
    anatomy: {
      bodyparts: [
        {
          id: 1,
          name: 'Part One',
          bodypartsdetails: [
            {
              id: 1,
              name: 'Detail Part Something',
            },
            {
              id: 2,
              name: 'Detail Part Other',
            },
            {
              id: 3,
              name: 'Detail Part Super',
            },
            {
              id: 4,
              name: 'Detail Part Another',
            },
          ],
        },
        {
          id: 2,
          name: 'Part Two',
          bodypartsdetails: [],
        },
        {
          id: 3,
          name: 'Part Three',
          bodypartsdetails: [],
        },
        {
          id: 4,
          name: 'Part Four',
          bodypartsdetails: [],
        },
      ],
    },
  };

  handleBodyPartOnChange = (e) => {
    this.setState({
      bodyPartSelected: e.target.value - 1,
    });
  };

  handleBodyPartDetailOnChange = (e) => {
    console.log(e.target.value);
  };

  render() {
    const { anatomy } = this.state;
    const { bodyparts } = anatomy;

    const bodyPartList = bodyparts.map(bodyPart => (
      <option key={bodyPart.id} value={bodyPart.id}>
        {bodyPart.name}
      </option>
    ));

    const { bodyPartSelected } = this.state;
    const { bodypartsdetails } = bodyparts[bodyPartSelected];

    const bodyPartDetailsList = bodypartsdetails.map(bodyPart => (
      <option key={bodyPart.id} value={bodyPart.name}>
        {bodyPart.name}
      </option>
    ));

    return (
      <div className="column">
        <div className="row">
          <div className="column">
            <div className="headingGroup">
              <hr />
              <h2 className="heading">Anatomy</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <fieldset>
              <label htmlFor="bodyPartField">Select Body Part</label>
              <div className="formGroupIcon">
                <select id="bodyPartField" onChange={this.handleBodyPartOnChange}>
                  {bodyPartList}
                </select>
                <i className="material-icons">expand_more</i>
              </div>
            </fieldset>
          </div>
          <div className="column">
            <fieldset>
              <label htmlFor="bodyPartDetailsField">Select Body Part Detail</label>
              <div className="formGroupIcon">
                <select id="bodyPartDetailsField" onChange={this.handleBodyPartDetailOnChange}>
                  {bodyPartDetailsList}
                </select>
                <i className="material-icons">expand_more</i>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    );
  }
}

export default DiagnosisAnatomySelection;
