"use strict"

// var a = 31

// if(a === 1 && a === 2 && a == 3 && a == 4 && a == 5){
//     console.log("Yes")
// }else if(a == 4){
//     console.log("no")
// }else if(a == 3){
//     console.log("close")
// }else{
//     console.log("not found")
// }
// http://www.sitestepper.be/en/css-properties-to-javascript-properties-reference-list.htm

function show_result(){
    

    // console.log(typeof parseInt(a.value) +" - "+ parseInt(a.value)) //reqemsal int
    // console.log(typeof a.value +" - "+ a.value)           // string

    // background-image:url("")
    // backgroundImage:url("")

    // background-color
    // backgroundColor


    var a = document.getElementById('num')

    switch(parseInt(a.value)) {
        case 1:
        case 2:
        case 3:
        case 4:
        case "5":
            document.getElementsByTagName('BODY')[0].style.backgroundImage = 'url("https://static0.srcdn.com/wordpress/wp-content/uploads/2021/09/Mortal-Kombat-why-subzero-is-the-villain-scorpions-rival.jpg")'
            break;
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            console.log("no")
          break;
        case 11:
            console.log("close")
          break;
        default:
            document.getElementsByTagName('BODY')[0].style.backgroundImage = 'url("https://c.tenor.com/cqBG4ILe9EsAAAAC/homer-simpson-hammer.gif")'
      }
    
}



// ------------------------------
