const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server.js');

const {Todo} = require('./../models/todo.js');


    beforeEach((done)=>{
      Todo.remove({}).then(()=>{
        done();
      })
    })

 describe('/Post',()=>{

    it('to do todos',(done) => {
       var text = 'to do laoo';
         request(app)
            .post('/todo')
            .send({text})
            .expect(200)
            .expect((res)=>{
              expect(res.body.text).toBe(text)
            })
            .end((err,res)=>{
              if(err){
                return  done(err);
              }

           Todo.find().then((result)=>{
             expect(result.length).toBe(1);
             expect(result[0].text).toBe(text);
                done();
           }).catch((e)=>{
             done(e);
           })


            })


    })
    it('not to createi',(done)=>{
      request(app)
        .post('/todo')
        .send({})
        .expect(400)
        .end((err,res)=>{
          if(err){
            return done(err);
          }

          Todo.find().then((result)=>{
            expect(result.length).toBe(1);
            done();
          })
        })
    })

 })
