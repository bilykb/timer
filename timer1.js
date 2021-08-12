const args = process.argv;

const timer = args => {
  const newArgArr = args.filter(num => num >= 0);
  
  newArgArr.forEach((time, index) => {
    setTimeout(() => {
      process.stdout.write('.')
      if (index === newArgArr.length - 1) {
        process.stdout.write('\n')
      }
    }, time * 1000);
  });
};

const timerArr = args.slice(2).map(arg => parseInt(arg)).filter(num => !isNaN(num));
timer(args);