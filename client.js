console.log('1')
/* const myDataDiv = document.getElementById('main');
const id = document.createElement('h5');
const title = document.createElement('p');
const description = document.createElement('p');
const price = document.createElement('p');
const category = document.createElement('p');
const image = document.createElement('a');
const quantity = document.createElement('p');
const rating = document.createElement('ul');
const rate = document.createElement('li');
const caunt = document.createElement('li');
rating.append(rate, caunt);
myDataDiv.append(id, title, description, price, category, image, quantity, rating);
*/
const myDataButton = document.getElementById('alldata');
myDataButton.addEventListener('click',()=>{
    console.log("2");
    getData();
    });
const dataIDButton = document.getElementById('DataByID');
dataIDButton.addEventListener('click', ()=>{
    console.log('4');
    getDatabyId(0)
});

const thirdButton = document.getElementById('post');
thirdButton.addEventListener('click', ()=>{
    console.log('8');
    post()
})
async function getData() {
    console.log('3');
    myDataButton.style.color = 'yellow';
    const resp =  await fetch("http://localhost:3000/");
    const data = await resp.json();
    console.log(data);
/*    console.log('5');
    myDataDiv.id.textContent = data.id;
    myDataDiv.title.textContent = data.title;
    myDataDiv.description.textContent = data.description;
    myDataDiv.price.textContent = data.price;
    myDataDiv.category.textContent = data.category;
    myDataDiv.image.href = data.image;
    myDataDiv.quantity
    myDataDiv.rate
    myDataDiv.caunt*/
}
async function getDatabyId(id) {
    dataIDButton.style.color = 'red';
    console.log('6');
    const resp =  await fetch(`http://localhost:3000/${id}`);
    const data = await resp.json();
    console.log(data);
    console.log('7');
    myDataDiv.textContent = data;
}

async function post(title, description, price, category, imagesrc, quantity, rate, count) {
    const reqOptions = {
        method: 'post',
        body: JSON.stringify({title: title,
            description:description,
            price:price,
            category:category,
            //image:application.use(express.static(imagesrc)),
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
    await console.log('9',reqOptions.body);
}