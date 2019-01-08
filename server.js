const express = require("express");
const app = express();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' })
const bodyParser = require("body-parser");

app.use('/',bodyParser.urlencoded({extended: false}));
app.get('/',(req, res)=>{
	res.sendFile(__dirname+"/view/index.html");
})
app.use(express.static(__dirname+"/public"));

app.post("/api/upload", upload.single('file'),(req, res)=>{
	
	res.json({
		"name": req.file.originalname,
		"type": req.file.mimetype,
		"size": req.file.size
	});
});

app.listen(process.env.PORT||8080);