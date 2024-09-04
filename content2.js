chrome.storage.local.get(['CenterEnabled'], function(result) {
    const CenterCheckbox = result.CenterEnabled;

if (CenterCheckbox){
location.replace("https://trevor.myschoolapp.com/app/student#studentmyday/assignment-center")
}});