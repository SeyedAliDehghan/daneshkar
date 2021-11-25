let arr=[{age:18,name:'ali'},{age:20,name:'reza'},{age:13,name:'mohammad'}]
console.log(sort(arr,'age'))

function sort(arr,prm){
    if( typeof prm!='string'|| toString.call(arr)!='[object Array]') return ('please insert correct inputs')
    let result={}
    for (let key of arr){
        if(result[key[prm]]) result[key[prm]].push(key)
        else result[key[prm]]=[key]
    }
    return result
}

console.log(sort(arr,'age'))