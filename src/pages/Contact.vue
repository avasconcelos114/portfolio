<template>
  <Layout>
    <h1 class="contacts__header">Contact me here:</h1>
    <h3 class="contacts__subheader"><span>Phone:</span>+82 10 8220-1412</h3>
    <h3 class="contacts__subheader"><span>Email:</span> andre.onogoro@gmail.com</h3>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact information'
  }
}
</script>

<style lang="scss">
@import "~/assets/style/_mixins.scss";
.contacts__header {
  display: flex;
  width: fit-content;
  font-weight: 400;
  color: var(--body-color);
  margin: 30px auto;
  text-align: center;
}

.contacts__subheader {
  display: flex;
  width: fit-content;
  font-weight: 400;
  color: var(--body-color);
  margin: 30px auto;
  text-align: center;

  span {
    color: var(--highlight-color);
    margin-right: 10px;
  }
}
</style>
