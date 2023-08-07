function mileToKm(miles){
    const kmeters = miles * 1.609;
    return kmeters;
}

const milesValue = 11;
const KmValue = mileToKm(milesValue);
const kiloMters = KmValue.toFixed(2);
console.log("Kilomters hocche: ", kiloMters);



const tarMiles = 24;
const tarKilo = mileToKm(tarMiles);
const tarKilometers = tarKilo.toFixed(2);
console.log("Tahar Kilometrs hocche :", tarKilometers);