/**********
*   File: core-arch-nn.js
*   Version: 0.0.1 (alpha)
*   Author: TanayMehta
*   Github: https://github.com/tanaymehta28
*   Twitter: @Tanaymehta28
*   License: MIT
**********/
function relu(inputDat){
    return ((MATH.exp(inputDat))/(MATH.exp(inputDat))+1);
};

function NeuralNetArch(neurons,hiddenLayers,inputDat){
    if (typeof(inputDat) == Array){
        for (let j=0;j<=hiddenLayers;j++){                  //Inside the Main NeuralNetwork
            for(let k=0;k<=neurons;k++){                    //Inside each Hidden layer
                for(let i=0;i<=(inputDat.length-1);i++){    //Inside each Neuron
                    weights = MATH.random();
                    temp_dat = inputDat[i];
                    IW = weights*temp_dat;
                    out = relu(IW);
                    OUTPUT = [];
                    OUTPUT.push(out);
                }
            }
        }
    }
    else{
        throw console.error("The INPUT DATA must be an Array");
    }
}