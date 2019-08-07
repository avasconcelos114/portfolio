<template>
  <Layout>
    <h2>
      Hello! <br>
      My name is <span class="highlighted">Andre Vasconcelos</span> and I am a full stack developer.
    </h2>
    
    <h3>
      I like working with <span class="highlighted">{{ frontend[0].title }}</span>
    </h3>
  
    <!-- TODO: Separate skill box/counter into component -->
    <h4 class="highlighted">Front-end</h4>
    <div class="skill-container">
      <div  v-bind:key="skill.title" v-for="skill in frontend">
        {{ skill.title }} - {{ skill.level }}
      </div>
    </div>

    <h4 class="highlighted">Back-end</h4>
    <div class="skill-container">
      <div  v-bind:key="skill.title" v-for="skill in backend">
        {{ skill.title }} - {{ skill.level }}
      </div>
    </div>

    <h4 class="highlighted">DevOps</h4>
    <div class="skill-container">
      <div  v-bind:key="skill.title" v-for="skill in devops">
        {{ skill.title }} - {{ skill.level }}
      </div>
    </div>

    <h4 class="highlighted">Misc</h4>
    <div class="skill-container">
      <div  v-bind:key="skill.title" v-for="skill in misc">
        {{ skill.title }} - {{ skill.level }}
      </div>
    </div>

  </Layout>
</template>

<script>
import Skills from '~/data/skills.json'

export default {
  metaInfo: {
    title: 'Welcome'
  },
  data () {
    return {
      frontend: Skills.frontend,
      backend: Skills.backend,
      devops: Skills.devops,
      misc: Skills.misc,
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/variables.scss';
.highlighted {
  color: $highlightColor;
}

.skill-container {
  display: flex;
  flex-direction: row;
}
</style>
