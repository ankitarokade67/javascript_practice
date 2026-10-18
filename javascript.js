const employees = [
  {
    id: 1,
    name: "Rahul",
    department: "IT",
    salary: 45000,
    experience: 3,
    isActive: true
  },
  {
    id: 2,
    name: "Priya",
    department: "HR",
    salary: 35000,
    experience: 2,
    isActive: true
  },
  {
    id: 3,
    name: "Amit",
    department: "IT",
    salary: 60000,
    experience: 5,
    isActive: false
  },
  {
    id: 4,
    name: "Sneha",
    department: "Finance",
    salary: 50000,
    experience: 4,
    isActive: true
  },
  {
    id: 5,
    name: "Neha",
    department: "IT",
    salary: 30000,
    experience: 1,
    isActive: true
  }
];

/*const rooms = [
  {
    id: 101,
    name: "Standard Room",
    price: 2000,
    capacity: 2,
    available: true,
    amenities: ["Wi-Fi", "TV", "AC"]
  },
  {
    id: 102,
    name: "Deluxe Room",
    price: 3500,
    capacity: 3,
    available: true,
    amenities: ["Wi-Fi", "TV", "AC", "Balcony"]
  },
  {
    id: 103,
    name: "Family Room",
    price: 5000,
    capacity: 5,
    available: false,
    amenities: ["Wi-Fi", "TV", "AC", "Kitchen"]
  }
];*/
/*const roomPrice=2000;
const night=3;
const extraBeds=2;
const extrabedPrice=500;
const discountPercentage=10;

//calculate final price
const roomTotal=roomPrice * night;
const extrabedCost=extraBeds * extrabedPrice * night;
const discount=roomTotal * discountPercentage / 100;
const totalPrice=roomTotal + extrabedCost  - discount;
console.log(totalPrice);
console.log(extrabedCost);
console.log(discount);
console.log(totalPrice);*/


/*let email='abc@gmail.com';
let password='';
if(email=="" || password==""){
    console.log("require");
}else{
    console.log("successfull");
}*/


/*let room={
    id: 103,
    name: "Family Room",
    price: 5000,
    capacity: 5,
    available: true,
    amenities: ["Wi-Fi", "TV", "AC", "Kitchen"]
};
let guest=2
if(room.available===true && guest <= room.capacity){
    console.log("room is availabel");
}else{
    console.log("not available");
}*/



/*let dicountPercent=10;
let amount=10000;
if(amount >= 10000){
     discount = amount * dicountPercent / 100;
     console.log(amount - discount);
}*/



/*let payment=true;
payment === false ? console.log("payment pending") : console.log("payment successfull");*/


/*function bookRoom(guestCount){
    let guest=guestCount ?? 1;
    console.log(guest);
}
bookRoom(2);
bookRoom(null);
bookRoom(undefined);*/



/*let price="2400";
let umPrice=Number(price);
let total=umPrice + 500;
console.log(total);*/


/*let Snumber="5";
let number=5;
if (Snumber == number){
    console.log(true);
}else if(Snumber === number){
    console.log(true);
}else{
    console.log(false);
}*/



/*let user="abc";
if(user==="admin"){
    console.log("access successfull");
}else{
    console.log("sorry");
}*/



/*let room={
    id: 101,
    name: "Standard Room",
    price: 2000,
    capacity: 2,
    available: true,
    amenities: ["Wi-Fi", "TV", "AC"],
    status:"pending"
};
if(room.status=="confirm"){
    room.status="cancelled";
    console.log("cancel successfull");
}else{
    console.log("cannot cancel");
}*/




/*function calculateTotal(price,night){
    return price * night;
}
console.log(calculateTotal(10000,2));*/


/*let email="abcgmail.com";
function validateEmial(){
    if(email.includes("@") && email.includes(".")){
        console.log("email.is valid");
    }else{
        console.log("email is not valid");
    }
}
validateEmial();*/


/*function checkAvailability(room){
    if(room.available){
        console.log('room is available');
    }else{
        console.log("room is not available")
    }
}
let room={
    available:false
};
console.log(checkAvailability(room));*/


/*let calculateDiscount=(amount,discountPercentage)=>{
    let discount = amount * discountPercentage / 100;
    let finalPrice = amount - discount;
    return finalPrice;
}
console.log(calculateDiscount(10000,10));*/


/*let calculateSalary=(amount,bonus,diduction)=>{
    return amount + bonus - diduction;
};
console.log(calculateSalary(10000,5000,500));*/



//formatUserName()	Remove extra spaces and format a name.
/*function format(name){
    return name.trim().replace().toLowerCase().replace();
}*/



/*function filterArray(arr,callback){
    let result=[];
    for(let item of arr){
        if(callback(item)){
            result.push(item);
        }
    }
    return result;
}
let numbers=[23,42,13,5,3];
console.log(filterArray(numbers,num=>num%2===0));*/



//processPayment()	Accept an amount and a callback to handle success or failure.
/*function processPayment(amt,callback){
    if(amt <= 0){
        console.log("payment faile");
    }else{
        console.log("payment succesfull");
    }
}
function paymentStatus(msg){
    console.log(msg)
}
console.log(processPayment(0));
console.log(processPayment(100));*/



//calculateAverage()	Accept any number of values using rest parameters.

//updateBooking()	Use spread syntax to return an updated booking without changing the original object.
/*function updateBooking(booking,newStatus){
    return{...booking,status:newStatus};
}
let booking={
    id: 101,
    name: "Ankita",
    room: "Deluxe",
    status: "pending"
};
let updatedBooking=updateBooking(booking,"confirm");
console.log(updatedBooking);
console.log(booking);*/



/*const rooms = [
  {
    id: 101,
    name: "Standard Room",
    price: 2000,
    capacity: 2,
    available: true,
    status:"upcomming",
    amenities: ["Wi-Fi", "TV", "AC"]
  },
  {
    id: 102,
    name: "Deluxe Room",
    price: 3500,
    capacity: 3,
    available: true,
    status:"upcomming",
    amenities: ["Wi-Fi", "TV", "AC", "Balcony"]
  },
  {
    id: 103,
    name: "Family Room",
    price: 5000,
    capacity: 5,
    available: false,
    status:"cancelled",
    amenities: ["Wi-Fi", "TV", "AC", "Kitchen"]
  }
];*/
/*let result=rooms.filter(room=>room.available===true && room.capacity<=3 && room.price<4000);
console.log(result);*/


/*let bookings=rooms.filter(room=>room.status==="upcomming");
console.log(bookings);*/


/*let rooms = [
    { name: "Standard Room", price: 2000, balcony: false },
    { name: "Deluxe Room", price: 3500, balcony: true },
    { name: "Family Room", price: 0, balcony: false }
];
let hasBalcony=rooms.some(room=>room.balcony===true);
let roomPrice=rooms.every(room=>room.price > 0);
console.log(hasBalcony);
console.log(roomPrice);*/



//Use map() to create a list of room names only.
/*let rooms = [
    { id:101, name: "Standard Room", price: 2000 },
    {id:102, name: "Deluxe Room", price: 3500 },
    { id:103, name: "Family Room", price: 5000 }
];*/

/*let result=rooms.map(room=>room.name);
console.log(result);*/


//Use find() to get the room with ID 102.
/*let roomById=rooms.find(room=>room.id);
console.log(roomById);*/


//Use findIndex() to find the index of the Family Room.
/*let findFamily=rooms.findIndex(room=>room.name==="family Room");
console.log(findFamily);*/


//Use reduce() to calculate the total monthly salary of all employees.
/*let totalSalary=employees.reduce((total,employee)=>{
    return total + employee.salary;
},0);
console.log(totalSalary);*/


//Use reduce() to calculate the total price of all items in a shopping cart.
/*let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 500, quantity: 2 },
    { name: "Keyboard", price: 1500, quantity: 1 }
];
let totalPrice=cart.reduce((total,carte)=>{
    return total + carte.price;
},0);
console.log(totalPrice);*/


//Use sort() to arrange employees from highest to lowest salary without modifying the original array.
/*let sortArray=[...employees].sort((a,b)=>b.salary-a.salary);
console.log(sortArray);*/


//Use includes() to check whether an amenities array contains "Wi-Fi".
/*let amenities = ["Wi-Fi", "TV", "AC", "Balcony"];
let hasWifi = amenities.includes("Wi-Fi");
console.log(hasWifi);*/


//Use push() to add a new room and pop() to remove the last room.
/*let rooms=['family','delux','standard'];
rooms.pop();
console.log(rooms);
rooms.push('standard')
console.log(rooms);*/



//Use slice() to get the first two rooms without changing the original array.
let rooms = ["Standard Room", "Deluxe Room", "Family Room", "Suite"];
let newRoom=rooms.slice(0,2);
console.log(newRoom);



//Use splice() to remove a cancelled booking from an array.



//Use for...of to print each employee's name and department.



//Use forEach() to print each booking's ID and total amount.



//Remove duplicate amenities from an array.



//Use a regular for loop to find the highest-paid employee.



//Use while to simulate retrying a failed payment up to three times.



//Use break to stop searching once a matching room is found.



//Use continue to skip inactive employees while displaying employee details.