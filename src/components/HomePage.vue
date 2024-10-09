<template>
     <AppHeader />
    <h2>Welcome PureGold Shoppers</h2>
   
</template>

<script>
import AppHeader from './AppHeader.vue'

export default {
    name: 'HomePage',
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

