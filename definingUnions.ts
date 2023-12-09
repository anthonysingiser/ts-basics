function printNumsAndStrings(statement: string | number) {
    console.log(`ℹ️ LOG:: ${statement}`);
  }
  
  printNumsAndStrings('hello!');
  printNumsAndStrings(45);

  //type narrowing with typeguards
  function formatValue(value: string | number) {
    if(typeof value === 'string'){
      console.log(value.toLowerCase())
    }
    if(typeof value === 'number'){
    console.log(value.toFixed(2))
    }
  }
  
  formatValue('Hiya');
  formatValue(42);