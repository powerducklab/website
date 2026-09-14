/* PowerDuck MD Editor — Theme Toggle (shared) */
(function(){
  var root=document.documentElement;
  var stored=localStorage.getItem('md-editor-theme');
  var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;
  var theme=stored||(prefersDark?'dark':'light');
  root.setAttribute('data-theme',theme);updateIcon(theme);
  var toggle=document.getElementById('themeToggle');
  if(toggle){
    toggle.addEventListener('click',function(){
      var next=root.getAttribute('data-theme')==='dark'?'light':'dark';
      root.setAttribute('data-theme',next);
      localStorage.setItem('md-editor-theme',next);
      updateIcon(next);
    });
  }
  function updateIcon(t){
    var icon=document.getElementById('themeIcon');
    if(!icon)return;
    if(t==='dark'){
      icon.innerHTML='<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>';
    }else{
      icon.innerHTML='<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
    }
  }
})();
