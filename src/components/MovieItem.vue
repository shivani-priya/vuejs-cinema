<template>
    <div class="movie">
      <div class="movie-col-left">
          <router-link v-bind:to="{ name: 'movie' ,params: {id: movie.imdbID}}">
                  <img v-bind:src="movie.Poster" alt="Refresh page">
                </router-link>
          
      </div>
      <div class="movie-col-right">
          <div class="movie-title">
              <router-link v-bind:to="{ name: 'movie' ,params: {id: movie.imdbID}}">
                  <h2>{{movie.Title}}</h2>
                </router-link>
              
              <span class="movie-rating">{{movie.Rated}}</span>
          </div>
          <slot></slot>
      <!-- <div class="movie-sessions">
          <div v-for="session in filteredSessions(sessions)" class="session-time-wrapper" >
              <div class="session-time" >
                  {{formatSessionTime(session.time)}}
            </div>
          </div>
      </div> -->
      </div>
    </div>
</template>
<script>
import times from "../util/times"

    export default{
        props: ['movie'],//,'sessions','day','time'
        methods:{
            // formatSessionTime(time){
            //    return this.$moment(time).format('h:mm A')
            // },
            // filteredSessions(sessions){
            //     return sessions.filter(this.sessionPassesTimeFilter)
            //     //     session=>{
            //     //     return this.$moment(session.time).isSame(this.day,'day')
            //     // });
                
            // },
            //  sessionPassesTimeFilter(session){
            //         if(!this.day.isSame(this.$moment(session.time),'day')){
            //             return false;
            //         }else if(this.time.length ===0 || this.time.length ===2){
            //             return true;
            //         }else if(this.time[0]===times.AFTER_6PM){
            //           return this.$moment(session.time).hour()>=18;
            //         }else{
            //           return this.$moment(session.time).hour()<18;

            //         }
            //         //return true;
            //     }
        }
    }
</script>