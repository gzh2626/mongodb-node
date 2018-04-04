var cheerio = require('cheerio');
var https = require('https');
function getData(model) {
    var url = "https://cnodejs.org/";
    https.get(url, function (req) {
        var chunks = '';
        req.setEncoding('utf8');
        req.on('data', function (data) {
            chunks += data;
        });
        req.on('end', function () {
            var $ = cheerio.load(chunks, { decodeEntities: false });
            $('.cell').each(function (i, element) {
                var title = $('.cell .topic_title').eq(i).text();
                var status = $('.cell .put_top').eq(i).text();
                var time = $('.cell .last_active_time').eq(i).text();
                var test = new model({
                    title: title,
                    status: status,
                    time: time
                });
                test.save(function (err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Saved : ', data);
                    }
                })
            })
        });
    }).on('error', function (err) {
        console.log(err);
    })
}
module.exports = getData;