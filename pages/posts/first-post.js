import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'

const FirstPost = (props) => {
    const countriesNames = Object.keys(props)
    return (
        <div>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <div>
                {countriesNames.map((key) => {
                    return (
                        <div key={key}>
                            {key}: {props[key].All.confirmed / 1000 + 'k'}
                        </div>
                    )
                })}
            </div>
            <Link href="/">
                <a>Go Home</a>
            </Link>
        </div>
    )
}

export async function getStaticProps() {
    console.log('Fetching data')
    let res = await axios.get('https://covid-api.mmediagroup.fr/v1/cases')
    return {
        props: res.data,
    }
}

export default FirstPost
