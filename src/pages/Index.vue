<template>
  <Layout>
    <div class="section main">
      <div>
        <h2>
          Hello! <br> <br>
          My name is <span class="highlighted">Andre Vasconcelos</span> and I am a full stack developer.
        </h2>
        <h3>
          I like working with <span class="rotating-text highlighted"></span>
        </h3>

      </div>
    </div>
  
    <!-- Basic self intro -->
    <div class="section intro">
      <div>
        <h3>
          I am a <span class="highlighted">Brazilian</span> developer based in Seoul, South Korea.
        </h3>

        <h4>
          I currently work at <span class="highlighted">Slexn Inc.</span> customizing enterprise-grade software for large-scale client sites. <br> <br>
          I also like to use my spare time to build things for others.
        </h4>
      </div>
    </div>
    <!--Skill section -->
    <!-- TODO: Separate skill box/counter into component -->
    <div class="section">
      <h4 class="highlighted">Front-end</h4>
      <div class="skill-container">
        <div class="skill" v-bind:key="skill.title" v-for="skill in frontend">
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
    </div>
  </Layout>
</template>

<script>
import Skills from '~/data/skills.json'
import Typed from 'typed.js'

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
  },
  mounted() {
    // Loading and configuring rotating text
    const allSkills = this.frontend.concat(this.backend, this.devops)
    const strings = []
    allSkills.forEach(skill => {
      strings.push(skill.title)
    })

    var options = {
      strings,
      loop: true,
      typeSpeed: 90,
      backSpeed: 60,
      startDelay: 600,
      backDelay: 1800,
    }

    new Typed(".rotating-text", options);
  }
}
</script>

<style lang="scss">
.intro {
  display: flex;
  flex-direction: row;
  height: 60vh;
  div {
    max-width: 750px;
  }
}
.main {
  position: relative;

  div {
    position: absolute;
  }
  img {
    position: absolute;
    width: 100vw;
    height: 100vh;
    filter: opacity(23%);
  }

  h3 {
    margin-top: 100px;
  }
}
.section {
  height: 100vh;
  min-height: 560px;
  padding: 0 10%;
}
.skill-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: var(--body-color);
}
.skill {
  width: 50%;
}
</style>
