const app = require("./app");
const dotenv = require('dotenv')
const morgan = require('morgan')

dotenv.config({
    path: "./.env",
});

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

const port = process.env.PORT

app.listen(port, () => {
    console.log(`App runing on port ${port}...`)
})

