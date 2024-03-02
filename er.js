//Initializes body and body css
let body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = '#4B0082';
body.style.margin = 0;

//creates the navbar
let nav = document.createElement('nav');
nav.style.backgroundColor = '#B57EDC';
nav.style.padding = '30px';
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
body1.style.marginBottom = '50px';
body1.style.borderRadius = '35px';
document.body.append(body1);

//appends the header into body1 and adds text
let header = document.createElement('h1');
header.textContent = 'About The Zonda';
header.style.justifyContent = 'center';
header.style.display = 'flex';
body1.appendChild(header);

//adds the image into the body1 and styles it
let zonda1 = document.createElement('img');
zonda1.src = './zonda1.jpg';
zonda1.alt = 'zonda';
zonda1.style.width = '28%';
zonda1.style.height = 'auto';
zonda1.style.padding = "15px";
zonda1.style.borderRadius = '20px'
zonda1.style.float = 'left';
body1.append(zonda1);

let txt = document.createElement('h3');
txt.textContent = "The Pagani Zonda stands as a monument to the pursuit of automotive perfection, its lineage steeped in the passion and ingenuity of its creator, Horacio Pagani. Emerging from the fertile imagination of this Argentine-Italian visionary, the Zonda made its indelible mark on the hypercar landscape when it debuted in 1999. Pagani, a former composites specialist at Lamborghini, infused the Zonda with a profound understanding of aerodynamics and materials science, drawing inspiration from aerospace engineering and his experiences with the formidable F-16 fighter jet. This influence is evident in the Zonda's sleek lines, sculpted to slice through the air with minimal resistance while exuding an aura of power and elegance. Beneath its sinuous carbon fiber skin lies a marvel of engineering, with a chassis engineered for unparalleled rigidity and agility. Powering this automotive masterpiece are handcrafted engines sourced from Mercedes-AMG, each meticulously tuned to deliver a symphony of performance that stirs the soul. But the Zonda is more than just a feat of engineering; it is a testament to craftsmanship, with each component meticulously handcrafted by skilled artisans in Pagani's atelier in Italy. From the exquisite leather-clad interior to the intricately machined aluminum accents, every detail reflects a commitment to excellence that transcends mere transportation. Indeed, to own a Pagani Zonda is to possess a work of art—a fusion of technology and artistry that ignites the senses and captures the imagination.";
txt.style.fontSize = '25px';
body1.append(txt)

let footer = document.createElement('footer');
footer.style.padding = '40px';
footer.style.backgroundColor = '#B57EDC';
document.body.append(footer);


