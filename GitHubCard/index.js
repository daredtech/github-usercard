/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

//to ask a server for information using axios
axios.get('https://api.github.com/users/daredtech')
  //if successful
  .then(data => {console.log(data); createCard(data.data) ;})
  //if unsuccessful
  .catch(error => {console.log('Unable to complete the GET request')})

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 3: Create a function that accepts a single object as its only argument, 
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/


const cards = document.querySelector('.cards');
cards.classList.add('cards');

function createCard(dataCollection){
  //define the elements
  const card = document.createElement('div');
  const cardImage = document.createElement('img');
  const cardInfo = document.createElement('div');
  const cardName = document.createElement('h3');
  const cardUserName = document.createElement('p');
  const cardLocaton = document.createElement('p');
  const cardProfile = document.createElement('p');
  const cardProfileLink = document.createElement('a');
  const cardFollowers = document.createElement('p');
  const cardFollowing = document.createElement('p');
  const cardBio = document.createElement('p');

  //setup the structure
  cards.appendChild(card);
  card.appendChild(cardImage);
  card.appendChild(cardInfo);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(cardUserName);
  cardInfo.appendChild(cardLocaton);
  cardInfo.appendChild(cardProfile);
  cardInfo.appendChild(cardProfileLink);
  cardInfo.appendChild(cardFollowers);
  cardInfo.appendChild(cardFollowing);
  cardInfo.appendChild(cardBio);
  
  //setup the styling
  card.classList.add('card');
  cardImage.classList.add('img');
  cardName.classList.add('name');
  cardUserName.classList.add('username');

  //set the content
  cardName.textContent = dataCollection.name;
  cardUserName.textContent = dataCollection.login;
  cardLocaton.textContent = ("Location: " + dataCollection.location);
  cardProfileLink.textContent = ("Profile: " + dataCollection.html_url);
  cardFollowers.textContent = ("Followers: " + dataCollection.followers);
  cardFollowing.textContent = ("Following: " + dataCollection.following);
  cardBio.textContent = ("Bio: " + dataCollection.bio);
  cardImage.src = (dataCollection.avatar_url);

return card;
}


/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
const followersArray = [];






