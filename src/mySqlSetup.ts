import { connection } from './data/conection'

async function createTables() {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS aluno(
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255)NOT NULL,
                cpf VARCHAR(11) UNIQUE NOT NULL,
                birth_date VARCHAR(255) NOT NULL,
                course_id VARCHAR(255) NOT NULL
            )
        `)
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS curso(
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255)NOT NULL
            )
        `)
        console.log("MySql setup completed!")
    } catch (error) {
        console.log(error)
    }
}

createTables()