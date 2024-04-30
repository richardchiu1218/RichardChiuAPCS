function getFighter() {
    const weightClass = document.getElementById('weight-class').value;
    const rank = parseInt(document.getElementById('rank').value);
    const fighters = fightersData[weightClass.toLowerCase()];

    if (fighters && fighters.length >= rank) {
        const selectedFighter = fighters[rank - 1];
        displayFighter(selectedFighter);
    } else {
        alert("Invalid selection. Please try again.");
    }
}

const fightersData = {
    flyweight: [
        { name: "Alexandre Pantoja", record: "27-5-0", nickname: "The Cannibal", image: "pantoja.jpg", assessment: "Freestyle. Reinging from Brazil. Pantoja has won 9 of his 11 last fights." },
        { name: "Brandon Royval", record: "16-7-0", nickname: "Raw Dawg", image: "royval.jpg", assessment: "Grappler. Fighting from US. Rovyal has 10 first round finishes." },
        { name: "Brandon Moreno", record: "21-8-2", nickname: "Assassin Baby", image: "moreno.jpg", assessment: "Grappler. Fighting from Mexico. Moreno has 11 wins by submissions." },
        { name: "Amir Albazi", record: "17-1-0", nickname: "Prince", image: "albazi.jpg", assessment: "Grappler. Fighting from Iraq. Albazi has 5 knockouts, 9 submissions, and 9 first round finishes." }
    ],
    bantamweight: [
        { name: "Sean O'Malley", record: "18-1-0", nickname: "Suga", image: "omalley.jpg", assessment: "Striker. Reinging from US. O'Malley has 9 total fight night bonuses, the record at Bantamweight." },
        { name: "Merab Dvalishvili", record: "17-4-0", nickname: "Machine", image: "merab.jpg", assessment: "Freestyle. Fighting from Georgia. Dvalishvili has won 16 of his last 18 fights, and is currently on a 10 fight win streak." },
        { name: "Cory Sandhagen", record: "17-4-0", nickname: "Sandman", image: "sandhagen.jpg", assessment: "Freestyle. Fighting from US. Sandhagen has won 12 of his last 15 fights." },
        { name: "Petr Yan", record: "17-5-0", nickname: "No Mercy", image: "yan.jpg", assessment: "Striker. Fighting from Russia. Yan was a former champion with 2 title fight wins." }
    ],
    featherweight: [
        { name: "Ilia Topuria", record: "15-0-0", nickname: "El Matador", image: "topuria.jpg", assessment: "Striker. Reigning from Spain/Germany. Topuria has knocked out or submitted 87% of his opponents." },
        { name: "Alexander Volkanovski", record: "26-4-0", nickname: "The Great", image: "volkanovski.jpg", assessment: "Freestyle. Fighting from New Zealand. Volkanovski was a former champion with a five year reign." },
        { name: "Max Holloway", record: "26-7-0", nickname: "Blessed", image: "holloway.jpg", assessment: "Striker. Fighting from Polynesian US. Holloway has landed 3378 total significant strikes, the record in the UFC." },
        { name: "Brian Ortega", record: "16-3-0", nickname: "T-City", image: "ortega.jpg", assessment: "Striker. Fighting from US. Ortega has challenged for the title 3 times, each lasting the full 5 rounds." }
    ],
    lightweight: [
        { name: "Islam Makhachev", record: "25-1-0", nickname: "TBD", image: "makhachev.jpg", assessment: "Grappler. Reigning from Dagestan Russia. Makhachev is on a 13 Fight win streak in the UFC." },
        { name: "Arman Tsarukyan", record: "22-3-0", nickname: "Ahalkalakets", image: "tsarukyan.jpg", assessment: "Striker. Fighting from Georgia. Tsarukyan is a former Pankration world champion, an ancient-Greco combat sport." },
        { name: "Charles Oliveira", record: "34-10-0", nickname: "Do Bronxs", image: "charles.jpg", assessment: "Grappler. Fighting from Brazil. Oliveira has the most finishes and submission wins in the UFC, 20 and 16 respectively." },
        { name: "Justin Gaethje", record: "26-5-0", nickname: "Highlight", image: "gaethje.jpg", assessment: "Striker. Fighting from US. Gaethje was the WSOF, another promotion comapny, Lightweight Champion prior to entering the UFC." }
    ],
    welterweight: [
        { name: "Leon Edwards", record: "22-3-0", nickname: "Rocky", image: "edwards.jpg", assessment: "Striker. Reigning from Jamaica/UK. Edwards has won 14 out of his last 16 fights." },
        { name: "Kamaru Usman", record: "20-4-0", nickname: "Nigerian Nightmare", image: "usman.jpg", assessment: "Freestyle. Fighting from Nigeria/US. Usman was on a 15 win streak, second only to Anderson Silva's 16 win streak." },
        { name: "Belal Muhammad", record: "23-3-0", nickname: "Remember the Name", image: "belal.jpg", assessment: "Freestyle. Fighting from US. Belal Muhammad has 11 decision wins, the third most in the UFC." },
        { name: "Shavkat Rakhmonov", record: "18-0-0", nickname: "Nomad", image: "shavkat.jpg", assessment: "Grappler. Fighting from Uzbekistan. Rakhmonov has a 100% finish rate in his MMA career." }
    ],
    middleweight: [
        { name: "Dricus Du Plessis", record: "21-2-0", nickname: "Still Knocks", image: "plessis.jpg", assessment: "Striker. Reigning from South Africa. Du Plessis underwent a nose surgery, allegedly since his oxygen intake was hindering his stamina." },
        { name: "Sean Strickland", record: "28-6-0", nickname: "TBD", image: "strickland.jpg", assessment: "Striker. Fighting from US. Strickland is the only top 5 ranked fighter among all divisions to utilize a modified Philly Shell stance." },
        { name: "Israel Adesanya", record: "24-3-0", nickname: "Last Stylebender", image: "adesanya.jpg", assessment: "Striker. Fighting from Nigeria/New Zealand. Adesanya " },
        { name: "Robert Whittaker", record: "26-7-0", nickname: "Reaper", image: "whittaker.jpg", assessment: "Striker. Fighting from Australia." }
    ],
    lightheavyweight: [
        { name: "Alex Pereira", record: "10-2-0", nickname: "Poatan", image: "pereira.jpg", assessment: "Striker. Reigning from Brazil. Pereira held the Middleweight title, making him one of nine 'double champions' in the UFC." },
        { name: "Jiri Prochazka", record: "30-4-1", nickname: "TBD", image: "jiri.jpg", assessment: "Striker. Fighting from Czechia. Prochazka has 26 knockouts in his MMA career." },
        { name: "Magomed Ankalaev", record: "19-1-1", nickname: "TBD", image: "ankalaev.jpg", assessment: "Freestyle. Fighting from Russia. Ankalaev has 11 knockouts and 6 first round finishes in his MMA career." },
        { name: "Jamahal Hill", record: "12-2-0", nickname: "Sweet Dreams", image: "hill.jpg", assessment: "Striker. Fighting from US. Jamahal Hill has 7 knockouts and 4 first round finishes in his MMA career." }
    ],
    heavyweight: [
        { name: "Jon Jones", record: "27-1-0", nickname: "Bones", image: "jones.jpg", assessment: "Freestyle. Reigning from US. Jones has 15 title fight wins, holding the record in the UFC, and 11 title defenses." },
        { name: "Tom Aspinall", record: "14-3-0", nickname: "TBD", image: "aspinall.jpg", assessment: "Freestyle. Fighting from UK. Aspinall has the shortest average fight time of 2 minutes and 10 seconds." },
        { name: "Ciryl Gane", record: "12-2-0", nickname: "Bon Gamin", image: "gane.jpg", assessment: "Striker. Fighting from France. Gane has 6 wins by knockout, 3 by submission, and 3 first round finishes." },
        { name: "Sergei Pavlovich", record: "18-2-0", nickname: "TBD", image: "sergei.jpg", assessment: "Striker. Fighting from Russia. Sergei Pavlovich has 15 knockouts and 15 first round finishes." }
    ],
    wstrawweight: [
        { name: "Zhang Weili", record: "25-3-0", nickname: "Magnum", image: "weili.jpg", assessment: "Striker. Reigning from China. Weili is the first Chinese champion in the UFC." },
        { name: "Tatiana Suarez", record: "11-0-0", nickname: "TBD", image: "suarez.jpg", assessment: "Freestyle. Fighting from US. Suarez is a thyroid cancer survior" },
        { name: "Yan Xiaonan", record: "18-4-0", nickname: "TBD", image: "xiaonan.jpg", assessment: "Striker. Fighting from China. Xiaonan has 8 knockouts and 8 first round finishes." },
        { name: "Amanda Lemos", record: "14-3-1", nickname: "TBD", image: "lemos.jpg", assessment: "Striker. Fighting from Brazil. Lemos has won 8 of her last 10 fights." }
    ],
    wflyweight: [
        { name: "Alexa Grasso", record: "16-3-1", nickname: "TBD", image: "grasso.jpg", assessment: "Freestyle. Reigning from Mexico. Grasso has 5 first round finishes." },
        { name: "Valentina Shevchenko", record: "23-4-1", nickname: "Bullet", image: "shevchenko.jpg", assessment: "Striker. Fighting from Kyrgyzstan. Shevchenko was a former champion with 7 title defenses" },
        { name: "Manon Fiorot", record: "12-1-0", nickname: "Beast", image: "fiorot.jpg", assessment: "Striker. Fighting from France. Fiorot is on a 12 fight win streak in her MMA career." },
        { name: "Erin Blanchfield", record: "12-2-0", nickname: "Cold Blooded", image: "erin.jpg", assessment: "Grappler. Fighting from US. Blanchfield has 2 wins by knockouts, 4 by submission, and 3 by first round finish." }
    ],
    wbantamweight: [
        { name: "Raquel Pennington", record: "16-9-0", nickname: "Rocky", image: "pennington.jpg", assessment: "Freestyle. Fighting from US. Pennington is on a 6 fight win streak" },
        { name: "Julianna Peña", record: "12-5-0", nickname: "Venezuelan Vixen", image: "pena.jpg", assessment: "Grappler. Fighting from US. Peña has 6 submissions." },
        { name: "Ketlen Vieira", record: "14-3-0", nickname: "Fenomeno", image: "ketlen.jpg", assessment: "Grappler. Fighting from Brazil. Vieira has won 4 of her last 6 fights." },
        { name: "Mayra Bueno Silva", record: "10-3-1", nickname: "Sheetra", image: "silva.jpg", assessment: "Striker. Fighting from Brazil. Silva has 7 first round finishes." }
    ],
};


function displayFighter(fighter) {
    const fighterInfoContainer = document.getElementById('fighter-info');
    fighterInfoContainer.innerHTML = `
        <p> </p>
        <img src="images/${fighter.image}" alt="${fighter.name}">
        <p><strong>Name:</strong> ${fighter.name}</p>
        <p><strong>Record:</strong> ${fighter.record}</p>
        <p><strong>Nickname:</strong> ${fighter.nickname}</p>
        <p><strong>Assessment:</strong> ${fighter.assessment}</p>
    `;
}

