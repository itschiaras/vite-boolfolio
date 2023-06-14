<template>
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
                <router-link :to="{ name: 'Single-Project', params: { slug: project.slug } }" class="btn btn-primary">View
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
export default {
  'name': 'ProjectList',
  data() {
    return {
      title: 'My Projects',
      projects: [],
      apiUrl: 'http://127.0.0.1:8000/api'
    }
  },
  methods: {
    getData() {
      axios.get(`${this.apiUrl}/projects`).then((res) => {
        console.log(res);
        this.projects = res.data.results;
      })
    }
  },
  mounted() {
    this.getData();
  }
}
</script>
  
<style lang="scss" scoped></style>