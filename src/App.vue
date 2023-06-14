<template>
    <HeaderApp/>
    <router-view></router-view>
    <FooterApp/>
</template>

<script>
import HeaderApp from './components/HeaderApp.vue';
import FooterApp from './components/FooterApp.vue';
export default {
    name: "App",
    components: { HeaderApp, FooterApp }
}
</script>

<style lang="scss" scoped>

</style>