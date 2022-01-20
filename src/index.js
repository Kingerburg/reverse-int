module.exports = function reverse (n) {
    let xn = n.toString();
    let rn = xn.split('');
    return parseInt(rn.reverse().join(''));
}
