import { Request, Response } from "express"
import { connection } from "../../data/conection"


export default async function delstudentbyid (
    req: Request,
    res: Response
){
    try{
        let message = "Aluno deletado com sucesso!"

        const { id }  = req.params

        

        await connection("aluno")
        .delete("*")
        .where ({ id })

        res.status(200).send({message})
    } catch(error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400
        res.send({ message })
    }

}