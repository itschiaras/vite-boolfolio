<template>
    <div>
        <h1>Singolo Prodotto</h1>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'SingleProject',
    data() {
        return {
            store,
            product: null,
        }
    },
    methods: {
        getProject() {
            axios.get(`${store.apiURL}/projects/${this.$route.params.slug}`).then((res) => {
                if (res.data.success) {
                    this.product = res.data.results;
                } 
                
            })
        }
    },
    mounted() {
        this.getProject()
    }
}
</script>

<style lang="scss" scoped></style>