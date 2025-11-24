import users from "../model/userModel.js";

const getUserID1 = (req, res) => {
    // req.params.id is a string, so we convert it to a number for comparison
    const userId = parseInt(req.params.id); 
    
    // Find the user with the matching ID
    const user = users.find(u => u.id === userId);

    if (user) {
        res.json(user); // Send the user data as JSON
    } else {
        res.status(404).send('User not found'); // Send 404 if no user is found
    }
};
export {
    getUserID1 // 👈 Use export for named exports
};