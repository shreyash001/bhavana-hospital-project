const UserInformation = require("../models/insurance.model.js")
const mongoose = require("mongoose")


const addUserInsuranceDetails = async(req,res) => {
    const insuranceData = req.body;
    const insuranceDetails = new UserInformation({...insuranceData, userId:req.userId});

    try {
        await insuranceDetails.save();
        res.status(200).json({message:"Insurance Detail saved sucessfully",insuranceDetails});
    } catch (error) {
        // console.log(error)
        res.status(500).json({message:"Error saving insurance details"});
    }

    
}

module.exports = {addUserInsuranceDetails}