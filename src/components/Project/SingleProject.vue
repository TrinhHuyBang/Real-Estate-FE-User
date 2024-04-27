<template>
    <div class="single-project">
        <div>
            <img class="image-project" :src="project.image" loading="lazy" alt="" />
            <!-- <div class="number-image"><i class="el-icon-picture-outline"> {{ project.number_image }}</i> </div> -->
        </div>
        <div class="content-project">
            <span class="project-name">{{ project.name }}</span>
            <div class="project-status">
                <span v-if="project.project_status" :class="getStatusClass(project)">{{ projectStatus[project.project_status] }} {{ project.note ? " - " + project.note : "" }}</span>
                <span v-else :class="getStatusClass(project)">Đang cập nhật {{ project.note ? " - " + project.note : "" }}</span>
            </div>
            <div class="project-size">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="25px" height="25px" viewBox="0 0 111.000000 93.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,93.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                    <path d="M40 800 l0 -70 30 0 c23 0 30 4 30 20 0 20 7 20 320 20 313 0 320 0 320 -20 0 -16 7 -20 30 -20 l30 0 0 70 0 70 -30 0 c-23 0 -30 -4 -30 -20 0 -20 -7 -20 -320 -20 -313 0 -320 0 -320 20 0 16 -7 20 -30 20 l-30 0 0 -70z"/>
                    <path d="M103 640 c-64 -39 -68 -53 -68 -265 0 -212 4 -226 68 -265 30 -19 52 -20 317 -20 265 0 287 1 317 20 64 39 68 53 68 265 0 212 -4 226 -68 265 -30 19 -52 20 -317 20 -265 0 -287 -1 -317 -20z m608 -69 c24 -19 24 -22 24 -196 0 -174 0 -177 -24 -196 -22 -18 -42 -19 -291 -19 -249 0 -269 1 -291 19 -24 19 -24 22 -24 196 0 174 0 177 24 196 22 18 42 19 291 19 249 0 269 -1 291 -19z"/>
                    <path d="M920 626 c0 -18 6 -25 23 -28 22 -3 22 -3 25 -225 l2 -223 -25 0 c-20 0 -25 -5 -25 -25 0 -24 2 -25 75 -25 73 0 75 1 75 24 0 18 -6 25 -22 28 l-23 3 0 220 0 220 23 3 c16 3 22 10 22 28 0 23 -2 24 -75 24 -73 0 -75 -1 -75 -24z"/>
                    </g>
                </svg>
                <span> {{ project.size + " m&sup2;"}}</span>
            </div>
            <div class="project-location">
                <i class="el-icon-location-outline"></i> {{ project.address }}
            </div>
            <div class="project-description">
                <p style="width: 100%"> {{ project.description }} </p>
            </div>
        </div>
    </div>
</template>

<script>
import projectStatus from '@/data/projectStatus';
export default {
    props: {
        project: {
            type: Object,
            required: true,
        },
    },

    data() {
        return {
            projectStatus : projectStatus,
        }
    },

    methods: {
        getStatusClass(project) {
            return {
                'status-pending': project.project_status == 1,
                'status-completed': project.project_status == 2,
                'status-handed': project.project_status == 3,
                'status-in-progress': !project.project_status
            };
        }
    }

}
</script>

<style scoped>

</style>