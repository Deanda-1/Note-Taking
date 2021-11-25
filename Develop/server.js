const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');

const PORT = process.env.port || 3001;

const app = express();

app.use(express.static('public'));
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);
app.post('/api/notes', (req, res) => {
    // exstract payload from js
    fb.post('/', (req, res) => {
        // Destructuring assignment for the items in req.body
        const { email, feedbackType, feedback } = req.body;
      
        // If all the required properties are present
        if (email && feedbackType && feedback) {
          // Variable for the object we will save
          const newFeedback = {
            email,
            feedbackType,
            feedback,
            feedback_id: uuidv4(),
          };
      
          readAndAppend(newFeedback, './db/feedback.json');
      
          const response = {
            status: 'success',
            body: newFeedback,
          };
      
          res.json(response);
        } else {
          res.json('Error in posting feedback');
        }
      });
      
      module.exports = fb;
    // save it to your json file
    app.get('/notes', function (req, res) {
      res.send('notes.html')
     
      app.get('/notes', function (req, res) {
        res.send('index.html')

        app.post('/notes', function (req, res) {
          res.send('POST request to the homepage')
    })

    const getNotes = () =>
  fetch('/api/notes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });



})

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);})})