let emp = [
    {name:'ahammad',loc:'banglore'},
    {name:'pranay',loc:'hyd'},
    {name:'sathya',loc:'kerala'},
    {name:'ishwar',loc:'banglore'},
    {name:'madan',loc:'andhra pradesh'}
];


let y=emp.filter((x)=> x.loc === 'andhra pradesh');
console.log(y);