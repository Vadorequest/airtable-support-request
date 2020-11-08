import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Process and sanitize inputs
    console.log('req.body', req.body)
    const body = JSON.parse(req.body);
    console.log('body', body)

    // Send Airtable API request to create record
    var Airtable = require('airtable');
    var base = new Airtable({apiKey: 'key1WS5ylsvCmIHHR'}).base('appbRk7r9XIfDAAeW');

    base('Reports').create([{
        "fields": body
    }], function(err, records) {
        if (err) {
            console.error(err);
            return;
        }
        records.forEach(function (record) {
            console.log(record.getId());
        });
    });

    // Process result (success/fail) and return

    res.status(200).json({
        body: body
    })
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
