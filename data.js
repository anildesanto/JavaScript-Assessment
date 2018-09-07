data = {
  "squadName" : "QA Consulting",
  "secretBase" : "Anchorage",
  "active" : true,
  "members" : [
    {
      "name" : "Matt",
      "age" : 29,
      "secretIdentity" : "The flash-er",
      "skills" : [
        "Java",
        "Testing",
        "JavaScript"
      ]
    },
    {
      "name" : "Dev",
      "age" : 32,
      "secretIdentity" : "Dev Data",
      "skills" : [
        "DevOps",
        "Linux",
        "Consultancy Skills"
      ]
    },
    {
      "name" : "Shafeeq",
      "age" : 32,
      "secretIdentity" : "T H E S H A F E E Q",
      "skills" : [
        "Databases",
        "Java",
        "JavaScript",
        "Chicken Cottage",
      ]
    }
  ]
}
var info = document.getElementById("info");
var options =  document.getElementsByClassName("option");
function show(state,e)
{
  document.getElementById(e).style ="background-color: aquamarine;" +"text-decoration: none;"+ "visibility:" + state;
}
var previousText = "";

function onHover(e)
{
  console.log("hovering");
  previousText =  e.textContent;
  e.textContent = "*" + previousText;
  e.style = "background-color:  gray";
}
function onOut(e)
{
  console.log("out");
  e.textContent = previousText;
  e.style = "text-decoration = none";
}
function checkTrainerName()
{
  clearInfo();
  var trainerName = document.getElementById("search").value;
  if(trainerName == "")
  {
    window.alert("Please enter Trainer name!");
    return false;
  }
  if(findTrainer(trainerName)==false)
  {
    window.alert("Unable to find Trainer try again.");
    return false;
  }
}
function checkSkillsName()
{
  clearInfo();
  var skillName = document.getElementById("searchSkill").value;
  if(skillName == "")
  {
    window.alert("Please enter Skill name!");
    return false;
  }
  if(findTrainer(skillName)==false)
  {
    window.alert("Unable to find Skill try again.");
    return false;
  }
}
function findTrainer(n)
{
  var found = [];
  var is = false;
  for (const key in data) 
  {
    // console.log("first"+data[key]);
    for (const other in data[key]) 
    {
      //console.log("second" +data[key][other]);
      for (const otherOther in data[key][other]) 
      {
        if(data[key][other][otherOther] == data[key][other]["skills"])
           {  
             var skills = data[key][other][otherOther];
             skills.forEach(skill => {
              if(skill.toString().toLowerCase() == n.toLowerCase())
              {
                //showTrainerDetails(data[key][other])
                found[found.length] = data[key][other];
                console.log( "testing skills: " +skill);
               is = true;
              }
            });
           }
          //console.log("third" +data[key][other][otherOther]);
           if(data[key][other][otherOther].toString().toLowerCase() == n.toString().toLowerCase())
           {
             //console.log("found " + n);
             //showTrainerDetails(data[key][other])
             found[found.length] = data[key][other];
             is = true;
           }
      }
    }
  }
  showTrainerDetails(found)
  return is;
}
function clearInfo()
{
  console.log("Clearing info");
  if(  info.children.length>0)
  {
    for (var i = 0; i <= info.children.length; i++) 
    {
      info.removeChild(info.firstChild);
    }
  }
}
function validate()
{
  var nameV = document.getElementById("name").value;
  var dateV = document.getElementById("date").value;
  var addressV = document.getElementById("address").value;
  var codeV = document.getElementById("code").value;
  var emailV = document.getElementById("email").value;
  //
  var validName = /^[a-zA-Z- ]+$/;
  var validDate = /(\d{2}\/\d{2}\/\d{4})/;
  var validAddress = /^[a-zA-Z- ]/;
  var validCode = /(?=.*[a-z].{6,9})/;
  var validEmail = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/;
  //
  var nameCheck = document.getElementById("nameCheck");
  var dateCheck = document.getElementById("dateCheck");
  var addressCheck = document.getElementById("addressCheck");
  var codeCheck = document.getElementById("codeCheck");
  var emailCheck = document.getElementById("emailCheck");
  //
  nameCheck.textContent = "";
  dateCheck.textContent = "";
  addressCheck.textContent = "";
  codeCheck.textContent = "";
  emailCheck.textContent = "";
  var valid  = true;
  if((nameV == "" | dateV == "" |addressV == "" |codeV == "" |emailV == ""))
  {
    window.alert("Fill in details!");
    valid = false;
  }
  if(!(nameV.match(validName)))
  {
    nameCheck.textContent = "Invalid Name";
    valid = false;
  }
  if(!(dateV.match(validDate)))
  {
    dateCheck.textContent = "Invalid Date";
    valid = false;
  }
  if(!(addressV.match(validAddress)))
  {
    addressCheck.textContent = "Invalid Address";
    valid = false;
  }
  if(!(codeV.match(validCode)))
  {
    codeCheck.textContent = "Invalid PostCode";
    valid = false;
  }
  if(!(emailV.match(validEmail)))
  {
    emailCheck.textContent = "Invalid Email";
    valid = false;
  }
  localStorage.setItem("name",nameV);
  localStorage.setItem("date",dateV);
  localStorage.setItem("address",addressV);
  localStorage.setItem("code",codeV);
  localStorage.setItem("email",emailV);
  return valid;
}

function showTrainerDetails(objs)
{
  //
  if(objs.length >0)
  {
    var t = document.createElement("table");
    var trow1 = document.createElement("tr");
    //
    var nameTitle = document.createElement("th");
    nameTitle.textContent = "Name";
    var ageTitle = document.createElement("th");
    ageTitle.textContent = "AGE";
    var secretTitle = document.createElement("th");
    secretTitle.textContent = "SECRET IDENTITY";
    var skillsTitle = document.createElement("th");
    skillsTitle.textContent = "SKILLS";
    //
    trow1.appendChild(nameTitle);
    trow1.appendChild(ageTitle);
    trow1.appendChild(secretTitle);
    trow1.appendChild(skillsTitle);
    //
    t.appendChild(trow1);
    objs.forEach(obj => 
    {
      var trow2 = document.createElement("tr");
      info.removeChild
      var skillsDetails = "";
      obj.skills.forEach(skill => {
        skillsDetails += "\n" + skill ;
      });
      //----------------------------------------
      var nameh3 = document.createElement("th");
      nameh3.textContent = obj.name;
      //
      var agep = document.createElement("th");
      agep.textContent = obj.age;
      //
      var secretp = document.createElement("th");
      secretp.textContent =obj.secretIdentity;
      //
      var skillsp = document.createElement("th");
      skillsp.textContent =skillsDetails;
      //----------------------------------------
      trow2.appendChild(nameh3);
      trow2.appendChild(agep);
      trow2.appendChild(secretp);
      trow2.appendChild(skillsp);
      
      t.appendChild(trow2);
    });
    
    //console.log(obj.name + " is " + obj.age + " his secret identity is: " + obj.secretIdentity + "  and his skills are:\n" + skillsDetails);
    t.border = "5px";
    t.cellPadding = "10px 15px";
    t.style.backgroundColor = "aquamarine";

    info.appendChild(t);
    /*
    info.appendChild(nameh3);
    info.appendChild(agep);
    info.appendChild(secretp);
    info.appendChild(skillsp);*/
 }
}
/*
function validate()
{
  var nameV = document.getElementById("name").value;
  var dateV = document.getElementById("date").value;
  var addressV = document.getElementById("address").value;
  var codeV = document.getElementById("code").value;
  var emailV = document.getElementById("email").value;
  //
  var validName = /^[a-zA-Z- ]+$/;
  var validDate = /(\d{2}\/\d{2}\/\d{4})/;
  var validAddress = /^[a-zA-Z- ]/;
  var validCode = /(?=.*[a-z].{6,9})/;
  var validEmail = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/;
  //
  var nameCheck = document.getElementById("nameCheck");
  var dateCheck = document.getElementById("dateCheck");
  var addressCheck = document.getElementById("addressCheck");
  var codeCheck = document.getElementById("codeCheck");
  var emailCheck = document.getElementById("emailCheck");
  //
  nameCheck.textContent = "";
  dateCheck.textContent = "";
  addressCheck.textContent = "";
  codeCheck.textContent = "";
  emailCheck.textContent = "";
  var valid  = true;
  if((nameV == "" | dateV == "" |addressV == "" |codeV == "" |emailV == ""))
  {
    window.alert("Fill in details!");
    valid = false;
  }
  if(!(nameV.match(validName)))
  {
    nameCheck.textContent = "Invalid Name";
    valid = false;
  }
  if(!(dateV.match(validDate)))
  {
    dateCheck.textContent = "Invalid Date";
    valid = false;
  }
  if(!(addressV.match(validAddress)))
  {
    addressCheck.textContent = "Invalid Address";
    valid = false;
  }
  if(!(codeV.match(validCode)))
  {
    codeCheck.textContent = "Invalid PostCode";
    valid = false;
  }
  if(!(emailV.match(validEmail)))
  {
    emailCheck.textContent = "Invalid Email";
    valid = false;
  }
  localStorage.setItem("name",nameV);
  localStorage.setItem("date",dateV);
  localStorage.setItem("address",addressV);
  localStorage.setItem("code",codeV);
  localStorage.setItem("email",emailV);
  return valid;
}*/
function displayOnLoad()
{
  console.log("loded");
  document.getElementById("name").innerHTML = localStorage.getItem('name');
  document.getElementById("code").textContent = localStorage.getItem('code');
  document.getElementById("address").textContent = localStorage.getItem('address');
  document.getElementById("email").textContent = localStorage.getItem('email');
  document.getElementById("date").textContent = localStorage.getItem('date');
}