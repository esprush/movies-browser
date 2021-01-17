import { Environment, Network, RecordSource, Store } from "relay-runtime";

function fetchQuery(operation, variables) {
  return fetch("https://53knvph3gfavvpvmiqsanyorcq.appsync-api.us-east-1.amazonaws.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key":"da2-2jpkv6naxrfefc2ldwqmdo5ghm"
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;
