<template>
    <div id="day-select" >
        <ul class="days">
            <li v-bind:class="{day: true,active: isActive(day) }" v-for="day in days" v-on:click="selectDay(day)">
                {{formatDay(day)}}
            </li>
            <!-- For mobile view application -->
            <li class="day-selector" >
                <span class="dec" v-on:click="changeDay(-1)"></span>
                <span class="inc" v-on:click="changeDay(1)"></span>

            </li>
        </ul>
    </div>
</template>
<script>


export default {

    props:['selected'],
    data(){
        return{
            //Return 7 momrnt objects one for each and add 1 extra day for each starting from today
            //selected:this.$moment,
            days: [0,1,2,3,4,5,6].map(num => this.$moment().add(num,'days'))
        }
    },
    methods:{
        formatDay(day){
            if(day.isSame(this.$moment(),'day')){
                return 'Today'
            }else{
            return day.format('ddd DD/MM')

            }
        },
        isActive(day){
            return day.isSame(this.selected,'day') 
    },
    selectDay(day){
        this.$bus.$emit('set-day',day)
    },
    changeDay(day){
        let newDay= this.$moment(this.selected).add(day,'days');
        if(this.days.find(day => newDay.isSame(day,'day'))){
        this.selectDay(newDay);

        }
       // console.log(this.selected)
    }
}
}
</script>
