function contain(obj,prm){
    if (!(obj instanceof Object)) return ('please insert an object')

    if (!(obj instanceof Object) && obj.key!==prm) return false
    for (let key in obj){
        if (obj[key]===prm) return true
        if (obj[key] instanceof Object) return contain(obj[key], prm)
    }
    return false
}

const obj = {
    d: {
        c: {
            b: {
                a: {
                    number: 20,
                    str: 'hey'
                }
            }
        }
    }
}

console.log(contain(obj,20));
console.log(contain(obj,21));