let milks=[];
let sum=0;
class Product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
}
class Milk extends Product{
    constructor(name,price,fatpercent){
        super(name,price);
        this.fatpercent=fatpercent;
    }
}
let milk1=new Milk("Milla",5,50);
let milk2=new Milk("Athena",4,55);
let milk3=new Milk("Palsut",3,45);
milks.push(milk1);
milks.push(milk2);
milks.push(milk3);
for (let i = 0; i < milks.length; i++) {
    sum+=milks[i].fatpercent
    avarage=Math.floor(sum/milks.length);
}
console.log(avarage);