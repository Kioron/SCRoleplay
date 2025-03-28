//navigation
const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownContent = document.querySelector('.dropdown-content');
//login-dropdown
const dropdownLogin = document.querySelector('.dropdown-login');
const loginButton = document.getElementById('login-button');
//news-form
const togglenewsForm = document.getElementById('togglenewsForm');
const togglenewsFormP = document.getElementById('togglenewsFormP');
const togglenewsFormE = document.getElementById('togglenewsFormE');
const togglenewsFormM = document.getElementById('togglenewsFormM');
const newsForm = document.getElementById('newsForm');
const overlay = document.querySelector('.overlay');
const cancelNewsButton = document.getElementById('cancel-news');
//announcement-form
const toggleannouncementFormP = document.getElementById('toggleannouncementFormP');
const toggleannouncementFormE = document.getElementById('toggleannouncementFormE');
const toggleannouncementFormM = document.getElementById('toggleannouncementFormM');
//register-loginForms
const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
//userdetails-logout
const logoutButton = document.getElementById('logoutButton');
const userNameDisplay = document.getElementById('userNameDisplay');
//hiddenaccess
const PoliceHQLink = document.querySelector('a[href="PoliceOnly.html"]');
const EMSHQLink = document.querySelector('a[href="EMSOnly.html"]');
const MechanicsHQLink = document.querySelector('a[href="MechanicsOnly.html"]');
const UserManagement = document.querySelector('a[href="html/UserDashboard.html"]');
const PoliceManagement = document.querySelector('a[href="html/UserDashboard-Police.html"]');
const EMSManagement = document.querySelector('a[href="html/UserDashboard-EMS.html"]');
const MechanicsManagement = document.querySelector('a[href="html/UserDashboard-Mechanics.html"]');
const searchnameInput = document.querySelector('[data-search-name]');
const userTableBody = document.getElementById('userTableBody');
//news
const charLimit = 600;
const NewsMainGrid = document.querySelector("[news-main-grid]");
const NewsMainTemplate = document.querySelector("[news-main-template]");
const NewsMainForm = document.getElementById('newsMainForm');
const NewsEditForm = document.querySelector('.editnewsForm');
const NewsMainEdit = document.getElementById('newsMainEdit');
const searchInput = document.querySelector("[data-search]");

const NewsPoliceGrid = document.querySelector("[news-police-grid]");
const NewsPoliceTemplate = document.querySelector("[news-police-template]");
const NewsPoliceForm = document.getElementById('newsPoliceForm');
const NewsPoliceEdit = document.getElementById('newsPoliceEdit');

const NewsEMSGrid = document.querySelector("[news-ems-grid]");
const NewsEMSTemplate = document.querySelector("[news-ems-template]");
const NewsEMSForm = document.getElementById('newsEMSForm');
const NewsEMSEdit = document.getElementById('newsEMSEdit');

const NewsMechanicsGrid = document.querySelector("[news-mechanics-grid]");
const NewsMechanicsTemplate = document.querySelector("[news-mechanics-template]");
const NewsMechanicsForm = document.getElementById('newsMechanicsForm');
const NewsMechanicsEdit = document.getElementById('newsMechanicsEdit');
//comments
const CommentsMainContainer = document.querySelector("[comments-main-container]");
const CommentsMainTemplate = document.querySelector("[comments-main-template]");
const CommentsMainForm = document.getElementById('commentsMainForm');
const CommentsEditForm = document.querySelector('.editcommentForm');
const CommentsMainEdit = document.getElementById('commentMainEdit');

const CommentsPoliceContainer = document.querySelector("[comments-police-container]");
const CommentsPoliceTemplate = document.querySelector("[comments-police-template]");
const CommentsPoliceForm = document.getElementById('commentsPoliceForm');
const CommentsPoliceEdit = document.getElementById('commentPoliceEdit');

const CommentsEMSContainer = document.querySelector("[comments-ems-container]");
const CommentsEMSTemplate = document.querySelector("[comments-ems-template]");
const CommentsEMSForm = document.getElementById('commentsEMSForm');
const CommentsEMSEdit = document.getElementById('commentEMSEdit');

const CommentsMechanicsContainer = document.querySelector("[comments-mechanics-container]");
const CommentsMechanicsTemplate = document.querySelector("[comments-mechanics-template]");
const CommentsMechanicsForm = document.getElementById('commentsMechanicsForm');
const CommentsMechanicsEdit = document.getElementById('commentMechanicsEdit');
//announcements
const AnnouncementsPoliceContainer = document.querySelector("[announcements-police-container]");
const AnnouncementsPoliceTemplate = document.querySelector("[announcements-police-template]");
const AnnouncementsEditForm = document.querySelector('.editannouncementsForm');
const AnnouncementsPoliceForm = document.getElementById('announcementsPoliceForm');
const AnnouncementsPoliceEdit = document.getElementById('announcementsPoliceEdit');

const AnnouncementsEMSContainer = document.querySelector("[announcements-ems-container]");
const AnnouncementsEMSTemplate = document.querySelector("[announcements-ems-template]");
const AnnouncementsEMSForm = document.getElementById('announcementsEMSForm');
const AnnouncementsEMSEdit = document.getElementById('announcementsEMSEdit');

const AnnouncementsMechanicsContainer = document.querySelector("[announcements-mechanics-container]");
const AnnouncementsMechanicsTemplate = document.querySelector("[announcements-mechanics-template]");
const AnnouncementsMechanicsForm = document.getElementById('announcementsMechanicsForm');
const AnnouncementsMechanicsEdit = document.getElementById('announcementsMechanicsEdit');
//edit-delete
const canceleditButton = document.getElementById('cancelEdit');
const cancelEditBtn = document.getElementById('cancelNewsEdit');
//loginglobal
const token = localStorage.getItem('token');
const userName = localStorage.getItem('userName');
const role = localStorage.getItem('role');

//restriction-for-faction-subpages
function getCurrentPath() {
  return window.location.pathname;
}
const currentPath = getCurrentPath();
if (currentPath === '/html/PoliceOnly.html') {
  if (!token || (role !== 'Owner' && role !== 'Police Chief' && role !== 'Police')) {
    window.location.href = "/index.html";
  }
}

if (currentPath === '/html/EMSOnly.html') {
  if (!token || (role !== 'Owner' && role !== 'EMS Chief' && role !== 'EMS')) {
    window.location.href = "/index.html";
  }
}

if (currentPath === '/html/MechanicsOnly.html') {
  if (!token || (role !== 'Owner' && role !== 'Mechanics Chief' && role !== 'Mechanics')) {
    window.location.href = "/index.html";
  }
}

if (currentPath === '/html/RegistrationPage.html') {
  if (token) {
    window.location.href = "/index.html";
  }
}

if (currentPath === '/html/UserDashboard.html') {
  if (!token || role !== 'Owner') {
    window.location.href = "/index.html";
  }
}

if (currentPath === '/html/UserDashboard-Police.html') {
  if (!token || role !== 'Police Chief') {
    window.location.href = "/index.html";
  }
}

if (currentPath === '/html/UserDashboard-EMS.html') {
  if (!token || role !== 'EMS Chief') {
    window.location.href = "/index.html";
  }
}

if (currentPath === '/html/UserDashboard-Mechanics.html') {
  if (!token || role !== 'Mechanics Chief') {
    window.location.href = "/index.html";
  }
}

//dropdowns
if (navToggle) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('aria-expanded');
    navToggle.blur();
  });
}

if (dropdownToggle) {
  dropdownToggle.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
  });
}

if (loginButton) {
  loginButton.addEventListener('click', () => {
    dropdownLogin.classList.toggle('show');
  });
}

if (dropdownLogin) {
  dropdownLogin.addEventListener('click', (event) => {
    event.stopPropagation();
  });
}

if (togglenewsForm) {
  togglenewsForm.addEventListener('click', () => {
    newsForm.classList.toggle('active');
    overlay.classList.toggle('active');
  });
}

if (togglenewsFormP) {
  togglenewsFormP.addEventListener('click', () => {
    newsForm.classList.toggle('active');
    overlay.classList.toggle('active');
  });
}

if (togglenewsFormE) {
  togglenewsFormE.addEventListener('click', () => {
    newsForm.classList.toggle('active');
    overlay.classList.toggle('active');
  });
}

if (togglenewsFormM) {
  togglenewsFormM.addEventListener('click', () => {
    newsForm.classList.toggle('active');
    overlay.classList.toggle('active');
  });
}

if (toggleannouncementFormP) {
  toggleannouncementFormP.addEventListener('click', () => {
    newsForm.classList.toggle('active');
    overlay.classList.toggle('active');
  });
}

if (toggleannouncementFormE) {
  toggleannouncementFormE.addEventListener('click', () => {
    newsForm.classList.toggle('active');
    overlay.classList.toggle('active');
  });
}

if (toggleannouncementFormM) {
  toggleannouncementFormM.addEventListener('click', () => {
    newsForm.classList.toggle('active');
    overlay.classList.toggle('active');
  });
}

if (overlay) {
  overlay.addEventListener('click', () => {
    newsForm.classList.remove('active');
    overlay.classList.remove('active');
    if (CommentsEditForm) {
      CommentsEditForm.classList.remove('active');
    }
    if (NewsEditForm) {
      NewsEditForm.classList.remove('active');
    }
  });
}

if (cancelNewsButton) {
  cancelNewsButton.addEventListener('click', (event) => {
    event.preventDefault();
    newsForm.classList.remove('active');
    overlay.classList.remove('active');
  });
}

if (canceleditButton) {
  canceleditButton.addEventListener('click', (event) => {
    event.preventDefault();
    CommentsEditForm.classList.remove('active');
    NewsEditForm.classList.remove('active');
    overlay.classList.remove('active');
  });
}

if (cancelEditBtn) {
  cancelEditBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (AnnouncementsEditForm) {
      AnnouncementsEditForm.classList.remove('active');
      overlay.classList.remove('active');
    }
    if (CommentsEditForm || NewsEditForm) {
      CommentsEditForm.classList.remove('active');
      NewsEditForm.classList.remove('active');
      overlay.classList.remove('active');
    }
  });
}


if (newsForm) {
  newsForm.addEventListener('click', (event) => {
    event.stopPropagation();
  });
}

if (PoliceHQLink) {
  if (role === 'Owner' || role === 'Police Chief' || role === 'Police') {
    PoliceHQLink.style.display = 'block';
  } else {
    PoliceHQLink.style.display = 'none';
  };
}

if (EMSHQLink) {
  if (role === 'Owner' || role === 'EMS Chief' || role === 'EMS') {
    EMSHQLink.style.display = 'block';
  } else {
    EMSHQLink.style.display = 'none';
  };
}

if (MechanicsHQLink) {
  if (role === 'Owner' || role === 'Mechanics Chief' || role === 'Mechanics') {
    MechanicsHQLink.style.display = 'block';
  } else {
    MechanicsHQLink.style.display = 'none';
  };
}

if (UserManagement) {
  if (role === 'Owner') {
    UserManagement.style.display = 'block';
  } else {
    UserManagement.style.display = 'none';
  };
}

if (PoliceManagement) {
  if (role === 'Police Chief') {
    PoliceManagement.style.display = 'block';
  } else {
    PoliceManagement.style.display = 'none';
  };
}

if (EMSManagement) {
  if (role === 'EMS Chief') {
    EMSManagement.style.display = 'block';
  } else {
    EMSManagement.style.display = 'none';
  };
}

if (MechanicsManagement) {
  if (role === 'Mechanics Chief') {
    MechanicsManagement.style.display = 'block';
  } else {
    MechanicsManagement.style.display = 'none';
  };
}

window.addEventListener('click', (event) => {
  if (!event.target.matches('.dropdown-toggle')) {
    if (dropdownContent.classList.contains('show')) {
      dropdownContent.classList.remove('show');
    }
  }
  if (!event.target.closest('.auth-wrapper') && !event.target.closest('.dropdown-login')) {
    if (dropdownLogin.classList.contains('show')) {
      dropdownLogin.classList.remove('show');
    }
  }
  if (!event.target.matches('.comment-options-dropdown') && !event.target.matches('.options-wrapper')) {
    document.querySelectorAll('.comment-options-dropdown').forEach(dropdown => {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    });
  }
  if (!event.target.matches('.news-options-dropdown') && !event.target.matches('.options-wrapper')) {
    document.querySelectorAll('.news-options-dropdown').forEach(dropdown => {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    });
  }
});
//end-of-dropdowns

const buyButtons = document.querySelectorAll('.buy-button');

// Add a click event listener to each button
buyButtons.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault(); // Prevent the default link behavior
    alert('Work in progress'); // Display the message
  });
});

let currentPage = 1;
const itemsPerPage = 6;

let newsmainsearch = [];
let newspolicesearch = [];
let newsemssearch = [];
let newsmechanicssearch = [];
let announcementspolicesearch = [];
let announcementsemssearch = [];
let announcementsmechanicssearch = [];

//news-main
if (NewsMainTemplate && NewsMainGrid) {
  fetch('https://scapi-nine.vercel.app/homenewstbl')
    .then((response) => response.json())
    .then((data) => {
      data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      newsmainsearch = data.map(newsmain => {
        const newsmainlist = NewsMainTemplate.content.cloneNode(true);
        const newsmainElement = newsmainlist.firstElementChild;
        newsmainElement.setAttribute('data-news-id', newsmain.id);
        const heading = newsmainElement.querySelector("[news-main-heading]");
        const description = newsmainElement.querySelector("[news-main-description]");
        const date = newsmainElement.querySelector("[news-main-date]");
        const options = newsmainElement.querySelector(".togglenewsOptions");
        if (heading && description) {
          heading.textContent = newsmain.Title;
          description.textContent = newsmain.Content;
          date.textContent = "Date Published: " + new Date(newsmain.created_at).toISOString().split('T')[0];
          if (role === 'Owner') {
            options.style.display = 'block';
          } else {
            options.style.display = 'none';
          }
          NewsMainGrid.append(newsmainElement);
          const toggleMoreNewsOptions = newsmainElement.querySelectorAll('.more-options-icon-news');
          toggleMoreNewsOptions.forEach(icon => {
            icon.addEventListener('click', event => {
              event.stopPropagation();
              const dropdown = event.target.nextElementSibling;
              if (dropdown) {
                dropdown.classList.toggle('show');
              } else {
                console.log('Dropdown not found');
              }
            });
          });

          const editButtons = newsmainElement.querySelectorAll('.toggleeditnewsForm');
          editButtons.forEach(button => {
            button.addEventListener('click', event => {
              const newsElement = event.target.closest('.news-item');
              const newsId = newsElement.dataset.newsId;
              const currentTitle = newsElement.querySelector('.news-heading').textContent;
              const currentContent = newsElement.querySelector('.news-content').textContent;
              const editInputTitle = document.getElementById('newsTitle');
              const editInputContent = document.getElementById('newsContent');
              editInputTitle.value = currentTitle;
              editInputContent.value = currentContent;
              NewsEditForm.dataset.newsId = newsId;
              NewsEditForm.classList.add('active');
              overlay.classList.add('active');
            });
          });

          const deleteButtons = newsmainElement.querySelectorAll('.deleteNews');
          deleteButtons.forEach(button => {
            button.addEventListener('click', event => {
              const newsElement = event.target.closest('.news-item');
              const newsId = newsElement.dataset.newsId;
              if (confirm('Are you sure you want to delete this news?')) {
                fetch(`https://scapi-nine.vercel.app/homenews/${newsId}`, {
                  method: 'DELETE',
                  headers: {
                    'Authorization': `Bearer ${token}`
                  }
                })
                  .then(response => response.text())
                  .then(data => {
                    alert(data);
                    location.reload();
                  })
                  .catch(error => console.error('Error deleting news:', error));
              }
            });
          });

          return { heading: newsmain.Title, description: newsmain.Content, date: newsmain.created_at, element: newsmainElement };
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
      data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      newspolicesearch = data.map(newspolice => {
        const newspolicelist = NewsPoliceTemplate.content.cloneNode(true);
        const newspoliceElement = newspolicelist.firstElementChild;
        newspoliceElement.setAttribute('data-news-id', newspolice.id);
        const heading = newspoliceElement.querySelector("[news-police-heading]");
        const description = newspoliceElement.querySelector("[news-police-description]");
        const date = newspoliceElement.querySelector("[news-police-date]");
        const options = newspoliceElement.querySelector(".togglenewsOptions");
        if (heading && description) {
          heading.textContent = newspolice.Title;
          description.textContent = newspolice.Content;
          date.textContent = "Date Published: " + new Date(newspolice.created_at).toISOString().split('T')[0];
          if ((role === 'Owner') || (role === 'Police Chief')) {
            options.style.display = 'block';
          } else {
            options.style.display = 'none';
          }
          NewsPoliceGrid.append(newspoliceElement);
          const toggleMoreNewsOptions = newspoliceElement.querySelectorAll('.more-options-icon-news');
          toggleMoreNewsOptions.forEach(icon => {
            icon.addEventListener('click', event => {
              event.stopPropagation();
              const dropdown = event.target.nextElementSibling;
              if (dropdown) {
                dropdown.classList.toggle('show');
              } else {
                console.log('Dropdown not found');
              }
            });
          });

          const editButtons = newspoliceElement.querySelectorAll('.toggleeditnewsForm');
          editButtons.forEach(button => {
            button.addEventListener('click', event => {
              const newsElement = event.target.closest('.news-item');
              const newsId = newsElement.dataset.newsId;
              const currentTitle = newsElement.querySelector('.news-heading').textContent;
              const currentContent = newsElement.querySelector('.news-content').textContent;
              const editInputTitle = document.getElementById('newsTitle');
              const editInputContent = document.getElementById('newsContent');
              editInputTitle.value = currentTitle;
              editInputContent.value = currentContent;
              NewsEditForm.dataset.newsId = newsId;
              NewsEditForm.classList.add('active');
              overlay.classList.add('active');
            });
          });

          const deleteButtons = newspoliceElement.querySelectorAll('.deleteNews');
          deleteButtons.forEach(button => {
            button.addEventListener('click', event => {
              const newsElement = event.target.closest('.news-item');
              const newsId = newsElement.dataset.newsId;
              if (confirm('Are you sure you want to delete this news?')) {
                fetch(`https://scapi-nine.vercel.app/policenews/${newsId}`, {
                  method: 'DELETE',
                  headers: {
                    'Authorization': `Bearer ${token}`
                  }
                })
                  .then(response => response.text())
                  .then(data => {
                    alert(data);
                    location.reload();
                  })
                  .catch(error => console.error('Error deleting news:', error));
              }
            });
          });

          return { heading: newspolice.Title, description: newspolice.Content, date: newspolice.created_at, element: newspoliceElement };
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
      data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      newsemssearch = data.map(newsems => {
        const newsemslist = NewsEMSTemplate.content.cloneNode(true);
        const newsemsElement = newsemslist.firstElementChild;
        newsemsElement.setAttribute('data-news-id', newsems.id);
        const heading = newsemsElement.querySelector("[news-ems-heading]");
        const description = newsemsElement.querySelector("[news-ems-description]");
        const date = newsemsElement.querySelector("[news-ems-date]");
        const options = newsemsElement.querySelector(".togglenewsOptions");
        if (heading && description) {
          heading.textContent = newsems.Title;
          description.textContent = newsems.Content;
          date.textContent = "Date Published: " + new Date(newsems.created_at).toISOString().split('T')[0];
          if ((role === 'Owner') || (role === 'EMS Chief')) {
            options.style.display = 'block';
          } else {
            options.style.display = 'none';
          }
          NewsEMSGrid.append(newsemsElement);
          const toggleMoreNewsOptions = newsemsElement.querySelectorAll('.more-options-icon-news');
          toggleMoreNewsOptions.forEach(icon => {
            icon.addEventListener('click', event => {
              event.stopPropagation();
              const dropdown = event.target.nextElementSibling;
              if (dropdown) {
                dropdown.classList.toggle('show');
              } else {
                console.log('Dropdown not found');
              }
            });
          });

          const editButtons = newsemsElement.querySelectorAll('.toggleeditnewsForm');
          editButtons.forEach(button => {
            button.addEventListener('click', event => {
              const newsElement = event.target.closest('.news-item');
              const newsId = newsElement.dataset.newsId;
              const currentTitle = newsElement.querySelector('.news-heading').textContent;
              const currentContent = newsElement.querySelector('.news-content').textContent;
              const editInputTitle = document.getElementById('newsTitle');
              const editInputContent = document.getElementById('newsContent');
              editInputTitle.value = currentTitle;
              editInputContent.value = currentContent;
              NewsEditForm.dataset.newsId = newsId;
              NewsEditForm.classList.add('active');
              overlay.classList.add('active');
            });
          });

          const deleteButtons = newsemsElement.querySelectorAll('.deleteNews');
          deleteButtons.forEach(button => {
            button.addEventListener('click', event => {
              const newsElement = event.target.closest('.news-item');
              const newsId = newsElement.dataset.newsId;
              if (confirm('Are you sure you want to delete this news?')) {
                fetch(`https://scapi-nine.vercel.app/emsnews/${newsId}`, {
                  method: 'DELETE',
                  headers: {
                    'Authorization': `Bearer ${token}`
                  }
                })
                  .then(response => response.text())
                  .then(data => {
                    alert(data);
                    location.reload();
                  })
                  .catch(error => console.error('Error deleting news:', error));
              }
            });
          });

          return { heading: newsems.Title, description: newsems.Content, date: newsems.created_at, element: newsemsElement };
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
      data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      newsmechanicssearch = data.map(newsmechanics => {
        const newsmechanicslist = NewsMechanicsTemplate.content.cloneNode(true);
        const newsmechanicsElement = newsmechanicslist.firstElementChild;
        newsmechanicsElement.setAttribute('data-news-id', newsmechanics.id);
        const heading = newsmechanicsElement.querySelector("[news-mechanics-heading]");
        const description = newsmechanicsElement.querySelector("[news-mechanics-description]");
        const date = newsmechanicsElement.querySelector("[news-mechanics-date]");
        const options = newsmechanicsElement.querySelector(".togglenewsOptions")
        if (heading && description) {
          heading.textContent = newsmechanics.Title;
          description.textContent = newsmechanics.Content;
          date.textContent = "Date Published: " + new Date(newsmechanics.created_at).toISOString().split('T')[0];
          if ((role === 'Owner') || (role === 'Mechanics Chief')) {
            options.style.display = 'block';
          } else {
            options.style.display = 'none';
          }
          NewsMechanicsGrid.append(newsmechanicsElement);
          const toggleMoreNewsOptions = newsmechanicsElement.querySelectorAll('.more-options-icon-news');
          toggleMoreNewsOptions.forEach(icon => {
            icon.addEventListener('click', event => {
              event.stopPropagation();
              const dropdown = event.target.nextElementSibling;
              if (dropdown) {
                dropdown.classList.toggle('show');
              } else {
                console.log('Dropdown not found');
              }
            });
          });

          const editButtons = newsmechanicsElement.querySelectorAll('.toggleeditnewsForm');
          editButtons.forEach(button => {
            button.addEventListener('click', event => {
              const newsElement = event.target.closest('.news-item');
              const newsId = newsElement.dataset.newsId;
              const currentTitle = newsElement.querySelector('.news-heading').textContent;
              const currentContent = newsElement.querySelector('.news-content').textContent;
              const editInputTitle = document.getElementById('newsTitle');
              const editInputContent = document.getElementById('newsContent');
              editInputTitle.value = currentTitle;
              editInputContent.value = currentContent;
              NewsEditForm.dataset.newsId = newsId;
              NewsEditForm.classList.add('active');
              overlay.classList.add('active');
            });
          });

          const deleteButtons = newsmechanicsElement.querySelectorAll('.deleteNews');
          deleteButtons.forEach(button => {
            button.addEventListener('click', event => {
              const newsElement = event.target.closest('.news-item');
              const newsId = newsElement.dataset.newsId;
              if (confirm('Are you sure you want to delete this news?')) {
                fetch(`https://scapi-nine.vercel.app/mechanicsnews/${newsId}`, {
                  method: 'DELETE',
                  headers: {
                    'Authorization': `Bearer ${token}`
                  }
                })
                  .then(response => response.text())
                  .then(data => {
                    alert(data);
                    location.reload();
                  })
                  .catch(error => console.error('Error deleting news:', error));
              }
            });
          });


          return { heading: newsmechanics.Title, description: newsmechanics.Content, date: newsmechanics.created_at, element: newsmechanicsElement };
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
      data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      commentsmainsearch = data.map(commentsmain => {
        const commentsmainlist = CommentsMainTemplate.content.cloneNode(true);
        const commentsmainElement = commentsmainlist.firstElementChild;
        commentsmainElement.setAttribute('data-comment-id', commentsmain.id);
        const heading = commentsmainElement.querySelector("[comments-main-username]");
        const date = commentsmainElement.querySelector("[comments-main-date]");
        const description = commentsmainElement.querySelector("[comments-main-description]");
        const options = commentsmainElement.querySelector(".togglecommentOptions");
        if (heading && description) {
          heading.textContent = commentsmain.UserName;
          date.textContent = new Date(commentsmain.created_at).toISOString().split('T')[0];
          description.textContent = commentsmain.Content;
          if (commentsmain.UserName === userName) {
            options.style.display = 'block';
          } else {
            options.style.display = 'none';
          }
          CommentsMainContainer.append(commentsmainElement);
          const toggleMoreCommentOptions = commentsmainElement.querySelectorAll('.more-options-icon');
          toggleMoreCommentOptions.forEach(icon => {
            icon.addEventListener('click', event => {
              event.stopPropagation();
              const dropdown = event.target.nextElementSibling;
              if (dropdown) {
                dropdown.classList.toggle('show');
              } else {
                console.log('Dropdown not found');
              }
            });
          });

          const editButtons = commentsmainElement.querySelectorAll('.toggleeditcommentForm');
          editButtons.forEach(button => {
            button.addEventListener('click', event => {
              const commentElement = event.target.closest('.comment');
              const commentId = commentElement.dataset.commentId;
              const currentContent = commentElement.querySelector('.comment-content').textContent;
              const editInput = document.getElementById('commentContent');
              editInput.value = currentContent;
              CommentsEditForm.dataset.commentId = commentId;
              CommentsEditForm.classList.add('active');
              overlay.classList.add('active');
            });
          });

          const deleteButtons = commentsmainElement.querySelectorAll('.deleteComment');
          deleteButtons.forEach(button => {
            button.addEventListener('click', event => {
              const commentElement = event.target.closest('.comment');
              const commentId = commentElement.dataset.commentId;
              if (confirm('Are you sure you want to delete this comment?')) {
                fetch(`https://scapi-nine.vercel.app/homecomments/${commentId}`, {
                  method: 'DELETE',
                  headers: {
                    'Authorization': `Bearer ${token}`
                  }
                })
                  .then(response => response.text())
                  .then(data => {
                    alert(data);
                    location.reload();
                  })
                  .catch(error => console.error('Error deleting comment:', error));
              }
            });
          });

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
      data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      commentspolicesearch = data.map(commentspolice => {
        const commentspolicelist = CommentsPoliceTemplate.content.cloneNode(true);
        const commentspoliceElement = commentspolicelist.firstElementChild;
        commentspoliceElement.setAttribute('data-comment-id', commentspolice.id);
        const heading = commentspoliceElement.querySelector("[comments-police-username]");
        const date = commentspoliceElement.querySelector("[comments-police-date]");
        const description = commentspoliceElement.querySelector("[comments-police-description]");
        const options = commentspoliceElement.querySelector(".togglecommentOptions");
        if (heading && description) {
          heading.textContent = commentspolice.UserName;
          date.textContent = new Date(commentspolice.created_at).toISOString().split('T')[0];
          description.textContent = commentspolice.Content;
          if (commentspolice.UserName === userName) {
            options.style.display = "block";
          } else {
            options.style.display = "none";
          }
          CommentsPoliceContainer.append(commentspoliceElement);
          const toggleMoreCommentOptions = commentspoliceElement.querySelectorAll('.more-options-icon');
          toggleMoreCommentOptions.forEach(icon => {
            icon.addEventListener('click', event => {
              event.stopPropagation();
              const dropdown = event.target.nextElementSibling;
              if (dropdown) {
                dropdown.classList.toggle('show');
              } else {
                console.log('Dropdown not found');
              }
            });
          });

          const editButtons = commentspoliceElement.querySelectorAll('.toggleeditcommentForm');
          editButtons.forEach(button => {
            button.addEventListener('click', event => {
              const commentElement = event.target.closest('.comment');
              const commentId = commentElement.dataset.commentId;
              const currentContent = commentElement.querySelector('.comment-content').textContent;
              const editInput = document.getElementById('commentContent');
              editInput.value = currentContent;
              CommentsEditForm.dataset.commentId = commentId;
              CommentsEditForm.classList.add('active');
              overlay.classList.add('active');
            });
          });

          const deleteButtons = commentspoliceElement.querySelectorAll('.deleteComment');
          deleteButtons.forEach(button => {
            button.addEventListener('click', event => {
              const commentElement = event.target.closest('.comment');
              const commentId = commentElement.dataset.commentId;
              if (confirm('Are you sure you want to delete this comment?')) {
                fetch(`https://scapi-nine.vercel.app/policecomments/${commentId}`, {
                  method: 'DELETE',
                  headers: {
                    'Authorization': `Bearer ${token}`
                  }
                })
                  .then(response => response.text())
                  .then(data => {
                    alert(data);
                    location.reload();
                  })
                  .catch(error => console.error('Error deleting comment:', error));
              }
            });
          });

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
      data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      commentsemssearch = data.map(commentsems => {
        const commentsemslist = CommentsEMSTemplate.content.cloneNode(true);
        const commentsemsElement = commentsemslist.firstElementChild;
        commentsemsElement.setAttribute('data-comment-id', commentsems.id);
        const heading = commentsemsElement.querySelector("[comments-ems-username]");
        const date = commentsemsElement.querySelector("[comments-ems-date]");
        const description = commentsemsElement.querySelector("[comments-ems-description]");
        const options = commentsemsElement.querySelector(".togglecommentOptions");
        if (heading && description) {
          heading.textContent = commentsems.UserName;
          date.textContent = new Date(commentsems.created_at).toISOString().split('T')[0];
          description.textContent = commentsems.Content;
          if (commentsems.UserName === userName) {
            options.style.display = "block";
          } else {
            options.style.display = "none";
          }
          CommentsEMSContainer.append(commentsemsElement);
          const toggleMoreCommentOptions = commentsemsElement.querySelectorAll('.more-options-icon');
          toggleMoreCommentOptions.forEach(icon => {
            icon.addEventListener('click', event => {
              event.stopPropagation();
              const dropdown = event.target.nextElementSibling;
              if (dropdown) {
                dropdown.classList.toggle('show');
              } else {
                console.log('Dropdown not found');
              }
            });
          });

          const editButtons = commentsemsElement.querySelectorAll('.toggleeditcommentForm');
          editButtons.forEach(button => {
            button.addEventListener('click', event => {
              const commentElement = event.target.closest('.comment');
              const commentId = commentElement.dataset.commentId;
              const currentContent = commentElement.querySelector('.comment-content').textContent;
              const editInput = document.getElementById('commentContent');
              editInput.value = currentContent;
              CommentsEditForm.dataset.commentId = commentId;
              CommentsEditForm.classList.add('active');
              overlay.classList.add('active');
            });
          });

          const deleteButtons = commentsemsElement.querySelectorAll('.deleteComment');
          deleteButtons.forEach(button => {
            button.addEventListener('click', event => {
              const commentElement = event.target.closest('.comment');
              const commentId = commentElement.dataset.commentId;
              if (confirm('Are you sure you want to delete this comment?')) {
                fetch(`https://scapi-nine.vercel.app/emscomments/${commentId}`, {
                  method: 'DELETE',
                  headers: {
                    'Authorization': `Bearer ${token}`
                  }
                })
                  .then(response => response.text())
                  .then(data => {
                    alert(data);
                    location.reload();
                  })
                  .catch(error => console.error('Error deleting comment:', error));
              }
            });
          });

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
      data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      commentsmechanicssearch = data.map(commentsmechanics => {
        const commentsmechanicslist = CommentsMechanicsTemplate.content.cloneNode(true);
        const commentsmechanicsElement = commentsmechanicslist.firstElementChild;
        commentsmechanicsElement.setAttribute('data-comment-id', commentsmechanics.id);
        const heading = commentsmechanicsElement.querySelector("[comments-mechanics-username]");
        const date = commentsmechanicsElement.querySelector("[comments-mechanics-date]");
        const description = commentsmechanicsElement.querySelector("[comments-mechanics-description]");
        const options = commentsmechanicsElement.querySelector(".togglecommentOptions");
        if (heading && description) {
          heading.textContent = commentsmechanics.UserName;
          date.textContent = new Date(commentsmechanics.created_at).toISOString().split('T')[0];
          description.textContent = commentsmechanics.Content;
          if (commentsmechanics.UserName === userName) {
            options.style.display = "block";
          } else {
            options.style.display = "none";
          }
          CommentsMechanicsContainer.append(commentsmechanicsElement);
          const toggleMoreCommentOptions = commentsmechanicsElement.querySelectorAll('.more-options-icon');
          toggleMoreCommentOptions.forEach(icon => {
            icon.addEventListener('click', event => {
              event.stopPropagation();
              const dropdown = event.target.nextElementSibling;
              if (dropdown) {
                dropdown.classList.toggle('show');
              } else {
                console.log('Dropdown not found');
              }
            });
          });

          const editButtons = commentsmechanicsElement.querySelectorAll('.toggleeditcommentForm');
          editButtons.forEach(button => {
            button.addEventListener('click', event => {
              const commentElement = event.target.closest('.comment');
              const commentId = commentElement.dataset.commentId;
              const currentContent = commentElement.querySelector('.comment-content').textContent;
              const editInput = document.getElementById('commentContent');
              editInput.value = currentContent;
              CommentsEditForm.dataset.commentId = commentId;
              CommentsEditForm.classList.add('active');
              overlay.classList.add('active');
            });
          });

          const deleteButtons = commentsmechanicsElement.querySelectorAll('.deleteComment');
          deleteButtons.forEach(button => {
            button.addEventListener('click', event => {
              const commentElement = event.target.closest('.comment');
              const commentId = commentElement.dataset.commentId;
              if (confirm('Are you sure you want to delete this comment?')) {
                fetch(`https://scapi-nine.vercel.app/mechanicscomments/${commentId}`, {
                  method: 'DELETE',
                  headers: {
                    'Authorization': `Bearer ${token}`
                  }
                })
                  .then(response => response.text())
                  .then(data => {
                    alert(data);
                    location.reload();
                  })
                  .catch(error => console.error('Error deleting comment:', error));
              }
            });
          });

          return { heading: commentsmechanics.UserName, description: commentsmechanics.Content, element: commentsmechanicsElement };
        } else {
          console.error('Error creating comments:', commentsmechanics);
          return null;
        }
      });
    })
    .catch((error) => console.error('Error fetching comments:', error));
}

//announcements-police
if (AnnouncementsPoliceTemplate && AnnouncementsPoliceContainer) {
  fetch('https://scapi-nine.vercel.app/policeannouncementtbl')
    .then((response) => response.json())
    .then((data) => {
      data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      announcementspolicesearch = data.map(announcementspolice => {
        const announcementspolicelist = AnnouncementsPoliceTemplate.content.cloneNode(true);
        const announcementspoliceElement = announcementspolicelist.firstElementChild;
        announcementspoliceElement.setAttribute('data-news-id', announcementspolice.id);
        const heading = announcementspoliceElement.querySelector("[announcements-police-heading]");
        const description = announcementspoliceElement.querySelector("[announcements-police-description]");
        const date = announcementspoliceElement.querySelector("[announcements-police-date]");
        const options = announcementspoliceElement.querySelector(".toggleannouncementsOptions");
        if (heading && description) {
          heading.textContent = announcementspolice.Title;
          description.textContent = announcementspolice.Content;
          date.textContent = "Date Published: " + new Date(announcementspolice.created_at).toISOString().split('T')[0];
          if ((role === 'Owner') || (role === 'Police Chief')) {
            options.style.display = 'block';
          } else {
            options.style.display = 'none';
          }
          AnnouncementsPoliceContainer.append(announcementspoliceElement);
          const toggleMoreAnnouncementsOptions = announcementspoliceElement.querySelectorAll('.more-options-icon-announcements');
          toggleMoreAnnouncementsOptions.forEach(icon => {
            icon.addEventListener('click', event => {
              event.stopPropagation();
              const dropdown = event.target.nextElementSibling;
              if (dropdown) {
                dropdown.classList.toggle('show');
              } else {
                console.log('Dropdown not found');
              }
            });
          });

          const editButtons = announcementspoliceElement.querySelectorAll('.toggleeditnewsForm');
          editButtons.forEach(button => {
            button.addEventListener('click', event => {
              const newsElement = event.target.closest('.news-item');
              const announcementId = newsElement.dataset.newsId;
              const currentTitle = newsElement.querySelector('.news-heading').textContent;
              const currentContent = newsElement.querySelector('.news-content').textContent;
              const editInputTitle = document.getElementById('newsTitle');
              const editInputContent = document.getElementById('newsContent');
              editInputTitle.value = currentTitle;
              editInputContent.value = currentContent;
              AnnouncementsEditForm.dataset.newsId = announcementId;
              AnnouncementsEditForm.classList.add('active');
              overlay.classList.add('active');
            });
          });

          const deleteButtons = announcementspoliceElement.querySelectorAll('.deleteNews');
          deleteButtons.forEach(button => {
            button.addEventListener('click', event => {
              const announcementElement = event.target.closest('.news-item');
              const announcementId = announcementElement.dataset.newsId;
              if (confirm('Are you sure you want to delete this news?')) {
                fetch(`https://scapi-nine.vercel.app/policeannouncements/${announcementId}`, {
                  method: 'DELETE',
                  headers: {
                    'Authorization': `Bearer ${token}`
                  }
                })
                  .then(response => response.text())
                  .then(data => {
                    alert(data);
                    location.reload();
                  })
                  .catch(error => console.error('Error deleting announcement:', error));
              }
            });
          });

          return { heading: announcementspolice.Title, description: announcementspolice.Content, element: announcementspoliceElement };
        } else {
          console.error('Error creating announcements:', announcementspolice);
          return null;
        }
      });
    })
}

//announcements-ems
if (AnnouncementsEMSTemplate && AnnouncementsEMSContainer) {
  fetch('https://scapi-nine.vercel.app/emsannouncementtbl')
    .then((response) => response.json())
    .then((data) => {
      data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      announcementsemssearch = data.map(announcementsems => {
        const announcementsemslist = AnnouncementsEMSTemplate.content.cloneNode(true);
        const announcementsemsElement = announcementsemslist.firstElementChild;
        announcementsemsElement.setAttribute('data-news-id', announcementsems.id);
        const heading = announcementsemsElement.querySelector("[announcements-ems-heading]");
        const description = announcementsemsElement.querySelector("[announcements-ems-description]");
        const options = announcementsemsElement.querySelector(".toggleannouncementsOptions");
        if (heading && description) {
          heading.textContent = announcementsems.Title;
          description.textContent = announcementsems.Content;
          if ((role === 'Owner') || (role === 'EMS Chief')) {
            options.style.display = 'block';
          } else {
            options.style.display = 'none';
          }
          AnnouncementsEMSContainer.append(announcementsemsElement);
          const toggleMoreAnnouncementsOptions = announcementsemsElement.querySelectorAll('.more-options-icon-announcements');
          toggleMoreAnnouncementsOptions.forEach(icon => {
            icon.addEventListener('click', event => {
              event.stopPropagation();
              const dropdown = event.target.nextElementSibling;
              if (dropdown) {
                dropdown.classList.toggle('show');
              } else {
                console.log('Dropdown not found');
              }
            });
          });

          const editButtons = announcementsemsElement.querySelectorAll('.toggleeditnewsForm');
          editButtons.forEach(button => {
            button.addEventListener('click', event => {
              const newsElement = event.target.closest('.news-item');
              const announcementId = newsElement.dataset.newsId;
              const currentTitle = newsElement.querySelector('.news-heading').textContent;
              const currentContent = newsElement.querySelector('.news-content').textContent;
              const editInputTitle = document.getElementById('newsTitle');
              const editInputContent = document.getElementById('newsContent');
              editInputTitle.value = currentTitle;
              editInputContent.value = currentContent;
              AnnouncementsEditForm.dataset.newsId = announcementId;
              AnnouncementsEditForm.classList.add('active');
              overlay.classList.add('active');
            });
          });

          const deleteButtons = announcementsemsElement.querySelectorAll('.deleteNews');
          deleteButtons.forEach(button => {
            button.addEventListener('click', event => {
              const announcementElement = event.target.closest('.news-item');
              const announcementId = announcementElement.dataset.newsId;
              if (confirm('Are you sure you want to delete this news?')) {
                fetch(`https://scapi-nine.vercel.app/emsannouncements/${announcementId}`, {
                  method: 'DELETE',
                  headers: {
                    'Authorization': `Bearer ${token}`
                  }
                })
                  .then(response => response.text())
                  .then(data => {
                    alert(data);
                    location.reload();
                  })
                  .catch(error => console.error('Error deleting announcement:', error));
              }
            });
          });

          return { heading: announcementsems.Title, description: announcementsems.Content, element: announcementsemsElement };
        } else {
          console.error('Error creating announcements:', announcementsems);
          return null;
        }
      });
    })
}

//announcements-mechanics
if (AnnouncementsMechanicsTemplate && AnnouncementsMechanicsContainer) {
  fetch('https://scapi-nine.vercel.app/mechanicsannouncementtbl')
    .then((response) => response.json())
    .then((data) => {
      data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      announcementsmechanicssearch = data.map(announcementsmechanics => {
        const announcementsmechanicslist = AnnouncementsMechanicsTemplate.content.cloneNode(true);
        const announcementsmechanicsElement = announcementsmechanicslist.firstElementChild;
        announcementsmechanicsElement.setAttribute('data-news-id', announcementsmechanics.id);
        const heading = announcementsmechanicsElement.querySelector("[announcements-mechanics-heading]");
        const description = announcementsmechanicsElement.querySelector("[announcements-mechanics-description]");
        const options = announcementsmechanicsElement.querySelector(".toggleannouncementsOptions");
        if (heading && description) {
          heading.textContent = announcementsmechanics.Title;
          description.textContent = announcementsmechanics.Content;
          if ((role === 'Owner') || (role === 'Mechanics Chief')) {
            options.style.display = 'block';
          } else {
            options.style.display = 'none';
          }
          AnnouncementsMechanicsContainer.append(announcementsmechanicsElement);
          const toggleMoreAnnouncementsOptions = announcementsmechanicsElement.querySelectorAll('.more-options-icon-announcements');
          toggleMoreAnnouncementsOptions.forEach(icon => {
            icon.addEventListener('click', event => {
              event.stopPropagation();
              const dropdown = event.target.nextElementSibling;
              if (dropdown) {
                dropdown.classList.toggle('show');
              } else {
                console.log('Dropdown not found');
              }
            });
          });

          const editButtons = announcementsmechanicsElement.querySelectorAll('.toggleeditnewsForm');
          editButtons.forEach(button => {
            button.addEventListener('click', event => {
              const newsElement = event.target.closest('.news-item');
              const announcementId = newsElement.dataset.newsId;
              const currentTitle = newsElement.querySelector('.news-heading').textContent;
              const currentContent = newsElement.querySelector('.news-content').textContent;
              const editInputTitle = document.getElementById('newsTitle');
              const editInputContent = document.getElementById('newsContent');
              editInputTitle.value = currentTitle;
              editInputContent.value = currentContent;
              AnnouncementsEditForm.dataset.newsId = announcementId;
              AnnouncementsEditForm.classList.add('active');
              overlay.classList.add('active');
            });
          });

          const deleteButtons = announcementsmechanicsElement.querySelectorAll('.deleteNews');
          deleteButtons.forEach(button => {
            button.addEventListener('click', event => {
              const announcementElement = event.target.closest('.news-item');
              const announcementId = announcementElement.dataset.newsId;
              if (confirm('Are you sure you want to delete this news?')) {
                fetch(`https://scapi-nine.vercel.app/mechanicsannouncements/${announcementId}`, {
                  method: 'DELETE',
                  headers: {
                    'Authorization': `Bearer ${token}`
                  }
                })
                  .then(response => response.text())
                  .then(data => {
                    alert(data);
                    location.reload();
                  })
                  .catch(error => console.error('Error deleting announcement:', error));
              }
            });
          });

          return { heading: announcementsmechanics.Title, description: announcementsmechanics.Content, element: announcementsmechanicsElement };
        } else {
          console.error('Error creating announcements:', announcementsmechanics);
          return null;
        }
      });
    })
}
//registration
if (registerForm) {
  registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const userName = document.getElementById('registerUserName').value;
    const userEmail = document.getElementById('registerUserEmail').value;
    const password = document.getElementById('registerPassword').value;

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
      location.reload();
    } else {
      alert('Error registering user');
    }
  });
}

//login

if (token && userName) {
  loginForm.style.display = 'none';
  loginButton.style.display = 'none';
  logoutButton.style.display = 'block';
  userNameDisplay.textContent = "Current Account: " + userName;

  if (togglenewsForm) {
    if (role === 'Owner') {
      togglenewsForm.style.display = 'block';
    } else {
      togglenewsForm.style.display = 'none';
    };
  };

  if (togglenewsFormP) {
    if (role === 'Owner' || role === 'Police Chief') {
      togglenewsFormP.style.display = 'block';
    } else {
      togglenewsFormP.style.display = 'none';
    };
  };

  if (togglenewsFormE) {
    if (role === 'Owner' || role === 'EMS Chief') {
      togglenewsFormE.style.display = 'block';
    } else {
      togglenewsFormE.style.display = 'none';
    };
  };

  if (togglenewsFormM) {
    if (role === 'Owner' || role === 'Mechanics Chief') {
      togglenewsFormM.style.display = 'block';
    } else {
      togglenewsFormM.style.display = 'none';
    };
  };

  if (toggleannouncementFormP) {
    if (role === 'Owner' || role === 'Police Chief') {
      toggleannouncementFormP.style.display = 'block';
    } else {
      toggleannouncementFormP.style.display = 'none';
    };
  };

  if (toggleannouncementFormE) {
    if (role === 'Owner' || role === 'EMS Chief') {
      toggleannouncementFormE.style.display = 'block';
    } else {
      toggleannouncementFormE.style.display = 'none';
    };
  };

  if (toggleannouncementFormM) {
    if (role === 'Owner' || role === 'Mechanics Chief') {
      toggleannouncementFormM.style.display = 'block';
    } else {
      toggleannouncementFormM.style.display = 'none';
    };
  };
} else {
  loginForm.style.display = 'block';
  logoutButton.style.display = 'none';
  userNameDisplay.textContent = '';
}


if (loginForm) {
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const userName = document.getElementById('loginUserName').value;
    const password = document.getElementById('loginPassword').value;

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
      try {
        const result = await response.json();
        localStorage.setItem('token', result.token);
        const decodedToken = JSON.parse(atob(result.token.split('.')[1]));
        localStorage.setItem('userName', decodedToken.username);
        localStorage.setItem('role', decodedToken.role);
        alert('Login successful');
        location.reload();
      } catch (error) {
        console.error('Error parsing JSON:', error);
        alert('Error logging in');
      }
    } else {
      alert('Error logging in');
    }
  });
}
// //end-of-registration/login

//logout
function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('userName');
  localStorage.removeItem('role');
  location.reload();
}

let activityTimeout;
const activityEvents = ['mousemove', 'keydown', 'click', 'scroll'];

function resetActivityTimeout() {
  clearTimeout(activityTimeout);
  activityTimeout = setTimeout(() => {
    logout();
  }, 15 * 60 * 1000);
}

function refreshToken() {
  fetch('/users/refresh-token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(data => {
      if (data.token) {
        localStorage.setItem('token', data.token);
      } else {
        logout();
      }
    })
    .catch(error => {
      console.error('Error refreshing token:', error);
      logout();
    });
}

if (!token && userName && userName.length !== 0) {
  logout();
}

if (token && userName) {
  activityEvents.forEach(event => {
    window.addEventListener(event, () => {
      resetActivityTimeout();
    });
  });
  resetActivityTimeout();
}

if (logoutButton) {
  logoutButton.addEventListener('click', () => {
    logout();
  });
}
//end-of-logout

//news-input
if (NewsMainForm) {
  NewsMainForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const heading = document.getElementById('newsmainHeading').value;
    const content = document.getElementById('newsmainContent').value.trim();
    const charCount = content.length;

    if (charCount > charLimit) {
      alert(`Content exceeds the character limit of ${charLimit} characters.`);
      return;
    }

    const response = await fetch('https://scapi-nine.vercel.app/homenewstbl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        Title: heading,
        Content: content
      })
    });

    if (response.ok) {
      alert('News created successfully');
      location.reload();
    } else {
      alert('Error creating news');
    }
  });
}

if (NewsPoliceForm) {
  NewsPoliceForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const heading = document.getElementById('newspoliceHeading').value;
    const content = document.getElementById('newspoliceContent').value.trim();
    const charCount = content.length;

    if (charCount > charLimit) {
      alert(`Content exceeds the character limit of ${charLimit} characters.`);
      return;
    }

    const response = await fetch('https://scapi-nine.vercel.app/policenewstbl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        Title: heading,
        Content: content
      })
    });

    if (response.ok) {
      alert('News created successfully');
      location.reload();
    } else {
      alert('Error creating news');
    }
  });
}

if (NewsEMSForm) {
  NewsEMSForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const heading = document.getElementById('newsemsHeading').value;
    const content = document.getElementById('newsemsContent').value.trim();
    const charCount = content.length;

    if (charCount > charLimit) {
      alert(`Content exceeds the character limit of ${charLimit} characters.`);
      return;
    }

    const response = await fetch('https://scapi-nine.vercel.app/emsnewstbl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        Title: heading,
        Content: content
      })
    });

    if (response.ok) {
      alert('News created successfully');
      location.reload();
    } else {
      alert('Error creating news');
    }
  });
}

if (NewsMechanicsForm) {
  NewsMechanicsForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const heading = document.getElementById('newsmechanicsHeading').value;
    const content = document.getElementById('newsmechanicsContent').value.trim();
    const charCount = content.length;

    if (charCount > charLimit) {
      alert(`Content exceeds the character limit of ${charLimit} characters.`);
      return;
    }

    const response = await fetch('https://scapi-nine.vercel.app/mechanicsnewstbl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        Title: heading,
        Content: content
      })
    });

    if (response.ok) {
      alert('News created successfully');
      location.reload();
    } else {
      alert('Error creating news');
    }
  });
}
//end-of-news-input

//comments-input
if (CommentsMainForm) {
  CommentsMainForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const content = document.getElementById('comment-main-input').value.trim();
    const charCount = content.length;

    if (charCount > charLimit) {
      alert(`Content exceeds the character limit of ${charLimit} characters.`);
      return;
    }

    const response = await fetch('https://scapi-nine.vercel.app/homecommenttbl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        UserName: userName,
        Content: content
      })
    });

    if (response.ok) {
      alert('Comment created successfully');
      location.reload();
    } else {
      alert('Error creating comment');
    }
  });
}

if (CommentsPoliceForm) {
  CommentsPoliceForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const content = document.getElementById('comment-police-input').value.trim();
    const charCount = content.length;

    if (charCount > charLimit) {
      alert(`Content exceeds the character limit of ${charLimit} characters.`);
      return;
    }

    const response = await fetch('https://scapi-nine.vercel.app/policecommenttbl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        UserName: userName,
        Content: content
      })
    });

    if (response.ok) {
      alert('Comment created successfully');
      location.reload();
    } else {
      alert('Error creating comment');
    }
  });
}

if (CommentsEMSForm) {
  CommentsEMSForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const content = document.getElementById('comment-ems-input').value.trim();
    const charCount = content.length;

    if (charCount > charLimit) {
      alert(`Content exceeds the character limit of ${charLimit} characters.`);
      return;
    }

    const response = await fetch('https://scapi-nine.vercel.app/emscommenttbl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        UserName: userName,
        Content: content
      })
    });

    if (response.ok) {
      alert('Comment created successfully');
      location.reload();
    } else {
      alert('Error creating comment');
    }
  });
}

if (CommentsMechanicsForm) {
  CommentsMechanicsForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const content = document.getElementById('comment-mechanics-input').value.trim();
    const charCount = content.length;

    if (charCount > charLimit) {
      alert(`Content exceeds the character limit of ${charLimit} characters.`);
      return;
    }

    const response = await fetch('https://scapi-nine.vercel.app/Mechanicscommenttbl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        UserName: userName,
        Content: content
      })
    });

    if (response.ok) {
      alert('Comment created successfully');
      location.reload();
    } else {
      alert('Error creating comment');
    }
  });
}
//end-of-comments-input

//announcements-input
if (AnnouncementsPoliceForm) {
  AnnouncementsPoliceForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const heading = document.getElementById('announcementpoliceHeading').value;
    const content = document.getElementById('announcementpoliceContent').value.trim();
    const charCount = content.length;

    if (charCount > charLimit) {
      alert(`Content exceeds the character limit of ${charLimit} characters.`);
      return;
    }

    const response = await fetch('https://scapi-nine.vercel.app/policeannouncementtbl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        Title: heading,
        Content: content
      })
    });

    if (response.ok) {
      alert('Announcement created successfully');
      location.reload();
    } else {
      alert('Error creating announcement');
    }
  });
}

if (AnnouncementsEMSForm) {
  AnnouncementsEMSForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const heading = document.getElementById('announcementemsHeading').value;
    const content = document.getElementById('announcementemsContent').value.trim();
    const charCount = content.length;

    if (charCount > charLimit) {
      alert(`Content exceeds the character limit of ${charLimit} characters.`);
      return;
    }

    const response = await fetch('https://scapi-nine.vercel.app/emsannouncementtbl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        Title: heading,
        Content: content
      })
    });

    if (response.ok) {
      alert('Announcement created successfully');
      location.reload();
    } else {
      alert('Error creating announcement');
    }
  });
}

if (AnnouncementsMechanicsForm) {
  AnnouncementsMechanicsForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const heading = document.getElementById('announcementmechanicsHeading').value;
    const content = document.getElementById('announcementmechanicsContent').value.trim();
    const charCount = content.length;

    if (charCount > charLimit) {
      alert(`Content exceeds the character limit of ${charLimit} characters.`);
      return;
    }

    const response = await fetch('https://scapi-nine.vercel.app/mechanicsannouncementtbl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        Title: heading,
        Content: content
      })
    });

    if (response.ok) {
      alert('Announcement created successfully');
      location.reload();
    } else {
      alert('Error creating announcement');
    }
  });
}
//end-of-announcements-input

//searchbyHeadings
const updateNewsVisibility = () => {
  const searchValue = searchInput.value.toLowerCase();

  if (NewsMainGrid) {
    newsmainsearch.forEach(news => {
      const matchesSearch = news.heading.toLowerCase().includes(searchValue);

      if (matchesSearch) {
        news.element.classList.remove("hide");
      } else {
        news.element.classList.add("hide");
      }
    });
  }

  if (NewsPoliceGrid) {
    newspolicesearch.forEach(news => {
      const matchesSearch = news.heading.toLowerCase().includes(searchValue);

      if (matchesSearch) {
        news.element.classList.remove("hide");
      } else {
        news.element.classList.add("hide");
      }
    });
  }

  if (NewsEMSGrid) {
    newsemssearch.forEach(news => {
      const matchesSearch = news.heading.toLowerCase().includes(searchValue);

      if (matchesSearch) {
        news.element.classList.remove("hide");
      } else {
        news.element.classList.add("hide");
      }
    });
  }

  if (NewsMechanicsGrid) {
    newsmechanicssearch.forEach(news => {
      const matchesSearch = news.heading.toLowerCase().includes(searchValue);

      if (matchesSearch) {
        news.element.classList.remove("hide");
      } else {
        news.element.classList.add("hide");
      }
    });
  }

  if (AnnouncementsPoliceContainer) {
    announcementspolicesearch.forEach(announcement => {
      const matchesSearch = announcement.heading.toLowerCase().includes(searchValue);

      if (matchesSearch) {
        announcement.element.classList.remove("hide");
      } else {
        announcement.element.classList.add("hide");
      }
    });
  }

  if (AnnouncementsEMSContainer) {
    announcementsemssearch.forEach(announcement => {
      const matchesSearch = announcement.heading.toLowerCase().includes(searchValue);

      if (matchesSearch) {
        announcement.element.classList.remove("hide");
      } else {
        announcement.element.classList.add("hide");
      }
    });
  }

  if (AnnouncementsMechanicsContainer) {
    announcementsmechanicssearch.forEach(announcement => {
      const matchesSearch = announcement.heading.toLowerCase().includes(searchValue);

      if (matchesSearch) {
        announcement.element.classList.remove("hide");
      } else {
        announcement.element.classList.add("hide");
      }
    });
  }
};

if (searchInput) {
  searchInput.addEventListener("input", e => {
    updateNewsVisibility();
  });
}

//news-edit
if (NewsMainEdit) {
  NewsMainEdit.addEventListener('submit', event => {
    event.preventDefault();
    const newsId = NewsEditForm.dataset.newsId
    const newTitle = document.getElementById('newsTitle').value;
    const newContent = document.getElementById('newsContent').value.trim();
    const charCount = newContent.length;

    if (charCount > charLimit) {
      alert(`Content exceeds the character limit of ${charLimit} characters.`);
      return;
    }
    fetch(`https://scapi-nine.vercel.app/homenews/${newsId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ Title: newTitle, Content: newContent })
    })
      .then(response => response.text())
      .then(data => {
        alert(data);
        location.reload();
      })
      .catch(error => console.error('Error updating news:', error));
  });
}

if (NewsPoliceEdit) {
  NewsPoliceEdit.addEventListener('submit', event => {
    event.preventDefault();
    const newsId = NewsEditForm.dataset.newsId
    const newTitle = document.getElementById('newsTitle').value;
    const newContent = document.getElementById('newsContent').value.trim();
    const charCount = newContent.length;

    if (charCount > charLimit) {
      alert(`Content exceeds the character limit of ${charLimit} characters.`);
      return;
    }
    fetch(`https://scapi-nine.vercel.app/policenews/${newsId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ Title: newTitle, Content: newContent })
    })
      .then(response => response.text())
      .then(data => {
        alert(data);
        location.reload();
      })
      .catch(error => console.error('Error updating news:', error));
  });
}

if (NewsEMSEdit) {
  NewsEMSEdit.addEventListener('submit', event => {
    event.preventDefault();
    const newsId = NewsEditForm.dataset.newsId
    const newTitle = document.getElementById('newsTitle').value;
    const newContent = document.getElementById('newsContent').value.trim();
    const charCount = newContent.length;

    if (charCount > charLimit) {
      alert(`Content exceeds the character limit of ${charLimit} characters.`);
      return;
    }
    fetch(`https://scapi-nine.vercel.app/emsnews/${newsId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ Title: newTitle, Content: newContent })
    })
      .then(response => response.text())
      .then(data => {
        alert(data);
        location.reload();
      })
      .catch(error => console.error('Error updating news:', error));
  });
}

if (NewsMechanicsEdit) {
  NewsMechanicsEdit.addEventListener('submit', event => {
    event.preventDefault();
    const newsId = NewsEditForm.dataset.newsId
    const newTitle = document.getElementById('newsTitle').value;
    const newContent = document.getElementById('newsContent').value.trim();
    const charCount = newContent.length;

    if (charCount > charLimit) {
      alert(`Content exceeds the character limit of ${charLimit} characters.`);
      return;
    }
    fetch(`https://scapi-nine.vercel.app/mechanicsnews/${newsId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ Title: newTitle, Content: newContent })
    })
      .then(response => response.text())
      .then(data => {
        alert(data);
        location.reload();
      })
      .catch(error => console.error('Error updating news:', error));
  });
}
//end-of-news-edit

//comments-edit
if (CommentsMainEdit) {
  CommentsMainEdit.addEventListener('submit', event => {
    event.preventDefault();
    const commentId = CommentsEditForm.dataset.commentId
    const newContent = document.getElementById('commentContent').value.trim();
    const charCount = newContent.length;

    if (charCount > charLimit) {
      alert(`Content exceeds the character limit of ${charLimit} characters.`);
      return;
    }
    fetch(`https://scapi-nine.vercel.app/homecomments/${commentId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ Content: newContent })
    })
      .then(response => response.text())
      .then(data => {
        alert(data);
        location.reload();
      })
      .catch(error => console.error('Error updating comment:', error));
  });
}

if (CommentsPoliceEdit) {
  CommentsPoliceEdit.addEventListener('submit', event => {
    event.preventDefault();
    const commentId = CommentsEditForm.dataset.commentId
    const newContent = document.getElementById('commentContent').value.trim();
    const charCount = newContent.length;

    if (charCount > charLimit) {
      alert(`Content exceeds the character limit of ${charLimit} characters.`);
      return;
    }
    fetch(`https://scapi-nine.vercel.app/policecomments/${commentId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ Content: newContent })
    })
      .then(response => response.text())
      .then(data => {
        alert(data);
        location.reload();
      })
      .catch(error => console.error('Error updating comment:', error));
  });
}

if (CommentsEMSEdit) {
  CommentsEMSEdit.addEventListener('submit', event => {
    event.preventDefault();
    const commentId = CommentsEditForm.dataset.commentId
    const newContent = document.getElementById('commentContent').value.trim();
    const charCount = newContent.length;

    if (charCount > charLimit) {
      alert(`Content exceeds the character limit of ${charLimit} characters.`);
      return;
    }
    fetch(`https://scapi-nine.vercel.app/emscomments/${commentId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ Content: newContent })
    })
      .then(response => response.text())
      .then(data => {
        alert(data);
        location.reload();
      })
      .catch(error => console.error('Error updating comment:', error));
  });
}

if (CommentsMechanicsEdit) {
  CommentsMechanicsEdit.addEventListener('submit', event => {
    event.preventDefault();
    const commentId = CommentsEditForm.dataset.commentId
    const newContent = document.getElementById('commentContent').value.trim();
    const charCount = newContent.length;

    if (charCount > charLimit) {
      alert(`Content exceeds the character limit of ${charLimit} characters.`);
      return;
    }
    fetch(`https://scapi-nine.vercel.app/mechanicscomments/${commentId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ Content: newContent })
    })
      .then(response => response.text())
      .then(data => {
        alert(data);
        location.reload();
      })
      .catch(error => console.error('Error updating comment:', error));
  });
}
//end-of-comments-edit

//announcements-edit
if (AnnouncementsPoliceEdit) {
  AnnouncementsPoliceEdit.addEventListener('submit', event => {
    event.preventDefault();
    const announcementId = AnnouncementsEditForm.dataset.newsId;
    const newTitle = document.getElementById('newsTitle').value;
    const newContent = document.getElementById('newsContent').value.trim();
    const charCount = newContent.length;

    if (charCount > charLimit) {
      alert(`Content exceeds the character limit of ${charLimit} characters.`);
      return;
    }
    fetch(`https://scapi-nine.vercel.app/policeannouncements/${announcementId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ Title: newTitle, Content: newContent })
    })
      .then(response => response.text())
      .then(data => {
        alert(data);
        location.reload();
      })
      .catch(error => console.error('Error updating announcements:', error));
  });
}

if (AnnouncementsEMSEdit) {
  AnnouncementsEMSEdit.addEventListener('submit', event => {
    event.preventDefault();
    const announcementId = AnnouncementsEditForm.dataset.newsId;
    const newTitle = document.getElementById('newsTitle').value;
    const newContent = document.getElementById('newsContent').value.trim();
    const charCount = newContent.length;

    if (charCount > charLimit) {
      alert(`Content exceeds the character limit of ${charLimit} characters.`);
      return;
    }
    fetch(`https://scapi-nine.vercel.app/emsannouncements/${announcementId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ Title: newTitle, Content: newContent })
    })
      .then(response => response.text())
      .then(data => {
        alert(data);
        location.reload();
      })
      .catch(error => console.error('Error updating news:', error));
  });
}

if (AnnouncementsMechanicsEdit) {
  AnnouncementsMechanicsEdit.addEventListener('submit', event => {
    event.preventDefault();
    const announcementId = AnnouncementsEditForm.dataset.newsId;
    const newTitle = document.getElementById('newsTitle').value;
    const newContent = document.getElementById('newsContent').value.trim();
    const charCount = newContent.length;

    if (charCount > charLimit) {
      alert(`Content exceeds the character limit of ${charLimit} characters.`);
      return;
    }
    fetch(`https://scapi-nine.vercel.app/mechanicsannouncements/${announcementId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ Title: newTitle, Content: newContent })
    })
      .then(response => response.text())
      .then(data => {
        alert(data);
        location.reload();
      })
      .catch(error => console.error('Error updating announcements:', error));
  });
}
//end-of-announcements-edit

if (
  currentPath === '/html/UserDashboard.html' ||
  currentPath === '/html/UserDashboard-Police.html' ||
  currentPath === '/html/UserDashboard-EMS.html' ||
  currentPath === '/html/UserDashboard-Mechanics.html'
) {

  //usersmanagement
  if (role === 'Owner') {
    fetchUsers("https://scapi-nine.vercel.app/users/owner");
  } else if (role === 'Police Chief') {
    fetchUsers("https://scapi-nine.vercel.app/users/police");
  } else if (role === 'EMS Chief') {
    fetchUsers("https://scapi-nine.vercel.app/users/ems");
  } else if (role === 'Mechanics Chief') {
    fetchUsers("https://scapi-nine.vercel.app/users/mechanics");
  }

  function fetchUsers(endpoint) {
    fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => response.json())
      .then((users) => {
        const userTableBody = document.getElementById('userTableBody');
        userTableBody.innerHTML = '';

        users.forEach((user) => {
          const row = document.createElement('tr');

          row.innerHTML = `
          <td>${user.id}</td>
          <td>${user.username}</td>
          <td>
            <select class="role-dropdown" data-user-id="${user.id}">
              <option value="Member" ${user.role === 'Member' ? 'selected' : ''}>Member</option>
              <option value="Police" ${user.role === 'Police' ? 'selected' : ''}>Police</option>
              <option value="EMS" ${user.role === 'EMS' ? 'selected' : ''}>EMS</option>
              <option value="Mechanics" ${user.role === 'Mechanics' ? 'selected' : ''}>Mechanics</option>
              <option value="Police Chief" ${user.role === 'Police Chief' ? 'selected' : ''}>Police Chief</option>
              <option value="EMS Chief" ${user.role === 'EMS Chief' ? 'selected' : ''}>EMS Chief</option>
              <option value="Mechanics Chief" ${user.role === 'Mechanics Chief' ? 'selected' : ''}>Mechanics Chief</option>
              <option value="Owner" ${user.role === 'Owner' ? 'selected' : ''}>Owner</option>
            </select>
          </td>
          <td>
            <button class="update-role-btn" data-user-id="${user.id}">Update Role</button>
          </td>
        `;

          userTableBody.appendChild(row);
        });

        addRoleUpdateListeners();
      })
      .catch((error) => console.error('Error fetching users:', error));
  }

  function addRoleUpdateListeners() {
    const updateButtons = document.querySelectorAll('.update-role-btn');

    updateButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const userId = event.target.getAttribute('data-user-id');
        const roleDropdown = document.querySelector(`.role-dropdown[data-user-id="${userId}"]`);
        const newRole = roleDropdown.value;

        fetch(`https://scapi-nine.vercel.app/users/${userId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify({ role: newRole }),
        })
          .then((response) => {
            if (response.ok) {
              alert('User role updated successfully');
              fetchUsers();
            } else {
              alert('Failed to update user role');
            }
          })
          .catch((error) => console.error('Error updating user role:', error));
      });
    });
  }

  if (searchnameInput) {
    searchnameInput.addEventListener('input', (event) => {
      const searchValue = event.target.value.toLowerCase();

      const rows = userTableBody.querySelectorAll('tr');
      rows.forEach((row) => {
        const usernameCell = row.querySelector('td:nth-child(2)');
        if (usernameCell) {
          const username = usernameCell.textContent.toLowerCase();
          if (username.includes(searchValue)) {
            row.style.display = '';
          } else {
            row.style.display = 'none';
          }
        }
      });
    });
  }
}
//end-of-usersmanagement