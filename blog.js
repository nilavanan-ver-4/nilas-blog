document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    if (postId) {
        try {
            const response = await fetch(`http://localhost:8000/post/${postId}`);
            if (response.ok) {
                const post = await response.json();
                const postContainer = document.getElementById('post');
                postContainer.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.content}</p>
                `;
            } else {
                throw new Error('Failed to fetch post');
            }
        } catch (err) {
            console.error(err);
            alert('Error fetching post');
        }
    }
});