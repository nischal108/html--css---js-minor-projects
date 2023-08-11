let number = 0;
document.getElementById("increase").onclick = function(){
    number+=1;
    document.getElementById("countdown").innerHTML = number;
}
document.getElementById("reset").onclick = function(){
    number=0;
    document.getElementById("countdown").innerHTML = number;
}
document.getElementById("decrease").onclick = function(){
    number-=1;
    document.getElementById("countdown").innerHTML = number;
}
document.getElementById("countdown").innerHTML = number;
