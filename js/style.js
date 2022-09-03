

const loadCountries = async() => {
    const url = 'https://openapi.programming-hero.com/api/news/category/01'
    const res = await fetch(url)
    const data = await res.json()
    displayCountries(data.data)
}

// const loadCountries = () => {
//     fetch('https://openapi.programming-hero.com/api/news/category/01')
//     .then(res => res.json())
//     .then(data => displayCountries(data.data))
// }

const displayCountries = (countries) => {

    const countryContainer = document.getElementById('countries-container');
    countries.forEach(country => {
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
                      <p class="card-text">${country.details}</p>
                      <div class="d-flex  align-items-center">
                      <div class="d-flex me-5 justify-content-center align-items-center">
                      <img src= ${country.author.img} class="img-thumbnail me-2" alt="" width="80px">
                      <h5>Name: ${country.author.name}</h5>
                      </div>
                      ${country.total_view == 0? "<button class='viewPop'><i class='fa-sharp fa-solid fa-eye'></i>No View</button>": country.total_view}
                      <button class="btn btn-primary ms-5 mx-4 my-2">Details</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        `
        countryContainer.appendChild(countryDiv);


    })
}