const displayNews = (category,newstype) => {
    console.log(category);
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
                                            <h6 class=" fs-6">${news.author.name? news.author.name:'No info found'}</h6>
                                            <p class="ms-5">${news.author.published_date? news.author.published_date:'No info found'}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <i class="fa-regular fa-eye"><span>${news.total_view ? news.total_view+' M' :' No info found' }</span></i>
                
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