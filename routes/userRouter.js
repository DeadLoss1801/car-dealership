import express from 'express'
const router = express.Router();

// to view all cars
router.route('/cars')

// b. To view all cars in a dealership
router.route('/dealership/:id')

// c. To view dealerships with a certain car
router.route('/car/:id')

// d. To view all vehicles owned by user
route.route('/vehicles')

// e.  To view the dealerships within a certain range based on user location(use maps api)



//  f. To view all deals on a certain car