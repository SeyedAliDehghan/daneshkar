function food(name,type,price,deliverTime,isReady,rateCount){
    let comments=[];
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
        // console.log("New comment added and the comments are like this now:",comments)
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
function comment(author,date,rate,text,whichFood){
    this.author=author;
    this.date=date;
    this.rate=rate;
    this.text=text;
    this.setRate=function (rate){
        // console.log("rar=",rate)
        whichFood.setRate(rate);
    };
    this.setRate(rate);
}
// let comment1=[];
const newfood= new food('pizza','fastfood',5000,5,false);
const newCm=new comment("mamad","03/04",5,"fine",newfood)
const secCm=new comment("ali","03/04",0,"bad",newfood)

// newfood.order(true);
newfood.addComment(newCm);
newfood.addComment(secCm);
console.log(newfood);
// newfood.setRate(5);
// newfood.setRate(5);
// newfood.setRate(0);
