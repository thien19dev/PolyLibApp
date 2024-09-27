// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body');

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// mongoose.connect('mongodb://localhost:27017/polyLib', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then( () => console.log('MongoDB connected')) 
// .catch((err) => console.log(err));

// app.listen(5000, () => {
//     console.log('Server is running on port 5000');
// })

// // đăng ký

// const { User } = require('./models/');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// app.post('/api/register', async (req, res) => {
//     const{name, email, password} = req.body;

//     try {
//         const hashedPassword = await bcrypt.hash(password, 10);

//         const newUser = new User({name, email, password: hashedPassword});

//         await newUser.save();

//         res.status(201).json({message : 'User registered successfully'});        
//     } catch (error) {
//         res.status(400).json({error:'Registration failed'});
//     }
// });

// app.post('api/login', async(req, res) => {
//     const{email, password} = req.body;
//     try {
//         if(!user) return res.status(404).json({error: 'User not found'});

//         const isMatch = await bcrypt.compare(password, user.password);
//         if(!isMatch) return res.status(400).json({error: 'Invalid credentials'});
        
//         const token = jwt.sign({id: user_id}, 'secretKey', {expiresln: '1h'});

//         res.status(200).json({token});

//     } catch (error) {
//         res.status(400).json({error: 'Login Failed'});
//     }
// });

// // lấy danh sách sách

// app.get('/api/books', async(req, res) => {
//     try {
//         const books = await Book.find();
//         res.status(200).json(books);
//     } catch (error) {
//         res.status(500).json({error :'Failed to fetch books'});
//     }
// })

// // tạo phiếu mượn
// const BorrowSchema = new mongoose.Schema({
//     userId:{type: mongoose.Schema.Types.ObjectId, 
//         ref:'User', required : true},
//     bookId:{type: mongoose.Schema.Types.ObjectId, 
//         ref:'User', required : true},
//     borrowDate: {type: Date, default: Date.now},
//     returnDate: {type:Date},
// });

// const Borrow = mongoose.model('Borrow', BorrowSchema);

// app.post('/api/borrow', async(req, res) => {
//     const{userId, bookId} = req.body;
    
//     try {
//         const borrow = new Borrow({userId, bookId});
//         await borrow.save();
//         res.status(201).json({message: 'Book borrowed successfully'})
//     } catch (error) {
//         res.status(400).json({error: 'Failed to borrow book'});
//     }
// });