import Vue from 'vue';
import Vuex from 'vuex';
import raven from './worlds/ravenstorm.json';
import alien from './worlds/alien-fantasy.json';
import games from './games/games.json';

Vue.use(Vuex);

let selectedGame = raven;

export const store = new Vuex.Store({
    state: {
        worlds: [raven, alien],
        char: {
            statNumbers: 54,
            index: null,
            name: "",
            alias: "",
            age: "",
            gender: "",
            stats: {
                str: {
                    name: "STR",
                    value: 3
                },
                con: {
                    name: "DEX",
                    value: 3
                },
                dex: {
                    name: "CON",
                    value: 3
                },
                sta: {
                    name: "STA",
                    value: 3
                },
                app: {
                    name: "APP",
                    value: 3
                },
                pow: {
                    name: "POW",
                    value: 3
                }
            },
        },
        games,
        rollResult: null,
        activeScore: null,
        passiveScore: null,
        selectedAction: '-- Select Action --',
        selectedTarget: {},
        resultMessage: '',
        characterList: [
            {
                "portrait": 'https://i.kinja-img.com/gawker-media/image/upload/s--NdbChKcZ--/c_scale,f_auto,fl_progressive,q_80,w_800/18j3zwhxy85iyjpg.jpg',
                "characterClass": "Guardian",
                "type": "creature", 
                "name": "Rykha",
                "index": "",
                "alias": "Hija de Kor'moon", 
                "age": 28, 
                "gender": "female", 
                "stats": 
                { 
                    "str": 18, 
                    "dex": 15, 
                    "con": 12, 
                    "sta": 10, 
                    "app": 7, 
                    "pow": 10 
                }, 
                "martialProwess": 4, 
                "damageBonus": 6, 
                "defenseValue": 14, 
                "hitpoints": 75,
                "tempHitpoints": 75, 
                "sanity": 50, 
                "charisma": 8,
                "actions": [
                    { "name" : "Attack"},
                    { "name" : "Heal"},
                    { "name" : "Haggle"},
                    { "name" : "Persuade"},
                    { "name" : "Intimidate"},
                    { "name" : "Pickpocket"},
                    { "name" : "Manipulate Mechanism"}
                ],
                "pPerception": 12,
                "weapons":
                    [
                        { 
                            "name": "Long Sword", 
                            "mp": 0, 
                            "range": 5, 
                            "damage": [ 4, 7, 12 ]
                        }, { 
                            "name": "Composite Bow", 
                            "mp": 0, 
                            "range": 35, 
                            "damage": [ 4, 8, 12 ]
                        }
                    ] 
            },
            {
                "portrait": 'https://cdnb.artstation.com/p/assets/images/images/005/395/785/large/anthony-l-m-barbarian-massacre-anthony-lm-ss.jpg?1490724835',
                "characterClass": "Hunter",
                "type": "creature",
                "name": "Harold",
                "index": "",
                "alias": "Caraquemada", 
                "age": 26, 
                "gender": "male", 
                "stats": 
                { 
                    "str": 14, 
                    "dex": 18, 
                    "con": 14, 
                    "sta": 10, 
                    "app": 4, 
                    "pow": 12 
                },
                "martialProwess": 5, 
                "damageBonus": 6, 
                "defenseValue": 15, 
                "hitpoints": 70,
                "tempHitpoints": 70, 
                "sanity": 60, 
                "charisma": 8,
                "actions": [
                    { "name" : "Attack"},
                    { "name" : "Heal"},
                    { "name" : "Haggle"},
                    { "name" : "Persuade"},
                    { "name" : "Intimidate"},
                    { "name" : "Pickpocket"},
                    { "name" : "Manipulate Mechanism"}
                ],
                "pPerception": 12,
                "weapons":
                    [
                        { 
                            "name": "Club", 
                            "mp": 0, 
                            "range": 5, 
                            "damage": [ 4, 8, 10 ] 
                        }, { 
                            "name": "Composite Bow", 
                            "mp": 0, 
                            "range": 45, 
                            "damage": [ 4, 8, 12 ]
                        }
                    ] 
            },
            {
                "portrait": 'https://i.etsystatic.com/7197050/d/il/c900fa/1615953936/il_340x270.1615953936_pgtl.jpg?version=0',
                "characterClass": "Shaman",
                "type": "creature",
                "name": "Yorubo",
                "index": "", 
                "alias": "the Greedy", 
                "age": 26, 
                "gender": "male", 
                "stats": 
                { 
                    "str": 14, 
                    "dex": 14, 
                    "con": 14, 
                    "sta": 10, 
                    "app": 8, 
                    "pow": 16 
                }, 
                "martialProwess": 7, 
                "damageBonus": 5, 
                "defenseValue": 15, 
                "hitpoints": 70,
                "tempHitpoints": 70, 
                "sanity": 60, 
                "charisma": 12,
                "actions": [
                    { "name" : "Attack"},
                    { "name" : "Heal"},
                    { "name" : "Haggle"},
                    { "name" : "Persuade"},
                    { "name" : "Intimidate"},
                    { "name" : "Pickpocket"},
                    { "name" : "Manipulate Mechanism"},
                    { "name" : "Curse"},
                    { "name" : "Bless"},
                    { "name" : "Charm"},
                    { "name" : "Detect Magic"},
                    { "name" : "Light Fire"},
                    { "name" : "Telekinesis"},
                    { "name" : "Terror"},
                    { "name" : "Illusion of Self"}
                ],
                "pPerception": 12,
                "weapons":
                    [
                        { 
                            "name": "Staff", 
                            "mp": 0, 
                            "range": 10, 
                            "damage": [ 3, 6, 8 ]
                        }, { 
                            "name": "Composite Bow", 
                            "mp": 0, 
                            "range": 35, 
                            "damage": [ 4, 8, 12 ]
                        }
                    ] 
            }
        ],
        targets: [],
        selectedGame
    },
    getters: {
        selectGame: state => {
            const game = "meh";
            return game;
        }
    },
    setters: {
        selectGame: state => {

        }
    }
});