import { Request, Response } from "express";
import { connection } from "../../data/conection";
import { generateId } from "../../services/idGenerator";


export default async function createstudent(
    req: Request,
    res: Response) {
        try{
            let message = "Aluno criado com sucesso!"

            const { name, cpf, birthDate, courseId} = req.body

            if (!name || !cpf || !birthDate || !courseId) {
                res.statusCode = 406
                message = "'nome', 'cpf', 'data de nascimento' sao campos obrigatorios"
                throw new Error(message)
            }

            const id: string = generateId()

            await connection("aluno")
            .insert({
                id,
                name,
                cpf,
                birth_date: birthDate,
                course_id: courseId
            })
            
            res.status(201).send({message})

        } catch (error) {
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }
