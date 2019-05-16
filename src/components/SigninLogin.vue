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
<style lang="scss">
    .modal {
        display: none;
        margin: 10px;
        padding: 20px;
        max-width: 500px;
        border: 1px solid #000;
        opacity: 0;
        transition: .3s;
        position: relative;
        input {
            margin: 5px 0;
            width: 100%;
            padding: 5px;
            box-sizing: border-box;
            &::placeholder {
                font-style: italic;
            }
        }
    }
    .logIn {

    }
    .signIn {
        display: none;
    }
    .revealed {
        display: flex;
        flex-direction: column;
        opacity: 1;
    }
    .close {
        font-size: 2rem;
        line-height: 2rem;
        position: absolute;
        top: 15px;
        right: 15px;
    }
    .buttonContainer {
        width: 100%;
        margin: 10px 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        button {
            margin: 0 10px;
            border: 2px solid #000;
            background-color: #c1c1c1;
            padding: 4px;
            border-radius: 4px;
            cursor: pointer;
        }
    }
    .noAccount {
        text-align: center;
        text-decoration: underline;
        color: blue;
        font-size: .8rem;
        cursor: pointer;
    }
    .hidden {
        display: none;
    }
</style>