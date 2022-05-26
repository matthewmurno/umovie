/* eslint-disable */

export default {
    currentUserId: "Matt",
    users: [{
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
        top: [{
            tvshow: "tv-show3",
            music: "music1",
        }, ],
        highest_rated: ["movie2", "tv-show2", "tv-show1", "music1"],
        reviewColor: "green",
        profile_picture: "/assets/matt_profile.jpg",
    },
    {
        id: "Brian",
        name: "Brian Weller",
        email: "wellerb@bc.edu",
        services: ["Apple_Music", "Netflix", "Apple_Podcasts", "Spotify"],
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
      },],
    watchlist: [{
            userId: "Matt",
            mediaId: "tv-show1",
            name: "Better Call Saul",
            type: "Show",
            location_image: [
                "/assets/Netflix.svg",
            ],
            datetime: "2022-04-22T22:45:42Z",
        },
        {
            userId: "Matt",
            mediaId: "movie2",
            name: "Joker",
            type: "Movie",
            location_image: [
                "/assets/Netflix.svg",
                "/assets/hulu.svg",
                "/assets/hbo-max.svg",
            ],
            datetime: "2022-04-24T22:50:42Z",
        },
    ],
    reviews: [{
            mediaId: "tv-show1",
            user: "Brian",
            text: "I love this show. It's always very entertaining.",
        },
        {
            mediaId: "tv-show1",
            user: "Matt",
            text: "This is my favorite show!"
        },
        {
            mediaId: "tv-show2",
            user: "Brian",
            text: "This is by far my favorite show."
        },
        {
            mediaId: "tv-show2",
            user: "Matt",
            text: "If you haven't seen it, watch El Camino!"
        },
        {
            mediaId: "tv-show2",
            user: "Sam",
            text: "Best TV show of all time."
        },
        {
            mediaId: "tv-show3",
            user: "Matt",
            text: "There are so many episodes, but its worth the watch"
        },
        {
            mediaId: "movie1",
            user: "Brian",
            text: "Honestly, I didn't love it. Definitely think Breaking Bad was better quality.",
        },
        {
            mediaId: "movie1",
            user: "Matt",
            text: "This is a great continuation of my favorite series.",
        },
        {
            mediaId: "movie1",
            user: "Sam",
            text: "I thought this was great! Definitely recommend it to anyone looking to continue BB.",
        },
        {
            mediaId: "movie2",
            user: "Brian",
            text: "It was alright. I was a little creeped out.",
        },

        {
            mediaId: "movie2",
            user: "Sam",
            text: "This was my least favorite Batman / Batman spin off.",
        },
        {
            mediaId: "movie3",
            user: "Brian",
            text: "It was alright. I was a little creeped out.",
        },

        {
            mediaId: "movie3",
            user: "Matt",
            text: "This has to be my favorite Harry Potter movie, the ending was so good!",
        },
        {
            mediaId: "movie4",
            user: "Matt",
            text: "COME ON AND SLAM, AND WELCOME TO THE JAM",
        },
        {
            mediaId: "podcast1",
            user: "Brian",
            text: "This podcast is super thoughtful. Malcolm Gladwell is fantastic.",
        },
        {
            mediaId: "podcast1",
            user: "Sam",
            text: "Usually I hate podcasts, but this one is so so good.",
        },
        {
            mediaId: "music1",
            user: "Brian",
            text: "honestly, kinda thought this was overhyped.",
        },
        {
            mediaId: "music1",
            user: "Matt",
            text: "Love the sample, but I don't see myself listening to this again.",
        },
    ],
    tvshows: [{
            mediaId: "tv-show1",
            name: "Better Call Saul",
            type: "Show",
            creator: "Vince Gilligan",
            img: "/assets/better call saul.jpeg",
            location: "Netflix",
            location_image: [
                "/assets/Netflix.svg",
            ],
        },
        {
            mediaId: "tv-show2",
            name: "Breaking Bad",
            type: "Show",
            creator: "Vince Gilligan",
            img: "/assets/breaking bad.jpeg",
            location: "Netflix",
            location_image: [
                "/assets/Netflix.svg",
            ],
        },
        {
            mediaId: "tv-show3",
            name: "One Piece",
            type: "Show",
            creator: "Hirohiko Kamisaka",
            img: "/assets/onepiece.jpg",
            location: "Cruncy_Roll",
            location_image: [
                "/assets/crunchyroll.svg",
            ],
        },
    ],
    movies: [{
            mediaId: "movie1",
            name: "El Camino",
            type: "Movie",
            creator: "Vince Gilligan",
            img: "/assets/el camino.jpeg",
            location: "Netflix",
            location_image: [
                "/assets/Netflix.svg",
            ],
        },
        {
            mediaId: "movie2",
            name: "The Joker",
            type: "Movie",
            creator: "Todd Phillips",
            img: "/assets/joker.jpeg",
            location: ["Netflix", "Hulu", "HBO_Max"],
            location_image: [
                "/assets/Netflix.svg",
                "/assets/hulu.svg",
                "/assets/hbo-max.svg",
            ],
        },
        {
            mediaId: "movie3",
            name: "Harry Potter and The Half-Blood Prince",
            type: "Movie",
            creator: "David Yates",
            img: "/assets/Half_blood_Prince.jpg",
            location: ["HBO_Max"],
            location_image: [
                "/assets/hbo-max.svg",
            ],
        },
        {
            mediaId: "movie4",
            name: "Space Jam",
            type: "Movie",
            creator: "Joe Pytka",
            img: "/assets/Space_Jam.jpg",
            location: ["HBO_Max"],
            location_image: [
                "/assets/hbo-max.svg",
            ],
        },
    ],
    podcasts: [{
        mediaId: "podcast1",
        name: "Revisionist History",
        mediaType: "Podcast",
        type: "Podcast",
        creator: "Malcolm Gladwell",
        img: "/assets/revisionist history.jpeg",
        location: ["Spotify", "Apple Podcasts"],
        location_image: [
            "/assets/spotify.svg",
            "/assets/podcasts.svg",
        ],
    }, ],
    music: [{
        mediaId: "music1",
        name: "First Class",
        mediaType: "Music",
        type: "Song",
        creator: "Jack Harlow",
        img: "/assets/come-home-the-kids-miss-you.jpeg",
        location: ["Spotify", "Apple Music"],
        location_image: [
            "/assets/spotify.svg",
            "/assets/music.svg",
        ],
    }, ],
    friends: [
        {userId: "Matt", 
        friendId: "Brian"}, 
        {userId: "Matt", 
        friendId: "Sam"}, 
        {userId: "Brian", 
        friendId: "Matt"}, 
        {userId: "Brian", 
        friendId: "Sam"}, 
    ]
}