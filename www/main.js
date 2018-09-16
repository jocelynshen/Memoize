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
    console.log(element.src)
  document.getElementById("modal01").style.display = "block";
    
}


function makeAngry(){
    
    var url = document.getElementById("img01").src;
    
    db.collection("chats").where("screenURL", "==", url).get().then(function(querySnapshot) {

        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            
            //console.log(doc.id, " => ", doc.data(), doc.data().chatWith);
            doc.ref.update({
                emotion: "angry"
            });
            //console.log("makeangry?");
            //console.log(doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}

function makeCry(){
    
    var url = document.getElementById("img01").src;
    
    db.collection("chats").where("screenURL", "==", url).get().then(function(querySnapshot) {

        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            
            //console.log(doc.id, " => ", doc.data(), doc.data().chatWith);
            doc.ref.update({
                emotion: "cry"
            });
            //console.log("makeangry?");
            //console.log(doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}

function makeFunny(){
    
    var url = document.getElementById("img01").src;
    
    db.collection("chats").where("screenURL", "==", url).get().then(function(querySnapshot) {

        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            
            //console.log(doc.id, " => ", doc.data(), doc.data().chatWith);
            doc.ref.update({
                emotion: "funny"
            });
            //console.log("makeangry?");
            //console.log(doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}

function makeHappy(){
    
    var url = document.getElementById("img01").src;
    
    db.collection("chats").where("screenURL", "==", url).get().then(function(querySnapshot) {

        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            
            //console.log(doc.id, " => ", doc.data(), doc.data().chatWith);
            doc.ref.update({
                emotion: "happy"
            });
            //console.log("makeangry?");
            //console.log(doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}

function makeImportant(){
    
    var url = document.getElementById("img01").src;
    
    db.collection("chats").where("screenURL", "==", url).get().then(function(querySnapshot) {

        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            
            //console.log(doc.id, " => ", doc.data(), doc.data().chatWith);
            doc.ref.update({
                emotion: "important"
            });
            //console.log("makeangry?");
            //console.log(doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}


////////////////////FIND FUNCTIONS
function findFunny(){
    db.collection("chats").where("emotion", "==", "funny").get().then(function(querySnapshot) {

        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            
            //console.log(doc.id, " => ", doc.data(), doc.data().chatWith);
            displaySingleChat(doc.data());
            //console.log("makeangry?");
            //console.log(doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}

function findAngry(){
    db.collection("chats").where("emotion", "==", "angry").get().then(function(querySnapshot) {

        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            
            //console.log(doc.id, " => ", doc.data(), doc.data().chatWith);
            displaySingleChat(doc.data());
            //console.log("makeangry?");
            //console.log(doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}

function findCry(){
    db.collection("chats").where("emotion", "==", "cry").get().then(function(querySnapshot) {

        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            
            //console.log(doc.id, " => ", doc.data(), doc.data().chatWith);
            displaySingleChat(doc.data());
            //console.log("makeangry?");
            //console.log(doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}

function findHappy(){
    db.collection("chats").where("emotion", "==", "Happy").get().then(function(querySnapshot) {

        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            
            //console.log(doc.id, " => ", doc.data(), doc.data().chatWith);
            displaySingleChat(doc.data());
            //console.log("makeangry?");
            //console.log(doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}

function findImportant(){
    db.collection("chats").where("emotion", "==", "important").get().then(function(querySnapshot) {

        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            
            //console.log(doc.id, " => ", doc.data(), doc.data().chatWith);
            displaySingleChat(doc.data());
            //console.log("makeangry?");
            //console.log(doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}

function findName(){
    var name = document.getElementById('nameSearch').value;
    db.collection("chats").where("chatWith", "==", name).get().then(function(querySnapshot) {

        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            
            //console.log(doc.id, " => ", doc.data(), doc.data().chatWith);
            displaySingleChat(doc.data());
            console.log("name?");
            console.log(doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    toggleFunction();
}
///////////////////////end FIND FUNCTIONS
function setName(){
    var name = document.getElementById('myText').value
      console.log(name);
    var captionText = document.getElementById("caption");
      captionText.innerHTML = name;
}

function main()
{
    $(function(){
        var picker = document.getElementById('file');
        picker.addEventListener('change', loadImageFileAsURL)
    })
}

function searchByName(db, chatWithQuery) {
    //var chatsRef = db.collection("chats");
    //console.log(chatsRef);
    //var queryList = chatsRef.where("chatWith", "==", chatWithQuery);
    //clearChatDisplay();

    db.collection("chats").where("chatWith", "==", chatWithQuery).get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            
            console.log(doc.id, " => ", doc.data(), doc.data().chatWith);
            
            displaySingleChat(doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

    clearChatDisplay();
}

function displaySingleChat(data){
    var imageLoaded = document.createElement("img");
            imageLoaded.src = data.screenURL;
            imageLoaded.className = "w3-image w3-padding-large w3-hover-opacity";
            document.getElementById("chatDisplay").prepend(imageLoaded);

            imageLoaded.setAttribute("onclick", "onClick(this)");

}


//For each uploaded file (probably just 1), upload to cloud and run retrieveImageUrl (which downloads the file again and displays)
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
                console.log("filenameis")
                console.log(file)
                //
                memoizeRef.child(file.name).put(file);
                console.log(memoizeRef.name);
                console.log(memoizeRef.fullPath);
                console.log(memoizeRef);
                console.log(file);
                //
                retrieveImageUrl(memoizeRef, file.name);
                
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

//Called when file selected from file dialogue, calls myFunction
function loadImageFileAsURL(e)
{
    var filesSelected = document.getElementById("file").files;
    if (filesSelected.length > 0)
    {
        var fileToLoad = filesSelected[0];

        if (fileToLoad.type.match("image.*"))
        {
            myFunction(memoizeRef);
            
        }
    }
}

function clearChatDisplay(){
    //document.getElementById("chatDisplay").innerHTML = "is this working?";
    //document.body.innerHTML = "is this working?";
    /*window.onload = function what(){
        document.getElementById('chatDisplay').innerHTML = 'hi';
    };
    */
}

function preloading(){
    
}

//loads image file from storage
function retrieveImageUrl(memoizeRef, filename){
     /*
            var storageRef = firebase.storage().ref();
            var spaceRef = storageRef.child('images/photo_1.png');
            var path = spaceRef.fullPath;
            var gsReference = storage.refFromURL('gs://test.appspot.com')
            */
            memoizeRef.child(filename).getDownloadURL().then(function(url) {
              var test = url;
              console.log(test)
              var imageLoaded = document.createElement("img");
            imageLoaded.src = test;
            imageLoaded.className = "w3-image w3-padding-large w3-hover-opacity";
            document.getElementById("chatDisplay").prepend(imageLoaded);

            imageLoaded.setAttribute("onclick", "onClick(this)");
            }).catch(function(error) {

            });
}

main();
