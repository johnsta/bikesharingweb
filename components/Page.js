import Head from 'next/head'

const Page = (props) => (
    <div className="page">
        <Head>
            <title>Adventure Works Cycles</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link href="https://fonts.googleapis.com/css?family=Heebo" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"></link>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
        </Head>
        {props.children}
        <style jsx global>{`
        html, body { 
            font-family: 'Heebo', san-serif;
            margin: 0;
            padding: 0;
            color: #688379;
        }
        a, p, div, br {
            font-size: 14px;
        }
      `}</style>
    </div>
)

export default Page