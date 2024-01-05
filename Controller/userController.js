
import User from '../Models/usermodel.js';

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

   
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

  
    const newUser = new User({ username, email, password });

  
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
export const insertUser = async (req, res) => {
    try {
      const { username, email, password } = req.body;
  
     
      const newUser = new User({ username, email, password });
  
     
      await newUser.save();
  
      res.status(201).json({ message: 'User inserted successfully' });
    } catch (error) {
      console.error('Error inserting user:', error.message);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  export const updateUser = async (req, res) => {
    try {
      const userId = req.params.id;
      const { username, email, password } = req.body;
  
     
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
    
      user.username = username || user.username;
      user.email = email || user.email;
      user.password = password || user.password;
  
    
      await user.save();
  
      res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
      console.error('Error updating user:', error.message);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  //delete
  export const deleteUser = async (req, res) => {
    try {
      const userId = req.params.id;
  
      const deletedUser = await User.findByIdAndDelete(userId);
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Error deleting user:', error.message);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
export default{
    registerUser,
    insertUser,
    updateUser,
    deleteUser
} 