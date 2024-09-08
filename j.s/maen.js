let formMain = document.createElement("form");
formMain.classList.add("form");

let div = document.createElement("div");
div.classList.add("div");

let img = document.createElement("img");
img.classList.add("img");
img.setAttribute("src" , "img/image-3.jpg");
img.setAttribute("src" , "img/image-3.jpg");

let h1 =document.createElement("h1");
h1.classList.add("h1");
let text = document.createTextNode("login page");



// 
let div1 = document.createElement("div");
div1.classList.add("div1");

let divdiv = document.createElement("div");

let lable = document.createElement("label");
lable.classList.add("lable");
let textlable = document.createTextNode("first name");

let ftext = document.createElement("input");
ftext.classList.add("input");
ftext.setAttribute("placeholder" , "first name");
ftext.setAttribute("type" , "text");
let text1 = document.createElement("p")
text1.classList.add("pop")
// 
// 
let divdiv1 = document.createElement("div");
divdiv1.classList.add("div2")

let lable1 = document.createElement("label");
lable1.classList.add("lable");
let textlable1 = document.createTextNode("last name");
let ftext1 = document.createElement("input");
ftext1.classList.add("input");
ftext1.setAttribute("placeholder" , "last name");
ftext1.setAttribute("type" , "text");
let text2 = document.createElement("p")
text2.classList.add("pop1")
// 

// /<</ 
let div2 = document.createElement("div");
div2.classList.add("div1");

let divdiv2 = document.createElement("div");

let lable2 = document.createElement("label");
lable2.classList.add("lable");
let textlable2 = document.createTextNode("emil");

let ftext2 = document.createElement("input");
ftext2.classList.add("input");
ftext2.setAttribute("placeholder" , "emil");
ftext2.setAttribute("type" , "email");
let text3 = document.createElement("p")
text3.classList.add("pop2")
// 
// 
let divdiv3 = document.createElement("div");
divdiv3.classList.add("div2")
let lable3 = document.createElement("label");
lable3.classList.add("lable");
let textlable3 = document.createTextNode("confirm email");
let ftext3 = document.createElement("input");
ftext3.classList.add("input");
ftext3.setAttribute("placeholder" , "confirm email");
ftext3.setAttribute("type" , "email");
let text4 = document.createElement("p")
text4.classList.add("pop3")

// /<</ 

// /!!!!!/
let div3 = document.createElement("div");
div3.classList.add("div1");

let divdiv4 = document.createElement("div");

let lable4 = document.createElement("label");
lable4.classList.add("lable");
let textlable4 = document.createTextNode("password");

let ftext4 = document.createElement("input");
ftext4.classList.add("input");
ftext4.setAttribute("placeholder" , "password");
ftext4.setAttribute("type" , "password");
let text5 = document.createElement("p")
text5.classList.add("pop4")
// 
// 
let divdiv5 = document.createElement("div");
divdiv5.classList.add("div2")
let lable5 = document.createElement("label");
lable5.classList.add("lable");
let textlable5 = document.createTextNode("confirm password");
let ftext5 = document.createElement("input");
ftext5.classList.add("input");
ftext5.setAttribute("placeholder" , "confirm password");
ftext5.setAttribute("type" , "password");
let text6 = document.createElement("p")
text6.classList.add("pop5")
// /!!!!!/


// /mmmmmmmmmm/
let btn = document.createElement("button");
btn.classList.add("btn")
let textbtn = document.createTextNode("login");
// /mmmmmmmmmm/  

document.body.appendChild(formMain);
formMain.appendChild(div);
div.appendChild(img);
div.appendChild(h1);
h1.appendChild(text);

// 
div.appendChild(div1);
// 
div1.appendChild(divdiv)
divdiv.appendChild(lable);
lable.appendChild(textlable);
divdiv.appendChild(ftext);
divdiv.appendChild(text1);

div1.appendChild(divdiv1)
divdiv1.appendChild(lable1);
lable1.appendChild(textlable1);
divdiv1.appendChild(ftext1);
divdiv1.appendChild(text2);
// 

// /<</ 
div.appendChild(div2);
// /<</ 
div2.appendChild(divdiv2)
divdiv2.appendChild(lable2);
lable2.appendChild(textlable2);
divdiv2.appendChild(ftext2);
divdiv2.appendChild(text3);

div2.appendChild(divdiv3)
divdiv3.appendChild(lable3);
lable3.appendChild(textlable3);
divdiv3.appendChild(ftext3);
divdiv3.appendChild(text4);
// /<</ 

// /!!!!!/
div.appendChild(div3);
// /!!!!!/
div3.appendChild(divdiv4)
divdiv4.appendChild(lable4);
lable4.appendChild(textlable4);
divdiv4.appendChild(ftext4);
divdiv4.appendChild(text5);

div3.appendChild(divdiv5)
divdiv5.appendChild(lable5);
lable5.appendChild(textlable5);
divdiv5.appendChild(ftext5);
divdiv5.appendChild(text6);
// /!!!!!/

// /mmmmmmmmmm/  
div.appendChild(btn)
btn.appendChild(textbtn)
// /mmmmmmmmmm/  



formMain.onsubmit = function(event){

    if(ftext2.value === "" || ftext3.value === "" || ftext4.value === "" || ftext5.value === ""){
        event.preventDefault();
        document.querySelector(".pop").innerHTML = "enter your data";
        document.querySelector(".pop1").innerHTML = "enter your data";
        document.querySelector(".pop2").innerHTML = "enter your data";
        document.querySelector(".pop3").innerHTML = "enter your data";
        document.querySelector(".pop4").innerHTML = "enter your data";
        document.querySelector(".pop5").innerHTML = "enter your data";

    }
    else{
        document.querySelector(".pop").innerHTML = "";
        document.querySelector(".pop1").innerHTML = "";
        document.querySelector(".pop2").innerHTML = "";
        document.querySelector(".pop3").innerHTML = "";
        document.querySelector(".pop4").innerHTML = "";
        document.querySelector(".pop5").innerHTML = "";
    }



    if(ftext2.value !== ftext3.value ){
        event.preventDefault();
        document.querySelector(".pop2").innerHTML = "enter your data true";
        document.querySelector(".pop3").innerHTML = "enter your data true";
    }
    else{
        document.querySelector(".pop2").innerHTML = "";
        document.querySelector(".pop3").innerHTML = "";
    }



    if(ftext4.value !== ftext5.value ){
        event.preventDefault();
        document.querySelector(".pop4").innerHTML = "enter your data true";
        document.querySelector(".pop5").innerHTML = "enter your data true";
    }
    else{
        document.querySelector(".pop4").innerHTML = "";
        document.querySelector(".pop5").innerHTML = "";
    }

}
