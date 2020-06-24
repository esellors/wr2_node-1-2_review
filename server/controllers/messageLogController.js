let messageLog = [
    {
        id: 0,
        user: 'SYSTEM',
        message: 'Welcome to chat. Keep it clean.'
    }
];

let id = 1;

module.exports = {
    getAll: (req, res) => {
        res.status(200).send(messageLog);
    },
    addOne: (req, res) => {
        const { user, message } = req.body;

        const newMessage = {
            id,
            user,
            message
        }

        id++;

        messageLog.unshift(newMessage);

        res.status(200).send(messageLog);
    },
    // editOne: (req, res) => {

    // },
    deleteAll: (req, res) => {
        const { user } = req.params;
        console.log(user)

        messageLog = [];

        res.sendStatus(200);
    }
}