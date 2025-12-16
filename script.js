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

const testing = document.getElementById("team-list-debug");

//variabile in cui andrò a inserire i valori

let output = "";

//ciclo

for (let i = 0; i < teamMembers.length; i++) {

  //cerchiamo tutti i membri
  const memberTeam = teamMembers[i]

  //aggiungo tutti i miei valori usando <li> perchè sono in <ul>
  output +=
    `<li> 
  ${memberTeam.name}
   ${memberTeam.role} 
   ${memberTeam.email} 
   ${memberTeam.img}
  </li>`
}

//inserisco valori in html

testing.innerHTML = output