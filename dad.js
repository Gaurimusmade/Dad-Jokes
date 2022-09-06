let k=1;
function me(){
    if(k===6)
    k=1;
    if(k===1)
    document.getElementById("jokes").innerHTML="Did you hear about the guy whose whole left side was cut off? He's all right now.";
    else if(k===2)
    document.getElementById("jokes").innerHTML="Whiteboards ... are remarkable.";
    else if(k===3)
    document.getElementById("jokes").innerHTML="What do you call a pig with three eyes? Piiig";
    else if(k===4)
    document.getElementById("jokes").innerHTML="Atheism is a non-prophet organisation.";
    else
    document.getElementById("jokes").innerHTML="Wife told me to take the spider out instead of killing it... We had some drinks, cool guy, wants to be a web developer.";
    k++;
}