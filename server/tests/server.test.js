const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server.js');

const {ObjectId} = require('mongodb');

const {Todo} = require('./../models/todo.js');

const todos=[
  {
    text:"one",
    _id:new ObjectId()
  },
  {
    text:"two",
    _id:new ObjectId()
  }
];
 Todo.insertMany(todos).then((result)=>{
   console.log(result);
 })


 describe('GET /todos/:id',()=>{
   it('found ',(done)=>{
     request(app)
       .get(`/todos/${todos[0]._id.toHexString()}`)
       .expect(200)
       .expect((res)=>{
         expect(res.body.result.text).toBe(todos[0].text);
       })
       .end(done);
   })
 })












// describe('This is testing for todos then place in post',()=>{
//
//    it('Ok first #1',(done)=>{
//
//      var text = 'this is deleting result'
//
//        request(app)
//          .post('/todos')
//          .send({text})
//          .expect(200)
//          .expect((req)=>{
//            expect(req.body.text).toBe(text)
//          })
//          .end((err,res)=>{
//            if(err){
//              return done(err);
//            }
//
//            Todo.find().then((result)=>{
//              console.log(result);
//              done();
//            })
//
//
//          })
//
//
//    })
//
// });


// it('getting data',(done)=>{
//   request(app)
//      .get('/todos')
//      .expect(200)
//      .expect((res)=>{
//        expect(res.body.result.length).toBe(2)
//      })
//      .end(done);
// });
