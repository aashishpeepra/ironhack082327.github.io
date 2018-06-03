var resm1=0;
function message(){
    var obj=new Date();
    var hour=obj.getHours();
    var min=obj.getMinutes();
    var resh,ress;
    if(hour<18){
        ress=60-min;
        hour=hour+1;
        resh=18-hour;
        document.getElementById("meeting").innerHTML=resh+" Hours "+ress+" minutes left to meet";
    }
    else{
        document.getElementById("meeting").innerHTML="already met";
    }

}
function closer(){
    document.getElementById("quotation").style.display="none";
}
function displayer(){
    document.getElementById("btt1").style.display="none";
    document.getElementById("quotation").style.display="block";
}
function message2(){
    if(resm1!=1) {
        setTimeout("callthis()", 15000);
        resm1=1;
    }
}
function callthis(){
    var ans=confirm("TUM BHUT BEAUTIFUL HO NA (cancel= no, okay=yes)" );
    if(ans==true){
        var ans2=confirm("OHHO TUM HAMSE PYAAR KARTI HO NA?");
        if(ans2==false){
            alert("HURRRR");
        }
        else{
            alert("DEKHAAA !! MWWWAAAM");
        }
    }
    else{
        var ans3=confirm("Nahi Pehle Bolo YES, tum beautiful ho");
        if(ans3==true){
            alert("THANKS PRINCESS");
        }
        else{
            alert("BHuooopp BISHOOM :-)")
        }
    }
}
function boother1(){
    document.getElementById("booth1").style.display="none";
    document.getElementById("exbt1").style.display="block";
    document.getElementById("inpic1").style.display="block";
}
function displaypics() {
    document.getElementById("imagebox1").style.display="block";
    setTimeout("extra1()",1000);
}
function extra1(){
    new Effect.Opacity("imagebox1",{from:0,to:1,duration:3});
}
function picboxcloser(){
    document.getElementById("imagebox1").style.display="none";
}
function carder(){
    document.getElementById("card1").style.backgroundImage="url(site_pics/site2.png)";
    document.getElementById("textcard1").innerHTML="Teri Aankhon Ki, Namkeen Mastiyaan....\n" +
        "Teri Hansi Ki, Beparwaah Gustakhiyaan....\n" +
        "Teri Zulfon Ki, Lehraati Angdaiyaan....\n" +
        "Nahi Bhoolunga Main....\n" +
        "Jab Tak Hai Jaan !!!\n" +
        "Jab Tak Hai Jaan !!!";
    document.getElementById("card1").style.paddingTop="0px";
    document.getElementById("card2").style.height="290px";
}
function carder2(){
    document.getElementById("card2").style.backgroundImage="url(site_pics/site13.jpg";
    document.getElementById("textcard2").innerHTML="Tareef karu mai kya uski, \n"+"jisne tumhe banaya! \n"+"Aaye zo zindagi mai tum meri \n"+
        "Har Pal ko Haseen Bnaya,";
    document.getElementById("card2").style.paddingTop="75px";
}
function message3(){
    alert("Haaye Bichari Bore Hogyi Na Padh Padh Kar");
    alert("MMMMWWWAA!");
}
function message4(){
    setTimeout("alert('Seriously yrr, tumne to poora padha, itna pyaar karti ho hamse, sooch kya rhi ho thanks na bolna jab mile kas k kiss kar dena?')",20000);
}