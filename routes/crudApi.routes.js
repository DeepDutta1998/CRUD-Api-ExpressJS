const router = require("express").Router();
const crudApiControllers = require("../controller/crudApi.controller");

router.get("/", crudApiControllers.showMessage);
router.post("/create", crudApiControllers.create);
router.get("/fetch-data", crudApiControllers.fetchData);
router.post("/update/:id", crudApiControllers.update);
router.get("/delete/:id", crudApiControllers.delete);

module.exports = router;
