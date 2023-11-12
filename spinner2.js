const spinner2 = function (spinnerArr) {
  let delay = 100;

  for (let i = 0; i < spinnerArr.length; i++) {

    setTimeout(() => {
      process.stdout.write(`\r${spinnerArr[i]}   `);
    }, delay);
    
    delay += 300;
  }
};

spinner2(['|', '/', '-', '\\', '/', '-', '\\']);
