let mainContent = document.getElementById("main-content")

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

for (let i = 0; i < posts.length; i++) {
    let content = `
        <section id="artist-country">
            <img class="small-img" src="${posts[i].avatar}" width="30" height="30" alt="Author picture">
            <div class="name-city">
                <h1>${posts[i].name}</h1>
                <p>${posts[i].location}</p>
            </div>
        </section>

        <img class="main-picture" src="${posts[i].post}" width="100%" alt="Author picture">

        <section class="social">
            <img class="heart" src="images/icon-heart.png" width="25" alt="Icon heart">
            <img class="comment" src="images/icon-comment.png" width="25" alt="Icon comment">
            <img class="dm" src="images/icon-dm.png" width="25" alt="Icon dm">
        </section>

        <h2>${posts[i].likes} likes</h2>

        <footer>
            <p>${posts[i].username} <span>${posts[i].comment}</span></p>
        </footer>
    `;

    mainContent.innerHTML += content;
}






