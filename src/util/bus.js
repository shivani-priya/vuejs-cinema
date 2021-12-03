
function checkFilterMethodRoot(category,title,checked){
    if(checked){
        this[category].push(title);
        //console.log( this[category]);
    }
    else{
        let index=this[category].indexOf(title);
       // console.log(index)
        if(index>-1){
            this[category].splice(index,1);
        //console.log(this[category])

        }
    }
   // console.log(category,title,checked)
}
function setDay(day){
    this.day= day
}
export {checkFilterMethodRoot, setDay};