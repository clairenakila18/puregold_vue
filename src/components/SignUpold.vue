<template>
    <div>
        <img class="logo" src="../assets/puregold.png" />
        <h1>Sign Up</h1>

        <div class="signup">
            <input type="text" v-model="name" placeholder="Enter Name" />
            <input type="text" v-model="email" placeholder="Enter Email" />
            <input type="password" v-model="password" placeholder="Enter Password" />
            <button v-on:click="signUp">Sign Up</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'; 

export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        };
    },
    methods: {
        async signUp() {
            try {
                let result = await axios.post("http://localhost:1337/api/stores", {
                    name: this.name,
                    email: this.email,
                    password: this.password 
                });
                console.warn(result);
                if (result.status === 201) {
                    alert("Sign Up Successful");
                }
            } catch (error) {
                console.error("Sign Up Error:", error);
                alert("Sign Up Failed");
            }
        }
    }
};
</script>

<style>
.logo {
    width: 100px;
}
.signup input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid green;
}
.signup button {
    width: 320px;
    height: 40px;
    border: 1px solid green;
    background: green;
    color: white;
    cursor: pointer;
}
</style>
