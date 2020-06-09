const router = require('express').Router();
let user = require('../modules/user');
const { createUser ,UpdateContacts ,getUserById ,photo ,DeleteContact,getUserById_call} = require('../Controllers/Users');


//all of params

router.param("userId", getUserById);

router.route('/').get((req,res) => {
    user.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error : ' + err));
});

router.post('/add' , createUser);
router.get("/photo/:userId", photo);
router.get("/student/:userId", getUserById_call);

//update route
router.put(
  "/add/:userId",UpdateContacts
);

router.delete(
  "/delete/:userId" , DeleteContact
)

module.exports = router;