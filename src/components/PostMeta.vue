<template>
  <div class="post-meta">
    <template v-if="post.timeToRead">
      <strong>{{ post.timeToRead }} min read.</strong>
    </template>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style lang="scss">
.post-meta {
  color: var(--body-color);
  font-size: 0.8em;
  opacity: 0.8;
}
</style>
