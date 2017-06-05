/* 

Using the JavaScript file only (not using a CSS file)

Change the background color of the entire document to red
Change the background color of just the "about me" portion to blue
Change the font-family of the entire document to sans-serif
Add your nickname
Add your favorites
Add your hometown

Extra Credit (still only using JavaScript)

Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.

Create a new img element and set its src attribute to a picture of you. Append that element to the page.

*/

document.body.style.backgroundColor = 'red';

document.querySelector('h1').style.background ='blue';

document.body.style.fontFamily = 'sans-serif';

document.getElementById('nickname').innerHTML = 'Mel';

document.getElementById('favorites').innerHTML = 'Pizza, Sandwiches, Chocolate';

document.getElementById('hometown').innerHTML = 'New York';

var list = document.getElementsByTagName('li');
   for (var i = 0; i < list.length; i++) {
      list[i].className = 'listitem';
   }


var addImage = document.createElement('img');
addImage.src = 'Mel.jpg';
document.body.appendChild(addImage);