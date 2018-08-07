// document.getElementById('search-button').addEventListener('click', event => {
//     event.preventDefault();
//     const searchWord = document.getElementById('name-to-search').value;
//     if (name !== '' && name !== ' ') {
//         const searchResult = filterRestaurants(searchWord);
//         let result = '';
//         if (searchResult.length === 0) {
//             document.getElementById('no-result').innerHTML = '<p> El termino que esta buscando no existe </p>';
//         } else {
//             searchResult.forEach((element, i) => {
//                 result += `<div class="col-md-4 col-sm-12 my-4">
//                 <figure class="snip1139">
//                     <blockquote> <h5>${allrestaurants.data().name}</h5>
//                         <div class="arrow"></div>
//                     </blockquote>
//                     <img src="${allrestaurants.data().url}"
//                     alt="sample3" />
//                     <div class="author">
//                             <span></span> <br/>
//                         <button><i class="fas fa-plus"></i></button>
//                     </div>
//                     <div>
                        
//                     </div>
//                 </figure>
//             </div>`;
//             });
//             document.getElementById('no-result').innerHTML = '';
//             document.getElementById('restaurants-cardsbody').innerHTML = result;
//         }
//     }
// });