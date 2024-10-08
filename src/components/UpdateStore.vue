<template>
     <AppHeader />
    <h2>Update Store</h2>
   
</template>

<script>
import AppHeader from './AppHeader.vue'

export default {
    name: 'UpdateStore',
    components: {
        AppHeader
    }
    /*mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'SignUp' });
        }
    }*/
}
</script>

