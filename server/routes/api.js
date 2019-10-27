const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
API_KEY = 'AIzaSyDRtwZNMYyYxhHJdNfR9Vesd6IXK8_W_l0';

// Sydney&key=AIzaSyCAyeUu_2vuF19YfZP_7LcWCpnvWBlMBrI`;

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works')
});

// Get the requested search post
router.get('/search', (req, res) => {
  baseAPI = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+`;
  API=baseAPI+req.query.place+"&key=AIzaSyDRtwZNMYyYxhHJdNfR9Vesd6IXK8_W_l0";
  axios.get(`${API}`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

// Get all posts
router.get('/details', (req, res) => {
  baseAPI=`https://maps.googleapis.com/maps/api/place/details/json?place_id=`;
  API=baseAPI+req.query.place+"&key=AIzaSyDRtwZNMYyYxhHJdNfR9Vesd6IXK8_W_l0";
  axios.get(`${API}`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;