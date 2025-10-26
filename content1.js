chrome.storage.local.get(['DetailEnabled'], function(result) {
    const DetailCheckbox = result.DetailEnabled;
if (DetailCheckbox){
var IndexID = window.location.href.slice(-8);
function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;
}
var UserID = JSON.parse(Get("https://trevor.myschoolapp.com/api/GoogleApi/DriveSettings"))["UserId"]
var ID = JSON.parse(Get("https://trevor.myschoolapp.com/api/assignment2/UserAssignmentDetailsGetAllStudentData?assignmentIndexId="+IndexID+"&studentUserId="+UserID+"&personaId=2"))["AssignmentId"]
location.replace("https://trevor.myschoolapp.com/app/student#assignmentdetail/"+ID+"/"+IndexID+"/0/0")
}});