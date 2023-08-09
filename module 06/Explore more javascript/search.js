const lyrics = "Pehle the churaya jo ghar tha phir banaya jo Dil wohi kya Tor bhi dia hai. Laga galay juda kiyaa, to ye batha thi kesi ye dewaangi";

const searchString = "pehle the"
const acheKina = lyrics.toLocaleLowerCase().includes(searchString.toLocaleLowerCase());
console.log(acheKina)