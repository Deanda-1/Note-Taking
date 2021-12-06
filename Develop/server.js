const express = require('express');
const path = require('path');
//const { clog } = require('./middleware/clog');
const bp = require('body-parser');
const router = express.Router();
const fs = require('fs');
var data = JSON.parse(fs.readFileSync("./db/db.json","utf8"));
const PORT = process.env.port || 3001;

const app = express();
app.use(bp.json());
app.use(bp.urlencoded({extended: false}));

app.use(express.static('public'));
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);
app.get('/api/notes', function(req,res){
  console.log('data',data)
  res.json(data);
});
app.get('/api/notes/:id', function(req,res){
   res.json(data[Number(req.params.id)]);
})
app.post('/api/notes', function(req,res){
  console.log(req.body);
  let newNote=req.body;
  newNote.id=data.length + 1;
  //newNote.id=(data.length).toString();
  (data.length >0)?data.push(newNote):data = [newNote];
  
  FSupdate()
  res.json(data);
})

function FSupdate(){
  fs.writeFileSync("./db/db.json", JSON.stringify(data),function(err){if (err) throw(err);})

}

app.delete('/api/notes/:id', function(req,res){
  let ID = req.params.id;
  data = data.filter((note,index) =>{
    return note.id != Number(ID);
  });
  FSupdate();
  res.json(data);
})

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);