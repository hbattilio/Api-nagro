import { Request, Response } from "express";
import { connection } from "../../data/conection";


export default async  function getallstudents(
    req: Request,
    res: Response,
){
    try{
        let message = "consulta efetuada"

        const queryResult: any = await connection("aluno")
        .select("*")

        if(!queryResult[0]) {
            res.statusCode = 404
            message = "Alunos nao encontrados"
            throw new Error(message)
        }
        const alunos = queryResult

        res.status(200).send({message, alunos})
    } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400
        res.send({ message })
    }
}