
var j = 1;
var k = 1;

function add()
{

    var head = String(prompt("Enter the heading"));

    var item = Number(prompt("Enter number of tasks"));

    var arr1 = new Array();

    for(var i = 0 ; i < item ; i++)
    {
        arr1[i] = prompt("Enter " + (i+1) + " Element");
    }

    var boxmain = document.getElementById("boxdiv");
    var boxx = document.createElement("div");
    boxx.setAttribute("id", `"${k}"`);
    k++;
    boxx.className = "box auto";
    boxx.innerHTML += `<h3 onclick = "headclick()">${head}</h3>`;

    for(var i = 0; i < item; i++)
    {
        if(arr1[1] != "")
        {
            boxx.innerHTML += `<h4>
            <input type = "checkbox" id="id${j}" onclick = "checkl()">
            <label for ="id${j}" id ="label${j}">${arr1[i]}</label>
            </h4>` 

            j++;
        }
    }

    if((head!=="" && item!=null))
        boxmain.appendChild(boxx);
    
}


function headclick()
{
    var ask = Number(prompt("Enter how many items: "));
    var thebox = document.getElementById("id" + k);

    for(var i = 0 ; i < ask ;i++)
    {
        var extraitem = String(prompt("Enter the item "));
        thebox.innerHTML += `<input type = "checbox" id = "id${j}" onclick = "check1()">
        <label for = "id${j}" id = "label${j}">${extraitem}</label>
        </h4>`

        j++;
    }

}

function checkl() {
    for (var i = 1; i <= j; i++) {
        var checkb = document.getElementById("id" + i);
        if (checkb.checked == true) {
            document.getElementById("label" + i).style.textDecorationLine = "line-through";
            document.getElementById("label" + i).style.color = "#C2C2C2";
        } else {
            document.getElementById("label" + i).style.textDecorationLine = "none";
            document.getElementById("label" + i).style.color = "#424242";
        }
    };
}

