//inventory.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating  schema & model
const InventorySchema = new Schema({
	name: {
		type: String,
	},
	quantity: {
		type: Number,
	},
});

const Inventory = mongoose.model("inventory", InventorySchema);
module.exports = Inventory;


//api.js
const express = require("express");
const Inventory = require("../models/inventory");
const router = express.Router();

//get a list of client from db
router.get("/inventory", function (req, res, next) {
	Inventory.find({}).then(function (inventory) {
		res.send(inventory);
	});
});
//getting name = Apple from db
router.get("/inventory/itemname", function (req, res, next) {
	Inventory.findOne({ name: "Apple" }).then(function (inventory) {
		res.send(inventory);
	});
});

router.post("/inventory", function (req, res, next) {
	Inventory.create(req.body)
		.then(function (inventory) {
			res.send(inventory);
			res.status(200); //we can create the new instance and save using this single command
		})
		.catch(next);
});

//update a client in the db
router.put("/inventory/:id", function (req, res, next) {
	Inventory.findByIdAndUpdate({ _id: req.params.id }, req.body).then(
		function () {
			Inventory.findOne({ _id: req.params.id }).then(function (
				inventory
			) {
				res.send(inventory);
			});
		}
	);
});

//del client from db
router.delete("/inventory/:id", function (req, res, next) {
	Inventory.findByIdAndRemove({ _id: req.params.id }).then(function (
		inventory
	) {
		res.send(inventory);
	});
});

module.exports = router;


//index.js
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//set up express app
const app = express();

//connect to mongoDB
mongoose.connect(
	"mongodb+srv://pihu_1310:happy@first-cluster.klux5.mongodb.net/inventory?retryWrites=true&w=majority",
	{ useNewUrlParser: true },
	{ useUnifiedTopology: true, useCreateIndex: true }
);
mongoose.Promise = global.Promise;

//middleware
app.use(bodyParser.json());

//initialize the routes
app.use("/api", require("./routes/api"));

//error handling middleware
app.use(function (err, req, res, next) {
	res.status(422).send({ error: err.message });
});
//listen to req
app.listen(process.env.port || 5000, function () {
	console.log("Listening for requests");
});