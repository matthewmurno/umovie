export default {
    currentUserId: "Matt",
    users: [
      {
        id: "Matt",
        name: "Matt Murno",
        email: "murno@bc.edu",
        services: [
          "Apple_Music",
          "Netflix",
          "Hulu",
          "Disney",
          "Apple_Podcasts",
          "Spotify",
        ],
        friends: ["Brian", "Sam"],
        top: [
          {
            tvshow: "tv-show3",
            music: "music1",
          },
        ],
        highest_rated: ["movie2", "tv-show2", "tv-show1", "music1"],
        reviewColor: "green",
        profile_picture:
          "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/matt_profile.jpg?v=1650862097884",
      },
      {
        id: "Brian",
        name: "Brian Weller",
        email: "wellerb@bc.edu",
        services: ["Apple_Music", "Netflix", "Apple_Podcasts", "Spotify"],
        friends: ["Matt", "Sam"],
        top: [
          {
            tvshow: "tv-show2",
            music: "music3",
          },
        ],
        highest_rated: ["movie2", "tv-show2", "tv-show1", "music1"],
        reviewColor: "blue",
        profile_picture:
          "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/Screen%20Shot%202022-04-24%20at%209.11.46%20PM.png?v=1650849121507",
      },
      {
        id: "Sam",
        name: "Sam Naples",
        email: "napless@bc.edu",
        services: ["Apple_Music", "Netflix", "Spotify"],
        friends: ["Matt", "Brian"],
        top: [
          {
            tvshow: "tv-show1",
            music: "music2",
          },
        ],
        highest_rated: ["movie2", "tv-show2", "tv-show1", "music1"],
        reviewColor: "purple",
        profile_picture:
          "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/A6F96EBA-DC22-4C83-B0AA-B2085F8C9AC7.jpg?v=1650922789532",
      },
    ],
    watchlist: [
      {
        userId: "Matt",
        mediaId: "tv-show1",
        name: "Better Call Saul",
        type: "Show",
        location_image: [
          "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/netflix.svg?v=1650431137374",
        ],
        datetime: "2022-04-22T22:45:42Z",
      },
      {
        userId: "Matt",
        mediaId: "movie2",
        name: "Joker",
        type: "Movie",
        location_image: [
          "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/netflix.svg?v=1650431137374",
          "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/hulu.svg?v=1650431318864",
          "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/hbo-max.svg?v=1650432274304",
        ],
        datetime: "2022-04-24T22:50:42Z",
      },{
        userId: "Brian",
        mediaId: "movie2",
        name: "Joker",
        type: "Movie",
        location_image: [
          "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/netflix.svg?v=1650431137374",
          "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/hulu.svg?v=1650431318864",
          "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/hbo-max.svg?v=1650432274304",
        ],
        datetime: "2022-04-24T22:50:42Z",
      },
      {
        userId: "Sam",
        mediaId: "movie2",
        name: "Joker",
        type: "Movie",
        location_image: [
          "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/netflix.svg?v=1650431137374",
          "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/hulu.svg?v=1650431318864",
          "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/hbo-max.svg?v=1650432274304",
        ],
        datetime: "2022-04-24T22:50:42Z",
      },
    ],
    playlist: [
      {
        userId: "Matt",
        mediaId: "music3",
        name: "Better Call Saul",
        type: "Show",
        location_image: [
          "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/netflix.svg?v=1650431137374",
        ],
        datetime: "2022-04-22T22:45:42Z",
      },
    ],
    media: [
      {
        tvshows: [
          {
            mediaId: "tv-show1",
            name: "Better Call Saul",
            type: "Show",
            creator: "Vince Gilligan",
            img: "public\assets\better call saul.jpeg",
            location: "Netflix",
            location_image: [
              "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/netflix.svg?v=1650431137374",
            ],
            rating:
              "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/star-4-5.png?v=1650502232033",
            reviews: [
              {
                user: "Brian",
                text: "I love this show. It's always very entertaining.",
              },
              { user: "Matt", text: "This is my favorite show!" },
              
            ],
          },
          {
            mediaId: "tv-show2",
            name: "Breaking Bad",
            type: "Show",
            creator: "Vince Gilligan",
            img: "public\assets\breaking bad.jpeg",
            location: "Netflix",
            location_image: [
              "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/netflix.svg?v=1650431137374",
            ],
            rating:
              "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/star-4-5.png?v=1650502232033",
            reviews: [
              { user: "Brian", text: "This is by far my favorite show." },
              { user: "Matt", text: "If you haven't seen it, watch El Camino!" },
              { user: "Sam", text: "Best TV show of all time." },
            ],
          },
          {
            mediaId: "tv-show3",
            name: "One Piece",
            type: "Show",
            creator: "Hirohiko Kamisaka",
            img: "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/onepiece.jpg?v=1650935867999",
            location: "Cruncy_Roll",
            location_image: [
              "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/crunchyroll.svg?v=1650431296839",
            ],
            rating:
              "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/star-4-5.png?v=1650502232033",
            reviews: [
              { user: "Matt", text: "There are so many episodes, but its worth the watch" },
            ],
          },
        ],
        movies: [
          {
            mediaId: "movie1",
            name: "El Camino",
            type: "Movie",
            creator: "Vince Gilligan",
            img: "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/el%20camino.jpeg?v=1650467917224",
            location: "Netflix",
            location_image: [
              "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/netflix.svg?v=1650431137374",
            ],
            rating:
              "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/3.5-Stars.png?v=1650491853672",
            reviews: [
              {
                user: "Brian",
                text: "Honestly, I didn't love it. Definitely think Breaking Bad was better quality.",
              },
              {
                user: "Matt",
                text: "This is a great continuation of my favorite series.",
              },
              {
                user: "Sam",
                text: "I thought this was great! Definitely recommend it to anyone looking to continue BB.",
              },
            ],
          },
          {
            mediaId: "movie2",
            name: "The Joker",
            type: "Movie",
            creator: "Todd Phillips",
            img: "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/D3KNa87XgAY4tkO.jpeg?v=1650484251658",
            location: ["Netflix", "Hulu", "HBO_Max"],
            location_image: [
              "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/netflix.svg?v=1650431137374",
              "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/hulu.svg?v=1650431318864",
              "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/hbo-max.svg?v=1650432274304",
            ],
            rating:
              "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/3.5-Stars.png?v=1650491853672",
            reviews: [
              {
                user: "Brian",
                text: "It was alright. I was a little creeped out.",
              },
             
              {
                user: "Sam",
                text: "This was my least favorite Batman / Batman spin off.",
              },
            ],
          },
          {
            mediaId: "movie3",
            name: "Harry Potter and The Half-Blood Prince",
            type: "Movie",
            creator: "David Yates",
            img: "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/Half_blood_Prince.jpg?v=1650919702688",
            location: ["HBO_Max"],
            location_image: [
              "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/hbo-max.svg?v=1650432274304",
            ],
            rating:
              "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/3.5-Stars.png?v=1650491853672",
            reviews: [
              {
                user: "Brian",
                text: "It was alright. I was a little creeped out.",
              },
             
              {
                user: "Matt",
                text: "This has to be my favorite Harry Potter movie, the ending was so good!",
              },
            ],
          },
          {
            mediaId: "movie4",
            name: "Space Jam",
            type: "Movie",
            creator: "Joe Pytka",
            img: "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/Space_Jam.jpg?v=1650932158803",
            location: ["HBO_Max"],
            location_image: [
              "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/hbo-max.svg?v=1650432274304",
            ],
            rating:
              "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/3.5-Stars.png?v=1650491853672",
            reviews: [
              {
                user: "Matt",
                text: "COME ON AND SLAM, AND WELCOME TO THE JAM",
              },
            ],
          },
        ],
        podcasts: [
          {
            mediaId: "podcast1",
            name: "Revisionist History",
            mediaType: "Podcast",
            type: "Podcast",
            creator: "Malcolm Gladwell",
            img: "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/revisionist history.jpeg?v=1650475570307",
            location: ["Spotify", "Apple Podcasts"],
            location_image: [
              "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/spotify.svg?v=1650431133225",
              "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/podcasts.svg?v=1650432242979",
            ],
            rating:
              "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/star-4-5.png?v=1650502232033",
            reviews: [
              {
                user: "Brian",
                text: "This podcast is super thoughtful. Malcolm Gladwell is fantastic.",
              },
              
              {
                user: "Sam",
                text: "Usually I hate podcasts, but this one is so so good.",
              },
            ],
          },
        ],
        music: [
          {
            mediaId: "music1",
            name: "First Class",
            mediaType: "Music",
            type: "Song",
            creator: "Jack Harlow",
            img: "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/jack-harlow-come-home-the-kids-miss-you-1649344971.jpeg?v=1650415601876",
            location: ["Spotify", "Apple Music"],
            location_image: [
              "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/spotify.svg?v=1650431133225",
              "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/music.svg?v=1650431143121",
            ],
            rating:
              "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/star-4-5.png?v=1650502232033",
            reviews: [
              {
                user: "Brian",
                text: "honestly, kinda thought this was overhyped.",
              },
              {
                user: "Matt",
                text: "Love the sample, but I don't see myself listening to this again.",
              },
              
            ],
          },
          {
            mediaId: "music2",
            name: "Midnight Train to Memphis",
            mediaType: "Music",
            type: "Song",
            creator: "Chris Stapleton",
            img: "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/71ltHFkn04L._SS500_.jpg?v=1650482945304",
            location: ["Spotify", "Apple Music"],
            location_image: [
              "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/spotify.svg?v=1650431133225",
              "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/music.svg?v=1650431143121",
            ],
            rating:
              "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/star-4-5.png?v=1650502232033",
            reviews: [
              {
                user: "Brian",
                text: "Stapleton might be the second coming of Jesus.",
              },
              { user: "Matt", text: "I just don't love country music." },
              
            ],
          },
          {
            mediaId: "music3",
            name: "Stronger",
            mediaType: "Music",
            type: "Song",
            creator: "Kanye West",
            img: "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/R-1066601-1632567712-1586.jpeg?v=1650502867071",
            location: ["Spotify", "Apple Music"],
            location_image: [
              "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/spotify.svg?v=1650431133225",
              "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/music.svg?v=1650431143121",
            ],
            rating:
              "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/star-4-5.png?v=1650502232033",
            reviews: [
              
              { user: "Matt", text: "It's too bad Kanye is losing his mind!" },
              {
                user: "Sam",
                text: "A classic. Reminds me of the good old days.",
              },
            ],
          },
          //{
            //mediaId: "messages",
            //img: "https://cdn.glitch.global/22f5dd42-08f1-415b-8c2b-977239945c6b/download.png?v=1650938018902",
          //}
        ],
      },
    ],
  };
  