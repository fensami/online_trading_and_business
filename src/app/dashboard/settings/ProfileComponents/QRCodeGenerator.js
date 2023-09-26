"use client";
import QRCode from "qrcode.react";
import useAuth from "@/hooks/useAuth";

function QRCodeGenerator() {
  const { user } = useAuth();
  console.log(user.email, user.displayName);

  const email = `${user?.email}`;
  const password = `${user?.displayName}`;

  const textToEncode = `Email: ${user?.email}\nPassword: ${user?.displayName}`;

  return (
    <div>{email && password && <QRCode value={textToEncode} size={140} />}</div>
  );
}

export default QRCodeGenerator;
