

<template>
    <div class="signup-container">
        <img class="logo" src="../assets/puregold.png" />
        <h1>Sign Up</h1>

        <div class="signup">
            <input type="text" v-model="name" placeholder="Enter Name" />
            <input type="text" v-model="address" placeholder="Enter Address" />
            <input type="text" v-model="email" placeholder="Enter Email" />
            <input type="password" v-model="password" placeholder="Enter Password" />
            <button v-on:click="signUp">Sign Up</button>
            <p class="login-link">
                Already have an account? 
                <a href="/signin">Sign In</a>
            </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'; // Import axios

export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            address: '',
            email: '',
            password: ''
        };
    },
    methods: {
        async signUp() {
            try {
                let result = await axios.post("http://localhost:1337/api/customers", {
                    data: {
                        name: this.name,
                        address: this.address,
                        email: this.email,
                        password: this.password
                    }
                });
                console.warn(result);
                if (result.status === 201) {
                    alert("Sign Up Successful");
                    localStorage.setItem("user-info", JSON.stringify(result.data));
                    
                    // Redirect to the Sign In page after 1 second
                    setTimeout(() => {
                        this.$router.push('/signin'); // Assuming your sign-in route is '/signin'
                    }, 1000);
                }
            } catch (error) {
                console.error("Sign Up Error:", error.response ? error.response.data : error.message);
                alert("Failed to Sign Up: " + (error.response ? error.response.data.message : error.message));
            }
        }
    }
};
</script>

<style>
.signup-container {
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

.signup input {
    width: 100%;
    height: 40px;
    padding: 4px;
    margin-bottom: 20px;
    border: 1px solid green;
    border-radius: 5px;
}

.signup button {
    width: 100%;
    height: 40px;
    border: 1px solid green;
    background: green;
    color: white;
    cursor: pointer;
    border-radius: 5px;
}

.signup button:hover {
    background-color: darkgreen;
}
.login-link {
    margin-top: 40px;
}
.login-link a {
    color: green;
}
</style>
