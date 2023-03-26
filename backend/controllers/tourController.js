const Tour = require('./../models/Tour');

// create new tour
const createTour = async (req, res) => {
    const newTour = new Tour(req.body);
    try {
        const savedTour = await newTour.save();
        res.status(201).send({ success: true, message: 'Tour successfully created', data: savedTour });
    } catch (err) {
        res.status(500).send({ success: false, message: 'Failed to create tour', err });
    }
}

// update tour
const updateTour = async (req, res) => {
    const _id = req.params.id;
    try {
        const updatedTour = await Tour.findByIdAndUpdate(_id, {
            $set: req.body
        }, { new: true });
        res.status(200).send({ success: true, message: 'Tour successfully updated', data: updatedTour });
    } catch (err) {
        res.status(500).send({ success: false, message: 'Failed to update tour', err });
    }
}

// delete tour
const deleteTour = async (req, res) => {
    const _id = req.params.id;
    try {
        await Tour.findByIdAndDelete(_id);
        res.status(200).send({ success: true, message: 'Tour successfully deleted' });
    } catch (err) {
        res.status(500).send({ success: false, message: 'Failed to delete tour', err });
    }
}

// get single tour
const getSingleTour = async (req, res) => {
    const _id = req.params.id;

    try {
        const tour = await Tour.findById(_id).populate('reviews');
        res.status(200).send({ success: true, data: tour });
    } catch (err) {
        res.status(404).send({ success: false, message: 'Failed to get tour', err });
    }
}

// get all tours
const getAllTours = async (req, res) => {

    // for pagination
    const page = parseInt(req.query.page);

    try {
        const tours = await Tour.find({}).populate('reviews').skip((page - 1) * 8).limit(8);
        res.status(200).send({ success: true, count: tours.length, data: tours });
    } catch (err) {
        res.status(404).send({ success: false, message: 'Failed to get tours', err });
    }
}

// get tour by Search
const getTourBySearch = async (req, res) => {
    const city = new RegExp(req.query.city, 'i');
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);

    try {
        const tours = await Tour.find({ city, distance: { $gte: distance }, maxGroupSize: { $gte: maxGroupSize } }).populate('reviews');
        res.status(200).send({ success: true, count: tours.length, data: tours });
    } catch (err) {
        res.status(404).send({ success: false, message: 'Failed to get tours', err });
    }
}

// get featured tours
const getFeaturedTours = async (req, res) => {
    try {
        const tours = await Tour.find({ featured: true }).populate('reviews');
        res.status(200).send({ success: true, count: tours.length, data: tours });
    } catch (err) {
        res.status(404).send({ success: false, message: 'Failed to get tours', err });
    }
}

const getToursCount = async (req, res) => {
    try {
        const toursCount = await Tour.estimatedDocumentCount();
        res.status(200).send({ success: true, toursCount});
    } catch (err) {
        res.status(404).send({ success: false, message: 'Failed to get tours count', err });
    }
}

module.exports = {
    createTour,
    updateTour,
    deleteTour,
    getSingleTour,
    getAllTours,
    getTourBySearch,
    getFeaturedTours,
    getToursCount
}