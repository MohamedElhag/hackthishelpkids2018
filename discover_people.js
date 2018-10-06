var patients = new array();

var curr_name = "Mohamed";
var curr_user = "swag";
var curr_pass = "nvembu";
var curr_nick = "iHaveAsthma";
var curr_age = 10;
var curr_ints = new array("Soccer", "Dancing", "Fortnite");
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
  this.med_id = med_id
}

var Us = new Patient(curr_name, curr_name, curr_user, curr_pass, curr_nick, curr_age, curr_ints, curr_pic, 1122332);

patients.push(new Patient("Navya", "Kalale", "nva", "cscscs", "nav", 12, ["Soccer", "Art", "Fortnite", "fubol"], "hoes.jpg"));

function compare(user, patient) {
  var common = new array();
  var j = 0;
  for (j; j < Us.ints.length; j++) {
    if (patient.ints.includes(Us.ints[i])) {
      common.push(Us.ints[i]);
      }
    }
  return {name: patient.name, common: common, c_l: common.length);
}

function find_friends(user, patients) {
  var i = 0;
  var friends = new array();
  for (i; i < patients.length; i++){
    var patient = patients[i];
    var yeet = compare(user, patient);
    friends.push(yeet);
  }
  return friends;
}

var similars = find_friends(Us, patients)

function myFunction() {
    similars.sort(function(a, b){return a.c_l - b.c_l});
}
