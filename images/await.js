let test = null;
function handleData() {
  setTimeout(() => {
    test = ["hello"];
    console.log("hello");
  }, 3000);
}

const testAsync = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (test) {
        resolve();
      } else {
        reject("Something wrong");
      }
    }, 1000);
  });
};

async function init() {
  handleData();
  await testAsync().then(() => console.log("sdfesf"));

  console.log("ami fore");
}
init();
