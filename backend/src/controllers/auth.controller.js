import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"


const prisma = new PrismaClient()


const isEmail = (v) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)
const onlyDigits = (v = "") => v.replace(/\D+/g, "")


export async function register(req, res) {
try {
const {
role,
email,
password,
displayName,
cpf,
cnpj,
restaurantName,
address,
phone,
} = req.body


if (!role || !["FREELANCER", "RESTAURANT"].includes(role))
return res.status(400).json({ message: "Role inválido" })


if (!isEmail(email)) return res.status(400).json({ message: "E-mail inválido" })
if (!password || password.length < 8) return res.status(400).json({ message: "Senha fraca" })


const data = { role, email: email.toLowerCase() }


// Hash seguro com salt
const saltRounds = 12
data.passwordHash = await bcrypt.hash(password, saltRounds)


if (role === "FREELANCER") {
if (!displayName) return res.status(400).json({ message: "Nome de exibição obrigatório" })
if (!cpf) return res.status(400).json({ message: "CPF obrigatório" })
data.displayName = displayName
data.cpf = onlyDigits(cpf)
} else {
if (!restaurantName) return res.status(400).json({ message: "Nome do restaurante obrigatório" })
if (!address) return res.status(400).json({ message: "Endereço obrigatório" })
if (!phone) return res.status(400).json({ message: "Telefone obrigatório" })


const doc = cnpj ? onlyDigits(cnpj) : null
if (!doc) return res.status(400).json({ message: "CNPJ/CPF do responsável obrigatório" })


data.restaurantName = restaurantName
data.address = address
data.phone = onlyDigits(phone)
if (doc.length > 11) data.cnpj = doc; else data.cpf = doc
}


const user = await prisma.user.create({ data })
return res.status(201).json({ id: user.id })
} catch (err) {
if (err.code === "P2002") {
return res.status(409).json({ message: "E-mail ou documento já cadastrado" })
}
console.error(err)
return res.status(500).json({ message: "Erro interno" })
}
}