
const loadNewses = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayCatagory(data.data.news_category))
}


const displayCatagory = (newses) => {
    const newsesContainer = document.getElementById('newses-container');
    newsesContainer.innerHTML = ``;
    
    newses.forEach(news => {
        //console.log(news);
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('news');

        newsDiv.innerHTML = `
        <div class="d-inline">
        <button onclick="loadNews('${news.category_id}', '${news.category_name}')" class="btn p-4 fw-bold">${news.category_name}</button>
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

const displayNews = (newsesDetail, found) => {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = ``;
    const totalNews = document.getElementById('total-news');
    totalNews.innerText = `
    ${newsesDetail.length}items found for category ${found}
    `;

    newsesDetail.forEach(newsDetail => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('newsDetail');

        newsDiv.innerHTML = `
            <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${newsDetail?.image_url}" class="img-fluid rounded-start" alt=""  width="700px">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${newsDetail.title}</h5>
                      <p id="detail" class="card-text">${newsDetail.details.slice(0, 200)}...</p>
                      <div class="d-flex  align-items-center">
                      <div class="d-flex me-5 justify-content-center align-items-center">
                      <img src= ${newsDetail.author.img} class="img-thumbnail me-2" alt="" width="80px">
                      <h5>${newsDetail.author.name === null ? "No Author found": newsDetail.author.name}</h5>
                      </div>
                      ${newsDetail.total_view === 0 || newsDetail.total_view === null? "No View": newsDetail.total_view}M
                      <button onclick="loadDetails('${newsDetail._id }')" class="ms-5 btn btn-primary">View ID</button>
                      </div>
                    </div>
                  </div>
                  
                </div>
            </div>
        `
        newsContainer.appendChild(newsDiv);
    })
}




// Dispaly View Details
const loadDetails = (id) => {
  alert (id)
};


