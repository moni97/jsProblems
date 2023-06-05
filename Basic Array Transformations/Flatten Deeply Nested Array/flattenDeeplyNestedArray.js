/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    res = []
    var flattened = (arr, n, res) => {
        if(n == 0) {
            for(let i=0; i < arr.length; i++) {
                res.push(arr[i])
            }
        } else {
            for(let i=0; i < arr.length; i++) {
                if(!Array.isArray(arr[i])) {
                    res.push(arr[i])
                } else {
                    if (n > 0) {
                        console.log(arr[i], n)
                        res = flattened(arr[i], n-1, res)
                    } else {
                        res.push(arr[i])
                    }
                }
            }
        }
        return res
    }
    return flattened(arr, n, res)
};
