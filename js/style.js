

const loadEntertainment = async() => {
    const url = 'https://openapi.programming-hero.com/api/news/category/01'
    const res = await fetch(url)
    const data = await res.json()
    displayEntertainment(data.data)
    toggleSpiner(true);
}

const displayEntertainment = (entertainments) => {
    toggleSpiner(true);
    
    const containerEntertainment = document.getElementById('entertainments-container');
    entertainments.forEach(entertainment => {
        const entertainmentDiv = document.createElement('div');
        entertainmentDiv.classList.add('entertainment');

        entertainmentDiv.innerHTML = `
            
            <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${entertainment?.image_url}" class="img-fluid rounded-start" alt=""  width="700px">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${entertainment.title}</h5>
                      <p class="card-text">${entertainment.details}</p>
                      <div class="d-flex  align-items-center">
                      <div class="d-flex me-5 justify-content-center align-items-center">
                      <img src= ${entertainment.author.img} class="img-thumbnail me-2" alt="" width="80px">
                      <h5>Name: ${entertainment.author.name}</h5>
                      </div>
                      ${entertainment.total_view == 0? "<button class='viewPop'><i class='fa-sharp fa-solid fa-eye'></i>No View</button>": entertainment.total_view}
                      <button id="details-btn" class="btn btn-primary ms-5 mx-4 my-2">Details</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        `
        containerEntertainment.appendChild(entertainmentDiv);
        

    })
    toggleSpiner(false);
}

const toggleSpiner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if(isLoading === true){
        loaderSection.classList.remove('d-none');
    }
    else{
        loaderSection.classList.add('d-none');
    }
}


document.getElementById('details-btn').addEventListener('click', function(){
    alert ('how are you')
})