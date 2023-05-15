const Connect = new XMLHttpRequest();

const owner = document.getElementById('owner');

Connect.open('GET', '/Scripts/Customers.xml', false);
Connect.setRequestHeader('Content-Type', 'text/xml');
Connect.send(null);

var TheDocument = Connect.responseXML;

var fullName =
  TheDocument.getElementsByTagName('name')[0].textContent.toString();
var faculty =
  TheDocument.getElementsByTagName('faculty')[0].textContent.toString();
var age = TheDocument.getElementsByTagName('age')[0].textContent.toString();

owner.innerHTML = `${fullName}, ${age} y.o, was a ${faculty} student!`;
