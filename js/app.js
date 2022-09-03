
const loadCountries2 = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayNews(data.data.news_category))
}

const displayNews = (newses) => {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';
    newses.forEach(news => {
        console.log(news.category_id);
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('news');

        newsDiv.innerHTML = `
        <div class="d-inline">
        <button onclick="loadCountries(${news.category_id})" class="btn p-2">${news.category_name}</button>
        </div>
        `
            newsContainer.appendChild(newsDiv);
       })

   
    
}




// const loadCountries = async(searchText) => {
//     const url = `https://openapi.programming-hero.com/api/news/category/${searchText}`
//     const res = await fetch(url)
//     const data = await res.json()
//     displayCountries(data.data)
// }

// const loadCountries = () => {
//     fetch('https://openapi.programming-hero.com/api/news/category/01')
//     .then(res => res.json())
//     .then(data => displayCountries(data.data))
// }
const loadCountries = (search) => {
    console.log(search.toString());
    fetch(`https://openapi.programming-hero.com/api/news/category/0${search}`)
    .then(res => res.json())
    .then(data => displayCountries(data.data))
}
const displayCountries = (countries) => {
    //console.log(countries)
    const countryContainer = document.getElementById('news-container');
    
    countries.forEach(country => {
        console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');

        countryDiv.innerHTML = `
            

            <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${country?.image_url}" class="img-fluid rounded-start" alt=""  width="700px">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${country.title}</h5>
                      <p class="card-text">${country.details.slice(0, 200)}...</p>
                      <div class="d-flex  align-items-center">
                      <div class="d-flex me-5 justify-content-center align-items-center">
                      <img src= ${country.author.img} class="img-thumbnail me-2" alt="" width="80px">
                      <h5>Name: ${country.author.name}</h5>
                      </div>
                      ${country.total_view == 0? "<button class='viewPop'>No View</button>": country.total_view}
                      <button onclick="loadDetail(${country.category_id})" class="btn btn-primary ms-5 mx-4 my-2">Name: ${country.author.name}</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        `
        countryContainer.appendChild(countryDiv);

    })
}


const loadDetail = async (id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/0${id}`
    const res = await fetch(url)
    const data = await res.json();
    displayPhoneDetails(data.data)
    
}

const displayPhoneDetails = phone => {
    console.log(phone)
    const phoneDetail = document.getElementById('phone-detail');
    phoneDetail.innerHTML = `
    <p>Release Date: ${phone.title ? phone.title : 'nothing releaseDate found'}</p>
    
    `
}