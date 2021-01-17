import Head from "next/head";
import { QueryRenderer, graphql } from "react-relay";
import { popularMoviesQuery } from "../data/queries";
import environment from "../relay-environment";
export default function Home() {
  return (
    <>
    <Head>
      <title>
        Movies Browser
      </title>
    </Head>

    <QueryRenderer
      environment={environment}
      query={popularMoviesQuery}
      variables={{}}
      render={({ error, props }) => {
        if (error) {
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        return <div>{JSON.stringify(props)}</div>;
      }}
    />
    </>
  )
}
