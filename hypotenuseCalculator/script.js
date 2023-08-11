document.getElementById("caluclate").onclick = function(){
    let base = document.getElementById("bas").value;
    let perpendicuar = document.getElementById("perpen").value;
    
    let hypotenuse = Math.sqrt(Math.pow(base,2)+Math.pow(perpendicuar,2));
    
    document.getElementById("answer").innerHTML = " The hypotenuse of your triangle is " +hypotenuse;
    }
    