const posts = [
    {title:'Post One',body:'This is post one',createdAt: new Date().getTime()},
    {title:'Post Two',body:'This is post two',createdAt: new Date().getTime()}
];

function createPost(post, createdAt) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        post.createdAt = createdAt;
        posts.push(post);
        resolve();
      }, 1000);
    });
  }

function deletePost() {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        if (posts.length > 0) {
          const popItem = posts.pop();
          resolve(popItem);
        } else {
          reject("ERROR: ARRAY IS EMPTY");
        }
      }, 1000);
    });
  }
  
  function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const updatedLastActivityTime = new Date().getTime();
        resolve(updatedLastActivityTime);
      }, 1000);
    });
  }
  
  async function main() {
        const updatedTime = await updateLastUserActivityTime();
        const newPost = { title: 'New Post', body: 'This is a new postt' };
    
        await createPost(newPost, updatedTime);
        console.log(posts);
        const deletedPost = await deletePost();
      
        console.log('Remaining Posts:');
        console.log(posts);

  }
  
  main();