var patients = [];

var curr_name = "Mohamed";
var curr_user = "swag";
var curr_pass = "nvembu";
var curr_nick = "iHaveAsthma";
var curr_age = 10;
var curr_ints = ["Soccer", "Dancing", "Fortnite"];
var curr_pic = "none.jpg"

function Demo_Person (f_name, l_name, user, pass, nick, age, ints, pic, med_id) {
  this.name = f_name + " " + l_name;
  this.user = user;
  this.pass = pass;
  this.nick = nick;
  this.age = age;
  this.ints = ints;
  this.pic = pic;
  this.med_id = med_id;
  this.common = new array();
}

function Patient (f_name, l_name, user, pass, nick, age, ints, pic, med_id) {
  this.name = f_name + " " + l_name;
  this.user = user;
  this.pass = pass;
  this.nick = nick;
  this.age = age;
  this.ints = ints;
  this.pic = pic;
  this.med_id = med_id;
}

var swag = new Patient(curr_name, curr_name, curr_user, curr_pass, curr_nick, curr_age, curr_ints, curr_pic, 1122332);


var Navya = new Patient("Navya", "Kalale", "nva", "cscscs", "nav", 12, ["Soccer", "Art", "Fortnite", "fubol"], "hoes.jpg");

var Monica = new Patient("Monica", "Chang", "mchang", "fuzzybear", "Mon", 10, ["History","Dancing","Fortnite"], "itME.jpg")

var Nikhila = new Patient("Nikhila", "Vembu", "nvembu", "puppies", "Tequila", 12, ["Piano","Memes","Math"], "sos.jpg");

var Aldrich = new Patient("Aldrich", "Ronquillo", "alpal", "liveluvCS", "Buzz", 7, ["Piano","Math","History"], "yikes.jpg");



patients.push(Navya);


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
document.write(similars[0].name);
function sortFriends() {
    similars.sort(function(a, b){return a.c_l - b.c_l});
}
