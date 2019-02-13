let about = document.getElementById("about");
let getAbout = document.getElementById("getAbout");
let resume = document.getElementById("resume");
let getResume = document.getElementById("getResume");
let works = document.getElementById("works");
let getWorks = document.getElementById("getWorks");
let blog = document.getElementById("blog");
let getBlog = document.getElementById("getBlog");
let contact = document.getElementById("contact");
let getContact = document.getElementById("getContact");
let getAll	= document.getElementById("all_e");
let getPhoto = document.getElementById("photo_e");
let getVideo = document.getElementById("video_e");
let photo = document.getElementById("photo");
let video = document.getElementById("video");
let Greece = document.getElementById('Greece');
let modalGreece = document.getElementById('myModalGreece');
let spanGreece = document.getElementById("closeGreece");
let modalTurkey = document.getElementById('myModalTurkey');
let Turkey = document.getElementById('Turkey');
let spanTurkey = document.getElementById("closeTurkey");

console.log(getResume)

function remove() {
    about.classList.remove('view');
    getAbout.classList.remove('selected');
    resume.classList.remove('view');
    getResume.classList.remove('selected');
    works.classList.remove('view');
    getWorks.classList.remove('selected');
    blog.classList.remove('view');
    getBlog.classList.remove('selected');
    contact.classList.remove('view');
    getContact.classList.remove('selected');
}

getPhoto.addEventListener('click', function (e) {
		e.preventDefault();
		photo.classList.remove('view2');
		video.classList.add('view2');
});

getVideo.addEventListener('click', function (e) {
		e.preventDefault();
		video.classList.remove('view2');
		photo.classList.add('view2');
});

getAll.addEventListener('click', function (e) {
		e.preventDefault();
		video.classList.remove('view2');
		photo.classList.remove('view2');
});

getAbout.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove('about');
        about.classList.add('view');
        getAbout.classList.add('selected');
    }

});
getResume.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        resume.classList.add('view');
        getResume.classList.add('selected');
    }
});
getWorks.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        works.classList.add('view');
        getWorks.classList.add('selected');
    }
});
getBlog.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        blog.classList.add('view');
        getBlog.classList.add('selected');
    }
});
getContact.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        contact.classList.add('view');
        getContact.classList.add('selected');
    } 
});

let email = document.getElementById("email");
let form = document.getElementById("form");
let message = document.getElementById("message");
let name_ = document.getElementById("name_");


email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I expect an e-mail, darling!");
  } else {
    email.setCustomValidity("");
  }
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    localStorage.setItem('ContactEmail', email.value);
    localStorage.setItem('ContactMessage', message.value);
    localStorage.setItem('ContactName', name_.value);

    
    var link = "mailto:migan703@gmail.com"
             + "?subject=" + escape("Contactar")
             + "&body=" + escape(email.value)
             + ": "
             + escape(message.value)
    ;

    window.location.href = link;
  });

  // When the user clicks on the button, open the modal 
Greece.onclick = function() {
    modalGreece.style.display = "block";
  }

  // When the user clicks on the button, open the modal 
Turkey.onclick = function() {
    modalTurkey.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
spanGreece.onclick = function() {
    modalGreece.style.display = "none";
  }

  // When the user clicks on <span> (x), close the modal
spanTurkey.onclick = function() {
    modalTurkey.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalGreece) {
        modalGreece.style.display = "none";
    }
    
    if (event.target == modalTurkey) {
        modalTurkey.style.display = "none";
    }
  }