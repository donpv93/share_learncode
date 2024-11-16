require('dotenv').config();

const app = require('./src/index');

const connectionDatabase = require('./src/configs/db.config');

const PORT = process.env.PORT || 3000;

(async () => {
    await connectionDatabase();
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})();