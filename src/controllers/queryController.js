const queryService = require("../services/queryService");

exports.executeQuery = async (req, res) => {

    try {

        // If Content-Type is application/json
        let query = req.body.query;

        // If Content-Type is text/plain
        if (typeof req.body === "string") {
            query = req.body;
        }

        const result = await queryService.execute(query);

        res.status(200).json({
            success: true,
            data: result
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};