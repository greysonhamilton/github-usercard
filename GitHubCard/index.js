/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const cards = document.querySelector('.cards');

followersArray.forEach((login) => {

  axios.get(`https://api.github.com/users/${login}`)

  .then ((info) => {

    cards.appendChild(cardMaker(info))

  })

  .catch((err) => {

    alert('Please check your link.', err);

  });

}
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  "greysonhamilton",
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"];


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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
function cardMaker(info) {
  const div = document.createElement('div');
  const img = document.createElement('img');
  const div2 = document.createElement('div');
  const h3 = document.createElement('h3');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  const p4 = document.createElement('p');
  const p5 = document.createElement('p');
  const p6 = document.createElement('p');
  const anchor = document.createElement('a');
  div.classList.add('card');
  div2.classList.add('card-info');
  h3.classList.add('name');
  p1.classList.add('username');
  div.appendChild('img');
  div.appendChild('div2');
  div2.appendChild('h3');
  div2.appendChild('p1');
  div2.appendChild('p2');
  div2.appendChild('p3');
  p3.appendChild('a');
  div2.appendChild('p4');
  div2.appendChild('p5');
  div2.appendChild('p6');
  img.setAttribute = ('src', info.avatar_url);
  anchor.setAttribute = ('href', info.html_url);
  h3.textContent = info.name;
  p1.textContent = info.login;
  p2.textContent = 'Location: info.location';
  p3.textContent = 'Profile: ';
  anchor.textContent = info.html_url;
  p4.textContent = 'Followers: info.followers_url.length';
  p5.textContent = 'Following: info.following_url.length';
  p6.textContent = 'Bio: info.bio';
  anchor.href = anchor.textContent = info.html_url;

  return div; 
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
