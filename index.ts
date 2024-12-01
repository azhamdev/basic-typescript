const coordinate: [number, number] = [2, 5]

const vector: [number, number, number][] = [
  [4, 5, 7],
  [1, 2, 4],
  [1, 2, 4],
]

enum Role {
  ADMIN,
  USER,
}

const userRole: Role = Role.ADMIN

enum PaymentStatus {
  PENDING,
  PAID,
  CANCEL,
}

const userPayment: PaymentStatus = PaymentStatus.PAID

function sum(x: number, y: number): number {
  return x + y
}

sum(2, 4)

function log(message: string): void {
  // write log to file
  // send log to service
}

function doSomething<T>(arg: T):T{
  return arg;
}

const data = doSomething(1)


