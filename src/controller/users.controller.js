import {pool} from '../db.js'

export const getUsers = async(req, res) =>{
    try {
        const [rows]= await pool.query('select * from users')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'algo salio mal'
        })
    }
}

export const getUserById = async(req, res) =>{
try {
    const[rows]= await pool.query('select * from users where id = ?',[req.params.id])
    console.log(rows);
    if(rows.length <=0) return res.status(404).json({
     message: 'User not found'
    })
    res.json(rows[0])
} catch (error) {
    return res.status(500).json({
        message: 'algo salio mal'
    })
}
}

export const createUsers= async(req, res) =>{
    const {id, name, last_name, tel} = req.body
try {
    
    const [rows]=await pool.query('insert into users values (?,?,?,?)',[id, name, last_name, tel])
    console.log(req.body);
    res.send({
        id,
        name,
        last_name,
        tel,
    })
} catch (error) {
    return res.status(500).json({
        message: 'algo salio mal'
    })
}
}
export const deleteUsers =async(req, res) =>{
try {
    const [result] = await pool.query('delete from users where id = ?',[req.params.id])
   
    if(result.affectedRows <=0){
     res.status(404).json({
         message:'no eliminado'
     })
    }
 
    res.send('deleted')
} catch (error) {
    return res.status(500).json({
        message: 'algo salio mal'
    })
}
}

export const updateUsers =async(req, res) => {
    const {id} =req.params
    const {name, last_name, tel} = req.body
try {
    
   const[result]= await pool.query('update users SET name = IFNULL(?, name), last_name =IFNULL(?, last_name), tel = IFNULL(?, tel) where id = ?',[name,last_name,tel,id])
   if (result.affectedRows ===0)return res.status(404).json({
    message:'ususario no encontrado'
   })
 const [rows]= await pool.query('select * from users where id = ?',[id])

   res.json(rows)
} catch (error) {
    return res.status(500).json({
        message: 'algo salio mal'
    })
}
}

