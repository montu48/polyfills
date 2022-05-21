// filter(function (element, index, array) { /* ... */ }, thisArg)


Array.prototype.myFilter = function (cb, thisArg) {
    var arr = [];
    for (let index = 0; index < this.length; index++) {
        if (cb(this[index], index, this)){
            arr.push(this[index]);
        }
    }
    return arr;
}