const promiseOne = new Promise(function (resolve, reject) {
  //Do an asyc task
  //DB calls,network,cryptography

  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  });
}, 1000);

// promiseOne.then(function () {
//   console.log("Promise consumed");
// });

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async two");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async two resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Asif", email: "bigOh@example.com" });
  }, 1000);
});

// promiseThree.then(function (user) {
//   console.log(user);
// });

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let isError = true;

    if (!isError) {
      resolve({ username: "BigOh", password: "bigoh123" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolve or reject"));

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(function () {
    let isError = true;

    if (!isError) {
      resolve({ username: "JacvScript", password: "bigoh123" });
    } else {
      reject("Error: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getAllUsers();
