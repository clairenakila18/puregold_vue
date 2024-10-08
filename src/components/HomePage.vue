<template>
    <div class="dashboard-container">
        <aside class="sidebar">
            <h3>Store Management</h3>
            <ul>
                <li @click="navigateTo('addStore')">Add Store</li>
                <li @click="navigateTo('viewStore')">View Stores</li>
                <!-- Add more CRUD operations as needed -->
            </ul>
        </aside>

        <main class="main-content">
            <h2>Welcome to Homepage</h2>
            <!-- Content will change based on the selected menu option -->
            <component :is="currentComponent"></component>
        </main>
    </div>
</template>

<script>
import AddStore from './AddStore.vue'; // Import your AddStore component
import ViewStores from './ViewStore.vue'; // Import your ViewStores component

export default {
    name: 'HomePage',
    components: {
        AddStore,
        ViewStores
    },
    data() {
        return {
            currentComponent: 'AddStore' // Default component
        };
    },
    methods: {
        navigateTo(component) {
            this.currentComponent = component === 'addStore' ? 'AddStore' : 'ViewStore';
        }
    }
}
</script>

<style>
.dashboard-container {
    display: flex;
}

.sidebar {
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
    border-right: 1px solid #ddd;
}

.main-content {
    flex-grow: 1;
    padding: 20px;
}

.sidebar ul {
    list-style-type: none;
    padding: 0;
}

.sidebar li {
    cursor: pointer;
    padding: 10px 0;
}

.sidebar li:hover {
    background-color: #e0e0e0;
}
</style>
