<template>
    <div class="skill">
        <span :id="skill.id">{{skill.title}}</span>
        <div class="level-container">
            <input 
                value="1" 
                :checked="getStarValue(skill.level, 1)" 
                class="skill-level" name='skill-level' 
                type="checkbox"
            /> 
            <label for="skill-level"></label> 
            <input 
                value="2" 
                :checked="getStarValue(skill.level, 2)" 
                class="skill-level" name='skill-level' 
                type="checkbox"
            />
            <label for="skill-level"></label> 
            <input 
                value="3" 
                :checked="getStarValue(skill.level, 3)" 
                class="skill-level" name='skill-level' 
                type="checkbox"
            />
            <label for="skill-level"></label> 
            <input 
                value="4" 
                :checked="getStarValue(skill.level, 4)" 
                class="skill-level" name='skill-level' 
                type="checkbox"
            />
            <label for="skill-level"></label> 
            <input 
                value="5" 
                :checked="getStarValue(skill.level, 5)" 
                class="skill-level" name='skill-level' 
                type="checkbox"
            />
            <label for="skill-level"></label> 
        </div>
    </div>
</template>

<script>
export default {
    props: {
        skill: {
            type: Object,
            required: true,
        }
    },
    methods: {
        getStarValue: function(skillLevel, starLevel) {
            return skillLevel >= starLevel
        }
    }
}
</script>

<style lang="scss">
.skill {
  width: 50%;
  display: flex;
  margin: 10px 0px;
  flex-direction: row;
  align-items: center;
  color: var(--body-color);

    span {
        width: 50%;
    }
  .level-container {
      display: flex;
      justify-items: flex-end;
      width: -webkit-fill-available;
  }
}
input[type=checkbox] {
    display: none;
}
input[type=checkbox].skill-level + label {
    height: 25px;
    width: 25px;
    margin: 8px;
    cursor: default;
    display:inline-block;
    padding: 0 0 0 0px;
    background-size: 25px;
    background-image: url('../assets/img/star_empty.png');
}

input[type=checkbox].skill-level:checked + label {
    height: 25px;
    width: 25px;
    margin: 8px;
    cursor: default;
    display:inline-block;
    padding: 0 0 0 0px;
    background-size: 25px;
    background-image: url('../assets/img/star_filled.png');
}
</style>
