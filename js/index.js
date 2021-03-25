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


function renderTours(tours){
    const toursContainer = document.querySelector('.hot-tours');
    for(const tour of tours)
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