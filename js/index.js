const hotToursJSON = `
[
{
"imageURL": "norway-tour.jpg",
"title": "Nature Hike in Lofoten",
"description": "Make the most of your exploration of Austvågøya Island, one of the Lofoten Archipelago's main isles, during this 3-days guided walking tour. Learn about the landscape, flora, and fauna from your guide as you walk.",
"price": 13500.00
},
{
"imageURL": "norway-yacht-week.jpg",
"title": "Bergen: Yacht Cruise",
"description": "Make the most of your time in port on this shore excursion in Bergen. Departing from the center of Bergen, head along the narrow Mostraumen fjord to see some of western Norway's most spectacular scenery.",
"price": 17900.00
},
{
"imageURL": "norway-lofoten-islands.jpg",
"title": "Mountain Trip - Moskenes",
"description": "We will visit the famous and breathtaking mountain top, called Ryten in Moskenes municipality in Lofoten. Unique opportunity to enjoy a peaceful, quiet yet relaxing adventure in the Northern part of the world.",
"price": 15399.00 
}
]`;


function renderTours(tours, sortOder = "ascending"){
    const toursContainer = document.querySelector('.hot-tours');
    const sortedTours = tours.slice().sort( (a, b) => sortOder === "ascending"? a.price - b.price : b.price - a.price);
    toursContainer.innerHTML = " ";
    for(const tour of sortedTours)
    toursContainer.innerHTML +=
   ` <article>
        <img src="img/${tour.imageURL}" alt="${tour.title}">
        <h2>${tour.title}</h2>
        <p>${tour.description}</p>
           <div class="button-container">
                 <button class="info-btn"><span>Info</span></button>
                 <button class="info-btn"><span>${tour.price} NOK </span></button>
           </div>
   </article>`
}

renderTours(JSON.parse(hotToursJSON));

const sortToursAscendingButtons = document.querySelector('.sort-asc');
const sortToursDescendingButton = document.querySelector('.sort-dsc');

sortToursAscendingButtons.addEventListener('click', sortToursAscending);
sortToursDescendingButton.addEventListener('click', sortToursDescending);

function sortToursAscending() {
    sortToursDescendingButton.classList.remove('active');
    sortToursAscendingButtons.classList.add('active');
renderTours(JSON.parse(hotToursJSON), "ascending");
};

function sortToursDescending() {
    sortToursDescendingButton.classList.add('active');
    sortToursAscendingButtons.classList.remove('active');
renderTours(JSON.parse(hotToursJSON), "descending");
};