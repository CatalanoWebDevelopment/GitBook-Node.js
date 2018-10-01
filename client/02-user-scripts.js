/********************
 * POST - /createuser
*********************/
function userSignUp(){
    let userName = document.getElementById('userSignUp').value; //1
    let userPass = document.getElementById('passSignUp').value;
    console.log(userName, userPass);

    let newUserData = {user : { username: userName, password: userPass}}; //2
    fetch('http://localhost:3000/api/user/createuser', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserData) //3
    })
    .then(response => response.json())
    .then(function (response) {
        console.log(response.sessionToken);
        let token = response.sessionToken; //4
        localStorage.setItem('SessionToken', token);  //5
    });
}