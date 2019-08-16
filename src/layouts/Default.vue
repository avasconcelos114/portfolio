<template>
  <div class="main-wrapper">
    <g-image class="background" alt="background_img" src="~/assets/img/main_background.jpg"/>
    <Header />
    <div class="header-margin"></div>
    <transition name="fade" appear>
      <div id="layout">
        <slot/>
      </div>
    </transition>
  </div>
</template>

<script>
import Header from '~/components/Header'
export default {
  components: {
    Header
  },
}
</script>

<style lang="scss">
body {
  background-color: var(--bg-color);
  color: var(--base-color);
  font-family: "Montserrat", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  overflow: hidden;
}
.fade-enter-active {
  transition: opacity .2s;
}
.fade-enter {
  opacity: 0;
}
.header-margin {
  margin-bottom: 60px;
}
.main-wrapper {
  display: flex;
  flex-direction: column;

  .background {
    filter: opacity(50%);
    position: fixed;
    z-index: -1;
    top: 0; 
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
#layout {
  width: 100%;
  margin: 0 auto;
  height: calc(100vh - 90px);
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>
