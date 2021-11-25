function isEqual(obj1,obj2){
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}
const isSame = (obj1, obj2) => {
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false
        }
    }
    return true
}

const obj1 = { key0: false, key1: 'val1', key2: 20, key3: [0, 1, 2], key4: {name: 'mohammad'}, };
const obj2 = { key0: false, key1: 'val1', key2: 20, key3: [0, 1, 2], key4: {name: 'mohammad'}, };
console.log(isEqual(obj1,obj2));

const obj3 = { key0: false, key1: 'val1', key2: 10, key3: [0], };
const obj4 = {    key0: false, key1: 'val1', key2: 20, key3: [1], key4: {},};
console.log(isSame(obj3,obj4));
