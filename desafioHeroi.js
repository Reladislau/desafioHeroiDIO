let nomeHeroi = "Renan"
let XP = 10001
let nivel

if(XP<=1000){
    nivel = "Ferro"
    console.log("O Herói " + nomeHeroi + " está no nível de: " + nivel)
} else if (XP>1000 && XP<=2000){
    nivel = "Bronze"
    console.log("O Herói " + nomeHeroi + " está no nível de: " + nivel)
}else if (XP>2000 && XP<=5000){
    nivel = "Prata"
    console.log("O Herói " + nomeHeroi + " está no nível de: " + nivel)
}else if (XP>5000 && XP<=7000){
    nivel = "Ouro"
    console.log("O Herói " + nomeHeroi + " está no nível de: " + nivel)
}else if (XP>7000 && XP<=8000){
    nivel = "Platina"
    console.log("O Herói " + nomeHeroi + " está no nível de: " + nivel)
}else if (XP>8000 && XP<=9000){
    nivel = "Ascendente"
    console.log("O Herói " + nomeHeroi + " está no nível de: " + nivel)
}else if (XP>9000 && XP<=10000){
    nivel = "Imortal"
    console.log("O Herói " + nomeHeroi + " está no nível de: " + nivel)
}else{
    nivel = "Radiante"
    console.log("O Herói " + nomeHeroi + " está no nível de: " + nivel)}