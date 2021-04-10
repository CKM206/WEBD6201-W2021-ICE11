// Express Configuration
import express from 'express';
const router = express.Router();
export default router;

// Contact Model
import Contact from "../Models/contact"; // Contact Alias

router.get('/', function(req, res, next) 
{
    

});

/* Display edit/:id page - with /edit/:id */
router.get('/edit/:id', function(req, res, next) 
{
  
  
});

/* Process edit/:id page - with /edit/:id */
router.post('/edit/:id', function(req, res, next) 
{
  
  
});

/* Display add page - with /add */
router.get('/add', function(req, res, next) 
{
  
});

/* Process edit/:id page - with /edit/:id */
router.post('/add', function(req, res, next) 
{
  

});

/* Process delete/:id page - with /delete/:id */
router.get('/delete/:id', function(req, res, next) 
{

  
});


