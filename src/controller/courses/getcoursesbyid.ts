import { Request, Response } from "express";
import { connection } from "../../data/conection";


export default async function getcoursesbyid (
    req: Request,
    res: Response
) {
    try{
        let message = "Success!"

        const { id } = req.params

        const queryResult: any = await connection("curso")
        .select("*")
        .where({ id })

        if (!queryResult[0]) {
            res.statusCode = 404
            message = "Curso nao encontrado"
            throw new Error(message)
        }

        const course = {
            id: queryResult[0].id,
            nome: queryResult[0].name
        }
        
        res.status(200).send({ message, course})
    }catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400

        res.send({ message})
    }
}