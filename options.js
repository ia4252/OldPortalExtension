 function GetURL(){
    return new Promise((resolve, reject) => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          // Resolve with the URL of the first tab (active tab)
          resolve(tabs[0]?.url || 'No URL');
        }
      });
    });
      }

function execute_script(script){
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: [script]
      }, () => {
      });
    }
  });
}
document.addEventListener('DOMContentLoaded', function() {
  const CenterCheckbox = document.getElementById('Center');
  const DetailCheckbox = document.getElementById('Detail');

  // Load saved settings
  chrome.storage.local.get(['CenterEnabled', 'DetailEnabled'], function(result) {
    CenterCheckbox.checked = result.CenterEnabled !== undefined ? result.CenterEnabled : false;
    DetailCheckbox.checked = result.DetailEnabled !== undefined ? result.DetailEnabled : false;
  });

  // Autosave settings on change
  CenterCheckbox.addEventListener('change', async function() {
    chrome.storage.local.set({ CenterEnabled: CenterCheckbox.checked }, async function() {
      console.log('Assignment Center setting autosaved:', CenterCheckbox.checked);
      GetURL()
      .then(url => {
      if (url == "https://trevor.myschoolapp.com/lms-assignment/assignment-center/student"){
        execute_script("content2.js")
      }else{
        execute_script("content3.js")
      }})
    });
  });

  DetailCheckbox.addEventListener('change', function() {
    chrome.storage.local.set({ DetailEnabled: DetailCheckbox.checked }, function() {
      console.log('Assignment Detail setting autosaved:', DetailCheckbox.checked);
      GetURL()
      .then(url =>{
      if (url.startsWith("https://trevor.myschoolapp.com/lms-assignment/assignment/assignment-student-view/")){
        execute_script("content1.js")
      }else{
        execute_script("content3.js")

      }})
    });
  });
});
