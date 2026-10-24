// Cite toggles and copy-to-clipboard for publication entries.
(function () {
  var toggles = document.querySelectorAll('.pub__cite');
  toggles.forEach(function (btn) {
    var panel = document.getElementById(btn.getAttribute('aria-controls'));
    if (!panel) return;
    btn.hidden = false;
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      panel.hidden = open;
    });
  });

  var live = document.createElement('p');
  live.className = 'visually-hidden';
  live.setAttribute('aria-live', 'polite');
  live.style.cssText = 'position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;';
  document.body.appendChild(live);

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:fixed;top:-1000px;opacity:0;';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy') ? resolve() : reject(); }
      catch (e) { reject(e); }
      finally { document.body.removeChild(ta); }
    });
  }

  document.querySelectorAll('.copy[data-copy]').forEach(function (btn) {
    var label = btn.querySelector('span');
    btn.addEventListener('click', function () {
      var source = document.getElementById(btn.getAttribute('data-copy'));
      if (!source) return;
      copyText(source.textContent.trim()).then(function () {
        btn.dataset.state = 'copied';
        if (label) label.textContent = 'Copied';
        live.textContent = 'Copied to clipboard';
        setTimeout(function () {
          delete btn.dataset.state;
          if (label) label.textContent = 'Copy';
          live.textContent = '';
        }, 2000);
      }, function () {
        if (label) label.textContent = 'Select and copy';
        live.textContent = 'Copy failed. Select the text and copy it manually.';
      });
    });
  });
})();
