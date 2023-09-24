import { AppProps } from "$fresh/server.ts";

export default function App({ Component, url }: AppProps) {

  function requestLogs(){
    console.log(url.href);
  }

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap" rel="stylesheet" />
        <title>Jacob Stovall - Software Engineer</title>
      </head>
      <body className={"font-['Oswald'] bg-black text-white h-screen"}>
        <Component />
        {requestLogs()}
      </body>
    </html>
  );
}
