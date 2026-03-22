const upcoming = [
     {
    id: 15,
    title: "Petta",
    language: "Tamil",
    genre: ["Action", "Drama"],
    duration: "2h 52m",
    rating: 7.2,
    releaseDate: "2019-01-10",
    price: 120,
    movieImage: "https://static.toiimg.com/thumb/imgsize-23456,msid-66082881,width-600,resizemode-4/66082881.jpg",
    description: "A hostel warden with a mysterious past takes on ruthless gangsters.",
    trailer: "https://www.youtube.com/embed/FCB0ZfQ9Rzs?si=mPYQhFaVe2Ts3adT",

    hero: { name: "Rajinikanth", role: "Kaali", image: "https://tse1.mm.bing.net/th/id/OIP.MFUocN7g99Xnbsc-lPrsMwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
    heroine: { name: "Simran", role: "Mangalam", image: "https://m.media-amazon.com/images/M/MV5BM2ZiMzA4YTEtZmUzNi00ZjA0LWI0ZjQtYjY2MTJlZDRmNzA5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },

    sideActors: [
      { name: "Vijay Sethupathi", role: "Villain", image: "https://tse4.mm.bing.net/th/id/OIP.fA2Y_0Zbzci3PcDUW9zxEgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name: "Trisha", role: "Supporting Role", image: "https://telugubullet.com/wp-content/uploads/2023/12/Trisha-Krishnan-6-820x1024.webp" }
    ]
  },{
    id: 12,
    title: "Viswasam",
    language: "Tamil",
    genre: ["Action", "Drama"],
    duration: "2h 32m",
    rating: 6.5,
    releaseDate: "2019-01-10",
    price: 110,
    movieImage: "https://cdn.chandigarhfirst.com/wp-content/uploads/2021/07/viswasam-et00075355-22-10-2020-04-42-34.jpg",
    description: "A village man tries to reconnect with his estranged wife and daughter.",
    trailer: "https://www.youtube.com/embed/TiDyv53adt0?si=0xwfVqi1tiZ7a427",

    hero: { name: "Ajith Kumar", role: "Thooku Durai", image: "https://static.toiimg.com/photo/88679810.cms" },
    heroine: { name: "Nayanthara", role: "Niranjana", image: "https://th.bing.com/th/id/R.42625f841408c75ad8f3f686170986e6?rik=Y1tr7%2brv%2fJ2wxQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f_Lb7wWaGboOw%2fTVJvIkZo1UI%2fAAAAAAAAE0M%2fPu65lqpSaTM%2fs1600%2fnayanthara_cute_saree_photos_stills_03.JPG&ehk=YRLucfV63vWzCifbs42Os5Nr6rHdbQsY%2bEsblKcWyNo%3d&risl=&pid=ImgRaw&r=0" },

    sideActors: [
      { name: "Jagapathi Babu", role: "Villain", image: "https://tse2.mm.bing.net/th/id/OIP.EaJAv_xbZZJLL1N8RwID7wHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name: "Vivek", role: "Supporting Role", image: "https://wallpapercave.com/wp/wp8964198.jpg" }
    ]
  }, {
    id: 2,
    title: "Vikram",
    language: "Tamil",
    genre: ["Action", "Thriller"],
    duration: "2h 54m",
    rating: 8.6,
    releaseDate: "2022-06-03",
    price: 160,
    movieImage: "https://upload.wikimedia.org/wikipedia/en/5/59/Vikram_soundtrack.jpg",
    description: "A retired agent uncovers a drug syndicate.",
    trailer: "https://www.youtube.com/embed/Po3jStA673E?si=oPq58PhAGmdj8wOQ" ,

    hero: { name: "Kamal Haasan", role: "Vikram", image: "https://cdn.siasat.com/wp-content/uploads/2022/05/New-Project-1.jpg" },
    heroine: { name: "Gayathrie", role: "Support", image: "https://tse1.mm.bing.net/th/id/OIP.g6NrJM5ctzQoGcAQTXcufQHaLH?rs=1&pid=ImgDetMain&o=7&rm=3" },

    sideActors: [
      { name: "Fahadh Faasil", role: "Amar", image: "https://tse3.mm.bing.net/th/id/OIP.V6xzxDLb3afMWVMYBg-ILwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name: "Vijay Sethupathi", role: "Santhanam", image: "https://tse4.mm.bing.net/th/id/OIP.yq_GgXu57nGRyohEkQ46DAHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name: "Narain", role: "Police", image: "https://1.bp.blogspot.com/-dk-9l3MdnOc/XGAFeSgLpQI/AAAAAAAAWcU/Xf4JfiIvfwAC-BO3EXD2psvXmC0DaBF_ACLcBGAs/s1600/Narain%2B%2528actor%2529%2Bgo%2Bprofile%2B1.jpg" },
      { name: "Kalidas Jayaram", role: "Support", image: "https://tse1.mm.bing.net/th/id/OIP.e4Nvw4qB5vaCTAPBXcq9qQHaLG?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name: "Chemban Vinod", role: "Villain Support", image: "https://tse1.explicit.bing.net/th/id/OIP.vkcUYd8B_miLSe_SGJeIgwHaFU?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name: "Swathishta", role: "Support", image: "https://tse1.explicit.bing.net/th/id/OIP.bc9ZYKWwSUWv-kfZR2rlfAHaIk?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name: "Jaffer Sadiq", role: "Gang Member", image: "https://tse2.mm.bing.net/th/id/OIP.J8CNFVF5JTZThMEcxaPauAHaIv?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name: "Arjun Das", role: "Voice Cameo", image: "https://tse3.mm.bing.net/th/id/OIP.a89cSOY_H6altZzb-haKYQHaI_?rs=1&pid=ImgDetMain&o=7&rm=3" }
    ]
  },{
    id: 11,
    title: "Beast",
    language: "Tamil",
    genre: ["Action", "Thriller"],
    duration: "2h 38m",
    rating: 5.2,
    releaseDate: "2022-04-13",
    price: 120,
    movieImage: "https://i.scdn.co/image/ab67616d0000b273013d4c16601d3664ade27872",
    description: "A former RAW agent must rescue people trapped inside a mall hijacked by terrorists.",
    trailer: "https://www.youtube.com/embed/0E1kVRRi6lk?si=P1fId4KSic_Za4So",

    hero: { name: "Vijay", role: "Veera Raghavan", image: "https://tse3.mm.bing.net/th/id/OIP.89l-mydMKr-jqmjopDe2XAHaJ3?rs=1&pid=ImgDetMain&o=7&rm=3" },
    heroine: { name: "Pooja Hegde", role: "Preethi", image: "https://e0.pxfuel.com/wallpapers/72/250/desktop-wallpaper-pooja-hegde-eye-beast.jpg" },

    sideActors: [
      { name: "Selvaraghavan", role: "Politician", image: "https://www.gethucinema.com/tmdb/iTEdyvN5XoB0fl6kMg0tChBY4Ml.jpg" },
      { name: "Yogi Babu", role: "Comedy Role", image: "https://tse4.mm.bing.net/th/id/OIP.6V_XBc1JMFyrPEYth_cGuAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" }
    ]
  }, {
    id: 16,
    title: "Love Today",
    language: "Tamil",
    genre: ["Romance", "Comedy"],
    duration: "2h 34m",
    rating: 8.0,
    releaseDate: "2022-11-04",
    price: 100,
    movieImage: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/love-today-et00345105-1668871564.jpg",
    description: "A couple exchange phones before marriage leading to unexpected truths.",
    trailer:"https://www.youtube.com/embed/FaQe8JFGdaM?si=m6wk4ir-i-FZHU69",

    hero: { name: "Pradeep Ranganathan", role: "Uthaman", image: "https://tse3.mm.bing.net/th/id/OIP.4WHgoML0ggKCrSZc6b_cigHaIj?rs=1&pid=ImgDetMain&o=7&rm=3" },
    heroine: { name: "Ivana", role: "Nikitha", image: "https://tse1.mm.bing.net/th/id/OIP.0m8VWYirslQTT-CE2NJDmwHaJP?rs=1&pid=ImgDetMain&o=7&rm=3" },

    sideActors: [
      { name: "Sathyaraj", role: "Father", image: "https://tse1.mm.bing.net/th/id/OIP.oPaXFu98j8Rnh22nQqcgmwHaKb?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name: "Yogi Babu", role: "Comedy", image: "https://th.bing.com/th/id/OIP.6V_XBc1JMFyrPEYth_cGuAHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" }
    ]
  }, {
    id: 22,
    title: "Thangalaan",
    language: "Tamil",
    genre: ["Historical", "Drama"],
    duration: "TBA",
    rating: 0,
    releaseDate: "2025-01-26",
    price: 0,
    movieImage: "https://tse2.mm.bing.net/th/id/OIP.b2dT3Ba9GwJtjRFUX3abpAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "A tribal leader fights against oppression in colonial India.",
    trailer: "https://www.youtube.com/embed/9KUOQvF25NI?si=4hwHMrAN1c6R6Ep5",

    hero: { name: "Vikram", role: "Lead Role", image: "https://wallpaperbat.com/img/37501284-vikram-hq-wallpaper-vikram.jpg" },
    heroine: { name: "Malavika Mohanan", role: "Lead Role", image: "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2022/11/13/Actress-malavika-mohanan-looks-phenomenal-as-she-releases-another-festive-look-on-her-Instagram-Gallery-1.jpeg?fit=1362%2C1600&quality=80&zoom=1&ssl=1?v=1668346951" },

    sideActors: [
      { name: "Parvathy", role: "Supporting Role", image: "https://content.tupaki.com/h-upload/2024/08/29/498289-dsgip16t.webp" }
    ]
  }, {
    id: 1,
    title: "Leo",
    language: "Tamil",
    genre: ["Action", "Thriller"],
    duration: "2h 44m",
    rating: 8.2,
    releaseDate: "2023-10-19",
    price: 150,
    movieImage: "https://assets.gadgets360cdn.com/pricee/assets/product/202303/Leo_1678967552.jpg",
    description: "A cafe owner hides a violent past.",
    trailer:"https://www.youtube.com/embed/Po3jStA673E?si=oPq58PhAGmdj8wOQ" ,

    hero: { name: "Vijay", role: "Parthiban / Leo", image: "https://th.bing.com/th/id/OIP.4Z1uBa2Vy3FylkWzlfUHMgHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" },
    heroine: { name: "Trisha", role: "Satya", image: "https://tse1.mm.bing.net/th/id/OIP.pBH-N11YMasYbmefxJpS_gHaEo?rs=1&pid=ImgDetMain&o=7&rm=3" },

    sideActors: [
      { name: "Sanjay Dutt", role: "Villain", image: "https://media.assettype.com/outlookindia/2025-01-06/ughlko40/1.png?w=1200&amp;ar=40:21&amp;auto=format%2Ccompress&amp;ogImage=true&amp;mode=crop&amp;enlarge=true&amp;overlay=false&amp;overlay_position=bottom&amp;overlay_width=100" },
      { name: "Arjun", role: "Antagonist", image: "https://th.bing.com/th/id/R.64eb2fed32ba32ccbc09bf435e7965c6?rik=gf5JZoNB68r%2fvA&riu=http%3a%2f%2fwww.behindwoods.com%2ftamil-actor%2farjun%2farjun-stills-photos-pictures-12.jpg&ehk=ngf70Vgd1zxWQ2Uy6uyd3fWVVu3dK9RfLorvUVyOfRw%3d&risl=&pid=ImgRaw&r=0" },
      { name: "Gautham Menon", role: "Police", image: "https://tse2.mm.bing.net/th/id/OIP.l-9AW-ilToD0WyOakadRawHaFc?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name: "Mysskin", role: "Villain Support", image: "https://tse1.mm.bing.net/th/id/OIP.MQyBaIRQyMRdYP_M1EqbCwHaGt?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name: "Mansoor Ali Khan", role: "Support", image: "https://images.indianexpress.com/2023/11/Mansoor-Ali-Khan-in-his-Instagram-post.jpg" },
   
    ]
  },{
    id: 2,
    title: "Vikram",
    language: "Tamil",
    genre: ["Action", "Thriller"],
    duration: "2h 54m",
    rating: 8.6,
    releaseDate: "2022-06-03",
    price: 160,
    movieImage: "https://upload.wikimedia.org/wikipedia/en/5/59/Vikram_soundtrack.jpg",
    description: "A retired agent uncovers a drug syndicate.",
    trailer: "https://www.youtube.com/embed/Po3jStA673E?si=oPq58PhAGmdj8wOQ" ,

    hero: { name: "Kamal Haasan", role: "Vikram", image: "https://cdn.siasat.com/wp-content/uploads/2022/05/New-Project-1.jpg" },
    heroine: { name: "Gayathrie", role: "Support", image: "https://tse1.mm.bing.net/th/id/OIP.g6NrJM5ctzQoGcAQTXcufQHaLH?rs=1&pid=ImgDetMain&o=7&rm=3" },

    sideActors: [
      { name: "Fahadh Faasil", role: "Amar", image: "https://tse3.mm.bing.net/th/id/OIP.V6xzxDLb3afMWVMYBg-ILwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name: "Vijay Sethupathi", role: "Santhanam", image: "https://tse4.mm.bing.net/th/id/OIP.yq_GgXu57nGRyohEkQ46DAHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name: "Narain", role: "Police", image: "https://1.bp.blogspot.com/-dk-9l3MdnOc/XGAFeSgLpQI/AAAAAAAAWcU/Xf4JfiIvfwAC-BO3EXD2psvXmC0DaBF_ACLcBGAs/s1600/Narain%2B%2528actor%2529%2Bgo%2Bprofile%2B1.jpg" },
      { name: "Kalidas Jayaram", role: "Support", image: "https://tse1.mm.bing.net/th/id/OIP.e4Nvw4qB5vaCTAPBXcq9qQHaLG?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name: "Chemban Vinod", role: "Villain Support", image: "https://tse1.explicit.bing.net/th/id/OIP.vkcUYd8B_miLSe_SGJeIgwHaFU?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name: "Swathishta", role: "Support", image: "https://tse1.explicit.bing.net/th/id/OIP.bc9ZYKWwSUWv-kfZR2rlfAHaIk?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name: "Jaffer Sadiq", role: "Gang Member", image: "https://tse2.mm.bing.net/th/id/OIP.J8CNFVF5JTZThMEcxaPauAHaIv?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name: "Arjun Das", role: "Voice Cameo", image: "https://tse3.mm.bing.net/th/id/OIP.a89cSOY_H6altZzb-haKYQHaI_?rs=1&pid=ImgDetMain&o=7&rm=3" }
    ]
  },{
    id: 5,
    title: "Anniyan",
    language: "Tamil",
    genre: ["Psychological", "Action"],
    duration: "3h 01m",
    rating: 8.3,
    releaseDate: "2005-06-17",
    price: 100,
    movieImage: "https://tse1.mm.bing.net/th/id/OIP.yAlc7-YIWxZSFYURC_7UCQHaKk?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "A man punishes the corrupt using alter egos.",
    trailer: "https://www.youtube.com/embed/bzAxJDtS7zE?si=PBHS6VGpIcHXcjJ6",

    hero: { name: "Vikram", role: "Ambi / Anniyan", image: "https://static.toiimg.com/photo/87110307.cms" },
    heroine: { name: "Sadha", role: "Nandini", image: "https://www.gethucinema.com/wp-content/uploads/2023/10/Sadha-24.jpg" },

    sideActors: [
      { name: "Prakash Raj", role: "Police", image: "https://images.mid-day.com/images/images/2024/mar/pr-bithday_d.jpg" },
      { name: "Vivek", role: "Comedy", image: "https://wallpapercave.com/wp/wp8964198.jpg" },
      { name: "Nedumudi Venu", role: "Father", image: "https://images.thequint.com/thequint/2021-10/55a5f468-a048-4291-ac18-27288d711649/nedu.jfif?rect=0%2C0%2C720%2C405&auto=format%2Ccompress&fmt=webp&width=720&w=1200" },
      { name: "Nassar", role: "Psychiatrist", image: "https://images.filmibeat.com/img/popcorn/profile_photos/nassar-20220719131500-1470.jpg" },
      
    ]
  },{
    id: 3,
    title: "Master",
    language: "Tamil",
    genre: ["Action", "Drama"],
    duration: "2h 59m",
    rating: 7.4,
    releaseDate: "2021-01-13",
    price: 150,
    movieImage: "https://th.bing.com/th/id/R.7b07f00096217c0b7af069c009a85c6f?rik=ghtpNG1fRs4pJQ&riu=http%3a%2f%2fonlookersmedia.in%2fwp-content%2fuploads%2f2020%2f01%2fthalapathy-vijay-master-second-look-poster-2.jpg&ehk=ynmXtVn7SaEbM072GiDi1TxNKD7TSobc50RkNTpmjPA%3d&risl=&pid=ImgRaw&r=0",
    description: "A professor clashes with a gangster.",
    trailer: "https://www.youtube.com/embed/UTiXQcrLlv4?si=tOF9FsouDPIHgFSr" ,

    hero: { name: "Vijay", role: "JD", image: "https://static.toiimg.com/thumb/msid-101080863,imgsize-71294,width-900,height-1200,resizemode-6/101080863.jpg" },
    heroine: { name: "Malavika Mohanan", role: "Charulatha", image: "https://tse1.mm.bing.net/th/id/OIP.imrWojOt98dA3w4b6Gze1gHaI3?w=1080&h=1293&rs=1&pid=ImgDetMain&o=7&rm=3" },

    sideActors: [
      { name: "Vijay Sethupathi", role: "Bhavani", image: "https://th-i.thgim.com/public/incoming/bhox6a/article66301141.ece/alternates/FREE_1200/IMG_60.jpg_2_1_CL99QULN.jpg" },
      { name: "Arjun Das", role: "Das", image: "https://tse3.mm.bing.net/th/id/OIP.MC1_oVCK8Hqhe86bttTi5AAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name: "Andrea Jeremiah", role: "Support", image: "https://w0.peakpx.com/wallpaper/238/426/HD-wallpaper-andrea-jeremiah-actress-singer.jpg" },
      { name: "Shanthanu", role: "Support", image: "https://tse3.mm.bing.net/th/id/OIP.EfRlmPRjq25IEPqjfZtV7AHaLH?rs=1&pid=ImgDetMain&o=7&rm=3" },
     
    ]
  },{
    id: 9,
    title: "Thuppakki",
    language: "Tamil",
    genre: ["Action", "Thriller"],
    duration: "2h 45m",
    rating: 8.1,
    releaseDate: "2012-11-13",
    price: 100,
    movieImage: "https://tse1.mm.bing.net/th/id/OIP.4rbLHr3DxIjK-cnLxMR5AQHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "An army officer hunts down a sleeper cell terrorist group.",
    trailer: "https://www.youtube.com/embed/bMf0IyzyKt4?si=5SuAuFa6ezeVPtlc" ,

    hero: { name: "Vijay", role: "Jagadish", image: "https://static.toiimg.com/thumb/msid-101080863,imgsize-71294,width-900,height-1200,resizemode-6/101080863.jpg" },
    heroine: { name: "Kajal Aggarwal", role: "Nisha", image: "https://wallpapercrafter.com/desktop2/821043-Movie-Magadheera-Kajal-Aggarwal-720P.jpg" },

    sideActors: [
      { name: "Vidyut Jammwal", role: "Villain", image: "https://tse1.mm.bing.net/th/id/OIP.rP8-A6ecVAzOdq-4v7iIvgHaE6?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name: "Sathyan", role: "Friend", image: "https://tse4.mm.bing.net/th/id/OIP.g6zMp41j_NJzTW5yJt8QTAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" }
    ]
  }, {
    id: 13,
    title: "Doctor",
    language: "Tamil",
    genre: ["Comedy", "Thriller"],
    duration: "2h 28m",
    rating: 7.4,
    releaseDate: "2021-10-09",
    price: 100,
    movieImage: "https://m.media-amazon.com/images/M/MV5BYTk3Y2JlMzctMWM3NC00NTU0LWJjY2QtMjViY2ZjNDAyN2QwXkEyXkFqcGc@._V1_.jpg",
    description: "A military doctor tracks down a child trafficking gang.",
    trailer: "https://www.youtube.com/embed/oQiH_Iw0kDs?si=JJ30LgelGmT2v5TS" ,

    hero: { name: "Sivakarthikeyan", role: "Dr. Varun", image: "https://tse1.mm.bing.net/th/id/OIP.HenzIG6rh6UDIk0qtcHcLwHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3" },
    heroine: { name: "Priyanka Mohan", role: "Padmini", image: "https://th.bing.com/th/id/OIP.Eyip603JtopwxzAZRgRVkwHaOZ?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" },

    sideActors: [
      { name: "Vinay Rai", role: "Villain", image: "https://tse2.mm.bing.net/th/id/OIP.Acm7yLoX9NQxU0SkQbLEwAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name: "Yogi Babu", role: "Comedy", image: "https://th.bing.com/th/id/OIP.6V_XBc1JMFyrPEYth_cGuAHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" }
    ]
  },{
    id: 18,
    title: "Mark Antony",
    language: "Tamil",
    genre: ["Sci-Fi", "Action"],
    duration: "2h 31m",
    rating: 7.1,
    releaseDate: "2023-09-15",
    price: 120,
    movieImage: "https://cenekraft.com/wp-content/uploads/2023/09/MV5BYTE3NzM0ZjItMzZhZS00ODIwLWFhM2UtNTA4Mzk3N2YwOGQzXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_FMjpg_UX1000_.jpg",
    description: "A time-travel phone changes the fate of two gangsters.",
    trailer: "https://www.youtube.com/embed/Dg8X7SZ_4bs?si=fhH6GtmdquCVSDXj" ,

    hero: { name: "Vishal", role: "Mark / Antony", image: "https://tse3.mm.bing.net/th/id/OIP.TgMkWgOaSkIU-D9MQ9orSQHaHn?rs=1&pid=ImgDetMain&o=7&rm=3" },
    heroine: { name: "Ritu Varma", role: "Ramya", image: "https://tse1.mm.bing.net/th/id/OIP.wQ7U2qQdqmiqThVpk9h92gHaLG?rs=1&pid=ImgDetMain&o=7&rm=3" },

    sideActors: [
      { name: "SJ Suryah", role: "Villain", image: "https://tse2.mm.bing.net/th/id/OIP.ng1tCr4ziQ2rmXogNwAo4wHaD4?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name: "Sunil", role: "Supporting Role", image: "https://tse4.mm.bing.net/th/id/OIP.YkCP5Ttc5cOCyZ11s9JnlgHaLG?rs=1&pid=ImgDetMain&o=7&rm=3" }
    ]
  },{
    id: 23,
    title: "Ayalaan",
    language: "Tamil",
    genre: ["Sci-Fi", "Comedy"],
    duration: "2h 35m",
    rating: 6.5,
    releaseDate: "2024-01-12",
    price: 120,
    movieImage: "https://tse2.mm.bing.net/th/id/OIP.ixhOJ_mMXFyWdwM0MeL8vwHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "A man befriends an alien and saves Earth from danger.",
    trailer: "https://www.youtube.com/embed/kNpwAxnjbNA?si=QiIYO0dHMiCxvQQh",

    hero: { name: "Sivakarthikeyan", role: "Tamizh", image: "https://tse1.mm.bing.net/th/id/OIP.6vZmcwfuTDodgneltYZVpwHaLL?w=678&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3" },
    heroine: { name: "Rakul Preet Singh", role: "Lead Role", image: "https://tse1.mm.bing.net/th/id/OIP.nnVC3MCKfow6EDfLVeRktQHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3" },

    sideActors: [
      { name: "Yogi Babu", role: "Comedy", image: "https://th.bing.com/th/id/OIP.6V_XBc1JMFyrPEYth_cGuAHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" }
    ]
  },
  {
    id: 17,
    title: "Captain Miller",
    language: "Tamil",
    genre: ["Action", "Period"],
    duration: "2h 37m",
    rating: 7.0,
    releaseDate: "2024-01-12",
    price: 130,
    movieImage: "https://tse4.mm.bing.net/th/id/OIP.QAL2gdbYkRZKfkmJ9678FAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "A revolutionary fights against British rule in pre-independence India.",
    trailer: "https://www.youtube.com/embed/ujhWbKP1rKA?si=AmjyQNrlFG0QhTGz",

    hero: { name: "Dhanush", role: "Captain Miller", image: "https://th.bing.com/th/id/OIP.vpGzwfGKIi6tKDlGOLt45AHaLH?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" },
    heroine: { name: "Priyanka Arul Mohan", role: "Lead Role", image: "https://tse3.mm.bing.net/th/id/OIP.clAHEoWmeUMZkE7W11e7ggHaLH?rs=1&pid=ImgDetMain&o=7&rm=3" },

    sideActors: [
      { name: "Shiva Rajkumar", role: "Supporting Role", image: "https://img.studioflicks.com/wp-content/uploads/2022/08/22123846/Shiva-Rajkumar.jpg" },
      { name: "Sundeep Kishan", role: "Supporting Role", image: "https://tse2.mm.bing.net/th/id/OIP.Kt2PkoOPMYnMmKDazoCDMgHaE7?rs=1&pid=ImgDetMain&o=7&rm=3" }
    ]
  },

  {
    id: 27,
    title: "Mankatha",
    language: "Tamil",
    genre: ["Crime", "Thriller"],
    duration: "2h 35m",
    rating: 8.1,
    releaseDate: "2011-08-31",
    price: 110,
    movieImage: "https://alchetron.com/cdn/Mankatha-images-acf5f21d-8dc5-4993-b91c-d11cec42c3e.jpg",
    description: "A suspended cop joins criminals in a high-stakes heist.",
    trailer: "https://www.youtube.com/embed/a3rB6he7q4c?si=-l6VIWKfoHPIrVp9",

    hero: { name: "Ajith Kumar", role: "Vinayak Mahadev", image: "https://sm.mashable.com/t/mashable_in/topic/default/whatsapp-image-2023-11-02-at-35107-pm_4tet.1200.jpg" },
    heroine: { name: "Trisha", role: "Sanjana", image: "https://telugu.cdn.zeenews.com/telugu/sites/default/files/TrishaKrishnanBautifulSmilenackles.jpg" },

    sideActors: [
      { name: "Arjun Sarja", role: "ACP Prithviraj", image: "https://tse1.mm.bing.net/th/id/OIP.5ItLatBx8IrLdo9J6NH0QwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name: "Premji", role: "Supporting Role", image: "https://tse3.mm.bing.net/th/id/OIP.0cRUFCj1mWSQvvtCc8PgtwHaGZ?rs=1&pid=ImgDetMain&o=7&rm=3" }
    ]
  },{
    id: 36,
    title: "Kandukondain Kandukondain",
    language: "Tamil",
    genre: ["Romance", "Drama"],
    duration: "2h 37m",
    rating: 7.6,
    releaseDate: "2000-05-05",
    price: 120,
    movieImage: "https://tse3.mm.bing.net/th/id/OIP.aJ3JOyDs4weHI84dD5kjdAHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "A romantic drama inspired by Jane Austen's Sense and Sensibility, about two sisters and their journey through love and life.",
    trailer: "https://www.youtube.com/embed/dpF0_T0LzfI?si=6kMeXI_5leytRNnL",

    hero: { 
        name: "Ajith Kumar", 
        role: "Manohar", 
        image: "https://tse3.mm.bing.net/th/id/OIP.AYWEL--nUR0wcV2Z2KQGKAHaKl?rs=1&pid=ImgDetMain&o=7&rm=3" 
    },

    heroine: { 
        name: "Tabu", 
        role: "Sowmya", 
        image: "https://4.bp.blogspot.com/-OoYRhWEqYoA/Wm1b3wsC3tI/AAAAAAAAE20/f_l_TSp5bBQiieeOkfLy6uHJrk5J83oFACPcBGAYYCw/s1600/Actress%2BTabu%2Bat%2BFilmfare%2Baward%2B%25283%2529.jpg" 
    },

    sideActors: [
      { 
        name: "Aishwarya Rai", 
        role: "Meenakshi", 
        image: "https://tse4.mm.bing.net/th/id/OIP.UHGRgjMJHIT3YUKcA5AbjAHaLH?rs=1&pid=ImgDetMain&o=7&rm=3" 
      },
      { 
        name: "Mammootty", 
        role: "Captain Bala", 
        image: "https://data1.ibtimes.co.in/en/full/668554/mammootty-kozhi-thankachan-oru-kuttanadan-blog.jpg" 
      }
    ]}
]

export default upcoming