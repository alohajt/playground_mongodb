// const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost/playground', {useNewUrlParser: true, useNewUrlParser: true})
//     .then(()=>console.log("数据库连接成功") )
//     .catch(err => console.log(err, "数据库连接失败"))
const mongoose = require('mongoose')

mongoose
.connect('mongodb://localhost/playground', {
useUnifiedTopology: true,
useNewUrlParser: true,
})
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log(err, "数据库连接失败");
});