<template>
    <div style="margin-top: 20px">
        <div v-if="brokers && brokers.length">
            <div class="single-broker-card" v-for="broker in brokers" :key="broker.id">
                <div>
                    <router-link :to="`/nha-moi-gioi/${broker.id}`">
                        <img v-if="broker.info.avatar" class="broker-avatar-single-card" :src="broker.info.avatar" alt="" />
                        <el-avatar v-else shape="square" :size="150" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"></el-avatar>
                    </router-link>
                </div>
                <div class="broker-single-card-info">
                    <router-link class="link-to-detail" :to="`/nha-moi-gioi/${broker.id}`">
                        <p class="card-title">{{ broker.info.name }}</p>
                    </router-link>
                    <div>
                        <span style="margin-top: 10px;">
                            <i class="el-icon-location-outline"></i>
                            <span v-if="broker.address">{{ broker.address }}</span>
                            <span v-else>Đang cập nhật</span>
                        </span>
                    </div>
                    <div>
                        <span>
                            <svg data-v-167ecec1="" width="16" height="16" viewBox="0 0 30 30" fill="#000000" xmlns="http://www.w3.org/2000/svg"><path data-v-167ecec1="" d="M6.85116 2.49006C6.74047 2.34768 6.60075 2.23047 6.44129 2.14624C6.28182 2.062 6.10626 2.01265 5.92625 2.00148C5.74625 1.99031 5.56593 2.01756 5.39727 2.08144C5.22862 2.14531 5.07548 2.24433 4.94803 2.37194L3.00928 4.31256C2.10366 5.22006 1.76991 6.50444 2.16553 7.63132C3.80754 12.2955 6.47858 16.5302 9.98053 20.0213C13.4716 23.5232 17.7063 26.1942 22.3705 27.8363C23.4974 28.2319 24.7818 27.8982 25.6893 26.9926L27.628 25.0538C27.7556 24.9264 27.8547 24.7732 27.9185 24.6046C27.9824 24.4359 28.0097 24.2556 27.9985 24.0756C27.9873 23.8956 27.938 23.72 27.8537 23.5606C27.7695 23.4011 27.6523 23.2614 27.5099 23.1507L23.1843 19.7869C23.0322 19.669 22.8552 19.5871 22.6669 19.5474C22.4785 19.5078 22.2835 19.5115 22.0968 19.5582L17.9905 20.5838C17.4424 20.7208 16.8682 20.7135 16.3237 20.5627C15.7793 20.4119 15.2832 20.1227 14.8837 19.7232L10.2787 15.1163C9.87885 14.717 9.58927 14.221 9.43812 13.6765C9.28697 13.132 9.2794 12.5577 9.41616 12.0094L10.4437 7.90319C10.4904 7.71643 10.494 7.52151 10.4544 7.33312C10.4148 7.14473 10.3329 6.96781 10.2149 6.81569L6.85116 2.49006ZM3.53241 0.95819C3.86052 0.62997 4.25471 0.375309 4.68879 0.211117C5.12288 0.046925 5.58692 -0.0230412 6.05012 0.00586428C6.51332 0.0347698 6.96507 0.161886 7.37537 0.378771C7.78567 0.595657 8.14514 0.897349 8.42991 1.26381L11.7937 5.58756C12.4105 6.38069 12.628 7.41382 12.3843 8.38881L11.3587 12.4951C11.3056 12.7077 11.3085 12.9305 11.367 13.1418C11.4255 13.353 11.5376 13.5456 11.6924 13.7007L16.2993 18.3076C16.4546 18.4627 16.6475 18.575 16.8591 18.6335C17.0707 18.692 17.2938 18.6947 17.5068 18.6413L21.6112 17.6157C22.0923 17.4954 22.5945 17.486 23.0798 17.5884C23.5651 17.6907 24.0208 17.902 24.4124 18.2063L28.7362 21.5701C30.2905 22.7794 30.433 25.0763 29.0418 26.4657L27.103 28.4044C25.7155 29.7919 23.6418 30.4013 21.7087 29.7207C16.7609 27.9798 12.2685 25.1473 8.56491 21.4332C4.85107 17.7301 2.01855 13.2384 0.277406 8.29132C-0.401344 6.36006 0.208031 4.28444 1.59553 2.89694L3.53428 0.95819H3.53241Z" fill="#000000"></path></svg> 
                            {{ broker.info.phone }}
                        </span>
                    </div>
                </div>
                <div class="brokerage-areas-single-card">
                    <p class="card-title" style="color: #000000"> Loại bất động sản và khu vực môi giới </p>
                    <ul>
                        <li v-for="(brokerageArea, index) in broker.areas" :key="index">
                            {{ showBrokerageArea(brokerageArea) }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <list-post-error v-else />
    </div>
</template>

<script>
import ListPostError from '@/components/NoneToDisplay/ListPostError.vue'
export default {
    props: {
        brokers: {
          type: Array,
        }
    },
    components: {
      ListPostError
    },
}
</script>

<style>

</style>