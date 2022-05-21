// map(function(element, index, array) { /* ... */ }, thisArg)

Array.prototype.myMap = function(cb,thisArg){
    let modifiedArray = [];
    for (let index = 0; index < this.length; index++) {
        modifiedArray.push(cb(this[index],index,this))
    }

    return modifiedArray;
}