// To create a sum(10)(20)(40) 



let sum1=function(param1){
    let sum2=function(param2){

        let sum3=function(param3){
            total=param1+param2+param3;
            console.log(total);
            return total;
        }
        return sum3;

    }

    return sum2;

}
n1=parseInt(prompt("Enter num1"));
n2=parseInt(prompt("Enter num2"));
n3=parseInt(prompt("Enter num3"));
sum1(n1)(n2)(n3);