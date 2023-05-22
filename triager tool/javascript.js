
// let closeBtn = document.querySelector('.posCloseBtn');
// let reOpen =  document.querySelector('.reopen');
let copyBtn = document.querySelector('.copyBtns');
let mainBtn = document.querySelector('.mainBtns');
// let copyToclip = document.querySelector('#copyText');
let callerTxt = document.querySelector('.caller');
let callName = document.getElementsByClassName('.callerName');

let descrptn = document.querySelector('.desc');
let descText = document.querySelector('.descInput');
let addItemTex = document.querySelector('.addItem');

let coIss = document.querySelector('#iss');

// Copy Caller name button
function manClick() {

 callName.value = callerTxt.value

 if (callName.value == "") {
    console.log('nothing to copy')
} else {
 navigator.clipboard.writeText(callName.value).then(() => {
    console.log('copied', callName.value);
    callerTxt.value = "";
            }, () => {
    console.log('failed to copy')
    });
        }    
}

// Copy Description button

function copyDesc() {
    
    descrptn.value = descText.value
   
    if (descrptn.value == "") {
       console.log('nothing to copy')
   } else {
    navigator.clipboard.writeText(descrptn.value).then(() => {
       console.log('copied', descrptn.value);
       descText.value = "";
               }, () => {
       console.log('failed to copy')
       });
           }    
   }

// button action - copy button value to clipboard
mainBtn.addEventListener('click', e => {
    let test = e.target;
    
    if (test.value == undefined) {
        console.log('nothing to copy')
    } else {
        navigator.clipboard.writeText(test.value).then(() => {
        console.log('copied', test.value)
                }, () => {
        console.log('failed to copy')
        });
    }

})
// button action - add listed item on common issues
function addBtn() {
    let newList = document.createElement('button');
    newList.innerHTML = addItemTex.value;
    newList.value = addItemTex.value;
    let nList = document.body.appendChild(newList);
    console.log(nList);
    nList.setAttribute('class', 'list-group-item list-group-item-action list-group-item-light');
    coIss.appendChild(nList);
    addItemTex.value = "";
    

}
