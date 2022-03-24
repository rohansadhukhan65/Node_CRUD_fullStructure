import mongoose from 'mongoose';
const connectDB = async() => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true
		});
		console.log(`Mongo is connected ! host:${conn.connection.host}`.cyan.underline);
	} catch(error) {
		console.log(`Mongo Connection failed ! `.red.underline.bold);
		console.log(`Reason : ${error}`.red.underline.bold);
	}
};
export default connectDB;
