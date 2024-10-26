const data = [
  {
    id: 1,
    title: "Iron man",
    year: 2008,
  },
  {
    id: 2,
    title: "Spiderman Homecomming",
    year: 2017,
  },
  {
    id: 2,
    title: "Avengers End Game",
    year: 2019,
  },
];

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, [1500]);
  });
};

async function fetchingData() {
  try {
    const dataFetch = await getData();
    console.log(dataFetch);
  } catch (error) {
    console.log(error);
  }
}

fetchingData();
