// type Database =
//   | {
//       type: "sqlite"
//       uri: string
//     }
//   | {
//       type: "postgres"
//       host: string
//       user: string
//       port: number
//     }

// const dbConnection: Database = {
//   type: "sqlite",
//   uri: "file:./dev.db",
// }

// type Grade = "SMA" | "SMK"

interface User {
  id: number
  name: string
  address: string
  age: number
  gender: "male" | "female"
}

type InsertUser = Pick<User, "name" | "address"> // include < exclude

// omit
// exclude id, address, age, gender
type OmitUser = Omit<User, "id" | "address" | "age" | "gender">  // exclude < include

function createUser(user: OmitUser): User {
  // business logic to create user to DB

  return {
    id: 1,
    name: "John Doe",
    address: "sby",
    age: 2,
    gender: "male",
  }
}

createUser({
  name: "John Doe",
})

// interface Employee extends User {
//   salary: number
//   jobdesk: string
// }

// interface Student extends User {
//   grade: Grade
// }

// const user: Student = {
//   name: "John Doe",
//   address: "Jl. ABC",
//   age: 20,
//   grade: "SMK",
// }

// const anotherUser: Employee = {
//   name: "John Doe",
//   address: "Jl. ABC",
//   age: 20,
//   salary: 1000000,
//   jobdesk: "Software Engineer",
// }

class UserClient {
  async get(url: string): Promise<User | null> {
    // ...
    // const res = await fetch()

    return null;
  }

  async post(url: string, data: InsertUser): Promise<User | null>{
    return null;
  }
}

const myUserClient = new UserClient();

async function getData(){
  const data = await myUserClient.get("/api/v1/users")
}
