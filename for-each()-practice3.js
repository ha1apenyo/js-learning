const accounts = [
  { name: 'Ivan', balance: 1200 },
  { name: 'Olha', balance: -50 },
  { name: 'Danylo', balance: 0 },
  { name: 'Sofiia', balance: -300 },
  { name: 'Mykhailo', balance: 500 }
];

accounts.forEach((account) => {
    account.balance < 0 ?
        console.log(`ALERT: user ${account.name} has negative balance: ${account.balance}$`) :
        console.log(`OK: user ${account.name} has balance: ${account.balance}$`)        
});