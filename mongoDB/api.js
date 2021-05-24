let data = require('./persistence.js');
const express = require('express')
const { asyncMiddleware } = require('./middleware');
const api = express.Router();
const ObjectID = require('mongodb').ObjectID;

api.get('/foo', asyncMiddleware(async(req, res) => {
    const dbClient = await data.dbClient();
    dbClient.collection('player').find({}).toArray((err,
result) => {
    if (err) throw err
    if(result){
        return res.status(200).send(result)
    }});
}));

api.get('/player/:id', asyncMiddleware(async(req, res) => {
    const dbClient = await data.dbClient();
    const id = req.params.id
    const objectId = new ObjectID(id);
    dbClient.collection('player').findOne({_id: objectId}, function(err, result) {
        if (err) throw err;
        if (result)
        {
            return res.status(200).send(result);
        }
        else{
            return res.status(404).send('')
        }
    });
}))

api.get('/players', asyncMiddleware(async(req, res) => {
    const dbClient = await data.dbClient();
    const body = req.query
    let score = body.score
    score = parseInt(score)
    dbClient.collection('player').find({name: body.name, score: score}, {}).toArray((err, result) => {
        if (err) throw err;
        if (result){
            return res.status(200).send(result);
        }else{
            return res.status(400).send('')
        }
    })
}))

api.post('/player', asyncMiddleware(async(req,res) => {
    const dbClient = await data.dbClient();
    const body = req.body
    dbClient.collection('player').insertOne({name: body.name, score: body.score}, function(err, result){
        if (err) throw err;
        else{
            return res.status(200).send(body)
        }
    });
}))

api.put('/player', asyncMiddleware(async(req,res) =>{
    const dbClient = await data.dbClient();
    const body = req.body
    const objectId = new ObjectID(body._id);
    dbClient.collection('player').updateOne(
        {_id: objectId}, 
        {$set:
            {
            name:body.name,
            score:body.score
            }
        },
        function(err, result){
            if (err) throw err
            dbClient.collection('player').findOne({_id: objectId}, function(err, result) {
                if (err) throw err
                if(result){
                    return res.status(200).send(body)
                }else{
                    return res.status(404).send('')
                }
            });
        }
    )
}))

api.delete('/player/:id', asyncMiddleware(async(req,res) => {
    const dbClient = await data.dbClient();
    const id = req.params.id
    const objectId = new ObjectID(id);
    dbClient.collection('player').deleteOne(
        {_id: objectId}
     )
     return res.status(200).send('')
}))

api.get('/trophy/:id', asyncMiddleware(async(req, res) => {
    const dbClient = await data.dbClient();
    const id = req.params.id
    const objectId = new ObjectID(id);
    dbClient.collection('trophy').findOne({_playerId: id}, function(err, result) {
        if (err) throw err;
        if (result){
            return res.status(200).send(result);
        }else{
            return res.status(400).send('')
        }
    })
}))

api.get('/trophies', asyncMiddleware(async(req, res) => {
    const dbClient = await data.dbClient();
    const body = req.query
    dbClient.collection('trophy').find({_playerId: body._playerId}).toArray((err, result) => {
        if (err) throw err;
        if (result){
            return res.status(200).send(result);
        }else{
            return res.status(400).send('')
        }
    })
}))

api.post('/trophy', asyncMiddleware(async(req,res) => {
    const dbClient = await data.dbClient();
    const body = req.body
    dbClient.collection('trophy').insertOne({_playerId: body._playerId, title: "Test Trophy"}, function(err, result){
        if (err) throw err;
        else{
            return res.status(200).send(body)
        }
    });
}))

api.put('/trophy', asyncMiddleware(async(req,res) =>{
    const dbClient = await data.dbClient();
    const body = req.body
    const objectId = new ObjectID(body._id);
    dbClient.collection('trophy').updateOne(
        {_id: objectId}, 
        {$set:
            {
            title:body.title
            }
        },
        function(err, result){
            if (err) throw err
            dbClient.collection('trophy').findOne({_id: objectId}, function(err, result) {
                if (err) throw err
                if(result){
                    return res.status(200).send(body)
                }else{
                    return res.status(404).send('')
                }
            });
        }
    )
}))

api.delete('/trophy/:id', asyncMiddleware(async(req,res) => {
    const dbClient = await data.dbClient();
    const id = req.params.id
    const objectId = new ObjectID(id);
    dbClient.collection('trophy').deleteOne(
        {_id: objectId}
     )
     return res.status(200).send('')
}))

module.exports = api;