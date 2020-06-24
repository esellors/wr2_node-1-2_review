const express = require('express');
const app = express();
const mLCtrl = require('./controllers/messageLogController')

app.use(express.json());

// chat endpoints
app.get('/api/chat', mLCtrl.getAll);
app.post('/api/chat', mLCtrl.addOne);
// app.put('/api/chat', mLCtrl.editOne);
app.delete('/api/chat/:user', mLCtrl.deleteAll);

const SERVER_PORT = 5050;
app.listen(SERVER_PORT, () => console.log(`Server jamming on ${SERVER_PORT}`))