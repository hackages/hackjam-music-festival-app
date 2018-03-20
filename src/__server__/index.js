const express = require('express')
import Stage from './models/Stage';
import Schedule from './models/Schedule';
import Artist from './models/Artist';

const app = express()

app.get('/stages', (req, res) => {
  res.send(Stage.findAll());
});

app.get('/stages/:stageId', (req, res) => {
  const {params: {stageId}} = req;
  res.send(Stage.findById({stageId}));
});

app.get('/artists', (req, res) => {
  res.send(Artist.findAll());
});

app.get('/artists/:artistId', (req, res) => {
  const {params: {artistId}} = req;
  res.send(Artist.findById({artistId}));
});

app.get('/schedules', (req, res) => {
  res.send(Schedule.findAll());
});


app.get('/schedules/:scheduleId', (req, res) => {
  const {params: {scheduleId}} = req;
  res.send(Schedule.findById({scheduleId}));
});

app.listen(3010, function () {
  console.log('Server listening on port 3010!')
});