

let idade = [16, 48, 23, 22, 45, 8, 12]

let maior = idade.filter ((idade) =>{
return idade < 18
})

console.log(maior);
idade.forEach ((idade)=>{
console.log(`Sua idade é:${idade}`);
})


