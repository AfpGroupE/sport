import React from 'react'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-green-500" style={{ marginTop: "20vh" }}>Üdv a GYM centeren!</h1>
      <div className="flex flex-row justify-center flex-1">
        <p className="w-1/2 mr-2 text-white items-center">Lorem ipsum dolor sit amet, consectetur olor sit amet, consectetur adipiscing elit. Ut fringilla orci at mauris vestibulum, a elementum enim dictum. Vestibulum vel enim ante. Nullam convallis lorem in magna feugiat, nec consequat urna rutrum. Aliquam suscipit elit eget felis faucibus, quis molestie arcu consectetur. Nam malesuada rutrum purus, eu aliquet velit adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p className="w-1/2 ml-2 text-white items-center">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut lementum enim dictum. Vestibulum vel enim ante. Nullam convallis lorem in magna feugiat, nec consequat urna rutrum. Aliquam suscipit elit eget felis faucibus, quis molestie arcu consectetur. Nam malesuada rutrum purus, eu aliquet velit adipiscing elit, sed do aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  );
}
