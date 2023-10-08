function convertTemperature() {
    // Get input values
    var celsius = parseFloat(document.getElementById("celsiusInput").value);
    var fahrenheit = parseFloat(document.getElementById("fahrenheitInput").value);
    var kelvin = parseFloat(document.getElementById("kelvinInput").value);

    // Check if any of the inputs is empty
    if (isNaN(celsius) && isNaN(fahrenheit) && isNaN(kelvin)) {
        alert("Please enter a temperature value.");
        return;
    }

    // Celsius to Fahrenheit conversion
    if (!isNaN(celsius)) {
        var convertedFahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById("fahrenheitInput").value = convertedFahrenheit.toFixed(2);
        document.getElementById("result").innerText = celsius + "°C is " + convertedFahrenheit.toFixed(2) + "°F";
    }

    // Fahrenheit to Celsius conversion
    if (!isNaN(fahrenheit)) {
        var convertedCelsius = (fahrenheit - 32) * 5 / 9;
        document.getElementById("celsiusInput").value = convertedCelsius.toFixed(2);
        document.getElementById("result").innerText = fahrenheit + "°F is " + convertedCelsius.toFixed(2) + "°C";
    }

    // Celsius to Kelvin conversion
    if (!isNaN(celsius)) {
        var convertedKelvin = celsius + 273.15;
        document.getElementById("kelvinInput").value = convertedKelvin.toFixed(2);
        document.getElementById("result").innerText += "\n" + celsius + "°C is " + convertedKelvin.toFixed(2) + " K";
    }

    // Kelvin to Celsius conversion
    if (!isNaN(kelvin)) {
        var convertedCelsiusFromKelvin = kelvin - 273.15;
        document.getElementById("celsiusInput").value = convertedCelsiusFromKelvin.toFixed(2);
        document.getElementById("result").innerText += "\n" + kelvin + " K is " + convertedCelsiusFromKelvin.toFixed(2) + "°C";
    }

    // Fahrenheit to Kelvin conversion
    if (!isNaN(fahrenheit)) {
        var convertedKelvinFromFahrenheit = (fahrenheit - 32) * 5 / 9 + 273.15;
        document.getElementById("kelvinInput").value = convertedKelvinFromFahrenheit.toFixed(2);
        document.getElementById("result").innerText += "\n" + fahrenheit + "°F is " + convertedKelvinFromFahrenheit.toFixed(2) + " K";
    }

    //Kelvin to Fahrenheit conversion
    if (!isNaN(kelvin)) {
        var convertedFahrenheitFromKelvin = (kelvin - 273.15) * 9 / 5 + 32;
        document.getElementById("fahrenheitInput").value = convertedFahrenheitFromKelvin.toFixed(2);
        document.getElementById("result").innerText += "\n" + kelvin + " K is " + convertedFahrenheitFromKelvin.toFixed(2) + "°F";
    }
}

function clearFields() {
    document.getElementById("celsiusInput").value = "";
    document.getElementById("fahrenheitInput").value = "";
    document.getElementById("kelvinInput").value = "";
    document.getElementById("result").innerText = "";
}