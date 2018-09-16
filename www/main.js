// Modal Image Gallery
// Used to toggle the menu on small screens when clicking on the menu button

// Initialize Cloud Firestore through Firebase

function initializeFirebase(){
  var config = {
                apiKey: "AIzaSyAg4AuCkuiw4VgVIYtFKU4JQgF0PzfzlTA",
                authDomain: "memoize-216516.firebaseapp.com",
                databaseURL: "https://memoize-216516.firebaseio.com",
                projectId: "memoize-216516",
                storageBucket: "memoize-216516.appspot.com",
                messagingSenderId: "889544015679"
            };
            firebase.initializeApp(config);
            

            var db = firebase.firestore();
            var storage = firebase.storage();
            return [db,storage];

}




function addChat(db, chatWith, owner, emotion, screenURL){
  db.collection("chats").add({
                chatWith: chatWith,
                screenURL: screenURL,
                owner: owner,
                emotion: emotion,
                born: new Date(Date.now()),
            })

}

function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
$('.dots li').click(function(){
  $('.active').removeClass('active');
  $(this).addClass('active');
});

function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


function main()
{
    $(function(){
        var picker = document.getElementById('file');
        picker.addEventListener('change', loadImageFileAsURL)
    })
}
var myHeaders =[];
function loadImageFileAsURL(e)
{
    var filesSelected = document.getElementById("file").files;
    if (filesSelected.length > 0)
    {
        var fileToLoad = filesSelected[0];

        if (fileToLoad.type.match("image.*"))
        {
            var fileReader = new FileReader();
            fileReader.onload = function(fileLoadedEvent) 
            {
                var imageLoaded = document.createElement("img");
                var x = document.createElement("HEADER");
                x.setAttribute("id", "myHeader");
                x.setAttribute("class", "w3-center")
                imageLoaded.src = fileLoadedEvent.target.result;
                imageLoaded.className = "w3-image w3-padding-large w3-hover-opacity";
                document.body.appendChild(x);
                var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth()+1; //January is 0!
                var yyyy = today.getFullYear();
                if(dd<10) {
                    dd = '0'+dd
                } 
                if(mm<10) {
                    mm = '0'+mm
                } 
                today = mm+ '/' + dd + '/' + yyyy;
                var y = document.createElement("H3"); 
                var t = document.createTextNode(today);
                y.appendChild(t);
                if(myHeaders.includes(today)){
                    
                }
                else{
                    document.getElementById("myHeader").appendChild(y);
                    myHeaders.push(today);
                }
                imageLoaded.onclick = onClick(imageLoaded);
                imageLoaded.setAttribute("onclick", "onClick(this)")
                document.body.appendChild(imageLoaded);
                
                
                
            }
            fileReader.readAsDataURL(fileToLoad);
        }
    }
}
function retrieveImageUrl(memoizeRef){
     /*
            var storageRef = firebase.storage().ref();
            var spaceRef = storageRef.child('images/photo_1.png');
            var path = spaceRef.fullPath;
            var gsReference = storage.refFromURL('gs://test.appspot.com')
            */
            memoizeRef.child('image.png').getDownloadURL().then(function(url) {
              var test = url;
              console.log("aaa")
              console.log(test)
              var imageLoaded = document.createElement("img");
            imageLoaded.src = test;
            imageLoaded.className = "w3-image w3-padding-large w3-hover-opacity";
            document.body.appendChild(imageLoaded);
            }).catch(function(error) {

            });
            
            //console.log(test)

}



function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
       }
    }
}
main();


