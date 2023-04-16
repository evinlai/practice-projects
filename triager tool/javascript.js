// let newClip = document.querySelector('.err');
// let closeBtn = document.querySelector('.posCloseBtn');
// let reOpen =  document.querySelector('.reopen');
let description = document.querySelector('#ctc');
let transfer = document.querySelector('.transfr')
let mainBtn = document.querySelector('.mainBtns')
let copyToclip = document.querySelector('#copyText');

// function toClip() {

// // navigator.clipboard.write("value")    // toClips = document.querySelector('btn').value = value;

// console.log(toClips.value);
// }
// console.log(toClips);

// const Clips = toClips.getAttribute('value')
// console.log(reOpen);
// console.log(newClip.value);

// function updateClipboard(newClips) {
//     newClips = newClip.value;
//     navigator.clipboard.writeText(newClips).then(() => {
//       /* clipboard successfully set */
      
//       console.log('copied');
//     }, () => {
//       console.log('failed to copy');
//     });
//   }
// closeBtn.addEventListener('click', e => {
//     const tc = e.target;
//     navigator.clipboard.writeText(tc.value).then(() => {
//         console.log('copied')
//     }, () => {
//         console.log('failed to copy');
//     }); 
    
// })

// reOpen.addEventListener('click', e => {
//     const tc = e.target;
//     navigator.clipboard.writeText(tc.value).then(() => {
//         console.log('copied')
//     }, () => {
//         console.log('failed to copy');
//     });
    
// })

// code needed for button clicked copy to clipboard

// copyToclip.addEventListener('click', e => {
//     console.log(e.type)
//     // let test = e.value;
//     // console.log(test.value)
// })

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


description.addEventListener('click', e => {
    let test = e.target;


    navigator.clipboard.writeText(test.value).then(() => {
        console.log('copied', test.value)
            }, () => {
        console.log('failed to copy')
    });

})


transfer.addEventListener('click', e => {
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

