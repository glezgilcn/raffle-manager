import jwt from "jsonwebtoken";

const JWT_SECRET = "el_chorcholo_jwt_secret";

export const createToken = (payload: { user: string }) => {
  const token = jwt.sign(payload, JWT_SECRET);
  return token;
};

export const getUserFormToken = (token: string) => {
  const payload = jwt.verify(token, JWT_SECRET);
  return (payload as { user: string }).user;
};
