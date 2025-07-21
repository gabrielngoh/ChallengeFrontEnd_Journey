const previous_icon = document.querySelector('#previous_btn');
const next_icon = document.querySelector('#next_btn');
const img_profile = document.querySelector('#image_profile');
const testimony = document.querySelector('#description');
const Name = document.querySelector('#Name');
const Job = document.querySelector('#Job');

const image_url_array = [
  "./images/image-tanya.jpg",
  "./images/image-john.jpg"
];

const testimony_array = [
  `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`,
  `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.”`
];

const Speaker_info = [
  {
    nom: "Tanya Sinclair",
    Job: "UX Engineer",
    image_prodfile: image_url_array[0],
    Testimony: testimony_array[0]
  },
  {
    nom: "John Tarkpor",
    Job: "Junior Front-end Developer",
    image_prodfile: image_url_array[1],
    Testimony: testimony_array[1]
  }
];

const Update_info = (New_data) => {
  img_profile.src = New_data.image_prodfile;
  Name.textContent = New_data.nom;
  Job.textContent = New_data.Job;
  testimony.textContent = New_data.Testimony;
};

const changer_info_after_click = (next_previous) => {
  next_previous.addEventListener('click', (event) => {
    let TL = gsap.timeline({ delay: 0.1, paused: true });

    TL.from(img_profile, {
      x: 100,
      opacity: 0,
      duration: 1
    })
    .from(testimony, {
      x: -100,
      opacity: 0,
      duration: 1
    })
    .from([Name, Job], {
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.7
    });

    TL.restart();
    verify_id_to_change(event);
  });
};

const verify_id_to_change = (event) => {
  event.target.id === "previous_btn" ? Update_info(Speaker_info[0]) : Update_info(Speaker_info[1]);
};

changer_info_after_click(next_icon);
changer_info_after_click(previous_icon);
