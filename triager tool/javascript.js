
// let closeBtn = document.querySelector('.posCloseBtn');
// let reOpen =  document.querySelector('.reopen');
let description = document.querySelector('#ctc');
let copyBtn = document.querySelector('.copyBtns')
let mainBtn = document.querySelector('.mainBtns')
let copyToclip = document.querySelector('#copyText');

// button action - input box text copied to clipboard
copyBtn.addEventListener('click', e => {
    console.log("clicked")
    console.log(e)
    
    let cbtn = e.target;
    
    if (cbtn.value == undefined){
        console.log('nothing copied')
    } else {
        console.log(cbtn.value)
        
    }
    
})

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
