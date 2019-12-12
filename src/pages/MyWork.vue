<template>
  <Layout>
    <h1 class="project__header">Projects I worked in.</h1>
    <!-- List posts -->
    <div class="projects">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>
  </Layout>
</template>

<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    Author,
    PostCard
  },
  metaInfo: {
    title: 'My work'
  }
}
</script>

<page-query>
{
  posts: allPost(filter: { published: { eq: true }, project: { eq: true }}) {
    edges {
      node {
        id
        title
        path
        tags {
          id
          title
          path
        }
        date (format: "D. MMMM YYYY")
        timeToRead
        cover_image (height: 650)
        ...on Post {
            id
            title
            path
        }
      }
    }
  }
}
</page-query>

<style lang="scss">
@import "~/assets/style/_mixins.scss";
.project__header {
  display: flex;
  width: fit-content;
  font-weight: 400;
  color: var(--body-color);
  margin: 30px auto;
  text-align: center;
}
.projects {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @include lg {
    padding: 50px;
  }
}
.projects > div {
  width: 100%;

  @include lg {
    width: 30%;
    margin-right: 3%;
  }
}
</style>
