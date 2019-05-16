<template>
    <ul class="mainNav">
        <router-link tag="li" :to="menu.route" v-for="(menu, index) in mainmenu" :key="index"><a>{{ menu.name }}</a></router-link>
    </ul>
</template>
<script>
export default {
    data() {
        return {
            mainmenu: [
                { name: "Home", route: "/"},
                { name: "Game", route: "/game"},
                { name: "Contact", route: "/contact"},
                { name: "About", route: "/about"}
            ]
        }
    }
}
</script>
<style lang="scss">
    .mainNav {
        display: inline-flex;
        padding-left: 0;
        list-style-type: none;
        li {
            padding: 10px 20px;
            a {
                text-decoration: none;
            }
        }
    }
</style>