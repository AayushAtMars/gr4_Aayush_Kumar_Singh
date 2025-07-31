import User from '../models/user.js';

export const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and Email are required' });
    }


//for checking
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(409).json({ error: 'User already exists with this email' });
    }

    const user = await User.create({ name, email });
    res.status(201).json(user);
  } 
  catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
