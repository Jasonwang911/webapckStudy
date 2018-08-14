function deepClone(parent, type) {
    let child = type || {};
    for(let key in parent) {
        let value = parent[key];
        if(typeof value === 'object') {
            // 子集是对象或者是数组需要区分并且递归
            let childType = Object.prototype.toString.call(value) === 'object Array' ? [] : {};
            child[key] = deepClone(value, childType);
        } else {
            child[key] = value;
        }
    }
    return child;
}

let obj = {name: 'jason', age: 16, address: { country: 'China', info: 'hebei'}, family: ['mama', 'nick', 'baby'], fn: function() {console.log(1111)}};

console.log(deepClone(obj))