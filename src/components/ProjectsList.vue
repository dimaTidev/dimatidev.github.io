<template>
    <div>
      <div class="projects-list">
        <template v-for="project in projects">
          <div
            :key="project.id"
              @click="showDetails(project)"
              class="project-item"
              :class="{ 'wide': project.isWide, 'high': project.isHigh }">
            <div class="project-item-image" :style="{ 'background-image': 'url(' + project.iconUrl + ')' }">
            </div>
            <div class="title-bar" :style="{ 'background-color': project.accentColor + 'DD' }">
                <div class="title-text">
                  {{ project.name }}  
                                                    <!--<i class="fa fa-play" aria-hidden="true"></i>
                                                    <i class="fa fa-apple" aria-hidden="true"></i>-->
                </div>
               
              </div>
          </div>
        </template>
      </div>

      <ProjectDetailsOverlay
        v-on:close="showPopup = false"
        :visible="showPopup"
        :title="popupTitle"
        :htmlContent="popupContent"
        :color="popupColor"
      />
       <meta v-if="popupImage" property=”og:image” :content='popupImage' />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectDetailsOverlay from "@/components/ProjectDetailsOverlay.vue";
import ProjectData from "@/data/ProjectData.ts";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "ProjectsList",
  components: {
    ProjectDetailsOverlay,
  },
  props: {
    projects: Array
  },
  data: function () {
    return {
      showPopup: false,
      popupTitle: "",
      popupColor: "",
      popupContent: "",
      popupImage: ""
    };
  },
  methods: {
    showDetails: function (item: ProjectData) {
      // if (event) {
      //   alert(event.target);
      // }
      this.popupTitle = item.name;
      this.popupColor = item.accentColor;
      this.popupContent = item.htmlDescription;
      this.popupImage = item.iconUrl;
      this.showPopup = true;
      window.scrollTo(0,0);
    },
  },
  beforeMount(){
    if ("project" in this.$route.query)
    {
      const item: ProjectData  = gameProjectsData.find(project => project.id == this.$route.query.project)!;
      this.showDetails(item);
    }
      
  },
});
</script>

<style scoped>

.project-item {
  height: 450px;
  margin-bottom: 20px;
  width: 100%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.project-item-image {
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  transition: all 0.2s;
}
.project-item-image:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}

.project-item:hover {
  filter: brightness(120%);
}

.title-bar {
  position: absolute;
  bottom: 0px;
  width: 100%;
  background-color: #222222;
}

.title-text {
  padding: 10px;
}

@media only screen and (min-width: 620px){
  .projects-list {
    max-width: 1200x;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 40px;
    margin-left: 40px;
    margin-right: 40px;
   /* grid-auto-rows: minmax(250px, auto);*/
  }

  .project-item {
    margin: 0px;
   /* height: 100%;
    width: 100%;*/
  }

  .wide {
    grid-column-end: span 2;
  }
  .high {
    grid-row-end: span 2;
  }
}



</style>