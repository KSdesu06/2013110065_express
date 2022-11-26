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