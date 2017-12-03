define(['练习用js3.js'], function(isarr) {
    function sortArr(arr) {
        if (isarr(arr)) {
            return arr.sort(function(a, b) {
                return a - b
            })
        } else {
            return 'error';
        }
    }
    return sortArr;
});