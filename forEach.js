// forEach(function(element, index, array) { /* ... */ }, thisArg)


Array.prototype.myforEach = function(cb,thisArg){
    if(typeof cb != 'function'){
        throw new TypeError(cb + ' is not a function')
    }
    for (let index = 0; index < this.length; index++) {
        cb(this[index],index,this)
    }
}