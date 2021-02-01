import { Request, Response } from "express";
import { connection } from "../../data/conection"



export default async function getallcourses(
    req: Request,
    res: Response){
        try{
            let message = "consulta efetuada"

            const queryResult: any = await connection("curso")
            .select("*")

            if(!queryResult[0]) {
                res.statusCode = 404
                message = "Post not found"
                throw new Error(message)
            }
            const cursos = queryResult
            
            

            res.status(200).send({message, cursos})

        } catch (error) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400
            res.send({message})
        }
    }