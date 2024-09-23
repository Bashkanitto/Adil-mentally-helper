const express = require('express')
const router = express.Router()
const User = require('../models/User')

// Получение сообщений
router.get('/:id/messages', async (req, res) => {
	const userId = req.params.id

	if (!mongoose.Types.ObjectId.isValid(userId)) {
		return res.status(400).json({ message: 'Invalid user ID format' })
	}

	if (!user) {
		User.save()
	}
	res.json(user.messages)
})

// Добавление сообщения
router.post('/:id/messages', async (req, res) => {
	const user = await User.findById(req.params.id)
	user.messages.push({ text: req.body.text, date: new Date() })
	await user.save()
	res.json(user.messages)
})

module.exports = router
