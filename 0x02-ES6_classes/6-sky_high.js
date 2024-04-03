import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors !== 'number') throw new Error('floors must be a number');
    this._floors = floors;
  }

  get floors() {
    return (this._floors);
  }

  set floors(floorsNum) {
    if (typeof floorsNum !== 'number') throw new Error('floors must be a number');
    this._floors = floorsNum;
  }

  evacuationWarningMessage() {
    return (`Evacuate slowly the ${this.floors} floors`);
  }
}
