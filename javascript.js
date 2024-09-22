let jsonData = {
    name: "Tayyab",
    about: "My name is Tayyab ur Rehamn. I am a computer science student. I love problem solving and learning new technologies, and these days I am learning web development.",
    gitlink: "https://github.com/Tayyab-ur-Rehman",
    instalink: "https://www.instagram.com/tayyab_rh/",
    linkdinlink: "https://www.linkedin.com/in/tayyab-ur-rehman-12a126257/",
    competitions:["ICPC online",  "ICPC All Pakistan" , "HACK-X by LUMS" ,"SOFT TECH" ],
    competitions_info:[
        "The International Collegiate Programming Contest (ICPC) is one of the most prestigious competitive programming competitions for university students worldwide.Me along my team took part in the competition and among 300 teams from Pakistan my team was selected for next round"
        ," The International Collegiate Programming Contest (ICPC) is one of the most prestigious competitive programming competitions for university students worldwide.On campus competition held in GIKI"
        ,"HackX LUMS is an annual hackathon organized by the Lahore University of Management Sciences (LUMS) in Pakistan"
        ,"CP competition conducted by Fast university "
    ]
    
};

let json_form = JSON.stringify(jsonData);
let Data = JSON.parse(json_form);

// Use getElementById to display data

document.getElementById("name").innerHTML = Data.name;
document.getElementById("about").innerHTML = Data.about;
document.getElementById("instagram").href = Data.instalink;
document.getElementById("github").href = Data.gitlink;
document.getElementById("linkdin").href = Data.linkdinlink;


for(let i=0;i<4;i++)
{
    let  h="h"+i.toString();
    let p="p"+i.toString();
    document.getElementById(h).innerHTML = Data.competitions[i];
    document.getElementById(p).innerHTML = Data.competitions_info[i];
}
   

