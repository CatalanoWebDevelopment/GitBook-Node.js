function fetchHelloDataFromAPI() {
    fetch('http://localhost:3000/test/helloclient', { //1
        method: 'GET', 
        headers: new Headers({ //2
          'Content-Type': 'application/json'
        })
    })
        .then(function (response) {
            console.log("Fetch response:", response)
            return response.text(); //3
        })
        .then(function (text) {
            console.log(text);
        });
}

function postToOne(){
    let url = 'http://localhost:3000/test/one';

    fetch(url, {
      method: 'POST',             //1
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(
        function(response){   //2
            return response.text()
        })
    .catch(
        function(error){   //3
            console.error('Error:', error)
        })
    .then(
        function(response){   //4
            console.log('Success:', response);
        })
}