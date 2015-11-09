


var k = 0;

(function onclick() {
        while ( k<=9 ){
                 k +=1 
                 var cell = document.getElementsByTagName("TD")

                    if(k%2>0) { 
                           var num = Math.floor(Math.random() * 9)  

                            if(cell[num].innerHTML == "")
                            {
                                cell[num].innerHTML = "x"
                            }
                            else { 
                                (k=k-1)
                            
                             }          
                    }
                         
                    if(k%2==0) { 
                           var num = Math.floor(Math.random() * 9)  
                            if(cell[num].innerHTML == "")
                            {
                                cell[num].innerHTML = "0"
                             }
                             else { 
                                     (k=k-1)
                                 
                             } 
                                  
                    } 
                                                     

                 if(  k>4) {
                              check()    
                            }

                    
           }       
      
 })()


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
    
    if ((cell[2].innerHTML == cell[4].innerHTML) && (cell[4].innerHTML == cell[6].innerHTML) && cell[4].innerHTML!==""){
        alert("The Winner is:" + " "+ cell[2].innerHTML)
        k=10
    }
    if ((cell[0].innerHTML == cell[4].innerHTML) && (cell[4].innerHTML == cell[8].innerHTML) && cell[4].innerHTML!==""){
        alert("The Winner is:" + " "+ cell[4].innerHTML)
        k=10
    }
    if  ( k===9)
        {alert("Oooooops")
    }
     
    

    
}   
function reset() {
        var cell = document.getElementsByTagName("TD")
        for(i=0; i<cell.length; i++){
            cell[i].innerHTML = ""
          var k=0
        }

}
var reset1 = document.querySelector(".reset")

       
 reset1.addEventListener("click",reset)

 




