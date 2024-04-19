function findFighter() {
    var weightClass = document.getElementById("weight-class").value;
    var rank = parseInt(document.getElementById("rank").value);

}

function displayFighter(fighter) {
var fighterInfo = `
    <h2>${fighter.name}</h2>
    <p>Rank: ${fighter.rank}</p>
    <p>Records: ${fighter.records}</p>
    <p>Nickname: ${fighter.nickname ? fighter.nickname : "N/A"}</p>
    <img src="${fighter.profile_pic}" alt="${fighter.name}">
`;
document.getElementById("fighter-info").innerHTML = fighterInfo;
}
