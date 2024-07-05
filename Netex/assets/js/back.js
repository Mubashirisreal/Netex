
  const firebaseConfig = {
    apiKey: "AIzaSyA8o_iOciXl5ZU_DI-264s1rgitH3JNjYA",
    authDomain: "ttrainer-feedback-form.firebaseapp.com",
    databaseURL: "https://ttrainer-feedback-form-default-rtdb.firebaseio.com",
    projectId: "ttrainer-feedback-form",
    storageBucket: "ttrainer-feedback-form.appspot.com",
    messagingSenderId: "891984301288",
    appId: "1:891984301288:web:6c8667570f117cfe2ecd5d",
    measurementId: "G-30P2MNT4W6"
  };
  

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.querySelector(".email-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var emailid = getElementVal("email");

  saveMessages(emailid);

  // show sent message
  document.querySelector(".sent-message").style.display = "block";

  // hide sent message after 3 seconds
  setTimeout(() => {
    document.querySelector(".sent-message").style.display = "none";
  }, 3000);

  // reset the form
  document.querySelector(".email-form").reset();
}

const saveMessages = (emailid) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    emailid: emailid
  });
};

const getElementVal = (name) => {
  return document.querySelector(`input[name="${name}"]`).value;
};