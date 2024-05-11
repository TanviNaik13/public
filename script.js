

 function LogoTheme() {
    var lightLogo = document.getElementById('light-logo');
    var darkLogo = document.getElementById('dark-logo');
    var scrollPosition = window.scrollY;
    var body = document.body;

    
    if (scrollPosition > 100) { 
        body.style.backgroundColor = 'black';
      lightLogo.style.display = 'none';
      darkLogo.style.display = 'block';
    } else {
        body.style.backgroundColor = 'white';
      lightLogo.style.display = 'block';
      darkLogo.style.display = 'none';
    }
  }

  window.addEventListener('scroll', LogoTheme);