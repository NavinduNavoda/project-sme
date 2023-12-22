export default function verifyTemplate(url: String){
    return `
        <html lang="en">
            <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>Document</title>
        
            <style>
                *{
                    font-family: sans-serif;
                }
                body{
                    
                }
                h1{
                    color: #F7901E;
                    font-size: 48px;
                    margin-bottom: 30px;
                }
                h2 { 
                    color: #1F3E53;
                    font-size: 24px;
                }
                p {
                    color: #686A6D;
                    font-size: 16px;
                }
                button {
                    background-color: #F7901E;
                    font-size: 16px;
                    color:white;
                    font-weight: bold;
                    border: none;
                    border-radius: 2px;
                    padding:15px;
                    padding-left: 25px;
                    padding-right: 25px;
                }
            </style>
        
            </head>
            <body>
                <h1>SME Strategic Development</h1>
                <h2>Verify Your Account</h2>
                <p>Click bellow button to verify your account</p>
                <a href="${url}" target="_blank"><button>Verify</button></a>
            </body>
        </html>
    `
}