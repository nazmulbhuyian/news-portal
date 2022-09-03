
const loadCountries = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayCatagory(data.data.news_category))
}


const displayCatagory = (newses) => {
    console.log(newses)
    const newsesContainer = document.getElementById('newses-container');
    newsesContainer.innerHTML = ``;
    
    newses.forEach(news => {
        //console.log(news);
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('news');

        newsDiv.innerHTML = `
        <div class="d-inline">
        <button onclick="loadNews('${news.category_id}', '${news.category_name}')" class="btn p-2">${news.category_name}</button>
        </div>
        `
            newsesContainer.appendChild(newsDiv);
       })
       
}

 const loadNews = (search, found) => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${search}`)
    .then(res => res.json())
    .then(data => displayNews(data.data, found))
 }

const displayNews = (countries, found) => {
    const countryContainer = document.getElementById('news-container');
    countryContainer.innerHTML = ``;
    const totalNews = document.getElementById('total-news');
    totalNews.innerText = `
    ${countries.length}items found for category ${found}
    `;

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
                      <p id="detail" class="card-text">${country.details.slice(0, 200)}...</p>
                      <div class="d-flex  align-items-center">
                      <div class="d-flex me-5 justify-content-center align-items-center">
                      <img src= ${country.author.img} class="img-thumbnail me-2" alt="" width="80px">
                      <h5>Name: ${country.author.name}</h5>
                      </div>
                      ${country.total_view == null || 0? "<button><i class='fa-sharp fa-solid fa-eye'></i>No View</button>": country.total_view}<i class='fa-sharp fa-solid fa-eye'></i>
                      <button onclick="viewAll('${country.details}')" class="btn btn-primary ms-5 mx-4 my-2">View All</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        `
        countryContainer.appendChild(countryDiv);
    })
}

const viewAll = (viewDetail) => {
    const Detail = document.getElementById('detail');
    Detail.innerText = viewDetail;
}

loadCountries();