<template>
    <div class="project-list-single">
      <div v-for="project in projects" :key="project.id">
          <router-link class="link-to-detail" :to="`/chi-tiet-du-an/${project.id}`">
              <single-project :project="project"/>
          </router-link>
      </div>
    </div>
</template>

<script>
import SingleProject from '../../Project/SingleProject.vue';
import projectType from '@/data/projectType';
export default {
    props: {
        projects: {
          type: Array,
          default : () => []
        },
    },

    components: {
        'single-project' : SingleProject,
    },

    data() {
        return {
            projectType: projectType,
            title: ''
        }
    },

    methods: {
        getStatusClass(project) {
            return {
                'status-pending': project.status === 'Sắp mở bán',
                'status-completed': project.status === 'Đang mở bán',
                'status-handed': project.status === 'Đã bàn giao',
                'status-in-progress': project.status == ''
            };
        },
        setTitle() {
            this.title = 'Dự án'
            if(this.filters.type_id) {
                this.title = projectType[this.filters.type_id]
            }
            if(this.filters.province || this.filters.district) {
                this.title += " tại " + this.showAddress({province: this.filters.province, district: this.filters.district})
            } else {
                this.title += " trên toàn quốc"
            }
        },
    },

    watch: {
        filters() {
            this.setTitle()
        }
    }
}
</script>

<style scoped>

.project-list-single {
    width: 80%;
}

.paginate-page{
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
}
</style>