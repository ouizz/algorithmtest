const express = require('express')
const cors = require('cors');
const urlRouter = require('./router/url')
const app = express()

app.use(cors())
app.use('/' , urlRouter)

app.listen(process.env.PORT || 1234, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});