const Staff = require('../models/staff')

//get all data
exports.staff = async (req, res, next) => {
    const staff =await Staff.find().sort({_id: -1});
    res.status(200).json({
        data: staff
    }) 
}
//get data by id
exports.show = async (req, res, next) => {
    try {
        const {id} = req.params
        const staff =await Staff.findOne({
            _id: id
         })

         if (!staff){
            throw new Error('ไม่พบผู้ใช้งาน')
         } else {
            res.status(200).json({
            data: staff
            })
         }

        
    } catch (error){
        res.status(400).json({
            error: {
                message: 'เกิดข้อผิดพลาด: ' +  error.message
            }
        })
    }
}

//post(insert)
exports.insert = async (req, res, next) => {

    const {name, salary} = req.body

    let staff = new Staff({
        name: name,
        salary: salary
    });
    await staff.save()

    res.status(200).json({
        message: 'เพิ่มข้อมูลเรียบร้อยแล้ว'
    })
}

//delete
exports.destroy = async (req, res, next) => {
    try {
            const {id} = req.params
            const staff = await Staff.deleteOne({
                _id: id
            })
        
            if (staff.deleteCount === 0){
                throw new Error('ไม่สามารถลบข้อมูลได้ / ไม่พบข้อมูลผู้ใช้งาน')
            } else {
                res.status(200).json({
                    message: 'ลบข้อมูลเรียบร้อยแล้ว'
                })
            }
        
    } catch (error){
            res.status(400).json({
                error: {
                    message: 'เกิดข้อผิดพลาด: ' +  error.message
                }
        })
    }
}


//update
exports.update = async (req, res, next) => {

   try{
        const {id} = req.params
        const {name, salary} = req.body

        /*const staff = await Staff.findById(id)
        staff.name = name
        staff.salary = salary
        await staff.save()*/

        /*const staff = await Staff.findByIdAndUpdate(id, {
            name: name,
            salary: salary
        })*/

        const staff = await Staff.updateOne({ _id: id}, {
            name: name,
            salary: salary
        })
        console.log(staff)

        res.status(200).json({
            message: 'อัปเดตข้อมูลเรียบร้อยแล้ว'
        })
   } catch (error) {
        res.status(400).json({
            error: {
                message: 'เกิดข้อผิดพลาด: ' +  error.message
            }
        })
   }
}
