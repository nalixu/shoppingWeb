function getByClass(oParent, sClass)
{
    var aEle=oParent.getElementsByTagName('*');
    var aTmp=[];
    var i=0;
    
    for(i=0;i<aEle.length;i++)
    {
        if(aEle[i].className==sClass)
        {
            aTmp.push(aEle[i]);
        }
    }
    
    return aTmp;
}

window.onload=function ()
{
    var oDiv=document.getElementById('div1');
    var oMark=getByClass(oDiv, 'mark')[0];
    var oFloat=getByClass(oDiv,'float_layer')[0];
    var oBig=getByClass(oDiv,'big_pic')[0];    
    var oSmall=getByClass(oDiv,'small_pic')[0];
    var oImg=oBig.getElementsByTagName('img')[0];
    oMark.onmouseover=function()
    {
        oFloat.style.display='block';
        oBig.style.display='block';


    };
    oMark.onmouseout=function(){
        oFloat.style.display='none';
        oBig.style.display='none';
    };
    oMark.onmousemove=function(ev){
        var oEvent=ev||event;
        var l=oEvent.clientX-oDiv.offsetLeft-oSmall.offsetLeft-oFloat.offsetWidth/2;
        var t=oEvent.clientY-oDiv.offsetTop-oSmall.offsetTop-oFloat.offsetHeight/2;
        
        if(l<-5)
        {
            l=-5;
        }
        else if (l>oMark.offsetWidth-oFloat.offsetWidth+5){l=oMark.offsetWidth-oFloat.offsetWidth+5;}

        if(t<-5)
        {
            t=-5;
        }
                else if (t>oMark.offsetHeight-oFloat.offsetHeight+5){t=oMark.offsetHeight-oFloat.offsetHeight+5;}


        oFloat.style.left=l+'px';
        oFloat.style.top=t+'px';
        var tempX=l/(oMark.offsetWidth-oFloat.offsetWidth);
        var tempY=t/(oMark.offsetHeight-oFloat.offsetHeight);

        document.title=tempX;
        oImg.style.left=-tempX*(oImg.offsetWidth-oBig.offsetWidth)+'px';
        oImg.style.top=-tempY*(oImg.offsetHeight-oBig.offsetHeight)+'px';

        
    }
    //数量
                var Input0=document.getElementById('input0');
                var Input1=document.getElementById('input1');
                var Input2=document.getElementById('input2');
                
                    Input1.onclick=function(){
                        this.form.amount.value++;
                    }
                    
                        Input2.onclick=function(){
                            if(Input0.value>1){
                            this.form.amount.value--;
                        }
                    }
                    //导航
                    var myTab=document.getElementById("tab");
                    var myUl=myTab.getElementsByTagName("ul")[0];
                    var myLi=myUl.getElementsByTagName("li");
                    var myDiv=myTab.getElementsByTagName("div");
                    for(var i=0;i<myLi.length;i++){
                        myLi[i].index=i;
                        myLi[i].onclick=function(){
                            for(var j=0;j<myLi.length;j++){
                                myLi[j].className="off";
                                myDiv[j].className="hide";
                            }
                            this.className="on";
                            myDiv[this.index].className="show";
                        }
                    }  

};