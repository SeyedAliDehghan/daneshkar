function food(name,type,price,deliverTime,rate,comments,isReady,rateCount){
    this.name=name;
    this.type=type;
    this.price=price;
    this.deliverTime=deliverTime;
    this.rate=rate;
    this.ratecount=rateCount;
    this.comments=comments;
    this.isReady=isReady;
    this.order=function (isPremium){
        if (isPremium){
            console.log("Customer is premium")
            console.log(price*0.8)
            if (rate==undefined){
                console.log("Food is not rated yet")
            }else {
                console.log(rate)
            }
        }else{
            console.log("no");
        }
    };
    this.addComment=function (newCM){
        comments.push(newCM);
        console.log("New comment added and the comments are like this now:",comments)
    };
    this.setRate=function (newRate){
      if (rate===undefined){
          this.rate=newRate;
          console.log("new rate added and its:",this.rate);
      }else{
          this.rate=(newRate+this.rate)
      }
    };
}
let comment1=[];
const newfood= new food('pizza','fastfood',5000,5,undefined,comment1,false);
// console.log(newfood);
// newfood.order(true);
// newfood.addComment("kossher")
// newfood.addComment("tokhmi")
// newfood.setRate(5);