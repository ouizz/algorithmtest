const express = require('express')
const router = express.Router()

router.get('/api/return/:moneyprice/:moneyclient' , (req , res) => {
    const moneyPrice    = req.params.moneyprice
    const moneyClient   = req.params.moneyclient
    let money           = (req.params.moneyclient - req.params.moneyprice) * 100
    const count         = {}
    let returnMoney     = 0
    let result          = {}
    let i               = 1
    let type

    const listBank = {
        '100000'    :  'แบงค์ 1000',
        '50000'     :  'แบงค์ 500',
        '10000'     :  'แบงค์ 100',
        '5000'      :  'แบงค์ 50',
        '2000'      :  'แบงค์ 20',
        '1000'      :  'เหรียญ 10',
        '500'       :  'เหรียญ 5',
        '200'       :  'เหรียญ 2',
        '100'       :  'เหรียญ 1'
    }
    const orderListbank = Object.keys(listBank).reverse()

    if(money > 0){
        for (let key in orderListbank ) {
            returnMoney = money % orderListbank[key];
            const findBank = orderListbank[key] / 100;

            count[findBank] = (money - returnMoney) / orderListbank[key]; 
            money = returnMoney;
            
            if(count[findBank]){ 
                (orderListbank[key] <= 1000) ? type = "เหรียญ" : type = "ใบ"
                result[i] = listBank[orderListbank[key]] + ' บาท จำนวน ' + count[findBank]+' '+type
                i++
            }
        }
        res.json({ status: true, data: [result]  });
    }else{
        res.json({ status: false, message: 'Plase insert Bank more than Product Price' });
    }
})

module.exports = router