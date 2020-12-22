
        // Fetch Text  =======================================================================================

        document.querySelector('#button').addEventListener('click', getText);

        function getText() {
            fetch('sample.txt')
            // .then(response => response.text())     // console log(response)
            .then(res => res.text())
            .then(data => {
                //console.log(data)

                document.querySelector('#output').innerHTML = data;
            })

            .catch(error => {
                alert(error);
            });
        }

        // Fetch a json obj   ===============================================================================

        document.querySelector('#getUsers').addEventListener('click', getUsers);

        function getUsers() {
            fetch('users.json')
            .then(res => res.json())
            .then(data => {

               let output = '<h1>Users:</h1>';   
               
               data.forEach((user) => {      // instead to use a for loop we used a for each function 
                   output += `
                    <ul class="list-group mb-3">
                        <li class="list-group-item">${user.name}</li>
                        <li class="list-group-item">${user.id}</li>
                        <li class="list-group-item">${user.email}</li>
                    </ul>
                    
                    `;
                   
                });
                document.querySelector('#output').innerHTML = output;
            });
        }

        //Fetch API data   ===================================================================================

        document.querySelector('#getPosts').addEventListener('click', getPosts);

        function getPosts() {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                   // console.log(data);
                output = '<h1>Posts:</h1>'
                    data.forEach(item => {
                        output += `
                        <div style="text-align: center; background-color: lightgrey" class="card card-body mb-3">
                        <h3>${item.id}</h3>
                        <h2 class="text-capitalize">${item.title}</h2>
                        <p>${item.body}</p><hr>
                        </div>
                        `;
                    });
                document.querySelector('#output').innerHTML = output;
            });
        }

        // Submit data ======================================================================================

        document.querySelector('#addPost').addEventListener('submit', addPost);

        function addPost(e) {
            e.preventDefault();
            let title = document.querySelector('#title').value;
            let body = document.querySelector('#body').value;

            fetch('https://jsonplaceholder.typicode.com/posts', {           /// all thid lines up to then just to POST/send data
                method:'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-type':'application/json'
                },
                body:JSON.stringify({title:title, body:body})
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })
        }