console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async() =>{
    const promiseWifeBringingTickets = new Promise((resolve,reject) =>{
        setTimeout(()=>resolve(`ticket`),3000);
    });

    const getPopcorn = new Promise((resolve,reject)=> resolve(`popcorn`));
    const addButter = new Promise((resolve,reject) => resolve(`butter`));
    const getColdDrinks = new Promise((resolve,reject) => resolve(`Coke`));

    let ticket = await promiseWifeBringingTickets;
    
    // console.log(`wife: i have the ${ticket}`);
    // console.log('Husband : Lets go inside');
    // console.log('Wife: No i am hungry');


    // console.log(`Husband: i got some ${popcorn}`);
    // console.log('Husband : We should go inside');
    // console.log('Wife: I need butter on my popcorn');

    // console.log(`Husband: i got some ${butter} on popcorn`);
    // console.log('Husband : Anything else darling');
    // console.log('Wife: Lets go we are getting late');
    // console.log('Husband : Thank you for the reminder *grins*');

    // console.log(`Wife: Im feeling thirsty i want some cold Drinks`);
    // console.log(`Husband: Here i got you some ${coke}`);
    // console.log('Husband:Anything else');
    // console.log(`Wife: Nothing more thank you darling`);

    let [popcorn,butter,coke] = await Promise.all([getPopcorn,getColdDrinks,addButter]);

    console.log(`${popcorn},${butter},${coke}`);

    return ticket;
}

preMovie().then((m) => console.log(`person3: Shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');