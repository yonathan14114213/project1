data = [{
    "id": "0",
    "title": "water",
    "description":"2L of miniral-water from RAMAT HA GOLAN",
    "price": "9",
    "category": "drinks",
    "image": "data.use(express.static('./publicity/water-img.jfif'))",
    "quantity": "28",
    "rating":{
        "rate": "7",
        "count":"549"
    }
},{
    "id": "1",
    "title": "apple-juce",
    "description": "1.5L of 100% fruit-made juce from the switest apples of POLAND",
    "price": "18",
    "category": "drinks",
    "image": "data.use(express.static('./publicity/apple-img.jfif'))",
    "quantity": "43",
    "rating": {
        "rate":"8",
        "count":"87"
    }
}]
const id = 2
function setID() {
    id++
    return id-1
};

const express = require('express')
const app = express()
const morgan = require('morgan')
const send = require('send')
const port = 3000

//app.use(morgan);
app.get('/', (req, res)=>{
    res.send(data)
})

app.get('/:id', (req, res) => {
    ans = data[req.params.id]
    if (ans === null) {
        res.send("there isn't any product with that id")
    }
    res.send(ans)
})

app.post('/', (req, res)=>{
    const a = {
        id: setID(),
        title: req.body.title,
        description:req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: req.body.image,
        quantity:req.body.quantity,
        rating:{
            rate: req.body.rating.rate,
            count: req.body.rating.count
        }
    };
    if (req.body.title===undefined || req.body.description===undefined||
        req.body.price===undefined||req.body.category===undefined||
        req.body.image ===undefined||req.body.quantity === undefined||
        req.body.rating.rate===undefined||req.body.rating.count===undefined){
            res.send("you didn't send one or more of the arguments");
    }
    data.push(a);
    res.send(data);
})

app.put('/edit/:id', (req, res)=>{
    product = data[req.params.id];
    if(req.body.title!==undefined){
        product.title = req.body.title;
    }if(req.body.description!==undefined){
        product.description = req.body.description;
    }if (req.body.price!==undefined) {
        product.price = req.body.price;        
    }if (req.body.category!==undefined) {
        product.category = req.body.category;        
    }if(req.body.image !== undefined){
        product.image = req.body.image;
    }if(req.body.quantity !== undefined){
        product.quantity = req.body.quantity;
    }if(req.body.rating.rate !== undefined){
        product.rating.rate = req.body.rating.rate;
    }if(req.body.rating.count !== undefined){
        product.rating.count = req.body.rating.count;
        }
    res.send(data);
});
app.delete('/:id',(req, res)=>{
    data.splice(req.params.id, 1);
    res.send(data);
})

app.put('/add/:id',(req, res)=>{
    data[req.params.id].quantity++
    res.send(data[req.params.id])
})
app.put('/remove/:id',(req, res)=>{
    data[req.params.id].quantity -= 1;
    res.send(data[req.params.id])
})

app.listen(port, (req, res)=>{
    //morgan,
    console.log(`the server is up and running on port ${port}`)
})