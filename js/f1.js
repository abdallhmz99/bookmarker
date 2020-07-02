
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
    rss=rss+'<div  class=" onemarkbg rounded-lg container  py-3 px-2 my-3 row">' + '<h3 class="col-md-4 colorChange">'+Bookmarks[i].name+"</h3>"+'<a class="btn btn-info col-md-1 mx-2 " href="'+Bookmarks[i].link+'" >'+"visit"+"</a>"+'<button onclick="Delete('+i+')" type="button"  class="btn btn-danger col-md-1 mx-2">'+"Delete</button>"+'<button onclick="update('+i+')" type="button"  class="btn btn-success col-md-1 mx-2">'+"update</button>"
    +"</div>" 
    
}
document.getElementById("demo").innerHTML=rss
}


function update(index)
{
    document.getElementById("siteName").value= Bookmarks[index].name;
    document.getElementById("siteLink").value = Bookmarks[index].link;

    document.getElementById("forAdd").style.display = "none"
    document.getElementById("forUpdate").style.display = "inline-block";

    document.getElementById("forUpdate").addEventListener("click" , function(){

        Bookmarks[index].name = document.getElementById("siteName").value;
        Bookmarks[index].link = document.getElementById("siteLink").value;

        localStorage.setItem("our_data" , JSON.stringify(Bookmarks));
        display();
        clear_filds();

        document.getElementById("forAdd").style.display = "inline-block"
        document.getElementById("forUpdate").style.display = "none";

    })

}

function Delete(bmindex)
{   Bookmarks.splice(bmindex,1)
    localStorage.setItem("our_data",JSON.stringify(Bookmarks))
    display()
}


function search(searchInput)
{
        var searchlist="";
        for(var i =0;i<Bookmarks.length;i++)
    {
        if(  Bookmarks[i].name.toLowerCase().includes(searchInput.toLowerCase())  ) 
        {
           
            searchlist=searchlist+'<div  class=" onemarkbg rounded-lg container  py-3 px-2 my-3 row">' + '<h3 class="col-md-4">'+Bookmarks[i].name+"</h3>"+'<a class="btn btn-info col-md-1 mx-2 " href="'+Bookmarks[i].link+'" >'+"visit"+"</a>"+'<button onclick="Delete('+i+')" type="button"  class="btn btn-danger col-md-1 mx-2">'+"Delete</button>"+'<button onclick="update('+i+')" type="button"  class="btn btn-success col-md-1 mx-2">'+"update</button>"
            +"</div>" 
        }    
        
    }


    document.getElementById("demo").innerHTML = searchlist;




}

let lis = $(".color-options ul li");

lis.eq(0).css("background-color","teal") ;

lis.eq(1).css("background-color","yellow");

lis.eq(2).css("background-color","green");

lis.eq(3).css("background-color","tomato");

lis.eq(4).css("background-color","hotpink");

lis.eq(5).css("background-color","black");


lis.click(function() {

    let selectedcolor = $(this).css("background-color");
    $(".colorChange").css({color : selectedcolor});
})


$(".doss").click(function(){

$(".color-options").toggle(1500)

})