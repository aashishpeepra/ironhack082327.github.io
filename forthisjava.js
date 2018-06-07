function message(){
    var obj=new Date();
    var hr=obj.getHours();
    var min=obj.getMinutes();
    var sec=obj.getSeconds();
    var dayy=obj.getDate();
    var xsec=6;
    var xmin=6;
    var xhour=18;
    var xday=14;
    if(dayy<=14){
        if(sec>xsec){
            var  extra=66-sec;
            document.getElementById("dsec").innerHTML=extra;
           xmin=xmin-1;
        }
        else{
            docuement.getElementById("dsec").innerHTML=xsec-sec;
        }

        if(min>xmin){
            var extra2=(xmin+60)-min;
            document.getElementById("dmin").innerHTML=extra2;
            xhour=xhour-1;
        }
        else{
            document.getElementById("dmin").innerHTML=xmin-min;
        }
        if(hr<xhour){
            document.getElementById("dhour").innerHTML=xhour-hr;
        }
        else{
            var extra3=(xhour+12)-hr;
            document.getElementById("dhour").innerHTML=extra3;
            xday=xday-1;
        }
        document.getElementById("dday").innerHTML=(xday-dayy);
    }

}
function message2(){
    setInterval("message()",1000);
}
