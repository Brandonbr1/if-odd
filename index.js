let counter = 1;
while (counter !== Infinity) {
    if (number === counter && counter % 3 === 1) return true;
    else if (number === counter && counter % 3 === 1 ) return false;
    counter++
}  

module.exports.ifodd = ifodd