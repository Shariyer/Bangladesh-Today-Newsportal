

const displayNews = (newsCategory, newstype) => {
    // array sortig 
    Array.prototype.sortBy = function(p) {
    return this.slice(0).sort(function(a,b) {
    return (a[p] < b[p]) ? 1 : (a[p] > b[p]) ? -1 : 0;
  });
}
    // sorting by total_view   
    const category = newsCategory.sortBy('total_view');
    // console.log(category);
    // checking length of array for search result 
    const length = category.length;
    if (length === 0) {
       document.getElementById('search-result').innerText = "No News item found "; 
    }
    else {
        const searchResult = `${length} items found for ${newstype} `
    document.getElementById('search-result').innerText = searchResult;
    }


    const newsContainer = document.getElementById('news-container');
    newsContainer.textContent = '';
    for (const news of category) {
        const newDiv = document.createElement('div');
        // slicing paragraph
        const details = news.details.slice(0, 750);
        // console.log(details);


        // adding class in newDiv
        newDiv.classList.add('row');
        newDiv.classList.add('g-5');
        newDiv.classList.add('mt-5');
        // setting dynamically inner HTML
        newDiv.innerHTML = `
                        <div class="col-lg-3 d-flex justify-content-center align-content-center">
                            <img src="${news.thumbnail_url}" class="img-fluid rounded img">
                        </div>
                        <div class="col-lg-9 ">
                            <div onclick="loadDetails('${news._id}')" class="card-body d-lg-flex flex-lg-column" data-bs-toggle="modal" data-bs-target="#showDetailsModal">
                                <h5 class="card-title">${news.title}</h5>
                                <p class="card-text">${ details+'...'}</p>
                                <div style="width:100%;"
                                    class="d-lg-flex justify-content-lg-between  text-center align-items-lg-center ">
                
                                    <div class="d-flex justify-content-center align-items-center">
                                        
                                        <img style="width: 4rem; height:4rem;" class="img-fluid rounded-circle" src="${news.author.img}" >
                                        <div class="d-flex flex-column justify-content-center align-items-center ">
                                            <h6 class="mx-auto fs-6">${news.author.name? news.author.name:'No info found'}</h6>
                                            <p class="mx-auto">${news.author.published_date? news.author.published_date:'No  info  found'}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <i class="fa-regular fa-eye"><span>${news.total_view ? news.total_view+' M' :' No info found' }</span></i>
                
                                    </div>
                                    <div class=" ">
                                        <i class="fa-solid fa-star text-warning"></i>
                                        <i class="fa-solid fa-star text-warning"></i>
                                        <i class="fa-solid fa-star text-warning"></i>
                                        <i class="fa-solid fa-star text-warning"></i>
                                        <i class="fa-solid fa-star-half-stroke text-warning"></i>
                                    </div>
                                    <div>

                                      <i onclick="loadDetails('${news._id}')" class="fa-solid fa-right-long fs-1 p-3 text-white bg-success rounded-circle"data-bs-toggle="modal" data-bs-target="#showDetailsModal"></i>
                                     
                                    </div>
                                </div>
                            </div>
                        </div>

                      `;
        // appending child in newsContainer Div
        newsContainer.appendChild(newDiv)
    }
    // stoping spinner 
    spinner(false);

}

// show details in modal
const loadDetails = (newsID) => {
    // console.log(newsID+ 'modal');
    
    const url = `https://openapi.programming-hero.com/api/news/${newsID}`

    fetch(url)
        .then(res => res.json())
        .then(data => showModal(data.data[0]))
        .catch(error => console.log(error));
    
    
}

const showModal = (specificNews) => {

    // console.log(specificNews);

    const modalTitle = document.getElementById('title');
    modalTitle.innerText = specificNews.title;
    const modalContainer=document.getElementById('modal-container')
    modalContainer.innerHTML = `
                               <img class="img-fluid" src="${specificNews.thumbnail_url}">
                                <p>${specificNews.details}</p>
    `
    
    // const modalContainer = document.getElementById('modal-container'); 
    
}

                            