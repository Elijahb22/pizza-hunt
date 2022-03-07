const router = require('express').Router();
const { addComment, removeComment, addreply, removeReply } = require('../../controllers/comment-controller');

// /api/comments/<pizzaId>
router.route('/:pizzaID').post(addComment);

// /api/comments/<pizzaId>/<commentId> 
router.route('/:pizzaId/:commentId').put(addreply).delete(removeComment);

router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;