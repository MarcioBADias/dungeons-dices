const roll = document.querySelector('.button_roll');
const array = document.querySelectorAll('.dice_img');
const monsterArea = document.querySelector('.monsters_area');
const buttonArea = document.querySelector('.button_area');
const monsterDoor = document.querySelector('.monster_door');

let dungeonLevel = null;

const rollRandomResult = number => Math.round(Math.random()*number+1);

const createHeros = (array) => {
    array.forEach((_, i) => {
        // Cria os itens
        array[i].setAttribute('src', `./assets/img/${rollRandomResult(11)}-face-dice.png`)
        if(rollRandomResult(11) <= 3) {
            array[i].setAttribute('data-class','fighter')
        }
        if(rollRandomResult(11) > 3 && rollRandomResult(11) <=6 ) {
            array[i].setAttribute('data-class','specialist')
        }
        if(rollRandomResult(11) > 6 && rollRandomResult(11) <=9 ) {
            array[i].setAttribute('data-class','divine')
        }
        if(rollRandomResult(11) > 9) {
            array[i].setAttribute('data-class','arcane')
        }
    })
}

const newButton = (button, classButton) => {
    button.innerHTML = `<input type="button" value="Gerar desafio" class="${classButton}">`;
}
roll.addEventListener('click', e => {
    createHeros(array);
    buttonArea.innerHTML = `Seus aventureiros estão prontos? Bata na porta derrote os monstros.<br>Level da Dungeon: ${dungeonLevel+1}`
})

monsterDoor.addEventListener('click', () => {
    if(monsterDoor.dataset.door === 'close'){
        // abre porta
        monsterDoor.setAttribute('data-door','open')
        monsterDoor.setAttribute('src', "./assets/img/open-door.png")
        // chama o monstro
        for(let i = 0; i <= dungeonLevel; i++){
            const monster = document.createElement('img');
            const divMonster = document.createElement('div');
            monster.setAttribute('src', `./assets/img/${rollRandomResult(3)}-monster.png`)
            if(rollRandomResult(3) <= 1) {
                monster.setAttribute('data-class','fighter')
            }
            // cola na tela
            monsterArea.appendChild(divMonster)
            divMonster.appendChild(monster)
        }
        dungeonLevel += 1
        return
        
    }
    if(monsterDoor.dataset.door === 'open'){
        monsterDoor.setAttribute('data-door','close')
        monsterDoor.setAttribute('src', "./assets/img/close-door.png")
        monsterArea.innerHTML = ''
        buttonArea.innerHTML = `Seus aventureiros estão prontos? Bata na porta derrote os monstros.<br>Level da Dungeon: ${dungeonLevel+1}`
        return
    }
        
})
