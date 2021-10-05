 function sum(arr) {
    return arr.reduce(function(total, element) {
        return total + element;
    })
}

function multiply(arr) {
    return arr.reduce(function(total, element) {
        return total * element;
    })
}

function reverse(st) {
    return st.split('').reverse().join('');
}

function filterLongWords(arr, i) {
    return arr.filter(v => v.length > i);
}