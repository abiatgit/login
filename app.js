let express=require("express");
let app=express();
let path=require("path");
let port=3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(express.static(__dirname))

const user ="abi";
const pass =123;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');



app.get("/",(req,res)=>{
    console.log(`Request received URL${req.url}`);
    res.render(path.join(__dirname,"views","index.pug"))
})


app.post("/login", (req, res) => {
    let { username, password } = req.body;
    console.log(`${username}, ${password}`);

    if (username === user && password == pass) {
        res.render("landing.pug");
    } else {
        res.render('index', { message: 'Invalid username or password' });
    }
});

app.listen(port,()=>{
  console.log(`Server Start at Port${port}`);
})