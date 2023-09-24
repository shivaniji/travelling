let navbar = document.querySelector('.navbar')
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    loginform.classList.remove('active');
    searchform.classList.remove('active');
}

let loginform = document.querySelector('.login-form')
document.querySelector('#login-btn').onclick = () => {
    loginform.classList.toggle('active');
    navbar.classList.remove('active');
    searchform.classList.remove('active');

}


let searchform = document.querySelector('.search-form')
document.querySelector('#search-btn').onclick = () => {
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
    loginform.classList.remove('active');


}

let footercol = document.querySelector('.social-links')
document.querySelector('button').onclick = () => {
    searchform.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
    loginform.classList.remove('active');
    searchform.classList.remove('active');
}
let themeBtn = document.querySelector('#theme-btn')

themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-sum');

    if (themeBtn.classList.contains('fa-sum')) {
        document.body.classList.add('active')
    } else {
        document.body.classList.remove('active')
    }
}

let count = 0;
// const a=romove
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const inputField = document.getElementById("inputField");
    const inputField1 = document.getElementById("inputField1");
    const inputField2 = document.getElementById("inputField2");
    const inputField3 = document.getElementById("inputField3");




    const outputDiv = document.getElementById("output");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // const inputValue = inputField.value;

        // Do something with the input value

        if (count <= 5) {
            console.log("hello", count)
            outputDiv.textContent = `You submitted: ${5 - count} sits are left`;

            // Clear the input field
            // inputField.value = "";
            // inputField1.value = "";
            // inputField2.value = "";
            // inputField3.value = "";

            count = count + 1;
            // romove=romove+5

        }
        else {
            outputDiv.textContent = "You not submitted: ";
        }
    });
});

// document.getElementById("bookingForm").addEventListener("submit", function(event) {
//   event.preventDefault();

//   const origin = document.getElementById("origin").value;
//   const destination = document.getElementById("destination").value;
//   const departureDate = document.getElementById("departureDate").value;

//   const resultsDiv = document.getElementById("results");
//   resultsDiv.style.display = "block";
//   resultsDiv.innerHTML = `
//       <h2>Search Results:</h2>
//       <p>Origin: ${origin}</p>
//       <p>Destination: ${destination}</p>
//       <p>Departure Date: ${departureDate}</p>
//       <p>Flights available for the selected route. Book now!</p>
//   `;
// });


// let coun = 0;
// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("myForm1");
//     const inputField = document.getElementById("check-in");
//     const inputField1 = document.getElementById("check-in1");
//     const inputField2 = document.getElementById("check-in2");
//     // const inputField3 = document.getElementById("inputField3");




//     const outputDiv = document.getElementById("output");

//     form.addEventListener("submit", function (event) {
//         event.preventDefault(); // Prevent form submission

//         // const inputValue = inputField.value;

//         // Do something with the input value

//         if (count <= 5) {
//             console.log("hello", count)
//             outputDiv.textContent = `You submitted: ${5 - count} sits are left`;

//             // Clear the input field
//             // inputField.value = "";
//             // inputField1.value = "";
//             // inputField2.value = "";
//             // inputField3.value = "";

//             count = count + 1;
//         }
//         else {
//             outputDiv.textContent = "You not submitted: ";
//         }
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('myForm1');
//     const outputDiv = document.getElementById('check-in');
    
//     form.addEventListener('submit', function(event) {
//         event.preventDefault();
        
//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
        
//         const outputText = `Name: ${name}<br>Email: ${email}`;
//         outputDiv.innerHTML = outputText;
//         outputDiv.style.display = 'block';
//     });
//   });


let count1 = 0;
// const a=romove
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm1");
    const inputField = document.getElementById("input");
    const inputField1 = document.getElementById("input1");
    const inputField2 = document.getElementById("input2");
    const inputField3 = document.getElementById("input3");




    const outputDiv = document.getElementById("output1");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // const inputValue = inputField.value;

        // Do something with the input value

        if (count1 <= 5) {
            console.log("hello", count1)
            outputDiv.textContent = `You submitted: ${5 - count1} sits are left`;

            // Clear the input field
            // inputField.value = "";
            // inputField1.value = "";
            // inputField2.value = "";
            // inputField3.value = "";

            count1 = count1 + 1;
            // romove=romove+5

        }
        else {
            outputDiv.textContent = "You not submitted: ";
            document.getElementById('myForm1').classList.add('hidden');
        }
    });
});

let count2 = 0;
// const a=romove
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm2");
    const inputField = document.getElementById("inputF");
    const inputField1 = document.getElementById("inputF1");
    const inputField2 = document.getElementById("inputF2");
    const inputField3 = document.getElementById("inputF3");




    const outputDiv = document.getElementById("output2");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // const inputValue = inputField.value;

        // Do something with the input value

        if (count2 <= 5) {
            console.log("hello", count2)
            outputDiv.textContent = `You submitted: ${5 - count2} sits are left`;

            // Clear the input field
            // inputField.value = "";
            // inputField1.value = "";
            // inputField2.value = "";
            // inputField3.value = "";

            count2 = count2 + 1;
            // romove=romove+5

        }
        else {
            outputDiv.textContent = "You not submitted: ";
            document.getElementById('myForm2').classList.add('hidden1');
        }
    });
});

