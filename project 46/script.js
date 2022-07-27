const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Miyah Myles",
    position: "Marketing",
    photo:
      "https://images.unsplash.com/photo-1599842057874-37393e9342df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    text: "Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.",
  },

  {
    name: "Andrew Stan",
    position: "developer",
    photo:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    text: "Needed feebly dining oh talked wisdom oppose at. Applauded use attempted strangers now are middleton concluded had. It is tried ﻿no added purse shall no on truth. Pleased anxious or as in by viewing forbade minutes prevent. Too leave had those get being led weeks blind. Had men rose from down lady able. Its son him ferrars proceed six parlors. Her say projection age announcing decisively men. Few gay sir those green men timed downs widow chief. Prevailed remainder may propriety can and.",
  },

  {
    name: "Maria",
    position: "PR",
    photo:
      "https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    text: "Old there any widow law rooms. Agreed but expect repair she nay sir silent person. Direction can dependent one bed situation attempted. His she are man their spite avoid. Her pretended fulfilled extremely education yet. Satisfied did one admitting incommode tolerably how are.",
  },

  {
    name: "Christina",
    position: "Marketing",
    photo:
      "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
    text: "Style never met and those among great. At no or september sportsmen he perfectly happiness attending. Depending listening delivered off new she procuring satisfied sex existence. Person plenty answer to exeter it if. Law use assistance especially resolution cultivated did out sentiments unsatiable. Way necessary had intention happiness but september delighted his curiosity. Furniture furnished or on strangers neglected remainder engrossed.",
  },

  {
    name: "Kristen",
    position: "engineer",
    photo:
      "https://images.unsplash.com/photo-1484081064812-86e90e107fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    text: "The text is a corrupted version of the original and therefore does not mean anything in particular. The book however where it originates discusses the philosophical views of Epicureanism, Stoicism, and the Platonism of Antiochus of Ascalon.",
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);
