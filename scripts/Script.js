//navigation
const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownContent = document.querySelector('.dropdown-content');
//login-dropdown
const dropdownLogin = document.querySelector('.dropdown-login');
const loginToggle = document.querySelector('.auth-buttons');
//register-loginForms
const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
//news
const NewsMainGrid = document.querySelector("[news-main-grid]");
const NewsMainTemplate = document.querySelector("[news-main-template]");

const NewsPoliceGrid = document.querySelector("[news-police-grid]");
const NewsPoliceTemplate = document.querySelector("[news-police-template]");

const NewsEMSGrid = document.querySelector("[news-ems-grid]");
const NewsEMSTemplate = document.querySelector("[news-ems-template]");

const NewsMechanicsGrid = document.querySelector("[news-mechanics-grid]");
const NewsMechanicsTemplate = document.querySelector("[news-mechanics-template]");
//comments
const CommentsMainContainer = document.querySelector("[comments-main-container]");
const CommentsMainTemplate = document.querySelector("[comments-main-template]");

const CommentsPoliceContainer = document.querySelector("[comments-police-container]");
const CommentsPoliceTemplate = document.querySelector("[comments-police-template]");


const CommentsEMSContainer = document.querySelector("[comments-ems-container]");
const CommentsEMSTemplate = document.querySelector("[comments-ems-template]");


const CommentsMechanicsContainer = document.querySelector("[comments-mechanics-container]");
const CommentsMechanicsTemplate = document.querySelector("[comments-mechanics-template]");

//announcements
const AnnouncementsPoliceContainer = document.querySelector('announcements-police-container')
const AnnouncementsPoliceTemplate = document.querySelector('announcements-police-template');
const AnnouncementsPoliceDate = document.querySelector('announcements-police-date');
const AnnouncementsPoliceDescription = document.querySelector('announcements-police-description');

const AnnouncementsEMSContainer = document.querySelector('announcements-ems-container')
const AnnouncementsEMSTemplate = document.querySelector('announcements-ems-template');
const AnnouncementsEMSDate = document.querySelector('announcements-ems-date');
const AnnouncementsEMSDescription = document.querySelector('announcements-ems-description');

const AnnouncementsMechanicsContainer = document.querySelector('announcements-ems-container')
const AnnouncementsMechanicsTemplate = document.querySelector('announcements-ems-template');
const AnnouncementsMechanicsDate = document.querySelector('announcements-ems-date');
const AnnouncementsMechanicsDescription = document.querySelector('announcements-ems-description');

//dropdowns
if (navToggle) {
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('aria-expanded');
    });
}

if (dropdownToggle) {
    dropdownToggle.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });
}

if (loginToggle) {
    loginToggle.addEventListener('click', () => {
        dropdownLogin.classList.toggle('show');
    });
}   

if (dropdownLogin) {
    dropdownLogin.addEventListener('click', (event) => {
        event.stopPropagation();
    });
}


window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown-toggle')) {
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        }
    }
    if (!event.target.closest('.auth-buttons') && !event.target.closest('.dropdown-login')) {
        if (dropdownLogin.classList.contains('show')) {
            dropdownLogin.classList.remove('show');
        }
    }
});
//end-of-dropdowns

//news-main
if (NewsMainTemplate && NewsMainGrid) {
fetch('https://scapi-nine.vercel.app/homenewstbl')
  .then((response) => response.json())
  .then((data) => {
   newsmainsearch = data.map(newsmain => {
        const newsmainlist = NewsMainTemplate.content.cloneNode(true);
        const newsmainElement = newsmainlist.firstElementChild;
        const heading = newsmainElement.querySelector("[news-main-heading]");
        const description = newsmainElement.querySelector("[news-main-description]");
        if (heading && description) {
            heading.textContent = newsmain.Title;
            description.textContent = newsmain.Content;
            NewsMainGrid.append(newsmainElement);
            return { heading: newsmain.Title, description: newsmain.Content, element: newsmainElement };
          } else {
            console.error('Error creating news:', newsmain);
            return null;
          }
          });
  })
  .catch((error) => console.error('Error fetching quests:', error));
}
//news-police
if (NewsPoliceTemplate && NewsPoliceGrid) {
    fetch('https://scapi-nine.vercel.app/policenewstbl')
      .then((response) => response.json())
      .then((data) => {
       newspolicesearch = data.map(newspolice => {
            const newspolicelist = NewsPoliceTemplate.content.cloneNode(true);
            const newspoliceElement = newspolicelist.firstElementChild;
            const heading = newspoliceElement.querySelector("[news-police-heading]");
            const description = newspoliceElement.querySelector("[news-police-description]");
            if (heading && description) {
                heading.textContent = newspolice.Title;
                description.textContent = newspolice.Content;
                NewsPoliceGrid.append(newspoliceElement);
                return { heading: newspolice.Title, description: newspolice.Content, element: newspoliceElement };
              } else {
                console.error('Error creating news:', newspolice);
                return null;
              }
              });
      })
      .catch((error) => console.error('Error fetching quests:', error));
    }
//news-ems
if (NewsEMSTemplate && NewsEMSGrid) {
    fetch('https://scapi-nine.vercel.app/emsnewstbl')
      .then((response) => response.json())
      .then((data) => {
       newsemssearch = data.map(newsems => {
            const newsemslist = NewsEMSTemplate.content.cloneNode(true);
            const newsemsElement = newsemslist.firstElementChild;
            const heading = newsemsElement.querySelector("[news-ems-heading]");
            const description = newsemsElement.querySelector("[news-ems-description]");
            if (heading && description) {
                heading.textContent = newsems.Title;
                description.textContent = newsems.Content;
                NewsEMSGrid.append(newsemsElement);
                return { heading: newsems.Title, description: newsems.Content, element: newsemsElement };
              } else {
                console.error('Error creating news:', newsems);
                return null;
              }
              });
      })
      .catch((error) => console.error('Error fetching quests:', error));
    }
//news-mechanics
if (NewsMechanicsTemplate && NewsMechanicsGrid) {
    fetch('https://scapi-nine.vercel.app/mechanicsnewstbl')
      .then((response) => response.json())
      .then((data) => {
       newsmechanicssearch = data.map(newsmechanics => {
            const newsmechanicslist = NewsMechanicsTemplate.content.cloneNode(true);
            const newsmechanicsElement = newsmechanicslist.firstElementChild;
            const heading = newsmechanicsElement.querySelector("[news-mechanics-heading]");
            const description = newsmechanicsElement.querySelector("[news-mechanics-description]");
            if (heading && description) {
                heading.textContent = newsmechanics.Title;
                description.textContent = newsmechanics.Content;
                NewsMechanicsGrid.append(newsmechanicsElement);
                return { heading: newsmechanics.Title, description: newsmechanics.Content, element: newsmechanicsElement };
              } else {
                console.error('Error creating news:', newsmechanics);
                return null;
              }
              });
      })
      .catch((error) => console.error('Error fetching quests:', error));
    }


//comments-main
if (CommentsMainTemplate && CommentsMainContainer) {
    fetch('https://scapi-nine.vercel.app/homecommenttbl')
      .then((response) => response.json())
      .then((data) => {
       commentsmainsearch = data.map(commentsmain => {
            const commentsmainlist = CommentsMainTemplate.content.cloneNode(true);
            const commentsmainElement = commentsmainlist.firstElementChild;
            const heading = commentsmainElement.querySelector("[comments-main-username]");
            const description = commentsmainElement.querySelector("[comments-main-description]");
            if (heading && description) {
                heading.textContent = commentsmain.UserName;
                description.textContent = commentsmain.Content;
                CommentsMainContainer.append(commentsmainElement);
                return { heading: commentsmain.UserName, description: commentsmain.Content, element: commentsmainElement };
              } else {
                console.error('Error creating comments:', commentsmain);
                return null;
              }
              });
      })
      .catch((error) => console.error('Error fetching comments:', error));
    }
//comments-police
if (CommentsPoliceTemplate && CommentsPoliceContainer) {
    fetch('https://scapi-nine.vercel.app/policecommenttbl')
      .then((response) => response.json())
      .then((data) => {
       commentspolicesearch = data.map(commentspolice => {
            const commentspolicelist = CommentsPoliceTemplate.content.cloneNode(true);
            const commentspoliceElement = commentspolicelist.firstElementChild;
            const heading = commentspoliceElement.querySelector("[comments-police-username]");
            const description = commentspoliceElement.querySelector("[comments-police-description]");
            if (heading && description) {
                heading.textContent = commentspolice.UserName;
                description.textContent = commentspolice.Content;
                CommentsPoliceContainer.append(commentspoliceElement);
                return { heading: commentspolice.UserName, description: commentspolice.Content, element: commentspoliceElement };
              } else {
                console.error('Error creating comments:', commentspolice);
                return null;
              }
              });
      })
      .catch((error) => console.error('Error fetching comments:', error));
    }
//comments-ems
if (CommentsEMSTemplate && CommentsEMSContainer) {
    fetch('https://scapi-nine.vercel.app/emscommenttbl')
      .then((response) => response.json())
      .then((data) => {
       commentsemssearch = data.map(commentsems => {
            const commentsemslist = CommentsEMSTemplate.content.cloneNode(true);
            const commentsemsElement = commentsemslist.firstElementChild;
            const heading = commentsemsElement.querySelector("[comments-ems-username]");
            const description = commentsemsElement.querySelector("[comments-ems-description]");
            if (heading && description) {
                heading.textContent = commentsems.UserName;
                description.textContent = commentsems.Content;
                CommentsEMSContainer.append(commentsemsElement);
                return { heading: commentsems.UserName, description: commentsems.Content, element: commentsemsElement };
              } else {
                console.error('Error creating comments:', commentsems);
                return null;
              }
              });
      })
      .catch((error) => console.error('Error fetching comments:', error));
    }
//comments-mechanics
if (CommentsMechanicsTemplate && CommentsMechanicsContainer) {
    fetch('https://scapi-nine.vercel.app/mechanicscommenttbl')
      .then((response) => response.json())
      .then((data) => {
       commentsmechanicssearch = data.map(commentsmechanics => {
            const commentsmechanicslist = CommentsMechanicsTemplate.content.cloneNode(true);
            const commentsmechanicsElement = commentsmechanicslist.firstElementChild;
            const heading = commentsmechanicsElement.querySelector("[comments-mechanics-username]");
            const description = commentsmechanicsElement.querySelector("[comments-mechanics-description]");
            if (heading && description) {
                heading.textContent = commentsmechanics.UserName;
                description.textContent = commentsmechanics.Content;
                CommentsMechanicsContainer.append(commentsmechanicsElement);
                return { heading: commentsmechanics.UserName, description: commentsmechanics.Content, element: commentsmechanicsElement };
              } else {
                console.error('Error creating comments:', commentsmechanics);
                return null;
              }
              });
      })
      .catch((error) => console.error('Error fetching comments:', error));
    }

//registration-loginScript
if (registerForm) {
    registerForm.addEventListener('submit', async (event) => {
        event.preventDefault();
    
        const userName = document.getElementById('registerUserName').value;
        const userEmail = document.getElementById('registerUserEmail').value;
        const password = document.getElementById('registerPassword').value;
    
        console.log('Registering user:', { userName, userEmail, password });
    
        const response = await fetch('https://scapi-nine.vercel.app/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                UserName: userName,
                UserEmail: userEmail,
                Password: password
            })
        });
    
        if (response.ok) {
            alert('User registered successfully');
        } else {
            alert('Error registering user');
        }
    });
}

if (loginForm) {
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
    
        const userName = document.getElementById('loginUserName').value;
        const password = document.getElementById('loginPassword').value;
    
        console.log('Logging in user:', { userName, password });
    
        const response = await fetch('https://scapi-nine.vercel.app/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                UserName: userName,
                Password: password
            })
        });
    
        if (response.ok) {
            const result = await response.text();
            if (result === 'Success') {
                alert('Login successful');
            } else {
                alert('Login failed');
            }
        } else {
            alert('Error logging in');
        }
    });
}
//end-of-registration/login