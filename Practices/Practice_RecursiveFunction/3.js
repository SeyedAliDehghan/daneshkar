function integerCount(arr,result){
    if(!(arr instanceof Array) || typeof result!=="number"|| result<0) return ('please insert correct values')
    if(arr.length===0 || !(arr instanceof Array)) return result
    arr.map( item=> {
            if (typeof item == 'number' && (item % 1) === 0) ++result
            if (item instanceof Array) result = +integerCount(item, result)
        }

    )
    return result
}

let arr=[[[5], 3], 0, 2, ['foo'], [], [4, [5.1, 6]]]
console.log(integerCount(arr,0))