console.log('1')
const mydiv = document.getElementById('main');
const mybutton = document.getElementById('rooter');
mybutton.addEventListener('click',()=>{
    console.log("qae");
    mybutton.style.color = 'yellow';
    getData();
    })



async function getData() {
    const resp =  await fetch("http://localhost:3000/");
    const data = await resp.json();
    console.log(data);
    mydiv.textContent = data;

}