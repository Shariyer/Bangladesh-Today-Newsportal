// for breaking news button
document.getElementById('breaking-news').addEventListener('click', function () {
    
    
    fetch('https://openapi.programming-hero.com/api/news/category/01')
        .then(res => res.json())
        .then(data => displayNews(data.data))
        .catch(error => console.log(error));
});

// for regular news
document.getElementById('regular-news').addEventListener('click', function () {
    
    
    fetch('https://openapi.programming-hero.com/api/news/category/02')
        .then(res => res.json())
        .then(data => displayNews(data.data))
        .catch(error => console.log(error));
    console.log(data.data)
});

// for international news
document.getElementById('international-news').addEventListener('click', function () {
    
    
    fetch('https://openapi.programming-hero.com/api/news/category/03')
        .then(res => res.json())
        .then(data => displayNews(data.data))
        .catch(error => console.log(error));
    console.log(data.data)
});
// for sports news
document.getElementById('sports').addEventListener('click', function () {
    
    
    fetch('https://openapi.programming-hero.com/api/news/category/04')
        .then(res => res.json())
        .then(data => displayNews(data.data))
        .catch(error => console.log(error));
    console.log(data.data)
});
// for entertainment news
document.getElementById('entertainment').addEventListener('click', function () {
    
    
    fetch('https://openapi.programming-hero.com/api/news/category/05')
        .then(res => res.json())
        .then(data => displayNews(data.data))
        .catch(error => console.log(error));
    console.log(data.data)
});
// for culture news
document.getElementById('culture').addEventListener('click', function () {
    
    
    fetch('https://openapi.programming-hero.com/api/news/category/06')
        .then(res => res.json())
        .then(data => displayNews(data.data))
        .catch(error => console.log(error));
    console.log(data.data)
});

// for arts news
document.getElementById('arts').addEventListener('click', function () {
    
    
    fetch('https://openapi.programming-hero.com/api/news/category/07')
        .then(res => res.json())
        .then(data => displayNews(data.data))
        .catch(error => console.log(error));
    console.log(data.data)
});
// for all news
document.getElementById('all-news').addEventListener('click', function () {
    
    
    fetch('https://openapi.programming-hero.com/api/news/category/08')
        .then(res => res.json())
        .then(data => displayNews(data.data))
        .catch(error => console.log(error));
    console.log(data.data)
});

// for home

document.getElementById('home').addEventListener('click', function () {
    
    
    fetch('https://openapi.programming-hero.com/api/news/category/08')
        .then(res => res.json())
        .then(data => displayNews(data.data))
        .catch(error => console.log(error));
    console.log(data.data)
});
// for navbar home
document.getElementById('nav-home').addEventListener('click', function () {
    
    
    fetch('https://openapi.programming-hero.com/api/news/category/08')
        .then(res => res.json())
        .then(data => displayNews(data.data))
        .catch(error => console.log(error));
    console.log(data.data)
});

// for bangladesh today news click
document.getElementById('bd').addEventListener('click', function () {
    
    
    fetch('https://openapi.programming-hero.com/api/news/category/08')
        .then(res => res.json())
        .then(data => displayNews(data.data))
        .catch(error => console.log(error));
    console.log(data.data)
});
// for new button click
document.getElementById('news').addEventListener('click', function () {
    
    
    fetch('https://openapi.programming-hero.com/api/news/category/08')
        .then(res => res.json())
        .then(data => displayNews(data.data))
        .catch(error => console.log(error));
    console.log(data.data)
});

