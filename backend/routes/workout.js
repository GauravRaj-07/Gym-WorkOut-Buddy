const express=require('express')

const router=express.Router()

/** 
 * Route: /api/workouts
 * Method: GET
 * Description: Get All workouts
 * Access: Public
 * Parameters: None
*/
router.get('/',(req,res)=>{
    res.json({
        msg:"GET all workouts"
    })
})

/** 
 * Route: /api/workouts/:id
 * Method: GET
 * Description: Get a single workout by its id
 * Access: Public
 * Parameters: id
*/
router.get('/:id',(req,res)=>{
    res.json({
        msg:"Get a single workout by its id"
    })
})

/** 
 * Route: /api/workouts/
 * Method: POST
 * Description: Create/Add a new workout
 * Access: Public
 * Parameters: none
*/
router.post('/',(req,res)=>{
    res.json({
        msg:"Create/Add a new workout"
    })
})

/** 
 * Route: /api/workouts/:id
 * Method: DELETE
 * Description: Delete a workout by its id
 * Access: Public
 * Parameters: id
*/
router.delete('/:id',(req,res)=>{
    res.json({
        msg:"Delete a workout by its id"
    })
})

/** 
 * Route: /api/workouts/:id
 * Method: PATCH
 * Description: Update a workout by its id
 * Access: Public
 * Parameters: id
*/
router.patch('/:id',(req,res)=>{
    res.json({
        msg:"Update/Patch a workout by its id"
    })
})


module.exports=router