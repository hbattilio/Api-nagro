import { Request, Response } from "express"
import { connection } from "../../data/conection"


export default async function getstudentbyid (
    req: Request,
    res: Response
) {
    try{
        let message = "Consulta efetuada com sucesso!!"

        const {id} = req.params

        const queryResult: any = await connection("aluno")
        .select("*")
        .where({ id })

        if (!queryResult[0]) {
            res.statusCode = 404
            message = "Aluno nao encontrado"
            throw new Error(message)
        }

        const aluno = {
            id: queryResult[0].id,
            nome: queryResult[0].name,
            CPF: queryResult[0].cpf,
            nascimento: queryResult[0].birth_date,
            idDoCurso: queryResult[0].course_id,
        }

        res.status(200).send({message, aluno})
    } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400
    }
}