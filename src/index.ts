import express from "express";
import userRouter from './routes/user.router';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

// User Routes
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`Server up and running on port : ${port}`);
});
