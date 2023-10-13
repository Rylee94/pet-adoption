const express = require('express')
const url = require('url')
const fetch = require("node-fetch")

const apiKey = '4isJugID5vPmYoImm2X9VuOFrVLWzdQ1QwFJpmRwJBxVOKRtn2';
const apiUrl = 'https://api.petfinder.com/v2/';


const router = express.Router()

router.get('/api/petfinder/dogs', async (req, res) => {
    try {
      const response = await fetch(`${apiUrl}animals?type=dog`, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        res.json(data);
      } else {
        res.status(response.status).json({ error: 'Request failed' });
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
});





module.exports = router