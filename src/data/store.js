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
                    name: "CON",
                    value: 3
                },
                dex: {
                    name: "DEX",
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
                "portrait": '',
                "characterClass": "pc",
                "type": "creature", 
                "name": "Boligrafor",
                "index": "",
                "alias": "the Conqueror", 
                "age": 26, 
                "gender": "male", 
                "stats": 
                { 
                    "str": 18, 
                    "dex": 14, 
                    "con": 14, 
                    "sta": 10, 
                    "app": 8, 
                    "pow": 12 
                }, 
                "martialProwess": 7, 
                "damageBonus": 5, 
                "defenseValue": 15, 
                "hitpoints": 70,
                "tempHitpoints": 70, 
                "sanity": 60, 
                "charisma": 6,
                "actions": [
                    { "name" : "Attack"},
                    { "name" : "Curse"},
                    { "name" : "Bless"},
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
                            "name": "Longsword", 
                            "mp": 0, 
                            "range": 5, 
                            "damage": [ 4, 8, 12 ]
                        }, { 
                            "name": "Composite Bow", 
                            "mp": 0, 
                            "range": 35, 
                            "damage": [ 4, 8, 12 ]
                        }
                    ] 
            },
            {
                "portrait": '',
                "characterClass": "pc",
                "type": "creature",
                "name": "Tazor",
                "index": "",
                "alias": "the Mad", 
                "age": 26, 
                "gender": "male", 
                "stats": 
                { 
                    "str": 18, 
                    "dex": 14, 
                    "con": 14, 
                    "sta": 10, 
                    "app": 8, 
                    "pow": 12 
                }, 
                "martialProwess": 7, 
                "damageBonus": 5, 
                "defenseValue": 15, 
                "hitpoints": 70,
                "tempHitpoints": 70, 
                "sanity": 60, 
                "charisma": 6,
                "actions": [
                    { "name" : "Attack"},
                    { "name" : "Curse"},
                    { "name" : "Bless"},
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
                            "name": "Longsword", 
                            "mp": 0, 
                            "range": 5, 
                            "damage": [ 4, 8, 12 ] 
                        }, { 
                            "name": "Composite Bow", 
                            "mp": 0, 
                            "range": 35, 
                            "damage": [ 4, 8, 12 ]
                        }
                    ] 
            },
            {
                "portrait": '',
                "characterClass": "pc",
                "type": "creature",
                "name": "Manzanor",
                "index": "", 
                "alias": "the Greedy", 
                "age": 26, 
                "gender": "male", 
                "stats": 
                { 
                    "str": 18, 
                    "dex": 14, 
                    "con": 14, 
                    "sta": 10, 
                    "app": 8, 
                    "pow": 12 
                }, 
                "martialProwess": 7, 
                "damageBonus": 5, 
                "defenseValue": 15, 
                "hitpoints": 40,
                "tempHitpoints": 40, 
                "sanity": 60, 
                "charisma": 6,
                "actions": [
                    { "name" : "Attack"},
                    { "name" : "Curse"},
                    { "name" : "Bless"},
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
                            "name": "Longsword", 
                            "mp": 0, 
                            "range": 5, 
                            "damage": [ 4, 8, 12 ]
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