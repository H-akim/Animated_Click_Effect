var spans = document.getElementsByTagName("span");
var btn = document.getElementById("btn").addEventListener("click", ()=>{
    for(span of spans){
        span.classList.add("anim")
    }
    setTimeout(function(){
        for(span of spans){
            span.classList.remove("anim")
        }
    }, 500)
})