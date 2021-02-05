<template>
  <div class="interior">
    <div class="wrap columns">
      <div class="sub-section">
        <span class="eyebrow">Experience</span>
        <div class="position" v-for="(position, index) in resume.work" :key="resume.work[index]">
          <div class="position-head">
            <h2 v-text="position.position"></h2>
            <span class="info">{{ position.startDate }}-{{ position.endDate}} — <a :href="position.website" target="_blank">{{ position.company }}</a> — {{ position.city }}</span>
          </div>

          <p v-html="position.summary"></p>

          <ul class="tags">
            <li v-for="(tag, index) in position.tags" :key="position.tags[index]">{{ tag }}</li>
          </ul>
        </div>

      </div>
      <div class="sidebar">
        <span class="eyebrow">Languages & Stack</span>
        <ul>
            <li v-for="(skill, index) in resume.skills[0].stack" :key="resume.skills[0].stack[index]" v-text="skill"></li>
        </ul>

        <span class="eyebrow">Software Tools</span>
        <ul>
            <li v-for="(tool, index) in resume.skills[0].software" :key="resume.skills[0].software[index]" v-text="tool"></li>
        </ul>

        <span class="eyebrow">Additional Skills</span>
        <ul>
            <li v-for="(skill, index) in resume.skills[0].additional" :key="resume.skills[0].additional[index]" v-text="skill"></li>
        </ul>

        <span class="eyebrow">Finer Details</span>
        <p v-html="resume.basics.about"></p>

        <span class="eyebrow">Resume Downloads</span>
        <a href="/static/files/mpgResume2021.pdf" target="_blank">PDF</a> /
        <a href="/static/files/mpgResume2021.json" target="_blank">JSON</a> /
        <a href="/static/files/mpgResume2021.txt" target="_blank">TXT</a>
      </div>
    </div>
  </div>
</template>

<script>
  import resume from '../data/resume.json';

  export default {
    name: 'PageResume',
    data() {
      return {
        resume: resume
      }
    },
    created() {

    }
  }
</script>
