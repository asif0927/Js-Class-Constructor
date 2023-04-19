let products=[]
class Device{
    constructor(brand,model,screensize,batterylevel,price,saleprice,discountpercantage,salecount){
        this.brand=brand;
        this.model=model;
        this.screensize=screensize;
        this.batterylevel=batterylevel;
        this.price=price;
        this.saleprice=saleprice;
        this.discountpercantage=discountpercantage;
        this.salecount=salecount;
        if(discountpercantage>0){
            this.saleprice=this.saleprice-Math.floor(this.saleprice*this.discountpercantage/100);
        }
        this.calculateProfit=function(){
            if(saleprice>price){
                console.log(`${this.saleprice-this.price} manat gelir elde olunub`);
                return this.saleprice-this.price
            }
            else{
                console.log(`${this.price-this.saleprice} manat ziyanla satilib`);
                return -(this.saleprice-this.price)
            }
        }
        this.displayBatteryLevel=function(){
            console.log(`${this.batterylevel}`);
        }
        this.displayDetails=function(){
            console.log(`${this.brand} ${this.model} ${this.screensize} ${this.batterylevel}`);
        }
    }
}
class Laptop extends Device{
    constructor(brand,model,screensize,batterylevel,price,saleprice,discountpercantage,salecount,isRgbKeyBoard){
        super(brand,model,screensize,batterylevel,price,saleprice,discountpercantage,salecount);
        this.isRgbKeyBoard=isRgbKeyBoard;
        if(isRgbKeyBoard){
           console.log(true);
        }
        else{
            console.log(false);
        }
    }
}
class Phone extends Device{
    constructor(brand,model,screensize,batterylevel,price,saleprice,discountpercantage,salecount,isSmart){
        super(brand,model,screensize,batterylevel,price,saleprice,discountpercantage,salecount);
        this.isSmart=isSmart;
        if(isSmart==true){
            console.log(true);
        }
        else{
            console.log(false);
        }
    }
}
let laptop1=new Laptop("HP","Pavilion",1490,75,1900,2000,4,38,true);
let laptop2=new Laptop("Apple","iMac",1900,45,2500,3000,10,79,false);
let laptop3=new Laptop("Acer","Nitro5",1300,90,1500,1800,10,14,true);
let phone1=new Phone("Xiaomi","Redmi7",320,85,250,350,4,99,true);
let phone2=new Phone("Iphone","IPhone11",500,35,1000,1200,10,19,true);
let phone3=new Phone("Iphone","IPhone12",540,60,1500,1900,10,109,true);
products.push(laptop1);
products.push(laptop2);
products.push(laptop3);
products.push(phone1);
products.push(phone2);
products.push(phone3);
//console.log(products);
/*1-ci funksiya */
function FilterbyPrice(products,price){
    let filterproducts=products.filter(product=>product.price>price);
    let filtermodel=filterproducts.map(product=>product.brand);
    return filtermodel;
}
console.log(FilterbyPrice(products,1000));

/*2-ci funksiya */
count=0;
function FilteredbyName(products,name){
    for (let i = 0; i < products.length; i++) {
       if(products[i].brand.toLowerCase()==name.toLowerCase()){
        count++;
       }
    }
    return count;
}
console.log(FilteredbyName(products,"Iphone"));

/*3-cu funksiya */
function GetTotalProfit(products){
   let totalprofit=0;
   for(let i=0;i<products.length;i++){
    profit=products[i].saleprice-products[i].price;
    totalprofit+=profit;
   }
   return totalprofit;
}
console.log(GetTotalProfit(products));
