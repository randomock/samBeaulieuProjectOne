const userForm = document.querySelector(`form.entryForm`);
userForm.addEventListener(`submit`, function(e){
    // prevent page from refreshing when user submits input
    e.preventDefault();

    // get the value of user name input
    const userName = document.querySelector(`input[name="name"]`).value;

    // get the value of user comment input
    const userComment = document.querySelector(`textarea[name="blogComment"]`).value;

    // insert user img (placeholder for now) when user submits form
    // first target the placeholder div for img to be appended to
    const userImgDiv = document.querySelector(`.userImg`);
    const newUserImg = document.createElement(`img`);
    newUserImg.src = `https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png`;
    newUserImg.alt = `user placeholder image`;

    // add placeholder img to new blog entry upon submit
    userImgDiv.append(newUserImg);

    // take date of user entry
    //take user name input and date and print it to comment section
    let date = new Date();
    const dateOptions = {
        weekday: `long`,
        day: `numeric`,
        month: `long`,
        year: `numeric`
    };
    date = date.toLocaleDateString('en-US', dateOptions);
    const userNameDate = document.querySelector(`.userNameDate`);
    const userBlogPost = document.querySelector(`.userEntryText`);
    userNameDate.innerText = `${date} by ${userName}`;

    // take user comment input and print it to comment section
    userBlogPost.innerText = `${userComment}`;
});

// This all worked out *MOSTLY* however I realized towards the end that I'm unsure as to how exactly to allow more than one comment one after another...
// This absolutely is not how regular blog posts/comment sections work I take it lol, but is hopefully representative of my basic JavaScript knowledge :)