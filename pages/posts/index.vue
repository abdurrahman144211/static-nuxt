<template>
  <div>
    <center>
      <h3 v-for="post in posts" :key="post.id">
        <nuxt-link :to="{name: 'posts-slug', params: {slug: post.id}}">{{post.title}}</nuxt-link>
      </h3>
    </center>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        posts: []
      }
    },
    async asyncData({app}) {
      let response =  await app.$axios.$get('https://jsonplaceholder.typicode.com/posts');
      return {
        posts: response
      }
    }
  }
</script>
