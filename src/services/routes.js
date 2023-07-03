import { Router } from 'express';
import historico from '../modulos/historico.js';


const router = Router();

router.get('/', (req, res) => res.redirect('/index.html'));

router.get('/historico', async (req, res) => {
    try {
        const gyms = await Gym.readAll();

        res.json(gyms);
    } catch (error) {
        throw new Error('Error in list gyms');
    }
});

router.post('/history', async (req, res) => {
    try {
        const newHistory = await historico.setHistory(req.body);

        res.json(newHistory);
    } catch (error) {
        console.log(error)

        throw new Error('Error in update gym');
    }
});

router.get('/history', async (req, res) => {
    try {
        historico.readAll().then((data) => {
            // ordena o array de historico por data (mais recente primeiro)
            const historico = data.sort((a, b) => new Date(b.data) - new Date(a.data));
            res.json(historico);
        });
    } catch (error) {
        console.log(error)

        throw new Error('Error in update gym');
    }
});








export default router;

