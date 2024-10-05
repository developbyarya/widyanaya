import { TextInput, Label, Button } from "flowbite-react";
export default function Page() {
  return (
    <div className="p-10">
      <h1 className="text-3xl text-center font-extrabold">Login</h1>
      <form action="">
        <div className="mb-3">
          <Label htmlFor="email">Email</Label>
          <TextInput type="email" id="email" name="email" />
        </div>
        <div className="mb-3">
          <Label htmlFor="password">Password</Label>
          <TextInput type="password" id="password" name="password" />
        </div>
        <Button type="submit" fullSized >Login</Button>
      </form>
    </div>
  );
}
