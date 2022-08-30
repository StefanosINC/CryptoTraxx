const User = require('../Schema/UserModel');

exports.createUser = async(req, res) => {
    try {
        const newUser = await User.create(req.body);
        console.log(newUser);

        res.status(201).json({
            status: 'success',
            data: {
                user: newUser
                 }
            }); // 201 means created
        }
        catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
            });
        }
};

exports.getAllUsers = async(req, res) => {
    try {  
       const users = await User.find(req.body);
       
       res.status(200).json({
        status: 'success',
        results: users.length,
        data: { users }
    });
    } catch (err) {
    res.status(404).json({
        status: 'fail',
        message: 'Invalid Data Sent'
        });
    }
};

exports.getUserById = async (req, res) => {
    try {
     const user = await User.findById(req.params.id);
     // Tour.findById -> Tour.findOne({_ID: req.params.id}) This and line 22 are the same
     res.status(200).json({
         status: 'success',
         results: user.length,
         data: { user }
     });
    } catch (err) {
     res.status(404).json({
         status: 'fail',
         message: 'Invalid Data Sent'
         });
     }
};

 exports.updateUser = async (req, res) => {
     try {
         const user = await User.findByIdAndUpdate(req.params.id, req.body, { // Update
             new: true,
             runValidators: true
         })
 
         res.status(200).json({
             status: 'success',
             data: {
                 user: user
             }
            });
         } catch (err) {
         res.status(404).json({
             status: 'fail',
             message: err
             });
     }
 
         
};

 exports.deleteUser = async (req, res) => {
     try {
         const user = await User.findByIdAndDelete(req.params.id);
         res.status(204).json({
             status: 'success',
             data: { user: user }
     });
     } catch (err) {
         res.status(404).json({
             status: 'fail',
             message: err
             });
     }
};