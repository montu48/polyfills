Array.prototype.myIndexOf = function (searchElement) {
    startFrom = (startFrom) ? startFrom : 0;
    if(startFrom >= this.length) {
        return -1
    }
    
    for (let i = startFrom; i <= this.length; i++) {
        console.log(this[i])
        if (this[i] == searchElement) {
            return i
        }
        return -1;
    }
}