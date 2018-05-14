import { baseUrl } from '../config/api';

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const request = async (endpoint, method, body, headers = defaultHeaders, absolutedEndpoint = false) => {
  if (!absolutedEndpoint) {
    endpoint = baseUrl + endpoint;
  }
  let data = null;
  if (body) {
    if (headers['Content-Type'] === 'application/json') {
      data = JSON.stringify(body);
    } else {
      delete headers['Content-Type'];
      data = body;
    }
  }
  const response = await fetch(endpoint, {
    method,
    headers,
    body: data,
  });
  const json = await response.json();
  if (response.status < 200 || response.status >= 300) {
    if (json) {
      throw new Error('Server Error');
    } else {
      throw new Error(response.statusText);
    }
  }
  return json;
};

export const authorize = (endpoint, body, headers) => (
  request(endpoint, 'POST', body, headers, true, true)
);

export const get = endpoint => (
  request(endpoint, 'GET')
);

export const post = (endpoint, body, headers = defaultHeaders) => (
  request(endpoint, 'POST', body, headers)
);

export const put = (endpoint, body) => (
  request(endpoint, 'PUT', body)
);

export const del = (endpoint, body) => (
  request(endpoint, 'DELETE', body)
);

export default {
  get,
  post,
  put,
  del,
};
