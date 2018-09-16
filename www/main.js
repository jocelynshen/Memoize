// Modal Image Gallery
// Used to toggle the menu on small screens when clicking on the menu button
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
main();


