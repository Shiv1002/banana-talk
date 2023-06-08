// //promise :-> promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.
// A promise can be in one of three states:
// Pending: The initial state. The promise is still executing and has not been fulfilled or rejected yet.
// Fulfilled: The asynchronous operation completed successfully, and the promise is fulfilled with a value.
// Rejected: The asynchronous operation encountered an error or failed, and the promise is rejected with a reason or an error object.
const inputBtn = document.querySelector('#input-btn')
const txtInput = document.querySelector('#txt-input')
const output = document.querySelector('#output')
const url = "https://api.funtranslations.com/translate/minion.json"
inputBtn.addEventListener('click', () => {
    console.log("clicked")
    var req = url + '?text=' + txtInput.value
    fetch(req)
        .then(
            res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error('response not ok')
            }
        )
        .then(data => {
            console.log(data)
            output.innerHTML = data.contents.translated
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch or data processing
            console.error(error);
        });





    console.log(txtInput.value)
})