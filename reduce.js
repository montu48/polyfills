// reduce(function(accumulator, currentValue, currentIndex, array) { /* ... */ }, initialValue)

Array.prototype.myReduce = function (cb, initialValue) {
    var accumulator = initialValue;

    for (let index = 0; index < this.length; index++) {
        accumulator = accumulator ? cb(accumulator, this[index], index, this) : this[index]
    }

    return accumulator;
}