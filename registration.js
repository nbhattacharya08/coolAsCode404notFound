
          var firebaseConfig = {
            apiKey: "AIzaSyCae7adq_O4f74lJMNlgkINIovedSs6Ep8",
            authDomain: "website-2c3b7.firebaseapp.com",
            databaseURL: "https://website-2c3b7-default-rtdb.firebaseio.com",
            projectId: "website-2c3b7",
            storageBucket: "website-2c3b7.appspot.com",
            messagingSenderId: "675697409720",
            appId: "1:675697409720:web:a8c81063fa08589a2ffe4d"
        };
 
        firebase.initializeApp(firebaseConfig);
 
        var messagesRef = firebase.database()
            .ref('Registration Page');
         
        document.getElementById('reg')
            .addEventListener('submit', submitForm);
 
        function submitForm(e) {
            e.preventDefault();
 
            // Get values
            var fullname = getInputVal('fullname');
            var username = getInputVal('username');
            var email = getInputVal('email');
            var password = getInputVal('password');
 
            saveMessage(fullname, username, email, password);
            document.getElementById('reg').reset();
        }
 
        // Function to get get form values
        function getInputVal(id) {
            return document.getElementById(id).value;
        }
 
        // Save message to firebase
        function saveMessage(fullname, username, email, password) {
            var newMessageRef = messagesRef.push();
            newMessageRef.set({
                fullname: fullname,
                username: username,
                email: email,
                password: password,
            });
        }
    
     