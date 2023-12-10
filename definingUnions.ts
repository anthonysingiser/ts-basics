function printNumsAndStrings(statement: string | number) {
  console.log(`ℹ️ LOG:: ${statement}`);
}

printNumsAndStrings('hello!');
printNumsAndStrings(45);

//type narrowing with typeguards
function formatValue(value: string | number) {
  if (typeof value === 'string') {
    console.log(value.toLowerCase())
  }
  if (typeof value === 'number') {
    console.log(value.toFixed(2))
  }
}

formatValue('Hiya');
formatValue(42);

//inferred union return types
type BigUser = {
  id: number;
  username: string;
};

function createUser() {
  const randomChance = Math.random() >= 0.5;

  if (randomChance) {
    return { id: 1, username: "nikko" };
  } else {
    return "Could not create a user.";
  }
}

const bigUserData: string | BigUser = createUser();

console.log(bigUserData);

//unions and arrays 
function formatListings(listings: (string | number)[]) {
  return listings.map((listing) => {
    if (typeof listing === 'string') {
      return listing.toUpperCase();
    }

    if (typeof listing === 'number') {
      return `$${listing.toLocaleString()}`;
    }
  });
}

const result = formatListings([
  '123 Main St',
  226800,
  '580 Broadway Apt 4a',
  337900,
]);

console.log(result);

//unions with literal types 

type Status = 'idle' | 'downloading' | 'complete'

function downloadStatus(status: Status) {
  if (status === 'idle') {
    console.log('Download')
  }
  if (status === 'downloading') {
    console.log('Downloading...')
  }
  if (status === 'complete') {
    console.log('Your download is complete!')
  }
}

downloadStatus('complete')