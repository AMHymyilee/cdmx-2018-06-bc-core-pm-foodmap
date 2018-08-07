var config = {
    apiKey: "AIzaSyCiLDBi-b0s3qQ7StQwIpepNwyEX65LHyo",
    authDomain: "affamato-project.firebaseapp.com",
    databaseURL: "https://affamato-project.firebaseio.com",
    projectId: "affamato-project",
    storageBucket: "affamato-project.appspot.com",
    messagingSenderId: "371498322149"
};
firebase.initializeApp(config);
let db = firebase.firestore();

window.makeModal = (restaurantID) => {
    db.collection('places').doc(restaurantID).get()
        .then(result => {
            swal({
                title: `<h5><strong>${result.data().name}</strong></h5>`,
                type: 'info',
                html: `<p class="small-font"><i class="fas fa-dollar-sign"></i> ${result.data().price}</p>
                <p><i class="fas fa-map-marker-alt"></i>${result.data().address}</p>
                <p class="small-font"><i class="fas fa-phone"></i> ${result.data().phone}</p>`,
                background: 'url(../css/Sources/food-menu.jpg)',
                showCloseButton: true,
                focusConfirm: false,
                width: 400,
                padding: '2.25em',
                confirmButtonText: '<span>¡Ordena ahora! <i class="fas fa-phone-volume"></i></span>',
                confirmButtonAriaLabel: 'Thumbs up, great!',
            });
        });
}




// window.filterRestaurantsbyName = (searchWord) => {
//     searchWord.toUpperCase();
//     let searchResult = [];
//     searchWord.forEach(clues => {

//         if (clues.campus === search) {
//             searchResult.push(clues);
//         }
//     });
//     return searchResult;
// };

window.getRating = (restaurantRate) => {
    let result = "";
    if (result === 'Aceptable') {
        result += `<i class="fas fa-crown"></i>
        <i class="fas fa-crown"></i>
        <i class="fas fa-crhhhhown"></i>`
    }
    if (result === 'Bueno') {
        result += `<i class="fas fa-crown"></i>
        <i class="fas fa-crown"></i>
        <i class="fas fa-crown"></i>
        <i class="fas fa-crown"></i>`
    }
    if (result === 'Excelente') {
        result += `<i class="fas fa-crown"></i>
        <i class="fas fa-crown"></i>
        <i class="fas fa-crown"></i>
        <i class="fas fa-crown"></i>
        <i class="fas fa-crown"></i>`
    }
    return result;
};

let restaurantsArray = ""
window.getDataRestaurants = () => {
    db.collection('places').orderBy('ranking', 'asc').get()
        .then(result => {
            result.forEach(allrestaurants => {
                let rating = getRating(allrestaurants.data().rate);
                restaurantsArray += `<div class="col-md-4 col-sm-12 my-4">
                <figure class="snip1139">
                    <blockquote> <h5>${allrestaurants.data().name}</h5>
                        <div class="arrow"></div>
                    </blockquote>
                    <img src="${allrestaurants.data().url}"
                    alt="sample3" />
                    <div class="author">
                            <span>${rating}</span> <br/>
                        <button onclick="makeModal"><i class="fas fa-info-circle"></i></button>
                    </div>
                    <div>
                    </div>
                </figure>
            </div>`
                document.getElementById('restaurants-cards').innerHTML = restaurantsArray;
            });
        });
};
getDataRestaurants();