function show(num) {
    button = document.getElementById(String(num)).parentElement.children;
    console.log(document.getElementById(String(num)));
    for(const child of button){
        if(child.className != 'title'){
            if(child.style.display == "block"){
                child.style.display = "none";
            } else {
                child.style.display = "block";
            }
        }
    }
    

} 