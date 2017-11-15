var fortuneCookies = [
"Conquer your fears or they will conquer you.",
"Rivers need springs.",
"Do not fear what you don't know.",
"You will have a pleasant surprise.",
"Whenever possible, keep it simple.",
];

// encapsulation 
// less fragile code i.e error prone
exports.getfortune = () => {
    let idx = Math.floor(Math.random()*fortuneCookies.length);
    return fortuneCookies[idx];
}