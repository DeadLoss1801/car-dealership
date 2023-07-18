const { MongoClient } = require('mongodb');
const dbName = 'authentication';
module.exports.signup = async function signup(req, res, collection) {
    try {
        const { email } = req.body;
        const client = await MongoClient.connect(mongoURL);
        const db = client.db(dbName);

        const existingUser = await db.collection(collection).findOne({ email });
        if (existingUser) {
            client.close();
            return res.status(400).json({ message: 'Account already exists.' });
        }
        const newUser = req.body;
        await db.collection(collection).insertOne(newUser);
        client.close();

    } catch (error) {
        res.json({
            message: error.message
        })
    }
}


module.exports.login = async function login(req, res, collection) {
    try {
        const { email, password } = req.body;
        const client = await MongoClient.client(mongoURL);
        const db = client.db(dbName);

        const user = await db.collection(collection).findOne({ email });

        if (!user) {
            client.close();
            return res.status(404).json({ message: 'User not found' });
        }
        if (user.password !== password) {
            client.close();
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Generate a JWT token
        const token = jwt.sign({ username }, secretKey);

        client.close();

        res.status(200).json({ message: 'Login successful', token });

    } catch (err) {
        console.log("Error");
        return res.json({
            message: err.message
        })
    }
}


module.exports.logout = function logout(req, res) {
    console.log('User has been logged out');
    res.cookie('login', '', {
        maxAge: 1
    })
    res.json({
        message: "User Logged out successfully"
    });
}




function verifyToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        req.user = decoded.username;
        next();
    });
}

