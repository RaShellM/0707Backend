var express = require('express');
const People = require('../models/people');
var router = express.Router();

/* GET catalog listing. */
router.get('/list', async (req, res, next) => {
    try{
        const personnes = await People.find();
        console.log('la liste des personnes :', JSON.stringify(personnes));
        res.send(personnes);
        }
    catch (err){
        console.log('erreur');
        res.status(400).send('err');
        }
    });


    
//  /* GET catalog une instance de la base. */
// router.get('/:id', async (req, res, next) =>{

//     const id = req.params.id;

//     try{
//         const smoothie = await Recepie.findById(id);
//         console.log(smoothie);
//         res.send(smoothie);
//         }
//     catch (err){
//         console.log('erreur');
//         res.status(400).send('err');
//         }
//     });

module.exports = router;
