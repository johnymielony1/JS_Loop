'use strict'; 
var codeHTML = '<div>';
for(var i = 200; i > 1; i--){
    if(i%2 == 0) {
        codeHTML += '<p>' + i + '</p>';
    }
}
codeHTML += '</div>';

var div = document.querySelector('div');

div.innerHTML = codeHTML;