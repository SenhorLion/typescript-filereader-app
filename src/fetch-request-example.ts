/**
 * Defines the basic interface for resolving request
 */
import fetch, { HeaderInit, RequestInit, BodyInit, Response } from 'node-fetch';
interface ResolvedRequest<T> {
  request: RequestInit;
  response: Response;
  body: T;
}

const handleErrors = (response: any) => {
  if (!response.ok) {
    // if 404 | contentLength === 0:
    // => Send "EmptyResponse"
    // Else, if :
    // =>
    throw Error(response.statusText);
  }
  return response;
};

export const request = <T>(endpoint: string): Promise<ResolvedRequest<T>> => {
  return fetch(endpoint)
    .then(handleErrors)
    .then(response => {
      const { headers, status, statusText, ok } = response;
      const contentType = headers.get('content-type');
      const contentLength = headers.get('content-length');

      console.log({ status, ok, statusText, contentType, contentLength });
      console.log(`
            headers: ${headers} => jsoned: ${JSON.stringify(headers)}
            `);

      return response.json();
    })
    .then(data => {
      console.log({ data });
      return data;
    })
    .catch(error => console.log('REQUEST_FETCH_ERROR', error));
};

// @Usage:
// const wesBosAPI = 'https://wesbos.com/wp-json/wp/v2/posts';
// const dogsAPI = 'https://dog.ceo/api/breeds/image/random';
// request(dogsAPI)
//   .then(response => {
//     // const { status, message } = response;
//     // console.log({ status, message });
//     console.log('Response');
//     console.log({ response });
//   })
//   .catch(error => console.log('ERROR', error));
