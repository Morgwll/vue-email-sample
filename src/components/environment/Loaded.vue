<template>
    <div>
        <h1>{{ content.title}}</h1>
        <p>{{ content.lastDescription }}</p>
        <div class="storyMenu leftMenu sideMenu">
            <div id="leftMenu" class="sideMenu leftMenu">
                <div class="leftMenuTab menuTab storyMenuTab" @click="storyMenu()"><i class="fas fa-feather-alt"></i></div>
                <div class="leftMenuTab menuTab beingsMenuTab" @click="beingsMenu()"><i class="fas fa-skull"></i></div>
                <div class="leftMenuTab menuTab inventoryMenuTab" @click="inventoryMenu()"><i class="fas fa-coins"></i></div>
                <div class="leftMenuTab menuTab portentsMenuTab" @click="portentsMenu()"><i class="fas fa-hat-wizard"></i></div>
                <div class="leftMenuTab menuTab pantheonMenuTab" @click="pantheonMenu()"><i class="fas fa-ankh"></i></div>
                <div class="leftMenuTab menuTab locationsMenuTab" @click="locationsMenu()"><i class="fas fa-globe-europe"></i></div>
                <ul>
                <li draggable @dragend="addElement(element)" @click="addElement(element)" v-for="(element, index) in menus" :key="index"><img :src="element.image">{{ element.type }}</li>
                </ul>
            </div>
        </div>
        <ul>
            <li v-for="(storyElement, index) of $store.state.storyElements" :key="index">{{ storyElement.type }}</li>
        </ul>
        <div class="buttonContainer"><router-link tag="button" to="/encounter">Go to Encounter</router-link></div>
    </div>
</template>
<script>
    export default {
        data() {
            let storyEls = this.$store.state.storyElements;
            let menus = this.$store.state.worlds[0].environment.plots;
            /*const menus = [
                {
                    "name": "Story",
                    "icon": "more",
                    "submenus": [
                    {
                        "name": "Locations",
                        "icon": "someIcon",
                        "route": "/route"
                    },
                    {
                        "name": "Lore",
                        "icon": "someIcon",
                        "route": "/route"
                    },
                    {
                        "name": "Plots",
                        "icon": "someIcon",
                        "route": "/route"
                    },
                    {
                        "name": "Weather",
                        "icon": "someIcon",
                        "route": "/route"
                    }]
                },
                {
                    "name": "Beings",
                    "icon": "more",
                    "submenus": [
                    {
                        "name": "Player Characters",
                        "icon": "someIcon",
                        "route": "/route"
                    },
                    {
                        "name": "Non-Player Characters",
                        "icon": "someIcon",
                        "route": "/route"
                    },
                    {
                        "name": "Creatures",
                        "icon": "someIcon",
                        "route": "/route"
                    }]
                },
                {
                    "name": "Inventory",
                    "icon": "more",
                    "submenus": [
                    {
                        "name": "Weapons",
                        "icon": "someIcon",
                        "route": "/route"
                    },
                    {
                        "name": "Armor",
                        "icon": "someIcon",
                        "route": "/route"
                    },
                    {
                        "name": "Trinkets",
                        "icon": "someIcon",
                        "route": "/route"
                    },
                    {
                        "name": "Potions",
                        "icon": "someIcon",
                        "route": "/route"
                    },
                    {
                        "name": "Money",
                        "icon": "someIcon",
                        "route": "/route"
                    },
                    {
                        "name": "Supplies",
                        "icon": "someIcon",
                        "route": "/route"
                    }]
                },
                {
                    "name": "Portents",
                    "icon": "more",
                    "submenus": [
                    {
                        "name": "Miracles",
                        "icon": "someIcon",
                        "route": "/route"
                    },
                    {
                        "name": "Incantations",
                        "icon": "someIcon",
                        "route": "/route"
                    },
                    {
                        "name": "Curses",
                        "icon": "someIcon",
                        "route": "/route"
                    },
                    {
                        "name": "Blessings",
                        "icon": "someIcon",
                        "route": "/route"
                    },
                    {
                        "name": "Pantheon",
                        "icon": "someIcon",
                        "route": "/route"
                    }]
                }
            ]*/
            const content = {
                    "title": this.$store.state.selectedGame.name,
                    "lastDescription": this.$store.state.selectedGame.synopsis
                }
            return {
                menus,
                content
            }
        },
        methods: {
            hideLeftMenu() {
                let leftMenu = document.getElementById('leftMenu');
                leftMenu.classList.toggle('hiddenLeftMenu');
            },
            storyMenu() {
                this.menus = this.$store.state.worlds[0].environment.plots;
                this.hideLeftMenu();
            },
            beingsMenu() {
                this.menus = this.$store.state.worlds[0].environment.beings;
                console.log(this.menus)
                this.hideLeftMenu();
            },
            inventoryMenu() {
                this.hideLeftMenu();
            },
            portentsMenu() {
                this.hideLeftMenu();
            },
            pantheonMenu() {
                this.hideLeftMenu();
            },
            locationsMenu() {
                this.hideLeftMenu();
            },
            addElement(element) {
                this.$store.state.storyElements.push(element);
            }
        }
    }
</script>
