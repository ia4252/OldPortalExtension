
chrome.storage.local.get(['DetailEnabled', 'CenterEnabled'], function(result) {
    const DetailCheckbox = result.DetailEnabled;
    const CenterCheckbox = result.CenterEnabled;

if (window.location.href.startsWith("https://trevor.myschoolapp.com/app/student#assignmentdetail/")){
    if(!DetailCheckbox){
var IndexID = window.location.href.slice(69, 77)
    location.replace("https://trevor.myschoolapp.com/lms-assignment/assignment/assignment-student-view/"+IndexID)}

}else if(window.location.href == "https://trevor.myschoolapp.com/app/student#studentmyday/assignment-center" && !CenterCheckbox){
    location.replace("https://trevor.myschoolapp.com/lms-assignment/assignment-center/student")
}
}
)