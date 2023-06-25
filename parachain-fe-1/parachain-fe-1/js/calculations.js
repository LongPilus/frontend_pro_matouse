

function co2ComparisonOutput(co2_kg){

    if (co2_kg < 10) {

        quantity = co2_kg * 4
        unit = "litre(s) of water boiled"

    } else if (co2_kg < 100) {

        quantity = co2_kg * 10;
        unit = "km(s) flown by plane"

    } else if (co2_kg < 1000) {


        quantity = co2_kg * 10;
        unit = "km(s) traveled by car"

    } else if (co2_kg < 10000) {

        quantity = co2_kg/1000;
        unit = "tree(s) burned"


    } else {

        quantity = co2_kg / 10000;
        unit = "yearly household emissions"


    }

    quantity = getOneDecimalPlace(quantity)
    return "equivalent to " + quantity + " " + unit;


}


function formatNumber(num) {
    if (Math.abs(num) >= 1.0e+12)
        return (Math.abs(num) / 1.0e+12).toFixed(1) + "T";
    else if (Math.abs(num) >= 1.0e+9)
        return (Math.abs(num) / 1.0e+9).toFixed(1) + "B";
    else if (Math.abs(num) >= 1.0e+6)
        return (Math.abs(num) / 1.0e+6).toFixed(1) + "M";
    else if (Math.abs(num) >= 1.0e+3)
        return (Math.abs(num) / 1.0e+3).toFixed(1) + "k";
    else
        return Math.abs(num);
}

function getOneDecimalPlace(num) {
    return Math.abs(num).toFixed(1);
}
