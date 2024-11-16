const cors = require('cors');

const corsOptions = () => {
    const allowedOrigins = process.env.CORS_ORIGINS.split(',');
    return cors({
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    });
};

module.exports = corsOptions;