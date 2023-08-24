console.log('1')
const mydiv = document.getElementById('main');
const mybutton = document.getElementById('alldata');
mybutton.addEventListener('click',()=>{
    console.log("qae");
    getDatabyId(0);
    })



async function getData() {
    mybutton.style.color = 'yellow';
    const resp =  await fetch("http://localhost:3000/");
    const data = await resp.json();
    console.log(data);
    mydiv.textContent = data;
}
async function getDatabyId(id) {
    mybutton.style.color = 'red';
    const resp =  await fetch(`http://localhost:3000/:${id}`);
    const data = await resp.json();
    console.log(data);
    mydiv.textContent = data;
}


async function post(title, description, price, category, imagesrc, quantity, rate, caunt) {
    const reqOptions = {
        method: 'post',
        body: JSON.stringify({title: title,
            description:description,
            price:price,
            category:category,
            image:application.use(express.static(imagesrc)),
            quantity:quantity,
            rating:{
                rate:rate,
                count:count
            }
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }
}