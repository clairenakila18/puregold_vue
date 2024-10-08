<template>
    <div class="signin-container">
        <img class="logo" src="../assets/puregold.png" />
        <h1>Sign In</h1>

        <div class="signin">
          
            <input type="text" v-model="email" placeholder="Enter Email" />
            <input type="password" v-model="password" placeholder="Enter Password" />
            <button v-on:click="signIn">Sign In</button>
            <p class="login-link">
                Don't have an account? 
                <a href="/">Sign Up</a>
            </p>
        </div>
    </div>
</template>

<script>
//import axios from 'axios'; 

export default {
    name: 'SignIn',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        };
    },
    methods: {
    async signIn() {
        try {
            // Simulating a successful sign-up
            const simulatedResponse = { status: 201 }; // Simulated response
            if (simulatedResponse.status === 201) {
                alert("Sign In Successful");
                // Redirect to Sign In page
                this.$router.push({ name: 'HomePage' }); // Update with your actual route name for SignIn
            }
        } catch (error) {
            console.error("Sign In Error:", error);
            alert("Sign In Failed");
        }
    }
}
};
</script>

<style>
.signin-container {
    width: 400px;
    margin: 0 auto;
    text-align: center;
    border: 1px solid #ddd;
    padding: 40px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: #f9f9f9;
}

.logo {
    width: 100px;
    margin-bottom: 20px;
}

.signin input {
    width: 100%;
    height: 40px;
    padding: 4px;
    margin-bottom: 20px;
    border: 1px solid green;
    border-radius: 5px;
}

.signin button {
    width: 100%;
    height: 40px;
    border: 1px solid green;
    background: green;
    color: white;
    cursor: pointer;
    border-radius: 5px;
}

.signin button:hover { /* Correctly place the hover style here */
    background-color: darkgreen;
}

.login-link {
    margin-top: 40px;
}

.login-link a {
    color: green;
}
</style>
