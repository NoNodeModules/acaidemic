import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'

/* Connetion URL */
mongoose.Promise = global.Promise


app.listen(config.port, (err)=>{
    if(err){
        console.log(err)
    }
    console.info('Server started on port %s. ', config.port)
})