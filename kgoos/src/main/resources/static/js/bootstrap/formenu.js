//first
function hidemenu_header(li)
{
    var menu_ul = li.getElementsByTagName("ul")[0];
    menu_ul.style.display = "none";
}

function showmenu_header(li)
{
    try {
        var menu_ul = li.getElementsByTagName("ul")[0];
        menu_ul.style.display = "block";
    }
    catch (e) {
        alert(e);
    }
}
//tohk
function hidemenu_header_third(li) {
    try{
        
        var menu_ul = li.getElementsByTagName("ul")[0];
        menu_ul.style.display = "none";
    }
    catch (e) {
        alert(e);
    }
}

function showmenu_header_third(li) {
    try {
        var menu_ul = li.getElementsByTagName("ul")[0];
        menu_ul.style.display = "block";
    }
    catch (e) {
        alert(e);
    }
}

