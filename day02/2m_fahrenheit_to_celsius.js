/* 
We'll use JavaScript to convert temperatures from Celsius (°C) to
Fahrenheit (°F). The formula is:
Fahrenheit = (Celsius * 9 / 5) + 32
Celsius = (Fahrenheit - 32) * 5/9

2m. The temperature is 86°F. Calculate the temperature in Celsius. (30)
*/

let temp_f=86;
console.log("Temperature =" ,temp_f, "fahrenheit");
let temp_c=(temp_f-32)*5/9;
console.log("Temperature =" ,temp_c, "celsius");
