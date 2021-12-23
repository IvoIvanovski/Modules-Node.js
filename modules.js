//timeout
const { setTimeout: setTimeoutPromise } = require('timers/promises');

const ac = new AbortController();
const signal = ac.signal;

setTimeoutPromise(1000, 'foobar', { signal })
  .then(console.log)
  .catch((err) => {
    if (err.name === 'AbortError')
      console.log('The timeout was aborted');
  });

ac.abort();


//http server
let http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
  }).listen(8080);


//url
let url = require('url');
let adr = 'http://localhost:8080/default.htm?year=2017&month=february';
//Parse the address:
let q = url.parse(adr, true);

/*The parse method returns an object containing url properties*/
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

/*The query property returns an object with all the querystring parameters as properties:*/
let qdata = q.query;
console.log(qdata.month);
//

var faker = require('faker');

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard();

console.log(randomName, randomEmail, randomCard)

//1


for(let i=0; i<8; i++){
 
// Fake first name
  const firstName = faker.name.firstName()
 
// Fake last name
  const lastName = faker.name.lastName()
 
// Fake suffix
  const suffix = faker.name.suffix()
 
// Fake job Title
  const jobTitle = faker.name.jobTitle()
  
  console.log(`${suffix} ${firstName}
    ${lastName} works as '${jobTitle}'`)
}

//2

// products with their details
 
for (let i = 0; i < 8; i++) {
 
    // Fake product name
    const product = faker.commerce.product()
    // fake price of that product
    const price = faker.commerce.price()
 
    // Fake details
    const productMaterial =
        faker.commerce.productMaterial()
    console.log(`${product} made with
        ${productMaterial}, price ${price}$`)
}

//3
// fake bank transaction details
 
for (let i = 0; i < 8; i++) {
 
    // Fake account type
    const ac = faker.finance.account()
 
    // Fake account name
    const acName = faker.finance.accountName()
 
    // Fake transaction type
    const tT = faker.finance.transactionType()
 
    // Fake amount transaction
    const amt = faker.finance.amount()
 
    console.log(`${acName}, Account No-${ac},
    transaction Type-${tT}, Amount-${amt}`)
}

//4
// domain name and ip addresses

 
for (let i = 0; i < 8; i++) {
 
    // Fake ip address
    const ip = faker.internet.ip()
 
    // Fake domain name
    const domainName =
        faker.internet.domainName()
 
    console.log(`Domain name ->
        ${domainName}, ip-address-> ${ip}`)
}

//5
//fake name, phone, job title, area
let firstName = faker.name.firstName();
let lastName = faker.name.lastName();

let jobTitle = faker.name.jobTitle();
let prefix = faker.name.prefix(); 
let suffix = faker.name.suffix();
let jobArea = faker.name.jobArea();

let phone = faker.phone.phoneNumber();

console.log(`Employee: ${prefix} ${firstName} ${lastName} ${suffix}`);
console.log(`Job title: ${jobTitle}`);
console.log(`Job area: ${jobArea}`);
console.log(`Phone: ${phone}`);