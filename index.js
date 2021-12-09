const express = require('express') //③번 단계에서 다운받았던 express 모듈을 가져온다.
const app = express() //가져온 express 모듈의 function을 이용해서 새로운 express 앱을 만든다. 🔥
// const hostname = '221.148.55.185'
const port = 4000 //포트는 4000번 해도되고, 5000번 해도 된다. -> 이번엔 5000번 포트를 백 서버로 두겠다.

//db
const db_config = require('./database.js')

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const users = [
  {id : 1, name : 'mjjeong'},
  {id : 2, name : 'lemongrab'},
  {id : 3, name : 'iphone'}
];


app.get("/api/users",(req,res) => {
  res.json({ok : true, users: users})
});


app.get("/api/users/user",(req,res) =>{
  const user_id = req.query.user_id
  const user = users.filter(data => data.id == user_id);
  res.json({ok:false,user:user})
})

app.get("/api/users/user_body",(req,res)=>{
  const user_id = req.body.user_id
  const user = users.filter(data => data.id == user_id);
  res.json({ok : false, user : user})
})


app.get('/', (req, res) => { //express 앱(app)을 넣고, root directory에 오면,
  res.send('node test ! ') //"Hello World!" 를 출력되게 해준다.
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) //포트 5000번에서 이 앱을 실행한다.
