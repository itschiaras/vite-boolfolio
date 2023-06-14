<template>
    <div>
        <h1>Singolo Prodotto</h1>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SingleProject',
    data() {
        return {
            product: null,
            apiUrl: 'http://127.0.0.1:8000/api',
            img_path: 'http://127.0.0.1:8000/storage/'
        }
    },
    methods: {
        getProject() {
            axios.get(`${this.apiUrl}/projects/${this.$route.params.slug}`).then((res) => {
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