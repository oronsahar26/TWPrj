const img = (file) => `${import.meta.env.BASE_URL}images/${file}`;

const movies = [
  {
    id: 1,
    name: "Spider Men",
    rate:0,
    description: "Film Studies1",
    pic: img('SPIDERMEN.jpeg'),
    countClicks : 0,
    totalRate : 0,
  },
  {
     id: 2,
    name: "X Men",
    rate: 0,
    description: "Film Studies2",
    pic: img('XMEN.jpeg'),
    countClicks : 0,
    totalRate : 0,
  },
  {
     id: 3,
    name: "Harry Potter",
    rate: 0,
    description: "Film Studies3",
    pic: img('HARRY.jpeg'),
    countClicks : 0,
    totalRate : 0,
  },
  {
    id: 4,
    name: "Snow White",
    rate: 0,
    description: "fgfg",
    pic: img('SNOW.jpeg'),
    countClicks : 0,
    totalRate : 0,
  },
  {
   id: 5,
    name: "Jango",
    rate: 0,
    description: "",
    pic: img('JANGO.jpeg'),
    countClicks : 0,
    totalRate : 0,
  },  
]


export default movies;