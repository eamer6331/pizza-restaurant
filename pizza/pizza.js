let listofitem = document.getElementById("listofitem")
let offers = document.querySelector(".offers")
let menus = document.querySelector(".menus")
let image=document.querySelector(".image")
let foodavailable = document.querySelector(".foodavailable")
let leftside = document.querySelector(".leftside");
const lists = () => {
  let arrayofitem = ["Home", "About", "Menu", "Gallery", "Contact"];
  arrayofitem.forEach((element) => {
    listofitem.innerHTML += ` <li><a href="#${element.toLowerCase()}">${element}</a></li>`;
  });
};
lists();

let objectofoffers = [
  {
    id: "1",
    img: "./img/offer1.png",
    h1: "Quattro Pasta",
    p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam.",
    del: "$55.00",
    span: "$18.00",
  },
  {
    id: "2",
    img: "./img/offer2.png",
    h1: "Veggie Pizza",
    p: "A crispy thin crust topped with fresh vegetables and extra cheese.",
    del: "$60.00",
    span: "$25.00",
  },
  {
    id: "3",
    img: "./img/offer3.png",
    h1: "Spaghetti Bolognese",
    p: "Classic Italian pasta with rich meat sauce and fresh herbs.",
    del: "$70.00",
    span: "$30.00",
  },
];

objectofoffers.forEach(element => {
     
            offers.innerHTML += `<div class="offer">
              <img src="${element.img}" />
              <h1>${element.h1}</h1>
              <p>
                ${element.p}
              </p>
              <p><del${element.del}</del> <span>${element.span}</span></p>
            </div>`;
       
    
       
    
})



let objectofmenu = [
  {
    img: "./img/food1.png",
    h2: "LASAL CHEESE",
    p: "$18.00",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, assumenda.",
  },
  {
    img: "./img/food2.png",
    h2: "LASAL CHEESE",
    p: "$18.00",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, assumenda.",
  },
  {
    img: "./img/food3.png",
    h2: "LASAL CHEESE",
    p: "$18.00",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, assumenda.",
  },
  {
    img: "./img/food4.png",
    h2: "LASAL CHEESE",
    p: "$18.00",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, assumenda.",
  },
  {
    img: "./img/food5.png",
    h2: "LASAL CHEESE",
    p: "$18.00",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, assumenda.",
  },
  {
    img: "./img/food6.png",
    h2: "LASAL CHEESE",
    p: "$18.00",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, assumenda.",
  },
  {
    img: "./img/food7.jpeg",
    h2: "LASAL CHEESE",
    p: "$18.00",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, assumenda.",
  },
  {
    img: "./img/food8.jpeg",
    h2: "LASAL CHEESE",
    p: "$18.00",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, assumenda.",
  },
  {
    img: "./img/food9.jpeg",
    h2: "LASAL CHEESE",
    p: "$18.00",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, assumenda.",
  },
  {
    img: "./img/food10.jpeg",
    h2: "LASAL CHEESE",
    p: "$18.00",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, assumenda.",
  },
  {
    img: "./img/food11.jpeg",
    h2: "LASAL CHEESE",
    p: "$18.00",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, assumenda.",
  },
  {
    img: "./img/food12.jpeg",
    h2: "LASAL CHEESE",
    p: "$18.00",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, assumenda.",
  },
];
objectofmenu.forEach((element) => {
    menus.innerHTML += `<div class="menu">
            <img src="${element.img}" />
            <div class="menu-content">
              <div class="menutop">
                <h2>${element.h2}</h2>
                <p>${element.p}</p>
              </div>
              <p>
               ${element.details}
              </p>
            </div>
          </div>`;

})


let objectoffood = [
  {
    img: "./img/breckfastIcon.png",
    h1: "Breakfast",
    p: "8:00 am to 10:00 am",
  },
  {
    img: "./img/lunchIcon.png",
    h1: "Lunch",
    p: "9:00 pm to 1:00 Am",
  },
  {
    img: "./img/dinnerIcon.png",
    h1: "Dinner",
    p: "All day",
  },
  {
    img: "./img/dessertIcon.png",
    h1: "Dessert",
    p: "8:00 am to 10:00 am",
  },
];
objectoffood.forEach((element) => {
   
      foodavailable.innerHTML += `
    <div class="food">
          <img src="${element.img}" />
          <h1>${element.h1}</h1>
          <p>${element.p}</p>
        </div>
  `;
    });



    let galleryImages = [
      { img: "./img/gallery1.jpeg" },
      { img: "./img/gallery2.jpeg" },
      { img: "./img/gallery3.jpeg" },
      { img: "./img/gallery4.jpeg" },
      { img: "./img/gallery5.jpeg" },
      { img: "./img/gallery6.jpeg" },
    ];
galleryImages.forEach((element) => {
  image.innerHTML += `<img src="${element.img}" />`;
});


let infoData = {
  address: [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>`,
      text: "Hosary Mosque, 6 October, Egypt",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/></svg>`,
      text: "Phone: 123456789",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z"/></svg>`,
      text: "support@foodlover.com",
    },
  ],

  workingHours: [
    "8:00 am to 11:00 pm on Weekdays",
    "11:00 am to 1:00 Am on Weekends",
  ],

  social: [
    `<i class="fa-brands fa-facebook"></i>`,
    `<i class="fa-brands fa-instagram"></i>`,
    `<i class="fa-brands fa-twitter"></i>`,
  ],
};
leftside.innerHTML = `
  <div class="address">
    <h1>ADDRESS</h1>
    ${infoData.address
      .map((item) => `<div>${item.icon}<p>${item.text}</p></div>`)
      .join("")}
  </div>

  <div class="WORKING-HOURS">
    <h1>WORKING HOURS</h1>
    ${infoData.workingHours.map((time) => `<p>${time}</p>`).join("")}
  </div>

  <div class="follow-us">
    <h1>FOLLOW US</h1>
    <div>
      ${infoData.social.join("")}
    </div>
  </div>
`;
