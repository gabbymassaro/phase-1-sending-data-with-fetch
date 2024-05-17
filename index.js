function submitData(name, email) {
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({name: name, email: email}),
  };

  return fetch("http://localhost:3000/users", configurationObject)
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    const body = document.querySelector('body');
    const div = document.createElement('div')
    div.innerHTML = object.id
    body.appendChild(div)
  })
  .catch(function (object) {
    const body = document.querySelector('body');
    const div = document.createElement('div')
    div.innerHTML = object
    body.appendChild(div)  })
}