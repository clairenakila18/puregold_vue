<template>
    <div class="view-stores-container">
        <h2>View Stores</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="store in stores" :key="store.id">
                    <td>{{ store.name }}</td>
                    <td>{{ store.city }}</td>
                </tr>
            </tbody>
        </table>
        <p v-if="message">{{ message }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ViewStores',
    data() {
        return {
            stores: [],
            message: ''
        };
    },
    mounted() {
        this.fetchStores();
    },
    methods: {
        async fetchStores() {
            try {
                // Replace the URL with your actual API endpoint
                const response = await axios.get("http://localhost:1337/api/stores");
                this.stores = response.data; // Assuming the API returns a list of stores
            } catch (error) {
                console.error("Error fetching stores:", error);
                this.message = "Failed to load stores.";
            }
        }
    }
};
</script>

<style>
.view-stores-container {
    max-width: 600px;
    margin: 0 auto;
}

.view-stores-container table {
    width: 100%;
    border-collapse: collapse;
}

.view-stores-container th,
.view-stores-container td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

.view-stores-container th {
    background-color: #f2f2f2;
}
</style>
