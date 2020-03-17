const mongoose = require("mongoose");
const AppUserSchema = mongoose.Schema({
    Name: {
        required: true,
        type: string
    },
    Email: {
        required: true,
        type: string
    },
    Password: {
        required: true,
        type: string
    },
    Projects: {
        ProjectName:{
            required: true,
            type: string
        },
        Versions: [
            {
                required : true,
                versionName: {
                    required: true,
                    type: string
                },
                versionModels: [
                    {
                        ModelName: {
                            required: false,
                            type: string
                        },
                        ModelUrl: {
                            required: false,
                            type: String
                        },
                        PointsOfInterest: [{
                                    PointName: {
                                        required: false,
                                        type: String
                                    },
                                    PointUrl: {
                                        required: false,
                                        type: String
                                    }
                                }
                            
                        ]
                    }
                ]
            }

        ]
    }
        
});

module.exports = mongoose.model("AppUsers", AppUserSchema)