/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
// const followersArray = [
//   {
//     avatar_url: "https://avatars3.githubusercontent.com/u/4186993?v=4",
//     bio: "requirements => value;",
//     blog: "",
//     company: "@LambdaSchool ",
//     created_at: "2013-04-18T02:37:15Z",
//     email: null,
//     events_url: "https://api.github.com/users/luishrd/events{/privacy}",
//     followers: 177,
//     followers_url: "https://api.github.com/users/luishrd/followers",
//     following: 7,
//     following_url: "https://api.github.com/users/luishrd/following{/other_user}",
//     gists_url: "https://api.github.com/users/luishrd/gists{/gist_id}",
//     gravatar_id: "",
//     hireable: true,
//     html_url: "https://github.com/luishrd",
//     id: 4186993,
//     location: "Provo, UT",
//     login: "luishrd",
//     name: "Luis Hernandez",
//     node_id: "MDQ6VXNlcjQxODY5OTM=",
//     organizations_url: "https://api.github.com/users/luishrd/orgs",
//     public_gists: 16,
//     public_repos: 3,
//     received_events_url: "https://api.github.com/users/luishrd/received_events",
//     repos_url: "https://api.github.com/users/luishrd/repos",
//     site_admin: false,
//     starred_url: "https://api.github.com/users/luishrd/starred{/owner}{/repo}",
//     subscriptions_url: "https://api.github.com/users/luishrd/subscriptions",
//     twitter_username: null,
//     type: "User",
//     updated_at: "2020-10-06T19:32:30Z",
//     url: "https://api.github.com/users/luishrd"
//   },
//   {
//     avatar_url: "https://avatars3.githubusercontent.com/u/4186993?v=4",
//     bio: "requirements => value;",
//     blog: "",
//     company: "@LambdaSchool ",
//     created_at: "2013-04-18T02:37:15Z",
//     email: null,
//     events_url: "https://api.github.com/users/luishrd/events{/privacy}",
//     followers: 177,
//     followers_url: "https://api.github.com/users/luishrd/followers",
//     following: 7,
//     following_url: "https://api.github.com/users/luishrd/following{/other_user}",
//     gists_url: "https://api.github.com/users/luishrd/gists{/gist_id}",
//     gravatar_id: "",
//     hireable: true,
//     html_url: "https://github.com/luishrd",
//     id: 4186993,
//     location: "Provo, UT",
//     login: "luishrd",
//     name: "Luis Hernandez",
//     node_id: "MDQ6VXNlcjQxODY5OTM=",
//     organizations_url: "https://api.github.com/users/luishrd/orgs",
//     public_gists: 16,
//     public_repos: 3,
//     received_events_url: "https://api.github.com/users/luishrd/received_events",
//     repos_url: "https://api.github.com/users/luishrd/repos",
//     site_admin: false,
//     starred_url: "https://api.github.com/users/luishrd/starred{/owner}{/repo}",
//     subscriptions_url: "https://api.github.com/users/luishrd/subscriptions",
//     twitter_username: null,
//     type: "User",
//     updated_at: "2020-10-06T19:32:30Z",
//     url: "https://api.github.com/users/luishrd"
//   }
// ];

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

const cards = document.querySelector('.cards');

const followersArray = [
  "greysonhamilton",
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"];

// followersArray.forEach(login => {

//   axios.get(`https://api.github.com/users/${login}`)

//   .then(info => {

//       console.log(info);
//       cards.appendChild(cardMaker(info.data));

//     })

//   .catch((err) => {

//     alert("This is not the code you're looking for.", err);

//   });

// });
// Note: The forEach method can cause errors when using axios request calls. The 'for' loop, however, seems to work great. As shown below.

  for (let i = 0; i < followersArray.length; i++) {
    
    axios.get(`https://api.github.com/users/${followersArray[i]}`)
  
    .then(info => {
  
        console.log(info);
        cards.appendChild(cardMaker(info.data));
  
      })
  
    .catch((err) => {
  
      alert("This is not the code you're looking for.", err);
  
    });
  
  };

// followersArray.forEach(login => {
//   cards.appendChild(cardMaker(login));
// });

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
  const a = document.createElement('a');
  div.classList.add('card');
  div2.classList.add('card-info');
  h3.classList.add('name');
  p1.classList.add('username');
  div.appendChild(img);
  div.appendChild(div2);
  div2.appendChild(h3);
  div2.appendChild(p1);
  div2.appendChild(p2);
  div2.appendChild(p3);
  p3.appendChild(a);
  div2.appendChild(p4);
  div2.appendChild(p5);
  div2.appendChild(p6);
  img.src = `${info.avatar_url}`;
  // still an issue with the anchor tag not placing within the p3. anchor tag will place within div2 after p3, when line 196 is ammended.
  a.href = `${info.html_url}`;
  a.textContent = `${info.html_url}`;
  h3.textContent = info.name;
  p1.textContent = info.login;
  p2.textContent = `Location: ${info.location}`;
  p3.textContent = `Profile: `;
  p4.textContent = `Followers: ${info.followers_url.length}`;
  p5.textContent = `Following: ${info.following_url.length}`;
  p6.textContent = `Bio: ${info.bio}`;

  return div;

}