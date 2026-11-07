//your JS code here. If required.

const form = document.getElementById("form");

const age = document.getElementById("age");
const nameInput = document.getElementById("name");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let userAge = age.value;
    let userName = nameInput.value.trim();

    // Validation
    if (userAge === "" || userName === "" || Number(userAge) <= 0) {
        alert("Please enter valid details.");
        return;
    }

    // Create Promise
    let checkAge = new Promise(function(resolve, reject) {

        setTimeout(function() {

            if (Number(userAge) > 18) {
                resolve(userName);
            } else {
                reject(userName);
            }

        }, 4000);

    });

    // Promise handling
    checkAge
        .then(function(userName) {

            alert(`Welcome, ${userName}. You can vote.`);

        })
        .catch(function(userName) {

            alert(`Oh sorry ${userName}. You aren't old enough.`);

        });

});
