const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//debug

//const testing = document.getElementById("team-list-debug");

const teamContainer = document.querySelector(".team-container");

//variabile in cui andrò a inserire i valori

let cards = "";

//ciclo 

for (let i = 0; i < teamMembers.length; i++) {

  //cerchiamo tutti i membri
  const memberTeam = teamMembers[i]

  //aggiungo tutti i miei valori usando <li> perchè sono in <ul>
  cards +=
    `<div class="team-card">
                <div class="card-image">
                    <img src= "${memberTeam.img}" alt="${memberTeam.name}">
                </div>
                <div class="card-text">
                    <h3>${memberTeam.name}</h3>
                    <p>${memberTeam.role}</p>
                    <p>${memberTeam.email}</p>
                    </div>
            </div>`
}

//inserisco valori in html

teamContainer.innerHTML = cards