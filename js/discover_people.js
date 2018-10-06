localStorage.setItem('pl', JSON.stringify([]));
var patients = JSON.parse(localStorage.getItem('pl'))

var curr_name = "Mohamed";
var curr_user = "swag";
var curr_pass = "nvembu";
var curr_age = 10;
var curr_ints = ["Soccer", "Dancing", "Fortnite"];
var curr_pic = "none.jpg"

function Patient (f_name, l_name, user, pass, age, med_id) {
  this.name = f_name + " " + l_name;
  this.user = user;
  this.pass = pass;
  this.age = age;
  this.ints = [];
  this.pic = "";
  this.med_id = med_id;
}

var swag = new Patient(curr_name, curr_name, curr_user, curr_pass, curr_age, 1122332);
swag.ints = curr_ints;

var Navya = new Patient("Navya", "Kalale", "nva", "cscscs", 12, 121212);

var Monica = new Patient("Monica", "Chang", "mchang", "Mon", 10, 121212)

var Nikhila = new Patient("Nikhila", "Vembu", "nvembu", "Tequila", 12, 121212);

var Aldrich = new Patient("Aldrich", "Ronquillo", "alpal", "Buzz", 7, 121212);


patients.push(Navya);
patients.push(Monica);
patients.push(Nikhila);
patients.push(Aldrich);

function compare(user, patient) {
  var common = [];
  var p_interests = patient.ints;

  var j;
  for (j = 0; j < user.ints.length; j++) {
    if (p_interests.includes(user.ints[j])) {
      common.push(user.ints[j]);
      }
    }
  return {name: patient.name, common: common, c_l: common.length};
}

function find_friends(user, patients) {
  var i;
  var friends = [];
  for (i=0; i < patients.length; i++){
    var patient = patients[i];
    var yeet = compare(user, patient);
    friends.push(yeet);
  }
  return friends;
}

var similars = find_friends(swag, patients)

function sortDict(D) {
    D.sort(function(a, b){return a.c_l - b.c_l});
}

################################################################################################################
var events = [];

function Event (name, where, when, tags, about) {
  this.name = name;
  this.place = where;
  this.date = when;
  this.tags = tags;
  this.bio = about;
}

var acappella = new Event("Acappella from Arizona High School", "Activities Room", "7 pm, October 13th", ["Piano"], "Come watch and sing along with 3 A cappella groups from Arizona High School")

var art = new Event("Evening of Art!", "Activies Room", "4pm, October 10th", ["Dancing", "Piano", "Drawing"], " Our awesome volunteers are going to hold mini-lessons in drawing, dancing, sculpting, and piano. ")

events.push(acappella);
events.push(art);

function compare_e(user, event) {
  var common = [];
  var tags = event.tags;
  var j;
  for (j = 0; j < user.ints.length; j++) {
    if (event.tags.includes(user.ints[j])) {
      common.push(user.ints[j]);
      }
    }
  return {name: event.name, common: common, c_l: common.length};
}

function find_events(user, events) {
  var i;
  var myevents = [];
  for (i = 0; i < events.length; i++){
    var event = events[i];
    var yeet = compare_e(user, event);
    myevents.push(yeet);
  }
  return myevents;
}
################################################################################################################

function search_patients(name) {
  var i;
  for (i = 0; i < patients.length; i++) {
    if (patients[i].name == name) {
      return patients[i];
    }
  }
  return 0;
}

################################################################################################################

//login
function submit(){
  console.log("submitted & saved");
  curr_name = $("inputName").val();
  curr_medId = $("inputMedicalID").val();
  curr_user = $("inputUsername").val();
  curr_pass = $("inputPassword").val();
  curr_age = parseInt($("inputAge").val(), 10);
  var pl = localStorage.getItem("patientsList");
  console.log(pl);
  //pl.push(new Patient(curr_name, "", curr_user, curr_pass, curr_age, [], "", curr_medId));
  localStorage.setItem("patientsList", pl);
  console.log(pl);
}
