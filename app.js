const heroes = [
    {
        name: 'Slate Slabrock',
        type: 'dwarf',
        damage: 5,
        health: 100
    },
    {
        name: 'Flint Ironstag',
        type: 'elf',
        damage: 10,
        health: 50
    }]



const boss = {
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1,
    goldReward: '💛',
    defeats: '',
}

let rewardsCollected = ''

function attackBoss() {
    console.log('test')
    let combinedAttackDmg = 0
    heroes.forEach(hero => combinedAttackDmg += hero.damage)
    boss.health -= combinedAttackDmg
    if (boss.health <= 0) {
        rewardsCollected += boss.goldReward
        boss.maxHealth += 10
        boss.health = 100
        boss.level++
        boss.goldReward += '💛'
        boss.defeats++

        window.alert('The Boss has respawned even stronger!')
    }
    console.log('boss health', boss.health)
    console.log('boss max health', boss.maxHealth)

    // console.log(combinedAttackDmg)
    drawBoss()
    drawHeros()
    drawMonstersDefeated()

}
function bossFightBack() {



    heroes.forEach(hero => {
        hero.health -= boss.damage
        if (hero.health <= 0) {
            hero.health = 0
            return
        }
        // console.log('hero health', hero.health)

    }

    )
    drawBoss()
    drawHeros()
}

function healHero(heroName) {
    const healedHero = heroes.find(hero => hero.name == heroName)
    healedHero.health += 10
    drawHeros()

}


// function drawBoss() {
//     const bossIdElement = document.getElementById('boss')
//     const bossStatsClassElement = bossIdElement.querySelector('.stats')

//     bossStatsClassElement.innerText = `HP: ${boss.maxHealth} | Reward: ${boss.goldReward}`
// }

function drawHeros() {
    heroes.forEach(hero => {
        const heroElement = document.getElementById(hero.type)
        const heroStatsClassElement = heroElement?.querySelector('.stats')

        // console.log(heroStatsClassElement)
        heroStatsClassElement.innerText = `HP: ${hero.health}`
    })

}

function drawMonstersDefeated() {
    document.getElementById('amountBossMonstersDefeated').innerText = ` ` + boss.defeats
    document.getElementById('rewardsEarned').innerText = rewardsCollected
}

function drawBoss() {
    const bossElement = document.getElementById('bossStats')
    bossElement.innerText = `HP: ${boss.maxHealth} | Reward: ${boss.goldReward} | Level: ${boss.level}`
}

function reset() {
    location.reload()
}

drawBoss()
drawHeros()
setInterval(bossFightBack, 5000)