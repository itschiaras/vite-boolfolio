<template>
    <LoaderApp v-if="loading" />
    <div class="container">
        <h1>{{ title }}</h1>
        <div class="row">
            <div class="col col-4 gap-3" v-for="(project, index) in projects">
                <div class="card">
                    <img :src="project.image" :alt="project.title" class="img-fluid">
                    <div class="card-body">
                        <div class="card-title">
                            <h3>{{ project.title }}</h3>
                        </div>
                        <div class="card-text">
                            <p>{{ project.description }}</p>
                            <p>
                                <router-link :to="{ name: 'Single-Project', params: { slug: project.slug } }"
                                    class="btn btn-primary">View
                                </router-link>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
import { store } from '../store';
import LoaderApp from '../components/LoaderApp.vue';
export default {
    'name': 'ProjectList',
    components: { LoaderApp },
    data() {
        return {
            store,
            title: 'My Projects',
            projects: [],
            loading: false
        }
    },
    methods: {
        getData() {
            this.loading = true;
            axios.get(`${store.apiURL}/projects`).then((res) => {
                console.log(res);
                this.projects = res.data.results;
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                this.loading = false;
            })
        }
    },
    mounted() {
        this.getData();
    }
}
</script>
  
<style lang="scss" scoped></style>