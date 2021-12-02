import Vue from "vue";
import "./style.scss"
//import genres from "./util/genres";

import Overview from './components/Overview.vue'
import VueResource from "vue-resource"
Vue.use(VueResource);

import moment from "moment-timezone"
import momentTimezone from "moment-timezone/moment-timezone";
moment.tz.setDefault("UTC");
Object.defineProperty(Vue.prototype,'$moment',{ get(){ return this.$root.moment}});

import {checkFilterMethodRoot} from "./util/bus"
const bus=new Vue();
Object.defineProperty(Vue.prototype,'$bus',{ get(){ return this.$root.bus}});


new Vue({
    el:"#app",
    data:{
        genre:[],
        time:[],
        movies:[],
        moment,
        day: moment(),
        bus
    },
   
    components:{
        Overview
    },
    created(){
        this.$http.get('./api').then(response =>{
            this.movies= response.data;
        })
        this.$bus.$on('check-filter',checkFilterMethodRoot.bind(this))
    }
});
//console.log(genres)
///Using {{genre}} simply inside check-filter tag wont work as Vue would not know what to print?
//Confused b/w genre and line 46; inside div i.e Filter.
//So we use props here