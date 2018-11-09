import Head from 'next/head'

const Page = (props) => (
    <div>
        <Head>
            <title>My page title</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
        </Head>
        {props.children}
        <style jsx global>{`
        html, body { 
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
        }
      `}</style>
    </div>
)

export default Page