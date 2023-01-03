//song list
let All_song = [{
    name: "Enchanted",
    path: "Enchanted.mp3",
    img: "enchanted.gif",
    singer: "Taylor Swift"
  },
  {
    name: "Ghost",
    path: "Ghost.mp3",
    img: "ghost.gif",
    singer: "Justin Bieber"
  },
  {
    name: "Payphone",
    path: "Payphone.mp3",
    img: "payphone.gif",
    singer: "Maroon 5"
  },
  {
    name: "Atlantis",
    path: "Atlantis.mp3",
    img: "atlantis.gif",
    singer: "Seafret"
  },
  {
    name: "Back To December",
    path: "Backtodecember.mp3",
    img: "backtodecember.gif",
    singer: "Tailor Swift"
  },
  {
    name: "Night Changes",
    path: "Nightchanges.mp3",
    img: "nightchanges.gif",
    singer: "One Direction"
  },
  {
    name: "Bulong",
    path: "Bulong.mp3",
    img: "bulong.gif",
    singer: "December Avenue"
  },
  {
    name: "Beautiful In White",
    path: "BeautifulWhite.mp3",
    img: "BeautifulWhite.gif",
    singer: "Shane Filan"
  },
  {
    name: "Gorgeous",
    path: "Gorgeous.mp3",
    img: "Gorgeous.gif",
    singer: "Tailor Swift"
  },
  {
    name: "Love Story",
    path: "Lovestory.mp3",
    img: "Lovestory.gif",
    singer: "Tailor Swift"
  },
  {
    name: "She Will Be Loved",
    path: "Shewillbeloved.mp3",
    img: "Shewillbeloved.gif",
    singer: "Tailor Swift"
  },
  {
    name: "Stuck In The Moment",
    path: "Stuckinthemoment.mp3",
    img: "Stuckinthemoment.gif",
    singer: "Justin Bieber"
  },
  {
    name: "Style",
    path: "Style.mp3",
    img: "Style.gif",
    singer: "Tailor Swift"
  },
  {
    name: "Eenie Meenie",
    path: "Typegirl.mp3",
    img: "Typegirl.gif",
    singer: "Sean Kingston, Justin Bieber"
  },
  {
    name: "Until I Found You",
    path: "Untilifoundyou.mp3",
    img: "Untilifoundyou.gif",
    singer: "Stephen Sanchez"
  },
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
        <p id="title">${All_song[i].name}</p>
        <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/