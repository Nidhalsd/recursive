// Weather Clothing Adviser
function weather (season) {
    let text
    switch (season) {
        case 'winter':
            text = "It's winter, Wear a coat ";
            break;
        case 'spring':
            text = "It's spring, Wear a light jacket";
            break;
        case 'summer':
            text = "It's summer, Wear shorts and t-shirt";
            break;
        case 'autumn':
            text = "It's autumn, Wear a jacket";
            break;
        default:
            text = "Please enter a valid season (winter, spring, summer, autumn).";
            break;
        }

    return text;
}


// Ticket Pricing
function Ticket(age) {
    let price;

    if (age <= 12) {
        price = 10;
    } else if (age >= 13 && age <= 17) {
        price = 15;
    } else if (age >= 18) {
        price = 20;
    }

    console.log(`The price of the ticket is $${price}`);
}



// Fibonacci Recursion
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci (n - 1) + fibonacci (n - 2);
    }
}


// Power Recursion
function power(x , n) {
    if (n == 0)
        return 1;

    if (x == 0)
        return 0;
    
    return x * power(x, n - 1);
}