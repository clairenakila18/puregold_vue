<template>
    <div class="nav">
     <router-link to="homepage">Home</router-link>
     <router-link  to="addstore"> Stores</router-link>
     <router-link  to="signIn"> Products</router-link>
     <a v-on:click="logout" href="#">Logout</a>
 
 
 
 
    </div>
 </template>
 
 <script>
     export default {
         name: 'AppHeader',
         methods:{
            logout()
            {
                localStorage.clear();
                this.$router.push({name:'SignIn'})
            }
         }
     }
 </script>
 <style>
 .nav {
     background-color:green;
     overflow: hidden;
 
 }
 .nav a {
    float: left;
    color:white;
    padding: 14px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;

 }
 .nav a:hover{
    background:#f7c568;
    color: #333;
 }
 
 </style>