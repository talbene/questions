
function highNum(num) {
    
    var tempNum = num.toString();
    tempArray = tempNum.split("")
    var sortArray = tempArray.sort(function(a, b){return b-a});
    var highstNumber = sortArray.join("")

   return highstNumber;

}


console.log(highNum(256)) ;

console.log(highNum(3655)) ;



function equalSum(arr) {
    
    var point = parseInt(arr.length/2);

    var arrStart = arr
    var arrEnd = arrStart.splice(point, (arr.length))

    var sumStart = 0
    var sumEnd = 0


    var sortEnd = arrEnd.reverse();

    var sumAll = []

    for(var i=0; i<point; i++){
        sumStart += parseInt(arrStart[i]);
        sumEnd += parseInt(sortEnd[i])

        if (sumStart === sumEnd){
                
            sumAll.push(sumEnd)        }

        else {

            return 
        }

       
}  console.log((sumAll[sumAll.length-1]))
   
} 
equalSum([1,2,3,1,2,2,1]) ;




function sumSmallNum(arr) {
    
    
    var sortArray = arr.sort(function(a, b){return a-b});
    var smallestNumA = sortArray[0];
    var smallestNumB = sortArray[1]
    var sumSmallAll = parseInt(smallestNumA + smallestNumB)

    return sumSmallAll;

}


console.log(sumSmallNum([1,2,3,1,2,2,1])) ;





function line_intersects(p0_x, p0_y, p1_x, p1_y, p2_x, p2_y, p3_x, p3_y) {

    var s1_x, s1_y, s2_x, s2_y;
    s1_x = p1_x - p0_x;
    s1_y = p1_y - p0_y;
    s2_x = p3_x - p2_x;
    s2_y = p3_y - p2_y;

    var s, t;
    s = (-s1_y * (p0_x - p2_x) + s1_x * (p0_y - p2_y)) / (-s2_x * s1_y + s1_x * s2_y);
    t = ( s2_x * (p0_y - p2_y) - s2_y * (p0_x - p2_x)) / (-s2_x * s1_y + s1_x * s2_y);

    if (s >= 0 && s <= 1 && t >= 0 && t <= 1)
    {
                console.log(1);
// Collision detected
        return 1
    }
             console.log(0);

         return 0   
; // No collision
}

line_intersects(0, 0, 5, 5, 2, 2, 5, 7)





function lineIntersects(x1,y1,x2,y2, x3,y3,x4,y4) {
    var x=((x4-x3)*(y1-y3)-(y4-y3)*(x1-x3))/((y4-y3)*(x2-x1)-(x4-x3)*(y2-y1));
    var y=((x2-x1)*(y1-y3)-(y2-y1)*(x1-x3))/((y4-y3)*(x2-x1)-(x4-x3)*(y2-y1));


    if(((y4-y3)*(x2-x1)-(x4-x3)*(y2-y1))===0){
    console.log("parell")
}

 if(x >= 0 && x <= 1 && y >= 0 && y <= 1) {
    console.log("!!!")
}


}


lineIntersects(0, 0, 5, 5, 2, 2, 5, 7)





/**recrusive**/
var power = function (base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2,3))

var num = prompt("What number do you want to find the factorial of?&quot;")
 
//recursive
var factorial = function(n) {
    if(n == 0) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
}
 
console.log(factorial(num));





var obj = {
    
    foo: function (one,two, three){
    console.log(this === window)}



    }

obj.foo.call(window, 1,2,3); //true; one=1, two=2 three=3
obj.foo.apply(window, [1,2,3]); //true; one=1, two=2 three=3

var bound = obj.foo.bind(window, 1,2,3); //true; one=1, two=2 three=3
//take one argument and retun bound function bound(); always run foo in this context; and cant be change
bound();


var k=0

var table = document.getElementById('bagua-table')

function onclick(event) {
  
    k += 1

        if (k<10 && k>0){
                event = event || window.event
                var target = event.target || event.srcElement
                  
                while(target != table) {
                    if (target.nodeName == 'TD') {
                       if(k%2==0) { 
                                    
                        if(target.innerHTML==""){
                        target.nodeName == 'TD'
                        target.innerHTML = "x"
                        }
                        else{
                            (k=k-1)
                            return
                         }
                        }

                        if(k%2>0){
                            if(target.innerHTML==""){
                            target.nodeName == 'TD'
                            target.innerHTML = "0"
                            }
                            else{
                                (k=k-1)
                                return
                             }
                        }
                    
                    }
                    target = target.parentNode
                }
        }

        if(k>4) {
            check()    
        }

        else {
            return
        }
    
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

 




