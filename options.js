document.addEventListener('DOMContentLoaded', function() {
  const CenterCheckbox = document.getElementById('Center');
  const DetailCheckbox = document.getElementById('Detail');

  // Load saved settings
  chrome.storage.local.get(['CenterEnabled', 'DetailEnabled'], function(result) {
    CenterCheckbox.checked = result.CenterEnabled !== undefined ? result.CenterEnabled : false;
    DetailCheckbox.checked = result.DetailEnabled !== undefined ? result.DetailEnabled : false;
  });

  // Autosave settings on change
  CenterCheckbox.addEventListener('change', function() {
    chrome.storage.local.set({ CenterEnabled: CenterCheckbox.checked }, function() {
      console.log('Assignment Center setting autosaved:', CenterCheckbox.checked);
    });
  });

  DetailCheckbox.addEventListener('change', function() {
    chrome.storage.local.set({ DetailEnabled: DetailCheckbox.checked }, function() {
      console.log('Assignment Detail setting autosaved:', DetailCheckbox.checked);
    });
  });
});
