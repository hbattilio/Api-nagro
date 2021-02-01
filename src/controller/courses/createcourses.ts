import { Request, Response } from "express";
import { connection } from "../../data/conection";
import { generateId } from "../../services/idGenerator"



export default async function createcourses(
    req: Request,
    res: Response){
        try{
            let message = "Cadastro do curso efetuado com sucesso!"
            const { coursename } = req.body

            if(!coursename) {
                res.statusCode = 406
                message = 'nome do curso deve ser fornecido'
                throw new Error(message)
            }

            const id: string = generateId()

            await connection('curso')
                .insert({
                    id,
                    name: coursename
                })

            res.status(201).send({message})

        }catch(error){
            res.statusCode = 400
            let message = error.sqlMessage || error.message || "deu ruim"
            res.send({ message})
        }
    }
