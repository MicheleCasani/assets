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

//creo la funzione per creare a schermo la card di ogni membro del team
const createMemberCard = (member) => {
  let card = `<div class="col-4">
            <div class="card mb-3 text-light" style="max-width: 540px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="./${member.img}" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${member.name}</h5>
                      <p class="card-text">${member.role}</p>
                      <p class="card-text text-primary">${member.email}</p>
                    </div>
                  </div>
                </div>
              </div>
        </div>`;
  document.getElementById('team-members').innerHTML += card;
}

//Creo il ciclo per visualizzare a schermo tutti i membri del team
for (let i =0; i < teamMembers.length; i++){
  createMemberCard(teamMembers[i]);
}