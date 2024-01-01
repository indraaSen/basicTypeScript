//class should implement this interface 
var Grahak = /** @class */ (function () {
    function Grahak(vegiName, vegiQuantity) {
        var _this = this;
        //and call this function for output 
        this.totalPrize = function () {
            var prize = 5;
            var finalValue = [];
            for (var i = 0; i < _this.vegitableName.length; i++)
                finalValue.push("total prize of the ".concat(_this.vegitableName[i], " for ").concat(_this.vegitbaleQuantity, " kg is = Rs. ").concat(prize * _this.vegitbaleQuantity));
            return '' + finalValue.join('\r\n');
        };
        this.vegitableName = vegiName;
        this.vegitbaleQuantity = vegiQuantity;
    }
    return Grahak;
}());
//all vegitableName and qty should be pass as paramater  ['paalak','methi','baigan','lauki','pattaGobhi']
var value = new Grahak(['paalak', 'methi', 'baigan', 'lauki', 'pattaGobhi'], 2);
console.log(value.totalPrize());
