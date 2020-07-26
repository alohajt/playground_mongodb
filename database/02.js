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
//创建文档
const course = new Course({
    name: 'mongoDB 基础',
    author: '黑马',
  isPublished: true
})

//将文档插入数据库中
course.save()