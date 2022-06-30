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

#### Short note on SSL and TLS Authentication

#### Self-Signed Certificate genration

**Generate CA**

    1. Generate RSA
        `openssl genrsa -aes256 -out ca-key.pem 4096`

    2. Generate a public CA Cert
        `openssl req -new -x509 -sha256 -days 365 -key ca-key.pem -out ca.pem`

**Generate Certificate**

    1. Create a RSA key
        `openssl genrsa -out cert-key.pem 4096`

    2. Create a Certificate Signing Request (CSR)
        `openssl req -new -sha256 -subj "/CN=yourcn" -key cert-key.pem -out cert.csr`

    3. Create a extfile with all the alternative names
        ``

#### How to setup project

1. Clone the repo
2. Install all dependencies in both client and server `npm i`
3. Add .env file
4. run both client and server in different port
5. Make api call from clinet to make RPC call
