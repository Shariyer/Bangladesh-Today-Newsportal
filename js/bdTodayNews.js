// for breaking news button
document.getElementById('breaking-news').addEventListener('click', function () {
    spinner(true);
    
    fetch('https://openapi.programming-hero.com/api/news/category/01')
        .then(res => res.json())
        .then(data => displayNews(data.data,'Breaking News'))
        .catch(error => console.log(error));
});

// for regular news
document.getElementById('regular-news').addEventListener('click', function () {
    spinner(true);
    
    fetch('https://openapi.programming-hero.com/api/news/category/02')
        .then(res => res.json())
        .then(data => displayNews(data.data,'Regular News'))
        .catch(error => console.log(error));
    
});

// for international news
document.getElementById('international-news').addEventListener('click', function () {
    spinner(true);
    
    fetch('https://openapi.programming-hero.com/api/news/category/03')
        .then(res => res.json())
        .then(data => displayNews(data.data,'International News'))
        .catch(error => console.log(error));
    
});
// for sports news
document.getElementById('sports').addEventListener('click', function () {
    spinner(true);
    
    fetch('https://openapi.programming-hero.com/api/news/category/04')
        .then(res => res.json())
        .then(data => displayNews(data.data,'Sports News'))
        .catch(error => console.log(error));
    
});
// for entertainment news
document.getElementById('entertainment').addEventListener('click', function () {
   spinner(true); 
    
    fetch('https://openapi.programming-hero.com/api/news/category/05')
        .then(res => res.json())
        .then(data => displayNews(data.data,'Entertainment News'))
        .catch(error => console.log(error));
    
});
// for culture news
document.getElementById('culture').addEventListener('click', function () {
    spinner(true);
    
    fetch('https://openapi.programming-hero.com/api/news/category/06')
        .then(res => res.json())
        .then(data => displayNews(data.data,'Cultural News'))
        .catch(error => console.log(error));
    
});

// for arts news
document.getElementById('arts').addEventListener('click', function () {
    spinner(true);
    
    fetch('https://openapi.programming-hero.com/api/news/category/07')
        .then(res => res.json())
        .then(data => displayNews(data.data,'Arts News'))
        .catch(error => console.log(error));
    
});
// for all news
document.getElementById('all-news').addEventListener('click', function () {
    spinner(true);
    
    fetch('https://openapi.programming-hero.com/api/news/category/08')
        .then(res => res.json())
        .then(data => displayNews(data.data,'All News'))
        .catch(error => console.log(error));
    
});

// for home

document.getElementById('home').addEventListener('click', function () {
   spinner(true); 
    
    fetch('https://openapi.programming-hero.com/api/news/category/08')
        .then(res => res.json())
        .then(data => displayNews(data.data,'All News'))
        .catch(error => console.log(error));
    
});
// for navbar home
document.getElementById('nav-home').addEventListener('click', function () {
    spinner(true);
    
    fetch('https://openapi.programming-hero.com/api/news/category/08')
        .then(res => res.json())
        .then(data => displayNews(data.data,'All News'))
        .catch(error => console.log(error));
   
});

// for bangladesh today news click
document.getElementById('bd').addEventListener('click', function () {
    spinner(true);
    
    fetch('https://openapi.programming-hero.com/api/news/category/08')
        .then(res => res.json())
        .then(data => displayNews(data.data,'All News'))
        .catch(error => console.log(error));
    
});
// for new button click
document.getElementById('news').addEventListener('click', function () {
    spinner(true);
    
    fetch('https://openapi.programming-hero.com/api/news/category/08')
        .then(res => res.json())
        .then(data => displayNews(data.data,'All News'))
        .catch(error => console.log(error));
    
});

const spinner = isLoading => {
    const sinnerLoader=document.getElementById('spinner')
    if (isLoading) {
        sinnerLoader.classList.remove('d-none');
    }
    else {
        sinnerLoader.classList.add('d-none');
    }
}

