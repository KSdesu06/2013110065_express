exports.index = (req, res, next) => {
    res.status(200).json({
        fullname: 'Kanlayanuch Srichote'
    })
}

exports.bio = (req, res, next) => {
    res.status(200).json({
      fullname: 'Kanlayanuch Srichote',
      nickname: 'Kat',
      hobby: 'sleep',
      gitusername: 'KSdesu06'
    })
}
exports.company = (req, res, next) => {
    res.status(200).json({
        data: [
            {
                id: 1,
                name: 'UD trucks',
                address:{
                    province: 'Bangkok',
                    postcode: 10570
                }
            },
            {
                id: 2,
                name: 'King Power',
                address:{
                    province: 'Bangkok',
                    postcode: 10110
                }
            },
            {
                id: 3,
                name: 'agoda',
                address:{
                    province: 'Bangkok',
                    postcode: 10330
                }
            }
        ]
      })
}