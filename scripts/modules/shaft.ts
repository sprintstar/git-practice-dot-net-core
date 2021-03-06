import { Lift } from './Lift';
import { Floor } from './Floor';

export class Shaft {

    _name: string;

    _lift: Lift;

    _floors: Floor[];

    constructor(lift: Lift, floors: Floor[], name: string = 'Lift shaft') {
        this._name = name;
        this._lift = lift;
        this._floors = floors;
        console.log('New Shaft created (' + this._name + ') containing lift ' + lift._name + ' and ' + this._floors.length + ' floors');
    }
}