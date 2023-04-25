const imgNames = ["20211101_105330.jpg",
"20211219_224842.jpg",
"20220223_160324.jpg",
"20220508_123606.jpg",
"20230109_074215.jpg",
"doritos.jpg",
"dory_1.jpeg",
"dory_2.jpeg",
"dory_3.jpeg",
"dory_4.jpeg",
"dory_5.jpeg",
"dory_6.jpeg",
"dory_7.jpeg",
"dory_8.jpeg",
"IMG_20200927_201206473.jpg",
"IMG_20210116_164549887.jpg",
"IMG-20221019-WA0040.jpg"]

const images = imgNames.map(name => ({
  path: `/assets/images/dory/${name}`,
  alt: "Dory"
}));

export { images };