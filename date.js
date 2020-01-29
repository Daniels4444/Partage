"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date = /** @class */ (function () {
    function date() {
        this._year = 1900;
        this._month = 1;
        this._day = 1;
    }
    Object.defineProperty(date.prototype, "year", {
        get: function () {
            return this.year;
        },
        set: function (year) {
            this.year = year;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(date.prototype, "month", {
        get: function () {
            return this.month;
        },
        set: function (month) {
            this.month = month;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(date.prototype, "day", {
        get: function () {
            return this.day;
        },
        set: function (day) {
            this.day = day;
        },
        enumerable: true,
        configurable: true
    });
    date.prototype.ToString = function () {
        return (this._year + "-" + this._month + "-" + this._day);
    };
    date.prototype.create = function (year, month, day) {
        return (year + "-" + month + "-" + day);
    };
    date.prototype.setDate = function (newYear, newMonth, newDay) {
        this._year = newYear;
        this._month = newMonth;
        this._day = newDay;
        return (this._year + "-" + this._month + "-" + this._day);
    };
    date.prototype.yesterday = function () {
        var year;
        var month;
        var day;
        if (this._day == 1) {
            if (this._month == 1) {
                day = 31,
                    year = this._year - 1;
                month = 12;
            }
            else if (this._month == 2 || this._month == 4 || this._month == 6 || this._month == 8 || this._month == 9 || this._month == 11) {
                day = 31;
                year = this._year;
                month = this._month - 1;
            }
            else if (this._month == 3) {
                year = this._year;
                month = this._month - 1;
                day = 28;
            }
            else {
                year = this._year;
                month = this._month - 1;
                day = 30;
            }
        }
        else {
            year = this._year;
            month = this._month;
            day = this._day - 1;
        }
        return (year + "-" + month + "-" + day);
    };
    date.prototype.tomorrow = function () {
        var year;
        var month;
        var day;
        if (this._month == 12) {
            if (this._day == 31) {
                year = this._year + 1;
                month = 1;
                day = 1;
            }
            else {
                year = this._year;
                month = this._month;
                day = this._day + 1;
            }
        }
        if (this._month == 1 || this._month == 3 || this._month == 5 || this._month == 7 || this._month == 8 || this._month == 10) {
            if (this._day == 31) {
                year = this._year;
                month = this._month + 1;
                day = 1;
            }
            else {
                year = this._year;
                month = this._month;
                day = this._day + 1;
            }
        }
        else if (this._month == 2) {
            if (this._day == 28) {
                year = this._year;
                month = this._month + 1;
                day = 1;
            }
            else {
                year = this._year;
                month = this._month;
                day = this._day + 1;
            }
        }
        else {
            if (this._day == 30) {
                year = this._year;
                month = this._month + 1;
                day = 1;
            }
            else {
                year = this._year;
                month = this._month;
                day = this._day + 1;
            }
        }
        return (year + "-" + month + "-" + day);
    };
    date.prototype.addDay = function (jour) {
        if (jour == 0) {
            jour = 1;
        }
        this._day = this._day + jour;
        return (this._year + "-" + this._month + "-" + this._day);
    };
    date.prototype.subDay = function (jour) {
        if (jour == 0) {
            jour = 1;
        }
        this._day = this._day - jour;
        return (this._year + "-" + this._month + "-" + this._day);
    };
    date.prototype.addMonth = function (mois) {
        if (mois == 0) {
            mois = 1;
        }
        this._month = this._month + mois;
        return (this._year + "-" + this._month + "-" + this._day);
    };
    date.prototype.subMonth = function (mois) {
        if (mois == 0) {
            mois = 1;
        }
        this._month = this._month - mois;
        return (this._year + "-" + this._month + "-" + this._day);
    };
    date.prototype.addYear = function (annee) {
        if (annee == 0) {
            annee = 1;
        }
        this._year = this._year + annee;
        return (this._year + "-" + this._month + "-" + this._day);
    };
    date.prototype.subYear = function (annee) {
        if (annee == 0) {
            annee = 1;
        }
        this._year = this._year - annee;
        return (this._year + "-" + this._month + "-" + this._day);
    };
    return date;
}());
exports.date = date;
