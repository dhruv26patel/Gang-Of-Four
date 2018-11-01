class Employee {

    constructor(name='unnamed person') {
        this._name = name;
        this._skillsList = [];
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get skillsList() {
        return this._skillsList.join(', ');
    }

    addSkillsToList(item) {
        this._skillsList.push(item);
    }

    clone() {
        var proto = Object.getPrototypeOf(this);
        var cloned = Object.create(proto);

        cloned._name = this._name;
        cloned._skillsList = [...this._skillsList];

        return cloned;
    }

}

module.exports = Employee;
