//Initializes body and body css
let body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = '#4B0082';
body.style.margin = 0;

//creates the navbar
let nav = document.createElement('nav');
nav.style.backgroundColor = '#B57EDC';
nav.style.padding = '30px';
nav.style.width = '100%';
nav.style.justifyContent = 'center';
nav.style.display = 'flex';
document.body.append(nav);


//creates the home, about, and gallery button, sets the color, links it, and appends it to the navbar
let homeButton = document.createElement('a');
homeButton.href = 'https://chat.openai.com/';
homeButton.style.color = '#D69FA2'
homeButton.style.fontSize = '30px';
homeButton.textContent = 'Home';
homeButton.style.paddingRight = '30px';
nav.append(homeButton);

let About = document.createElement('a');
About.href = 'https://chat.openai.com/';
About.style.color = '#D69FA2'
About.style.fontSize = '30px';
About.textContent = 'About';
About.style.paddingRight = '30px';
nav.append(About);

let imagesButton = document.createElement('a');
imagesButton.href = 'https://chat.openai.com/';
imagesButton.style.color = '#D69FA2'
imagesButton.style.fontSize = '30px';
imagesButton.textContent = 'Gallery';
nav.append(imagesButton);


//creates a colored space in which the text and image will be added
let body1 = document.createElement('div');
body1.style.backgroundColor = '#BEBEBE';
body1.style.padding = '35px';
body1.style.marginTop = '50px';
body1.style.marginLeft = '50px';
body1.style.marginRight = '50px';
body1.style.borderRadius = '50px';
document.body.append(body1);

//appends the header into body1 and adds text
let header = document.createElement('h1');
header.textContent = 'About The Zonda';
header.style.justifyContent = 'center';
header.style.display = 'flex';
body1.appendChild(header);


