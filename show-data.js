var http = require('http');


function showData(model){
    console.log('启动服务');    
    http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        model.find({}, function (err, data) {
            var chunks = '';
            data.forEach(function (item) {
                chunks += '<p>' + item.title + '</p>';
            })
            res.write(chunks);
            res.end();
        })
    }).listen(8098);
}
module.exports=showData;