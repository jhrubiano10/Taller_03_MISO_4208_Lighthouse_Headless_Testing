'use strict';
const ps = require('ps-node');
const usage = require('usage');
const [,,type, value] = process.argv;
let average = {
    memory : 0, 
    cpu : 0, 
    total : 0
};

//Retorna el promedio de las muestras obtenidas...
const averageData = () => {
    let {
        memory, 
        cpu, 
        total
    } = average;
    console.log(`${(cpu / total).toFixed(1)};${(memory / total).toFixed(1)};${total}`)
};

const findProcessByname = (nameProcess) => {
    //Reivisar todos los procesos...
    ps.lookup({ }, (err, resultList ) => {
        if (err) {
            throw new Error( err );
        }
        for(let process of resultList) {
            let partCommand = process.command.split("/");
            let nameCommand = partCommand[partCommand.length - 1];
            if(nameCommand.toLowerCase() === nameProcess.toLowerCase()) {
                usageProcess(process.pid);
                break;
            }
        }
    });
};

//Para revisar el uso de un proceso...
const usageProcess = (pid) => {
    let interval = setInterval(() => {
        usage.lookup(pid, (err, result) => {
            if(result) {
                let { memory, cpu } = result;
                memory = memory / 1024 / 1024;
                average.total++;
                average.memory += memory;
                average.cpu += cpu;
                console.log({pid, memory, cpu});    
            }
            else {
                clearInterval(interval);
                averageData();
            }
        });
    }, 1000);
};

if(type.toLowerCase() === "p" || type.toLowerCase() === "n") {
    if(type.toLowerCase() === "p") {
        if(!isNaN(parseFloat(value))) {
            usageProcess(+value);
        }
        else {
            console.log(`El valor ${value} no es válido`);
        }
    }
    else {
        findProcessByname(value);
    }
}
else {
    console.log("El valor del tipo no es válido");
    console.log("p: para indicar el PID proceso");
    console.log("n: para indicar parte del nombre del proceso");
}

process.stdin.setRawMode(true);
process.stdin.on('data', function(b) {
    if (b[0] === 3) {
        averageData();
        process.stdin.setRawMode(false);
        process.exit();
    }
});