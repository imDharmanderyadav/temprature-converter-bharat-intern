

let deg = document.querySelector(".deg input");
let type = document.querySelector(".type select");
let resultBody = document.querySelector(".result p");
var root = document.querySelector(':root');

function bgColorSet(color1, color2) {
    // Set the value of variable
    root.style.setProperty('--color1', color1);
    root.style.setProperty('--color2', color2);
  }

function changeBg(deg, type){

    let result;
    let color1,color2;
   
    if(type==="C"){
        result = (deg*9/5) + 32
        if(result>90){
            color1 = "#93291E";
            color2 = "#ED213A";
        }
        else if(result>=70){
            color1 = "#f7b733";
            color2 = "#fc4a1a";
        }
        else if(result>=60){
            color1 = "#F2C94C";
            color2 = "#F2994A";
        }
        else if(result>50){
            color1 = "#fdbb2d";
            color2 = "#22c1c3";
        }
        else if(result<=50){
            color1 = "#b6fbff" ;
            color2 = "#83a4d4" ;
        }
        
    }
    else if(type==="F"){
        result = (deg-32)*(5/9)
        if(result>35){
            color1 = "#93291E";
            color2 = "#ED213A";
        }
        else if(result>=25){
            color1 = "#f7b733";
            color2 = "#fc4a1a";
        }
        else if(result>=15){
            color1 = "#F2C94C";
            color2 = "#F2994A";
        }
        else if(result>0){
            color1 = "#fdbb2d";
            color2 = "#22c1c3";
        }
        else if(result<=0){
            color1 = "#b6fbff" ;
            color2 = "#83a4d4" ;
        }
    }

    bgColorSet(color1, color2);
    return result
}


function convertTemp() {

    
    var tempType = {
        "C": " &#8457;" ,  
        "F": " &#8451;"
    };


    resultTemp = changeBg(deg.value,type.value)
    resultBody.innerHTML = resultTemp + tempType[type.value] ;
}
//     70 - 80 71-27
//     background: #fc4a1a;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #f7b733, #fc4a1a);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #f7b733, #fc4a1a); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

// below 50
// background: #005AA7;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #FFFDE4, #005AA7);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #FFFDE4, #005AA7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

// above 90 32
// background: #ED213A;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #93291E, #ED213A);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #93291E, #ED213A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

// 50 60
// background: #22c1c3;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #fdbb2d, #22c1c3);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #fdbb2d, #22c1c3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

// 60 70
// background: #F2994A;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #F2C94C, #F2994A);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #F2C94C, #F2994A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


