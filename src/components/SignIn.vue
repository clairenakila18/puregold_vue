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
import axios from 'axios'; 

export default {
    name: 'SignIn',
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        async signIn() {
            try {
                // Assuming your authentication API endpoint is different
                let result = await axios.post("http://localhost:1337/api/customers", {
                    email: this.email,
                    password: this.password
                });
                console.warn(result);
                if (result.status === 200) { // Adjusted to check for successful response
                    alert("Sign In Successful");
                    localStorage.setItem("user-info", JSON.stringify(result.data));
                    
                    // Redirect to the homepage after 1 second
                    setTimeout(() => {
                        this.$router.push('/homepage');
                    }, 1000);
                }
            } catch (error) {
                console.error("Sign In Error:", error.response ? error.response.data : error.message);
                alert("Failed to Sign In: Please make sure you entered your correct account during sign up."); // Updated error message
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

.signin button:hover { 
    background-color: darkgreen;
}

.login-link {
    margin-top: 40px;
}

.login-link a {
    color: green;
}
</style>
