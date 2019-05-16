<template>
    <div>
        <h1>Home</h1>
        <signin-login></signin-login>
    </div>
</template>
<script>
    import signinLogin from './SigninLogin.vue';
    export default {
        components: {
            signinLogin
        },
        data() {
            return {}
        },
        methods: {
            popup() {
                let modal = document.getElementById('loginModal');
                setTimeout(() => {
                    modal.classList.add('revealed')
                }, 2000);
            }
        },
        mounted() {
            this.popup()
        }
    }
</script>