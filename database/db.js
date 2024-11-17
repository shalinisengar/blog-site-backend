
import mongoose from "mongoose"
const connection = async () => {
//   const url=  mongoose.connect('mongodb://127.0.0.1:27017/zomato').
    // then(() => {
    //     console.log('db');

    // }).catch((err) => {
    //     console.log(err);

    // })

    const URL = `mongodb://127.0.0.1:27017/blog-site`
    try {
        await mongoose.connect(URL)
        console.log('database connection is sucessfully');

    } catch (error) {
        console.log('error');

    }
}
export default connection;