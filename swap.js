var a= 7;
var b = 5;
var temp;
// console.log("Before swap a = ", a, "b = ",b);
 temp= a; 
a=b;
b= temp;
// console.log("After swap : a =",a,"b =" ,b);

var x= 5;
var y= 7;

x= x + y; //now x er maan hocche ata

y= x-y; //now y er maan hocche ata

x = x-y;
// console.log("After Swap : x =",x, "y = ", y);

var p = 7;
var q = 5;

[p,q] = [q,p];
// console.log("After Swap : p =",p, "q = ", q);

var first ='Rafsan';
var second = 'Samira';

[first ,second] = [second , first, second];
console.log("After swap : first =",first, "second =", second) ;

