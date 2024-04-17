// Query Selector
//Query Selector-> First ELement catch krta h aur return kr deta h
/*
                selectors
                -tagname <body>
                -id #
                -class . 
            */
//Tag Names Operations
// // // inner html will actually return the html part of the tags
// const body = document.querySelector("body");
// console.log(body);//body tag with its child will be returned
// body.innerHTML="<h1>Hacked!!</h1>";//basically the inner html is added to dom and other all the things are erased and this is the method by which by using inner html we can changw the inner html of the body tag
// const div = document.querySelector("div");
// div.innerHTML="<h1>This is hacked !!</h1>";
// console.log(div.innerHTML);//it will display all the inner html operations and by using some regex operation we can extract the information from the whole code
// console.log(body.innerHTML);//it will display all the inner html operations and by using some regex operation we can extract the information from the whole code
// // // query selectors always catches up the first element because it is a type of function which takes only first element
// // if there is some code then we will use innerHTML and if not then we will use innerText
// ID operations
// if we want to inject a html code for real then only use innerHTML else use innerText  for just typing the sentence
// const username = document.querySelector("#username");//we are using # for getting the details of the id of the html file
// username.innerText ="Harshu";//for changing the inner text of the given id
// console.log(username.innerText);

// Document.query selectorr only return the first one but document.queryselector all will return whatever is present in the arrow
// CLASS SELECTORS

 const ele = document.querySelector("div");// it will return the div elements children along with div
 console.log(ele.children);//we can acces the children of the div as well as body whiich is parent
// to get all the elements select querySelector all nad then you all can win
 ele.forEach(e) =>{
    console.log(e.innerHTML);
 }