import { addClass, removeClass } from './helpers'

//Functions

let mouseOverHandler=function(event){
    let span= event.target.parentNode.getElementsByTagName('SPAN')[0];
    addClass(span,'tooltip-show');
}
let mouseOutHandler=function(event){
    let span= event.target.parentNode.getElementsByTagName('SPAN')[0];
    removeClass(span,'tooltip-show');
};



export default{
    install(Vue){
        Vue.directive('tooltip',{
            bind(el,bindings){//LCH
              //  console.log(el,bindings)
              let span=document.createElement('SPAN');
              let text=document.createTextNode(`Seats available:${bindings.value.seats} `)
                span.appendChild(text);
                addClass(span,'tooltip');
                el.appendChild(span);
                let div=el.getElementsByTagName('DIV')[0];
                //Desktop version
                div.addEventListener('mouseover',mouseOverHandler)
                div.addEventListener('mouseout',mouseOutHandler)
                //Mobile version
                div.addEventListener('touchstart',mouseOverHandler)
                div.addEventListener('touchend',mouseOutHandler)
            },
            //Remove event listener when item removed from the DOM, taking us space so unbind
            unbind(el){
                let div=el.getElementsByTagName('DIV')[0];
                div.removeEventListener('mouseover',mouseOverHandler)
                div.removeEventListener('mouseout',mouseOutHandler)
                //Mobile version
                div.removeEventListener('touchstart',mouseOverHandler)
                div.removeEventListener('touchend',mouseOutHandler)
            }
        }); 
    }
}