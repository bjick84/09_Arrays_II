/*********   Theorie **********/

// // push() / pop()
// // push --> Daten rein ... (+)
// let arr = [];
// output(arr);
// arr.push("Ich");
// output(arr);
// arr.push("bin");
// output(arr);
// arr.push("Marinus");
// output(arr);

// // pop() --> Daten raus ... (-)
// output(arr.pop());
// output(arr)
// output(arr.pop());
// output(arr)
// output(arr.pop());
// output(arr)

/*
Aufgabe:
Erstellen Sie eine JS-Struktur, die Ihnen den folgenden String 
einer HTML-Seite ausgibt:
<html><head></head><body><h1></h1><p></p></body></html>
Verwenden Sie dafür die untenstehenden Arrays
*/

const ERR_STR   = "ERROR !! Irgendwas ging schief !"
const COBJ      = {open_o:"<",close_o:"</",close:">"}
const CONTROLS  = ["<", "</", ">"];
const TAGS = [  "html",
				"head","head",
				"body",
                "h1","h1",
                "p","p",
                "ul","li","li","li","li","li","li","ul",
                "p","p",
                "ol","li","li","ol",
                "body",
				"html"
            ];

let stack = [];

// Modul: HTML-Synthese | Test
output(getHTML());

function getHTML() {
  
    let htmlStr = "";

    for (let i = 0; i < TAGS.length; i++)
    { 

        htmlStr += checkTag(TAGS[i]);

        if(isOpenElement(TAGS[i]))
        {
            htmlStr += getElement(TAGS[i],"open");
        } 
        else
        {
            htmlStr += getElement(TAGS[i],"close");
        } 

        htmlStr += "\n";  

    }

    return htmlStr;
}

function checkTag(tag) {

    let str = "";

    switch (tag)
    {
        case "html":
            return str;

        case "head":
        case "body":
            return str += "\t";

        case "li":
            return str += "\t\t\t"

        default:
            return str += "\t\t";
    }
}




// Modul: Zusammenbau der Elements: <tagStr> --> Tests:
// output(getElement(TAGS[1],"open"));
// output(getElement(TAGS[1],"close"));
// output(getElement(TAGS[1]));

function getElement(tag,op)
{

    switch (op)
    {
        case "open":
            // return CONTROLS[0] + tag + CONTROLS[2];
            return COBJ.open_o + tag + COBJ.close
    
        case "close":
            // return CONTROLS[1] + tag + CONTROLS[2];
            return COBJ.close_o + tag + COBJ.close

        default:
            return ERR_STR;
    }

}

// output(isOpenElement(TAGS[0]));
// output(isOpenElement(TAGS[1]));
// output(isOpenElement(TAGS[2]));

function isOpenElement(tag)
{
    if (stack[stack.length -1] != tag)
    {
        stack.push(tag);
        // output(stack);
        return true;
    }
    else
    {
        stack.pop();
        // output(stack);
        return false;
    }
      
}


// Modul: Ausgabe | Test
//output("hi");
function output(outputData) {
    console.log(outputData);
}
