<template>
    <div id="app">
        <router-view/>
        <div class="footer">
            <p>Desde Uruguay con <span class="heart">❤</span></p>
        </div>
    </div>
</template>

<script>
import VueRouter from 'vue-router'
    import Vue from 'vue'
Vue.use(VueRouter)

    export default {
        name: 'app',
        components: {
            
        }
    }
</script>

<style  lang="scss">
    #app {
        font-family: 'Titillium Web', sans-serif;

    }

    .bg-blue{
        background-color: #0f373d !important;

    }

    .heart{
        margin-left: 10px;
    font-size: 26px;
    position: relative;
    top: 4px;    
    }


    .show-in-desktop{


        display: block
    }

    .show-in-mobile{
        display: none
    }
    @media (min-width: 320px) and (max-width: 480px) {
        .show-in-desktop{
            display: none
        }

        .show-in-mobile{
            display: flex
        }
    }

    .footer{
        margin-top: 40px;
        background-color: black;
            color: white;
    padding-top: 90px;
    padding-bottom: 90px;
    text-align: center;
    }

    .navbar-toggler{
            padding: 0px;
    border: 0;
    color: white;
    
    }
     .navbar-toggler span{
           color:white
    
    }

</style>
