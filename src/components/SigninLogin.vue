<template>
    <div class="modal" id="loginModal">
        <div id="logIn" class="logIn">
            <h3>Account Access</h3>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="password"/>
            <div class="buttonContainer"><button>Login</button></div>
        </div>
        <div id="noAccount" class="noAccount" @click="revealRegister()">Don't have an account? Sign in</div>
        <div id="signIn" class="signIn">
            <h3>Create Account</h3>
            <input type="email" placeholder="Enter Email"/>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Enter password"/>
            <input type="password" placeholder="Confirm password"/>
            <div class="buttonContainer"><button>Create Account</button></div>
        </div>
        <div id="loginLink" class="noAccount hidden" @click="revealLogin()">Already have an account? Login</div>
        <div class="close" id="closeModal" @click="closeModal()"><i class="fa fa-time"></i></div>
    </div>
</template>
<script>
    export default {
        methods: {
            closeModal() {
                let modal = document.getElementById('loginModal');
                modal.style.opacity = '0';
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300);
            },
            revealRegister() {
                document.getElementById('logIn').style.display = 'none';
                document.getElementById('noAccount').style.display = 'none';
                document.getElementById('signIn').style.display = 'block';
                document.getElementById('loginLink').style.display = 'block';
            },
            revealLogin() {
                document.getElementById('logIn').style.display = 'block';
                document.getElementById('noAccount').style.display = 'block';
                document.getElementById('signIn').style.display = 'none';
                document.getElementById('loginLink').style.display = 'none';
            }
        }
    }
</script>