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

function myFunction(memoizeRef){
    var x = document.getElementById("file");
    var txt = "";
    if ('files' in x) {
        if (x.files.length == 0) {
            txt = "Select one or more files.";
        } else {
            for (var i = 0; i < x.files.length; i++) {
                txt += "<br><strong>" + (i+1) + ". file</strong><br>";
                var file = x.files[i];
                //
                memoizeRef.child("image.png").put(file);
                console.log(memoizeRef.name);
                console.log(memoizeRef.fullPath);
                console.log(memoizeRef);
                console.log(file);
                //

                if ('name' in file) {
                    txt += "name: " + file.name + "<br>";
                }
                if ('size' in file) {
                    txt += "size: " + file.size + " bytes <br>";
                }
            }
        }
    } 
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
                document.getElementById("chatDisplay").appendChild(x);
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
                document.getElementById("chatDisplay").appendChild(imageLoaded);
                //document.body.appendChild(imageLoaded);
                //document.getElementById("chatDisplay").innerHTML = "";

                
                
            }
            fileReader.readAsDataURL(fileToLoad);
            myFunction(memoizeRef);
            retrieveImageUrl(memoizeRef);
        }
    }
}

function clearChatDisplay(){
    document.getElementById("chatDisplay").innerHTML = "";
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
              console.log(test)
              var imageLoaded = document.createElement("img");
            imageLoaded.src = test;
            imageLoaded.className = "w3-image w3-padding-large w3-hover-opacity";
            document.getElementById("chatDisplay").appendChild(imageLoaded);
            }).catch(function(error) {

            });
}

main();


