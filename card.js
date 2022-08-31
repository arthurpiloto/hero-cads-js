`use strict`

const herois = [
    'Iron - Wounded, captured and forced to build a weapon by …make the world a safer, better place as Iron Man.',
    'Thanos - The Mad Titan Thanos, a melancholy, brooding indiv…he became more powerful than any of his brethren.',
    'Spider Man - Peter’s relatively normal life changed abruptly du…it escaped and bit Peter before it was destroyed.',
    'Thor - As the Norse God of thunder and lightning, Thor wi…never, ever stop fighting for a worthwhile cause.',
    'Captain America - Vowing to serve his country any way he could, youn… living, breathing symbol of freedom and liberty.'
]

// const createCard = (string) => console.log(string.split(" "))

const createCard = (string) =>
{
    const main = document.querySelector(`main`)
    const div = document.createElement(`div`)
    const arraySplit = string.split(" - ")
    div.classList.add(`card-container`)
    div.innerHTML =
    `
    <div>
        <ul>
            <li>
                <h2>${arraySplit[0]}</h2>
                <p>${arraySplit[1]}</p>
            </li>
        </ul>
    </div>
    `
    main.appendChild(div)
}
herois.forEach(createCard)