import { Typography } from "@material-tailwind/react";
 
export default function Example() {
  return (
    <footer className="w-full bg-black p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-black text-center md:justify-between">
        <img src={require("../../assets/img/Navbar Brand.png")} alt="logo-ct" className="w-250" />
        
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; Detikcom. All rights reseverd
      </Typography>
    </footer>
  );
}