document.addEventListener("DOMContentLoaded", () => {

   getPosts();
    const form = document.querySelector('#addPostsForm');
    form.addEventListener('submit', addPosts);
})

const getPosts = async() => {
    let unorderedList = document.querySelector('ul')
    unorderedList.innerHTML = ""

    let url = 'http://localhost:3000/posts'
    try {
        let response = await axios.get(url);
        let posts = response.data.payload

        posts.forEach((post) => {
            let list = document.createElement('li');
            list.innerText = `${post.poster_id} ${post.body}`
            unorderedList.appendChild(list)
        })
    } catch (error){
        console.log(error)
    }

   
}

const addPosts = async(event) => {
    event.preventDefault();
    let posterId = document.querySelector('#poster_idInput').value
    console.log('poster_id', posterId)
    let body = document.querySelector('#bodyInput').value

    let url = "http://localhost:3000/posts/register"
    try {
        let response = await axios.post(url, {
            posterId,
            body,
        })
        getPosts()
    } catch (error) {
        console.log(error)
    }

}






