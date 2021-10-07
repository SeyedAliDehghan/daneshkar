function food(name,type,price,deliverTime,isReady,rateCount){
    let comments=[];
    return{
        name:name,
        type:type,
        price:price,
        deliverTime:deliverTime,
        rate:0,
        ratecount:0,
        comments:comments,
        isReady:isReady,
        order:function (isPremium){
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
        },
        addComment:function (newCM){
            comments.push(newCM);
            console.log("New comment added and the comments are like this now:",comments)
        },
        setRate:function (newRate){
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
        }
    }
}
function comment(author,date,rate,text,whichFood){
    theRate=rate;
    return{
        author:author,
        date:date,
        rate:rate,
        text:text,
        setRate:function (rate){
            // console.log("rar=",rate)
            whichFood.setRate(theRate);
        }
    }

}
// let comment1=[];
const newfood= food('pizza','fastfood',5000,5,false);
const newCm= comment("mamad","03/04",5,"fine",newfood);
newCm.setRate();
const secCm= comment("ali","03/04",0,"bad",newfood);
secCm.setRate();
// console.log(newfood);
// newfood.order(true);
newfood.addComment(newCm);
newfood.addComment(secCm);
console.log(newfood);
// newfood.setRate(5);
// newfood.setRate(5);
// newfood.setRate(0);
