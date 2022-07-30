import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <Head>
                <title>Website Name</title>
            </Head>
            <h1 className="styledH1">Styled h1</h1>
            <div className="styledDiv">
                Well hello there my dear friends, this is a div that needs to be
                styled!
                <br />
                <Link href="/posts/first-post">
                    <a>First Post</a>
                </Link>
            </div>
            <style jsx>{`
                .styledH1 {
                    font-family: roboto;
                    padding: 1rem;
                    text-align: center;
                }

                .styledDiv {
                    text-align: center;
                    border: 1px #111111 solid;
                    padding: 1rem;
                    border-radius: 0.5rem;
                    color: #1e1e1e;
                }

                .styledDiv a {
                    color: #0e0e0e;
                    margin-top: 1rem;
                    font-size: 1.1rem;
                    display: inline-block;
                    text-decoration: none;
                    font-weight: bold;
                }
            `}</style>
        </>
    )
}
