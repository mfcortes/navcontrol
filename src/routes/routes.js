const express = require('express');
const routes = express.Router();

routes.get('/',(req,res)=>{
     req.getConnection((err, conn) => {
            if (err) return res.send(err);
            conn.query('SELECT attributes FROM traccar.tc_positions', (err,row)=>{
                if (err) return res.send(err);
                res.json(row);
            });
    })
   })



routes.post('/device',(req,res)=>{
    req.getConnection((err,conn) => {
        if (err) {
            return res.send(err);
        }
        else{
            console.log(req.body)

            conn.query('select d.name, p.attributes from tc_devices d, tc_positions p where ?  and d.id = p.deviceid',[req.body], (err,row)=>{
                if (err) {
                    return res.send(err);
                }
                else{
                    res.json(row);
                }
        

        })
    }
    })
})

module.exports = routes;
