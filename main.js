
function changeColor1(tex){
    tex.target.style.fontSize = '20px';
    tex.target.style.backgroundColor = 'tan';
    tex.target.style.fontFamily = 'cursive';
    tex.target.style.borderRadius = '20px'   
}
function resetColor2(text2){
    text2.target.style.backgroundColor = 'rgba(224, 224, 222, 0.471)';
    text2.target.style.fontSize = '15px';
    text2.target.style.fontFamily = 'arial';
    text2.target.style.borderRadius = '0px'
    text2.target.style.color = 'black'
}

function changeColor(text){
    text.target.style.fontSize = '20px';
    text.target.style.backgroundColor = 'red';
    text.target.style.fontFamily = 'cursive';
    text.target.style.borderRadius = '20px'   
}
function resetColor(text1){
    text1.target.style.backgroundColor = 'rgba(224, 224, 222, 0.471)';
    text1.target.style.fontSize = '15px';
    text1.target.style.fontFamily = 'arial';
    text1.target.style.borderRadius = '50px 100px'
    text1.target.style.color = 'black'
}


function changeClick(txt){
    txt.target.style.color = 'yellow';    
}

function addEventListenerToCheckBtn(){
    let btn = document.getElementById('del');   
        btn.addEventListener('mouseover', changeColor1);
        btn.addEventListener('mouseleave', resetColor2);          
}
addEventListenerToCheckBtn();

function addEventListenerToSubmitBtn(){
    let btn = document.getElementById('submit');   
        btn.addEventListener('mouseover', changeColor);
        btn.addEventListener('mouseleave', resetColor); 
        btn.addEventListener('click', changeClick)         
}
addEventListenerToSubmitBtn();

function titleColor(text2){
    text2.target.style.backgroundColor = 'yellow';
    text2.target.style.color = 'blue'
    text2.target.style.fontFamily = 'cursive'
    text2.target.style.fontSize = '50px'
    text2.target.style.width = '300px'
}
function resetHeading(reset1){
    reset1.target.style.backgroundColor = 'lightgreen'
    reset1.target.style.fontSize = '25px';
    reset1.target.style.fontFamily = 'helvatic';
    reset1.target.style.borderRadius = '0px'
    reset1.target.style.color = 'black'
}

function addEventToHeading(){
    let btn1 = document.getElementById('h1');    
        btn1.addEventListener('mouseover', titleColor);
        btn1.addEventListener('mouseleave', resetHeading)
    
}
addEventToHeading();


document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        listName(e.target.ln.value);
        pict(e.target.file.value);
        form.reset();
    })
    
})


function listName(lname){
    let p = document.createElement('p');
    p.textContent = `${lname} `;
    

        // change the input text color according to the priority
    let option = document.querySelector('#priority')
    if(option.value==='High'){
            p.style.color='red'
            p.style.fontWeight = 'bold'
            p.style.fontSize = '30px'
            
    }
    else if(option.value==='Medium'){
        p.style.color='blue'  
        p.style.fontSize = '20px'     
    }
    else if(option.value==='Low'){
        p.style.color='green'
        p.style.fontStyle = 'italic'
    }
    
        // Display the input text in the browser
    let suppr = document.createElement('button');
    suppr.textContent = 'x';
    suppr.addEventListener('click', handleDelete)
    p.appendChild(suppr).style.color = 'red'

    document.querySelector('#addNew').appendChild(p);
}


function handleDelete(e){
    e.target.parentNode.remove();
}

