<template>
    <LoaderApp v-if="loading" />
    <HeadApp />

    <body data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
        <section class="section bg-custom-gray" id="portfolio">
            <div class="container">
                <h1 class="mb-5"><span class="text-danger">My</span> Projects</h1>
                <div class="portfolio">
                    <div class="filters">
                        <a href="#" data-filter=".new" class="active">
                            New
                        </a>
                        <a href="#" data-filter=".advertising">
                            Advertising
                        </a>
                        <a href="#" data-filter=".branding">
                            Branding
                        </a>
                        <a href="#" data-filter=".web">
                            Web
                        </a>
                    </div>
                    <div class="portfolio-container d-flex flex-wrap">
                        <div class="col-md-6 col-lg-4 web new" v-for="(project, index) in projects">
                            <div class="portfolio-item">
                                <img :src="project.image" class="img-fluid" :alt="project.title">
                                <div class="content-holder">
                                    <a class="img-popup" href="../assets/imgs/web-1.jpg"></a>
                                    <div class="text-holder">
                                        <h6 class="title">{{ project.title }}</h6>
                                        <p class="subtitle">{{ project.description }}</p>
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
            </div>
        </section>
    </body>
</template>
  
<script>
import axios from 'axios';
import { store } from '../store';
import LoaderApp from '../components/LoaderApp.vue';
import HeadApp from '../components/HeadApp.vue';
export default {
    'name': 'ProjectList',
    components: { LoaderApp, HeadApp },
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