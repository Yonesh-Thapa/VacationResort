let num_of_days = 28;
let check_in_date = "05/05/2023";
let season_date_start = "June 1 2023";
let season_date_end =  "August 31 2023";
let msec = Date.parse(check_in_date);
let checkout_date = num_of_days * 1000 * 60 * 60 *24;

let display_checkout = new Date(checkout_date + msec);
let price_per_room = 0;
let date1 = new Date(check_in_date).getTime();
let date2 = new Date(checkout_date).getTime();
let date3 = new Date(check_in_date).getTime();

if (date1 < 3)
// if(king)
// {
//     price_per_room += 150;
// }
// if(queen){
//     price_per_room += 150;
// }
// if(bedroom_suite) 
// {
//     price_per_room += 150;
// }

console.log(msec);
console.log(display_checkout);
console.log(check_in_date);
console.log(date1);
console.log(new Date(season_date_end));
console.log(new Date(check_in_date));

