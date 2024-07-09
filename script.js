const p2health=document.getElementById('p2Health')
const p1health=document.getElementById('p1Health')
let IsOver=false
class player{
    constructor(name,health){
        this.name=name
        this.health=health
    }
    heal(playerh){
        if(this.health<100  && IsOver==false){
            let hea=Math.ceil(Math.random()*5)
            this.health+=hea
           playerh.innerText=this.health
        }
    }
    strike(opponent,opponenth){
        let dmg=Math.ceil(Math.random()*10)
        if(IsOver==false){
            if(opponent.health<=dmg){
            opponent.health-=dmg  
            opponenth.innerText=opponent.health
            document.getElementById('result').innerText=`${this.name} 🏆`
            document.getElementById('victory').play()
            IsOver=true
        }
        if(opponent.health>0){
                   opponent.health-=dmg
                   opponenth.innerText=opponent.health
        } 
        }
        
    }
    
}
const gamereset=()=>{
    player2.health=100
    player1.health=100
    p2health.innerText=player2.health
    p1health.innerText=player1.health
    document.getElementById('result').innerText=` `
    IsOver=false
}
const player1strike=()=>{
    if(player2.health>0){
        player1.strike(player2,p2health)
        document.getElementById('p1attack').play()
        console.log('P1 hits')
        console.log(player2.health)
        }
}
const player1heal=()=>{
    player1.heal(p1health)
    document.getElementById('p1heal').play()
    console.log('P1 heals')
    console.log(player1.health)
}
const player2strike=()=>{
    if(player1.health>0){
        player2.strike(player1,p1health)
        document.getElementById('p2attack').play()
        console.log('P2 hits')
        console.log(player1.health)
        }
}
const player2heal=()=>{
    player2.heal(p2health)
        document.getElementById('p2heal').play()
        console.log('P2 heals')
        console.log(player2.health)
}
const sim=()=>{
    while(!IsOver){
    player1strike()
    player1heal()
    player2strike()
    player2heal()
    }
}
document.addEventListener('keydown',function(e){
    if(e.key=="q" && IsOver==false){
        player1strike() 
    }else if(e.key=="a" && IsOver==false){
        player1heal()
    }else if(e.key=="p" && IsOver==false){
        player2strike()
    }else if(e.key=="l" && IsOver==false){
        player2heal()
    }else if(e.key=='r'){
        gamereset()
    }else if(e.key=='s'&& IsOver==false){
        sim()
    }
})
p1name=prompt("Enter player one's name: ")
p2name=prompt("Enter player two's name: ")
document.getElementById('p1Name').innerText=p1name
document.getElementById('p2Name').innerText=p2name
const player1=new player(`${p1name}`,100)
const player2=new player(`${p2name}`,100)