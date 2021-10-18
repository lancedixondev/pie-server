const express = require("express");
const router = express.Router();
const {PieModel} = require("../models")
const {validateSession} = require("../middleware")

//router.get('/', (req, res) => res.send("i love pie!"))

//GET ALL PIES
router.get("/", async(req, res) => {
    try{
        const allPies = await PieModel.findAll()

        res.status(200).json(allPies)
    } catch(err){
        res.status(500).json({error: err});
    }
})

// HOW TO CREATE PIE(OBJECT)
router.post("/create", validateSession, async(req, res) => {
    const {
        nameOfPie,
        baseOfPie,
        crust,
        timeToBake,
        servings,
        rating
    } = req.body;

    try{
        const Pie = await PieModel.create({
            nameOfPie,
            baseOfPie,
            crust,
            timeToBake,
            servings,
            rating
        });

        res.status(201).json({
            message: "Pie successfully created",
            Pie
        })
    }catch (err){
        res.status(500).json({
            message: `Failed to create Pie: ${err}`      
        })
    }
})


router.put("/:id", async (req, res) => {
    const { nameOfPie, baseOfPie, crust, timeToBake, servings, rating } = req.body;
    try {
      const updatedPie = await PieModel.update(
        { nameOfPie, baseOfPie, crust,  timeToBake, servings,  rating },
        { where: { id: req.params.id }, returning: true }
      ).then((result) => {
        res.status(200).json({ message: "Pie successfully updated", updatedPie, result });
      });
    } catch (err) {
      res.status(500).json({ message: `Failed to update pie: ${err}` });
    }
  });



  router.get("/:nameOfPie", async (req, res) => {
    try {
      const locatedPie = await PieModel.findAll({
        where: { nameOfPie: req.params.nameOfPie },
      });
      res.status(200).json({ message: "Pies successfully retrieved", locatedPie });
    } catch (err) {
      res.status(500).json({ message: `Failed to retrieve pies: ${err}` });
    }
  });

  router.delete("/:id", async (req, res) =>{
    try {
        const locatedPie = await PieModel.destroy({
          where: { id: req.params.id },
        });
        res.status(200).json({ message: "Pies successfully removed"});
      } catch (err) {
        res.status(500).json({ message: `Failed to remove pies: ${err}` });
      }
    });

    // router.delete("/delete:id", async(req, res)=> {
    //     try{
    //         const query = {where: {
    //             id: req.params.id
    //         }}
    //         await PieModel.destroy(query)
    //         res.status(200).json({
    //             message: "Pie has Successfully been deleted"
    //         })
    //     } catch(err){
    //         res.status(500).json({
    //             message: "could not delete"
    //         })
    //     }
    // })




module.exports = router;