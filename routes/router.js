import express from 'express';
import Jimp from 'jimp';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

const router = express.Router();
const __dirname = import.meta.dirname;


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'))
});

router.get('/resultado', async(req, res) => {
    const imageName = `img-${uuidv4().slice(0, 6)}.jpg`;
    const { img } = req.query;
    const jimpImg = await Jimp.read(img);
    await jimpImg
      .resize(350, Jimp.AUTO)
      .grayscale()
        .writeAsync(`assets/img/${imageName}`);
    res.sendFile(path.join(__dirname, `../assets/img/${imageName}`))
});

export default router;