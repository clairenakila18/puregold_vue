<template>
    <div class="add-store-container">
        <h2>Add Store</h2>
        <form @submit.prevent="addStore">
            <input type="text" v-model="storeName" placeholder="Enter Store Name" required />
            <input type="text" v-model="storeCity" placeholder="Enter City" required />
            <button type="submit">Add Store</button>
        </form>
        <p v-if="message">{{ message }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'AddStore',
    data() {
        return {
            storeName: '',
            storeCity: '',
            message: ''
        };
    },
    methods: {
        async addStore() {
            try {
                // Replace the URL with your actual API endpoint
                const response = await axios.post("http://localhost:1337/api/stores", {
                    name: this.storeName,
                    city: this.storeCity
                });
                
                if (response.status === 201) {
                    this.message = "Store added successfully!";
                    // Clear input fields after successful addition
                    this.storeName = '';
                    this.storeCity = '';
                }
            } catch (error) {
                console.error("Error adding store:", error);
                this.message = "Failed to add store.";
            }
        }
    }
};
</script>

<style>
.add-store-container {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
}

.add-store-container input {
    width: 100%;
    height: 40px;
    padding: 4px;
    margin-bottom: 10px;
    border: 1px solid green;
    border-radius: 5px;
}

.add-store-container button {
    width: 100%;
    height: 40px;
    border: 1px solid green;
    background: green;
    color: white;
    cursor: pointer;
    border-radius: 5px;
}

.add-store-container button:hover {
    background-color: darkgreen;
}
</style>
