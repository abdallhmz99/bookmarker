
var Bookmarks
if(localStorage.getItem("our_data")==null)
{ Bookmarks=[] ; }
else
{
    Bookmarks=JSON.parse(localStorage.getItem("our_data"))
    display();
}


function newBookmark()
{  
   var site_Name = document.getElementById("siteName").value;

   var site_Link = document.getElementById("siteLink").value;

   
   Bookmarks.push({name:site_Name, link:site_Link})

   localStorage.setItem("our_data",JSON.stringify(Bookmarks))

   display()
   clear_filds()
}

function clear_filds()
{
    document.getElementById("siteName").value="";

    document.getElementById("siteLink").value="";
}

function display()
{   var rss=""
for(var i =0;i<Bookmarks.length;i++)
{   
    rss=rss+'<div  class=" onemarkbg rounded-lg container  py-3 px-2 my-3 row">' + '<h3 class="col-md-4">'+Bookmarks[i].name+"</h3>"+'<a class="btn btn-info col-md-1 mx-2 " href="'+Bookmarks[i].link+'" >'+"visit"+"</a>"+'<button onclick="Delete('+i+')" type="button"  class="btn btn-danger col-md-1 mx-2">'+"Delete</button>"
    +"</div>" 
    
}
document.getElementById("demo").innerHTML=rss
}



function Delete(bmindex)
{   Bookmarks.splice(bmindex,1)
    localStorage.setItem("our_data",JSON.stringify(Bookmarks))
    display()
}