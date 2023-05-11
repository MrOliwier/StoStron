function show(num) {
    button = document.getElementById(String(num)).parentElement.children;
    console.log(document.getElementById(String(num)));
    for(const child of button){
        if(child.className != 'title'){
            if(child.className == "catElement"){
                child.className = "catElementShown";
            } else {
                child.className = "catElement";
            }
        }
    }
} 

function Pressed(){
    history.back();

}