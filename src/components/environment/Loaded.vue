<template>
    <div>
        <h1>{{ content.title}}</h1>
        <p>{{ content.lastDescription }}</p>
        <div class="storyMenu leftMenu sideMenu">
            <div id="leftMenu" class="sideMenu leftMenu">
                <div class="leftMenuTab menuTab storyMenuTab" @click="storyMenu()"><i class="fas fa-feather-alt"></i></div>
                <div class="leftMenuTab menuTab beingsMenuTab" @click="beingsMenu()"><i class="fas fa-skull"></i></div>
                <div class="leftMenuTab menuTab weaponryMenuTab" @click="weaponryMenu()"><i class="fas fa-shield-alt"></i></div>
                <div class="leftMenuTab menuTab inventoryMenuTab" @click="inventoryMenu()"><i class="fas fa-coins"></i></div>
                <div class="leftMenuTab menuTab portentsMenuTab" @click="portentsMenu()"><i class="fas fa-hat-wizard"></i></div>
                <div class="leftMenuTab menuTab pantheonMenuTab" @click="pantheonMenu()"><i class="fas fa-ankh"></i></div>
                <div class="leftMenuTab menuTab locationsMenuTab" @click="locationsMenu()"><i class="fas fa-globe-europe"></i></div>
                <ul v-if="menus === this.$store.state.worlds[chosenWorld].environment.plots">
                    <li draggable @dragend="addElement(element)" @click="addElement(element)" v-for="(element, index) in menus" :key="index"><img :src="portraitChooser(element)">{{ element.characterClass }}</li>
                </ul>
                <ul v-else>
                    <li draggable @dragend="showElement(element)" @click="showElement(element)" v-for="(element, index) in menus" :key="index"><img :src="portraitChooser(element)">{{ element.characterClass }}</li>
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
            let chosenWorld = 0;
            const storyEls = this.$store.state.worlds[chosenWorld].environment.plots;
            const beings = this.$store.state.worlds[chosenWorld].npcs.concat(this.$store.state.worlds[chosenWorld].creatures);
            const npcs = this.$store.state.worlds[chosenWorld].npcs;
            const creatures = this.$store.state.worlds[chosenWorld].creatures;
            const weaponry = this.$store.state.worlds[chosenWorld].environment.weaponry;
            const inventory = this.$store.state.worlds[chosenWorld].environment.inventory;
            const portents = this.$store.state.worlds[chosenWorld].environment.portents;
            const locations = this.$store.state.worlds[chosenWorld].environment.locations;
            const pantheon = this.$store.state.worlds[chosenWorld].environment.pantheon;
            let menus = this.$store.state.worlds[chosenWorld].environment.plots;
            const content = {
                "title": this.$store.state.selectedGame.name,
                "lastDescription": this.$store.state.selectedGame.synopsis
            }
            return {
                menus,
                storyEls,
                beings,
                weaponry,
                inventory,
                pantheon,
                content,
                portents,
                locations,
                chosenWorld
            }
        },
        methods: {
            hideLeftMenu() {
                let leftMenu = document.getElementById('leftMenu');
                leftMenu.classList.toggle('hiddenLeftMenu');
            },
            storyMenu() {
                this.menus = this.storyEls;
                this.hideLeftMenu();
            },
            beingsMenu() {
                this.menus = this.beings;
                this.hideLeftMenu();
            },
            weaponryMenu() {
                this.menus = this.weaponry;
                this.hideLeftMenu();
            },
            inventoryMenu() {
                this.menus = this.inventory;
                this.hideLeftMenu();
            },
            portentsMenu() {
                this.menus = this.portents;
                this.hideLeftMenu();
            },
            pantheonMenu() {
                this.menus = this.pantheon;
                this.hideLeftMenu();
            },
            locationsMenu() {
                this.menus = this.locations;
                this.hideLeftMenu();
            },
            addElement(element) {
                this.$store.state.storyElements.push(element);
            },
            showElement(element) {
                console.log(element);
            }
        }
    }
</script>
