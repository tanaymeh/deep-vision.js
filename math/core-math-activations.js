/* <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/mathjs/5.1.2/math.min.js'></script> */
//This File contains all the Activation Functions

var a;
var n;
var alpha;
function sigmoid(a){
  return (MATH.exp(x)/(MATH.exp(x)+1));
}
function iden(a){
  return a;
}
function binaryStep(a){
  if (a<0){
    return 0;
  }
  else {
    return 1;
  }
}
function tanH(a){
  return ((MATHS.exp(a)-MATH.exp(-a))/(MATH.exp(a)+MATH.exp(-a)))
}
function arcTan(a){
  return MATH.atan(a)
}
function softSign(a){
  return ((a)/(1+(MATH.abs(a)))
}
function isru(a,alpha){
  return (a/(MATH.sqrt(1+alpha*(MATH.pow(a,2)))))
} 
function relu(a){
  if (a<0){
    return 0;
  } 
  else {
    return a;
  }
}
function leakyRelu(a){
  if (a<0){
    return (0.01*a);
  }
  else {
    return a;
  }
}
function pRelu(a,alpha){
  if (a<0){
    return (alpha*a);
  }
  else {
    return a;
  }
}
function rRelu(a,alpha){
  if (a<0){
    return (alpha*a);
  }
  else {
    return a;
  }
}
function elu(a,alpha){
  if (a<0){
    return (alpha*((MATH.exp(a))-1));
  }
  else{
    return a;
  }
}
function isrlu(a,alpha){
  if (a<0){
      return (a/(MATH.sqrt(1+alpha*(MATH.pow(a,2)))));
  }
  else{
    return a;
  }
}
function softPlus(a){
    return (MATH.log(1+(MATH.exp(a))));
}
function siLU(a){
  return (sigmoid(a)*a);
}
function sinu(a){
  return MATH.sin(a);
}
function sinc(a){
  if (a==0){
    return 1;
  }
  else {
    return (MATH.sin(a)/a);
  }
}
function gauss(a){
  return MATH.exp((MATH.pow(-a,2)));
}
