function menuHeaderDec() {
  let dropDoun = Array().slice.call(
    document.getElementsByClassName("header_menu-box-button")
  );

  for (let elemen of dropDoun) {
    elemen.addEventListener("mouseover", event => {
        for (let el of Array().slice.call(elemen.children[1].children)){
           el.setAttribute("state", "active")

        }
    });
  }

  for (let elemen of dropDoun) {
    elemen.addEventListener("mouseout", event => {
        
        for (let el of Array().slice.call(elemen.children[1].children)){
           el.setAttribute("state", "noactive")

        }
    });
  }

}

if( window.innerWidth>1060) {menuHeaderDec()}
    
function menuHeaderMobil(){
    let curent=0
    let dropDoun = Array().slice.call(
        document.getElementsByClassName("header_menu-box-button")
      );
    
      let elemen =dropDoun[4]
        
        document .addEventListener("click", event => {
           if(!(!curent==1&&(event.target.classList.contains("header_menu_content-3_img")||event.target.classList.contains("header_menu_content-3_menu-img")))) {
            for (let el of Array().slice.call(elemen.children[1].children)){
                el.setAttribute("state", "noactive")
             }
             curent=0
             return
           }


            for (let el of Array().slice.call(elemen.children[1].children)){
               el.setAttribute("state", "active")
    
            }
            console.log(curent);
           curent=1

        });
      
    
    
    
}
if(window.innerWidth<=1060){menuHeaderMobil()}


window.addEventListener('resize', function(event) {
    console.log(window.innerWidth);
if( document.documentElement.scrollWidth>1060) {menuHeaderDec()}
    if(document.documentElement.scrollWidth<=1060){menuHeaderMobil()}
}, true);
