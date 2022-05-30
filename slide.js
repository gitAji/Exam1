const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const allPost=document.querySelector(".all-post-container");
const latest=document.querySelector(".carousel-content");
function newLatest(){
    const latestUrl='https://blog.norgetamil.com/wp-json/wp/v2/posts?_embed';
    fetch(latestUrl)
    .then(response => response.json())
    .then(data => {
        newList(data);
        console.log(data);
        
    }
    )
    .catch(error => latest.innerHTML = "Something is wrong!");

}
newLatest();
function newList(posts){
    const latestList=posts.slice(0,6);
    console.log(latestList);
    let latestP="";
    for(let post of latestList){
        latestP += `
        <div class="slide">
        <a href="post.html?id=${post.id}">
          <div class="post-img">
          <img src="${post._embedded['wp:featuredmedia']['0'].source_url}" alt="${post.slug}">

          </div>
          <div class="post-details">
            <p>
              Date: <span>${post.date}</span>
              <p>
                <p>Category: <span>${post._embedded["wp:term"][0][0].name} </span></p>

          </div>
          <div class="post-title">
            <h4>
            ${post.title.rendered}   
            </h4>
          </div>
        </a>
        </div>
            `;
    }
    latest.innerHTML=latestP; // latest post displayed
}

const leftArrow=document.querySelector(".left-arrow");
const rightArrow=document.querySelector(".right-arrow");
const carousel=document.querySelectorAll(".carousel-content");
const slide=document.querySelectorAll(".slide");

function scrollLeft(){
    slide.scrollLeft -=300;
}
function scrollRight(){
    slide.scrollLeft +=300;
}
leftArrow.addEventListener("click",scrollLeft);
rightArrow.addEventListener("click",scrollRight);









