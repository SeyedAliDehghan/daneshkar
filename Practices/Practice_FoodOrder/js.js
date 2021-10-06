function food(name,type,price,deliverTime,comments,isReady,rateCount){
    this.name=name;
    this.type=type;
    this.price=price;
    this.deliverTime=deliverTime;
    this.rate=0;
    this.ratecount=0
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
      if (this.ratecount==0){
          this.rate=newRate;
          this.ratecount+=1;
          console.log("first rate added and its:",this.rate);
          console.log("now rate count: ",this.ratecount)
      }else{
          let AVrate=this.rate*this.ratecount;
          let newAVrate=AVrate+newRate;
          this.ratecount++;
          console.log("rate count=",this.ratecount)
          this.rate=newAVrate/this.ratecount;
          console.log("new rate for this food is ", this.rate)
      }
    };
}
let comment1=[];
const newfood= new food('pizza','fastfood',5000,5,comment1,false);
// console.log(newfood);
// newfood.order(true);
// newfood.addComment("kossher")
// newfood.addComment("tokhmi")
newfood.setRate(5);
newfood.setRate(5);
newfood.setRate(0);
