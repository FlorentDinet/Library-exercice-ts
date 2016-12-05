class Dynamically_create_element
{
    htmlelent:HTMLElement;
    Create_Element(htmlelent)
    {
    var element = document.createElement("input");
    //Assign different attributes to the element.
    element.setAttribute("type", htmlelent);
    element.setAttribute("value",htmlelent);
    element.setAttribute("name", htmlelent);
    element.setAttribute("style","color:Red");
    document.body.appendChild(element);
    }
 
}
window.onload = () =>
{
var button = document.createElement('button');
button.innerText = "Add";
button.onclick = function ()
    {
   
    var doc =(<HTMLSelectElement>document.getElementById('Select1')).value;
    var create = new Dynamically_create_element();
    create.Create_Element(doc);
};
document.body.appendChild(button);
};