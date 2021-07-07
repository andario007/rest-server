const { Router } = require('express');
const { getUser,
        putUser,
        deleteUser,
        postUser,
        putUserParam } = require('../controllers/user.controllers');

const router = Router();

router.get('', getUser );

router.put('', putUser)

router.put('/:id', putUserParam)

router.delete('', deleteUser)

router.post('', postUser  )



module.exports = router;