import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';


dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes )


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});