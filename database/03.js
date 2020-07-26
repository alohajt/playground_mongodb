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

//创建集合规则
const courseSchema = mongoose.Schema({
    name: String,
    author: String,
    isPublished :Boolean
})

//使用规则创建集合
//mongoose.model(集合名称, 集合规则)
const Course = mongoose.model('Course', courseSchema) //courses

//集合规则实例
//创建文档+向集合中插入文档
// Course.create({
//     name: 'mongoDB 基础',
//     author: '黑马',
//   isPublished: false
// }, (err, result) => {
//         console.log(err);
//         console.log(result);
// })

Course.create({
    name: 'mongoDB 基础',
    author: '黑马',
  isPublished: false
})
    .then(result => {
    console.log(result);
    })
.catch(err => console.log(err))