const promise1 = new Promise((resolve, reject) => {
  try {
    // fae();
    setTimeout(() => {
      console.log("async task is completed");
    }, 3000);
    resolve();
  } catch (error) {
    console.log("failed");
    reject();
  }
});

promise1.then(() => {
  console.log("sucess");
});

promise1.catch(() => {
  console.log("failed");
});
