// getElementByClassName()

// let samllImages = document.getElementsByClassName('oldImg');
// for(let i = 0; i < samllImages.length; i++) {
// console.dir(samllImages[i]);
// console.dir(samllImages[i].src);
//     samllImages[i].src = "assests/images/spiderman_img.png";
//     console.log(`value of image no. ${i} has been changed`);
// };



// getElementByTagName()

// console.dir(document.getElementsByTagName('p'));
// console.dir(document.getElementsByTagName('p')[0]);
// console.dir(document.getElementsByTagName('p')[0].innerText);
// console.dir(document.getElementsByTagName('p')[0].innerText = 'Asif Khan');


// Query Selector 

// console.dir(document.querySelector('h1'));
// console.dir(document.querySelector('h1').innerText = 'Tea');
// console.dir(document.querySelector('#mainImg'));
// console.dir(document.querySelector('.oldImg'));
// console.dir(document.querySelector('div a'));
// console.dir(document.querySelectorAll('div a'));
// console.dir(document.querySelectorAll('p'));


//setting content in objects
// let para = document.querySelector('p');
// console.dir(para);
// console.dir(para.innerText);
// console.dir(para.innerHTML);
// console.dir(para.textContent);




//Manupulating style
// let img = document.querySelector('img');

// console.dir(img);
// console.dir(img.style);
// console.log(img.previousElementSibling.style.color = 'blue');

// console.dir(img.style.width = '35%');

// for heading 

// let head = document.querySelector('h1');
// console.dir(head);
// console.dir(head.style);
// console.dir(head.style.color = '#f0f');


// let links = document.querySelectorAll('.box a');
// console.dir(links);
// for (let i = 0; i < links.length; i++) {
//     links[i].style.color = 'yellow';
// }
// for(let link of links) {
//     link.style.color = 'green';
// }


//classlist 

// let heading = document.querySelector('h1');
// console.dir(heading);
// console.dir(heading.classList.add('xyz'));
// console.dir(heading.classList.add('purple'));
// console.dir(heading.classList.remove('purple'));
// console.dir(heading.setAttribute('class', 'purple'));
// console.dir(heading.classList.add('underline'));
// console.dir(heading.classList.contains('underline'));
// console.dir(heading.classList.toggle('underline'));
// console.dir(heading.classList);




//navigation on page
//parentElement

// let h4 = document.querySelector('h4');
// console.dir(h4);
// console.log(h4.parentElement);
// console.dir(h4.parentElement);




//childern

// let box = document.querySelector('.box');
// console.dir(box);
// console.log(box.children);
// console.dir(box.children);




//childElementCount

// console.log(box.childElementCount);
// console.dir(box.childElementCount);



//previousElementSibling/nextElementSibling
// let list = document.querySelector('.images');
// console.dir(list);
// console.log(list);
// console.log(list.children);
// console.log(list.children[0]);

//Adding elements on page

// let newPara = (document.createElement('p'));
// console.dir(newPara);
// newPara.innerText = 'Hey, This is new Paragraph.';
// console.dir(newPara);

//appendChld function
// let body = document.querySelector('body');
// console.log(box.appendChild(newPara));

//prepend function
// box.prepend(newPara);
// let inserElement = body.appendChild(newPara);
// console.log(inserElement);
// let btn = document.createElement('button');
// btn.innerText = 'Click me!';
// box.appendChild(btn);
//append fuction
// newPara.append('This is more new text in the paragraph.')
// newPara.append(btn)
// newPara.append(`Don't click!`)

//insertAdjacentElement

// let btn = document.createElement('button');
// btn.innerHTML = 'NEW BUTTON!!!';
// let p = document.querySelector('p');
// p.insertAdjacentElement("beforebegin", btn);
// p.insertAdjacentElement("afterbegin", btn);
// p.insertAdjacentElement("beforeend", btn);
// p.insertAdjacentElement("afterend", btn);

//remove elements
// let body = document.querySelector('body');
// body.removeChild(btn);
// btn.remove();

//==================================================================================
//practice question
// let para1 = document.createElement('p');
// para1.innerText = `Hey I'm red!`;
// document.querySelector('body').appendChild(para1);
// para1.style.color = '#f00';
// para1.classList.add('red');


// let heading = document.createElement('h3');
// heading.innerText = `Hey I'm blue h3!`;
// document.querySelector('body').appendChild(heading);
// heading.style.color = '#00f';
// heading.classList.add('blue');


// let div = document.createElement('div');
// let h1 = document.createElement('h1');
// let p = document.createElement('p');
// h1.innerText = 'I am in a div';
// p.innerText = 'ME TOO!!!';
// div.append(h1);
// div.append(p);
// div.classList.add('div');
// document.querySelector('body').appendChild(div);

//note:- div ke andar h1,p append hain isliye h1,p bhi body ke upar aa jayenge kuki div ko body me append kiya gya hai



