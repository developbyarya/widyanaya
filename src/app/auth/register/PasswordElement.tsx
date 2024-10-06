"use client";
import { Label, TextInput } from "flowbite-react";
import { useState } from "react";

export const PasswordElement = () => {
  const [pass, setPass] = useState({ pass: "", confirmPass: "" });

  return (
    <>
      <div className="mb-3">
        <Label htmlFor="password">Password</Label>
        <TextInput
          type="password"
          id="password"
          name="password"
          onChange={(e) =>
            setPass((prev) => ({ ...prev, pass: e.target.value }))
          }
        />
      </div>
      <div className="mb-3">
        <Label htmlFor="password">Confirm Password</Label>
        <TextInput
          type="password"
          id="password"
          name="password"
          onChange={(e) =>
            setPass((prev) => ({ ...prev, confirmPass: e.target.value }))
          }
        />
        {pass.pass != pass.confirmPass && (
          <p className="text-red-600">
            Password harus sama dengan yang di atas
          </p>
        )}
      </div>
    </>
  );
};
