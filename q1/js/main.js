var k=0

var table = document.getElementById('bagua-table')

function onclick(event) {
  
    k += 1

        if (k<10 && k>0){
                event = event || window.event
                var target = event.target || event.srcElement
                  turn = "x"
                 while(target != table) {
                    if (target.nodeName == 'TD') {   
                        checkevalible()
                        turn = "o"
                        checkevalible()
                        return
                        }
                        
                        

                        
                    
                    }
                    target = target.parentNode
                
        }

        if(k>4) {
            check()    
        }

        
    
}



function checkevalible(){
  alert(turn)
  console.log(this)
   event = event || window.event
                var target = event.target || event.srcElement
                 while(target != table) {
                    if (target.nodeName == 'TD') {   
                        target.innerHTML = turn
                        return
                        }
                        
                                             
                    
                    }
                    target = target.parentNode

}


function check(){

    var cell = document.getElementsByTagName("TD")

    if ((cell[0].innerHTML == cell[1].innerHTML) && (cell[1].innerHTML == cell[2].innerHTML) && cell[1].innerHTML!=="" )   {
        alert("The Winner is:" + " "+ cell[0].innerHTML)
        k=10   
    }

    if ((cell[3].innerHTML == cell[4].innerHTML) && (cell[4].innerHTML == cell[5].innerHTML) && cell[4].innerHTML!=="") {
        alert("The Winner is:" + " "+ cell[3].innerHTML)
        k=10
    }
    if ((cell[6].innerHTML == cell[7].innerHTML) && (cell[7].innerHTML == cell[8].innerHTML) && cell[7].innerHTML!=="") {
        alert("The Winner is:" + " "+ cell[6].innerHTML)
        k=10
    }
    if ((cell[0].innerHTML == cell[3].innerHTML) && (cell[3].innerHTML == cell[6].innerHTML) && cell[3].innerHTML!=="") {
        alert("The Winner is:" + " "+ cell[0].innerHTML)
        k=10
    }
    if ((cell[1].innerHTML == cell[4].innerHTML) && (cell[4].innerHTML == cell[7].innerHTML) && cell[4].innerHTML!=="") {
        alert("The Winner is:" + " "+ cell[1].innerHTML)
        k=10
    }
    if ((cell[2].innerHTML == cell[5].innerHTML) && (cell[5].innerHTML == cell[8].innerHTML) && cell[5].innerHTML!=="") {
        alert("The Winner is:" + " "+ cell[2].innerHTML)
        k=10
    }
    if ((cell[1].innerHTML == cell[4].innerHTML) && (cell[4].innerHTML == cell[7].innerHTML) && cell[4].innerHTML!=="") {
        alert("The Winner is:" + " "+ cell[1].innerHTML)
        k=10
    }
    if ((cell[2].innerHTML == cell[4].innerHTML) && (cell[4].innerHTML == cell[6].innerHTML) && cell[4].innerHTML!==""){
        alert("The Winner is:" + " "+ cell[2].innerHTML)
        k=10
    }
    if(k===9){
        alert("Oooooooops")
    }
}   

 var reset1 = document.querySelector(".reset")
function reset() {
        var cell = document.getElementsByTagName("TD")
        for(i=0; i<cell.length; i++){
            cell[i].innerHTML = ""
            k=0
        }

}
       
table.addEventListener("click",onclick)
reset1.addEventListener("click",reset)

 




