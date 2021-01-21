let emp = [
    {name:'ahammad',loc:'banglore'},
    {name:'pranay',loc:'hyd'},
    {name:'sathya',loc:'kerala'},
    {name:'ishwar',loc:'banglore'},
    {name:'madan',loc:'ap'}
];


let y=emp.filter((x)=> x.loc !== 'ap');
console.log(y);