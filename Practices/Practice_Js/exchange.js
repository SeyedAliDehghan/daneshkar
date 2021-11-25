function currencyExchange(money,DerhamNum,EuroNum,DollarNum,DerhamPrice,Europrice,DollarPrice) {
    if(typeof(money)!='number'||typeof(DerhamNum)!='number'||typeof(EuroNum)!='number'||typeof(DollarNum)!='number'
        || typeof(DerhamPrice)!='number' ||typeof(Europrice)!='number'||typeof(DollarPrice)!='number')
        return console.log('please insert correct input')
    let DerhamLim =Math.min(Math.floor(money / DerhamPrice),DerhamNum)
    let EuroLim =Math.min(Math.floor(money / Europrice),EuroNum)
    let DollarLim =Math.min(Math.floor(money / DollarPrice),DollarNum)
    let result = 0
    for (let i = 0; i <= DerhamLim; i++) {
        for (let j = 0; j <= EuroLim; j++) {
            for (let k = 0; k <= DollarLim; k++) {
                if(money===(i*DerhamPrice+j*Europrice+k*DollarPrice)) {
                    result++
                    console.log('derham:',i,'Euro:',j,'Dollar:',k)
                }
            }
        }

    }
    return console.log('result:',result)
}
currencyExchange(10000,1,1,1,5000,3000,7000)
currencyExchange(6000,3,3,3,3000,2000,3000)
currencyExchange(32000,2,1,1,4200,7500,3600)