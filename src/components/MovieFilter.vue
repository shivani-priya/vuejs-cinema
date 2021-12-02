<template>
    <div id="movie-filter">
            <h2> Filter Results</h2>
            <h3>By time of the day</h3>
            <div class="filter-group">
            <check-filter v-for="time in times" category="time" v-bind:title="time"></check-filter>
            </div>
             <h3>By Genre</h3>
             <div class="filter-group">
            <check-filter v-for="genre in genres" category="genre" v-bind:title="genre"></check-filter>
            </div>
            </div>
</template>
<script>
import genres from "../util/genres";
import CheckFilter from "./CheckFilter.vue";
import times from "../util/times";

export default {
            data(){
                return {
                    genres,
                    times
                }
            },
            
            // methods:{
            //     checkFilterMethod(category,title,checked){
            //         this.$emit('check-filter',category,title,checked);
            //         console.log('checkFilter Working')
            //     }
            // },
            components:{//sub-component
                CheckFilter
            }
        }
</script>
