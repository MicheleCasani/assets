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
  let card = `<div class="col-lg-6 col-md-12 col-sm-12">
            <div class="card mb-3 " style="max-width: 540px;">
                <div class="row g-0">
                  <div class="col-md-4 col-sm-4">
                    <img src="${member.img}" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8 col-sm-8">
                    <div class="card-body">
                      <h5 class="card-title">${member.name}</h5>
                      <p class="card-text">${member.role}</p>
                      <p class="card-text text-success">${member.email}</p>
                    </div>
                  </div>
                </div>
              </div>
        </div>`;
  return card;
}

//creo una funzione per visualizzare a schermo tutte le card del team
const renderTeam = () => {
  let cards = '';
  for (let i = 0; i < teamMembers.length; i++) {
    cards += createMemberCard(teamMembers[i]);
  }
  document.getElementById('team-members').innerHTML = cards;
}
// richiamo la funzione per visualizzare a schero le card del team
renderTeam();

// recupero gli elementi del dom per il form
const name = document.getElementById('name');
const role = document.getElementById('role');
const email = document.getElementById('email');
const img = document.getElementById('image');
const button = document.querySelector('.btn');
const memberList = document.getElementById('team-members');

button.addEventListener('click', (e) =>{
  e.preventDefault();

  // recupero i valori del form
  let nameValue = name.value;
  let roleValue = role.value;
  let emailValue = email.value;
  let imgValue = img.value;

  let newMember = {
    name: nameValue,
    role: roleValue,
    email: emailValue,
    img: imgValue
  }

  // aggiungo il nuovo membro al team
  teamMembers.push(newMember);
  renderTeam(teamMembers);

  //reseto il form
  name.value = '';
  role.value = '';
  email.value = '';
  img.value = '';
})



