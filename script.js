//function for displaying msg
function display(){
    let size = document.getElementsByName("size");
    let color1 = document.getElementById("yellow");
    let color2 = document.getElementById("green");
    let color3 = document.getElementById("blue");
    let color4 = document.getElementById("pink");
    let color ;
    if(color1.checked){
        color = color1.value;
        console.log(color);
    }
    else if(color2.checked){
        color = color2.value;
    }
    else if(color3.checked){
        color = color3.value;
    }
    else if(color4.checked){
        color = color4.value;
    }
    var i;
    for(i = 0; i<=size.length;i++){
        if(size[i].checked){
            size = size[i].value;
            result.innerHTML = `Embrance Sideboard with Color <span>${color}</span> and Size <span>${size}</span> added to cart`
        }  
    }  
}
//For Auto Refreshing Page
setTimeout(function(){
    window.location.reload(1);
},10000);

//function to get cart value
function total(num){
    const value = document.getElementById("num");
    const sum = parseInt(value.innerHTML) + num;
    value.innerHTML = sum;
}
