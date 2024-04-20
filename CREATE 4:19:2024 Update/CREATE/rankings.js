// Dummy data for fighters (you can replace this with your actual data)
const fighters = {
    "FemaleStrawweight": [
        {"rank": , "name": "", "record": "", "nickname": ""},
    ],
    "FemaleFlyweight": [
        {"rank": , "name": "", "record": "", "nickname": ""},
    ],
    "FemaleBantamweight": [
        {"rank": , "name": "", "record": "", "nickname": ""},
    ],
    "MaleFlyweight": [
        {"rank": , "name": "", "record": "", "nickname": ""},
    ],
    "MaleBantamweight": [
        {"rank": , "name": "", "record": "", "nickname": ""},
    ],
    "MaleFeatherweight": [
        {"rank": , "name": "", "record": "", "nickname": ""},
    ],
    "MaleLightweight": [
        {"rank": , "name": "", "record": "", "nickname": ""},
    ],
    "MaleWelterweight": [
        {"rank": , "name": "", "record": "", "nickname": ""},
    ],
    "MaleMiddleweight": [
        {"rank": , "name": "", "record": "", "nickname": ""},
    ],
    "MaleLightHeavyweight": [
        {"rank": , "name": "", "record": "", "nickname": ""},
    ],
    "MaleHeavyweight": [
        {"rank": , "name": "", "record": "", "nickname": ""},
    ]
};


function findFighter() {
}


function displayFighter() {
    const weightClass = document.getElementById("weightClass").value;
    const rank = parseInt(document.getElementById("rank").value);
    const fighter = fighters[weightClass]?.find(f => f.rank === rank);
    const fighterInfoDiv = document.getElementById("fighterInfo");

    if (fighter) {
        const { name, record, nickname } = fighter;
        fighterInfoDiv.innerHTML = `
            <p>Name: ${name}</p>
            <p>Record: ${record}</p>
            ${nickname ? `<p>Nickname: ${nickname}</p>` : ''}
            <!-- Add profile picture here -->
        `;
    } else {
        alert("Fighter not found.");
    }
}



populateRanks();
