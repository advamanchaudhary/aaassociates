document.addEventListener('DOMContentLoaded', function(){
  // Copy to clipboard for contact (works for English and Hindi copy buttons)
  document.querySelectorAll('.copy-btn').forEach(function(b){
    b.addEventListener('click', function(){
      var text = this.getAttribute('data-copy');
      if(navigator.clipboard){
        navigator.clipboard.writeText(text).then(()=>{
          var old = this.textContent;
          this.textContent = (old === 'Copy' || old === 'कॉपी') ? 'Copied!' : 'Copied!';
          var that = this;
          setTimeout(function(){ that.textContent = old; }, 1500);
        });
      } else {
        var ta = document.createElement('textarea');
        ta.value = text; document.body.appendChild(ta); ta.select();
        try{ document.execCommand('copy'); this.textContent = 'Copied!'; }
        catch(e){} ta.remove();
      }
    });
  });

  // Mobile nav toggle
  var navToggle = document.querySelector('.nav-toggle');
  if(navToggle){
    navToggle.addEventListener('click', function(){
      var nav = document.querySelector('.main-nav');
      if(nav.style.display === 'block') nav.style.display = '';
      else nav.style.display = 'block';
    });
  }

  // Keyboard shortcuts: W -> WhatsApp, E -> Email
  document.addEventListener('keydown', function(ev){
    if(ev.target && (ev.target.tagName === 'INPUT' || ev.target.tagName === 'TEXTAREA')) return;
    var key = ev.key.toLowerCase();
    if(key === 'w'){
      window.open('https://api.whatsapp.com/send?phone=919999397666', '_blank');
    } else if(key === 'e'){
      window.location.href = 'mailto:advamanchaudhary77@gmail.com';
    }
  });
});
