const axios = require('axios')
const credentials = require('../PetFinder_CRED.json')

module.exports = {
    view: function (req, res) {
        async function callAPI() {
            let response = await axios.get(`https://api.petfinder.com/pet.find?key=${credentials.env.FETCH_ID_KEY}&animal=dog&location=85032&format=json`)
            res.json(response.data.petfinder.pets)
        }
        callAPI()
    }
};