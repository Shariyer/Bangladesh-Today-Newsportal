// for breaking news button
document.getElementById('breaking-news').addEventListener('click', function () {
    
    
    fetch('https://openapi.programming-hero.com/api/news/category/01')
        .then(res => res.json())
        .then(data => displayNews(data.data))
        .catch(error => console.log(error));
});

const displayNews = (category) => {
    console.log(category);

    const newsContainer = document.getElementById('news-container');
    
    for (const news of category) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('row');
        newDiv.classList.add('g-5');
        
        


        newDiv.innerHTML = `
        <div class="col-lg-3">
                            <img src="${news.thumbnail_url}" class="img-fluid rounded img">
                        </div>
                        <div class="col-lg-9 ">
                            <div class="card-body d-lg-flex flex-lg-column ">
                                <h5 class="card-title">${news.title}</h5>
                                <p class="card-text">${news.details}</p>
                                <div style="width:100%;"
                                    class="d-lg-flex justify-content-lg-between  text-center align-items-lg-center ">
                
                                    <div class="d-flex justify-content-center align-items-center">
                                        <i class="fa-solid fa-user fs-1 bg-success p-2 rounded-circle mb-3"></i>
                                        <div class="d-flex flex-column justify-content-center align-items-center">
                                            <h6 class=" fs-6">${news.author.name}</h6>
                                            <p class="ms-5">${news.author.published_date}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <i class="fa-regular fa-eye"><span><span>${news.total_view}</span>m</span></i>
                
                                    </div>
                                    <div>
                                        <i class="fa-solid fa-right-long fs-1 text-success"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                      `;
        
        newsContainer.appendChild(newDiv)
    }
}



