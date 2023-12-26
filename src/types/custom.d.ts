// interface PayloadToken {
//   id: number;
// }

// declare namespace Express {
//   export interface Request {
//     user?: PayloadToken;
//   }
// }
// custom.d.ts
declare namespace Express {
  interface Request {
    user?: { id: number }; // Add the user property to the Request interface
  }
}
