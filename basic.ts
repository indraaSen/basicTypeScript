//create interface called vegitables
interface vegitable {
    
    //vegitableName atleast 5
    vegitableName : string[];

    //order qty  5 * qty
    vegitbaleQuantity : number ;

    //totalPrice : function return type should be string ('total price is = value')
    totalPrize : () => string;
}

//class should implement this interface 
class Grahak implements vegitable {

   vegitableName: string[];
   vegitbaleQuantity: number;

   constructor(vegiName : string[], vegiQuantity:number){
    this.vegitableName = vegiName;
    this.vegitbaleQuantity = vegiQuantity;
   }

   //and call this function for output 
   totalPrize = () : string  => {
    const prize:number = 5;
    const finalValue:string[] = [];
    for(let i = 0; i < this.vegitableName.length; i++)
        finalValue.push(`total prize of the ${this.vegitableName[i]} for ${this.vegitbaleQuantity} kg is = Rs. ${prize * this.vegitbaleQuantity}`);
    return '' + finalValue.join('\r\n');
   }

}

//all vegitableName and qty should be pass as paramater  ['paalak','methi','baigan','lauki','pattaGobhi']
let value = new Grahak(['paalak','methi','baigan','lauki','pattaGobhi'], 2);

console.log(value.totalPrize());

