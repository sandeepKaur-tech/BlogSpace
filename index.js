fetch("https://apis.scrimba.com/jsonplaceholder/posts")
      .then(response => response.json())
      .then ( data =>{
        const postsArr = data.slice(0, 5)
        console.log(postsArr)
        let content = ""
        for (let post of postsArr){
          content += `
          <h2>${post.title}</h2>
          <p>${post.body}</p>
          <hr />
          `
        }
        console.log(content)
        document.getElementById("blog-list").innerHTML = content
      })