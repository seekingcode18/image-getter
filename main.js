// const Unsplash = require('unsplash-js').default;

// const unsplash = new Unsplash({accessKey: "f3ce5303f51beac74c3fc2a4849a352529e7dec9ef2b7d0ffb73f7ef247558b3"})

// unsplash.search.photos("dogs", 1)
// .then(toJson)
// .then(json => {
//   console.log(json);
// })



$(document).ready( () => {

  let body = document.querySelector('body');

  body.addEventListener('keydown', event => {  
    load();
  })

  let left_div = document.querySelector('.left')
  let right_div = document.querySelector('.right')
  let accessKey = 'f3ce5303f51beac74c3fc2a4849a352529e7dec9ef2b7d0ffb73f7ef247558b3'
  //let accessKey = 'g';
  let url = `https://api.unsplash.com/photos/random?count=2&client_id=${accessKey}`;
  
  async function getImg (){
  const response = await axios.get(url)
  return response;
  }
  
  const load = () => {
  getImg().then((result) => {
    console.log(result);
    let img1 = result.data[0].urls.regular;
    let img2 = result.data[1].urls.regular;
    console.log(img1);
    console.log(img2);
    console.log(typeof img1)
    $('.left').css('background',`url(${img1})`)
    $('.right').css('background',`url(${img2})`)
  })

}

load();

  //console.log(getImg())
  /*
  .then(response => {
    console.log(response);
    return response;
    //console.log(JSON.str
  }) .finally( function (response) {
    let img_1 = response.data[0].urls.raw;
    console.log(img_1)
  }

  );

/*
  async function displayImages(response){
    let img_1 = response.data[0].urls.raw;
    console.log(img_1)
  }
  displayImages(response)*/

})