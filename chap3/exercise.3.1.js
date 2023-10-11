const express = require('express');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

const objectToString = obj =>
    Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n'); //특정 object의 key값들을 불러오라는 뜻. map을 하게 되면 key, value 쌍으로 된 문자열이 나오게 됨. 
    
app.get('/', (req, res) => res.send(objectToString(req.query)));
app.post('/', (req, res) => res.send(objectToString(req.body)));
app.put('/', (req, res) => res.send(objectToString(req.body)));
app.delete('/', (req, res) => res.send(objectToString(req.body)));
app.listen(port, () => console.log(`Server listening on port ${port}!`));