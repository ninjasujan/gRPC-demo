# gRPC-demo

Sample nodejs demo project to learn gRPC client and server procedure call.

#### Before starting gRPC demo short note on protocal buffer.

Protocal buffer are a mrthod of serializing data, helpful in communication between microservice unlike json and xml protocal buffer are optimized way to serailize the data.
and protocal buffer are independent to the language in implementation.

**Key Feature**

1. Binary mode of data transfer.
2. Separartion of data and context.
3. Message format data

**Reason to use proto buffer**

1. Schema are awesome
2. Backward compatibility for free.
3. Validation and extensibility.
4. Easy language interporability.

**Writing proto file**

proto file Name: `employee.proto`

```
syntax = "proto3";

message Employee {
    int32 id = 1;
    string name = 2;
    float salary = 3;
}

message Employees {
    repeated Employee employeeList = 1; /** Array of Employee **/

}

```

#### How to setup project

1. Clone the repo
2. Install all dependencies in both client and server `npm i`
3. Add .env file
4. run both client and server in different port
5. Make api call from clinet to make RPC call
