import { NextApiRequest, NextApiResponse } from 'next';

type Handler = (req: NextApiRequest, res: NextApiResponse) => void;

const handler: Handler = (req, res) => {
  if (req.method === 'POST') {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: 'invalid email address' });
      return;
    }

    res.status(201).json({ message: 'Signed Up' });
  }
};

export default handler;
