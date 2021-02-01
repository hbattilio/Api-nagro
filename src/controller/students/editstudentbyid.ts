import { Request, Response } from "express";
import { connection } from "../../data/conection";

export default async function editstudentbyid(
    req: Request,
    res: Response
) {
    try {
        let message = "Altercao efetuada com sucesso!"

        const { id } = req.params

        const { name, cpf, birthDate } = req.body

        if ( !name || !cpf || !birthDate ) {
            res.statusCode = 406
            message = "'nome', 'cpf', 'data de nascimento' sao campos obrigatorios"
            throw new Error(message)
        }

        if (!id) {
            res.statusCode = 406
            message = "id para edicao nao informado"
            throw new Error(message)
        }

        await connection("aluno")
            .update({
                name,
                cpf,
                birth_date: birthDate,
                
            })
            .where({id})

            res.status(200).send({message})
        
        }catch (error) {
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
}