const NameHero = 'Vinicius';
const NivelHero = 10000;

if(NivelHero <= 1000){
    console.log('O Herói de nome', NameHero, 'está no nível de Ferro')
}else if(NivelHero >=1001 && NivelHero <=2000){
    console.log('O Herói de nome', NameHero, 'está no nivel de Bronze')
}else if(NivelHero >=2001 && NivelHero <=5000){
    console.log('O Herói de nome', NameHero, 'está no nivel Prata')
}else if(NivelHero >=5001 && NivelHero <=7000){
    console.log('O Herói de nome', NameHero, 'está no nivel Ouro')
}else if(NivelHero >=7001 && NivelHero<=8000){
    console.log('O Herói de nome', NameHero, 'está no nivel Platina')
}else if(NivelHero >=8001 && NivelHero<=9000){
    console.log('O Herói de nome', NameHero, 'está no nivel Ascendente')
}else if(NivelHero >=9001 && NivelHero<=10000){
    console.log('O Herói de nome', NameHero, 'está no nivel Imortal')
}else if(NivelHero > 10001){
    console.log('O Herói de nome', NameHero, 'está no nivel Radiante')
}