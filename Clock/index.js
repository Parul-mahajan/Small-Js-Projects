function setTime(){
    const day= new Date();
    let h = day.getHours();
    let m= day.getMinutes();
    let s= day.getSeconds();
    if(m<10){
        m= "0" + m;
       
    }
    if( s<10 ){
        s = "0" + s;
       
    }
    if( h<10 ){
        h = "0" + h;
       
    }
    let am;
    if(h<12){
        am = "AM"
    }
    else{
        am="PM"
    }
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s + " " + am;
    setTimeout( setTime, 1000);
}
setTime();