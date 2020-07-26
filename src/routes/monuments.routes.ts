import { Router } from 'express';
import { uuid } from 'uuidv4';

const monumentsRouter = Router();

const monuments = [
  {
    id: '1',
    imgs_urls: [
      'http://exemple.com/assets/img1.jpg',
      'http://exemple.com/assets/img2.jpg',
      'http://exemple.com/assets/img3.jpg',
    ],
    name: 'Monument Name',
    neighborhood: 'Monument Neighborhood',
    information: {
      description:
        "That's the monument's description, here will be information  about this monument nowadays.",
      open_hours: [
        {
          day: 'Monday',
          open: '08h',
          close: '16h',
        },
      ],
      enter_price: 6.5,
    },
    history: {
      fundation_date: '18/05/1850',
      origin: 'A text about this monument origin, and why it was founded',
      important_facts: "Monuments important fact's in history",
    },
  },
];

monumentsRouter.get('/:id', (req, res) => {
  const { id } = req.params;

  const monumentExists = monuments.find(monument => monument.id === id);

  if (!monumentExists) {
    return res.status(400).json({ message: 'Monument not found' });
  }

  const monument = monumentExists;

  return res.status(200).json(monument);
});

export default monumentsRouter;
