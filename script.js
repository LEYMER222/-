alert("sizga hozir random raqam chiqadi")

const randomNumber = Math.floor(Math.random() * 100) + 1; 
console.log(randomNumber);

alert(`Random raqam: ${randomNumber}`)
if (randomNumber % 2 !== 0) {
    alert(` ${randomNumber} Hечетное число`);
} else {
    alert(` ${randomNumber} Четное число`);
}