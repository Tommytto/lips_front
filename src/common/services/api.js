import { RequestError } from 'common/errors/request-error';
import { convertToPostData, convertDataToQuery } from '../helpers/ajax.es';

const badStatus = 400;

class Api {
  constructor(host) {
    console.error('API');
    this.host = host;
  }

  getUrl(url, isCors) {
    return isCors ? url : `${this.host}${url}`;
  }

  getOptions(method, data, url, isCors) {
    const options = {
      method,
    };

    const queryData = {
      v: Date.now(),
    };

    if (isCors) {
      options.mode = 'cors';
    }

    if (method !== 'GET') {
      options.body = convertToPostData(data);
      options.headers['content-type'] = 'application/json';
    } else if (data) {
      queryData.merge(data);
    }

    return {
      options,
      requestUrl: this.getUrl(`${url}?${convertDataToQuery(queryData)}`, isCors),
    };
  }

  async request(method, url, data, isCors) {
    const { options, requestUrl } = this.getOptions(method, data, url, isCors);
    const response = await fetch(requestUrl, options);
    const contentType = response.headers.get('content-type');
    const isJson = contentType && contentType.indexOf('application/json') !== -1;
    const responseData = isJson ? await response.json() : response.body;
    const { status } = response;

    if (badStatus <= status) {
      throw RequestError({
        error: responseData,
        status,
      });
    }

    return {
      data: responseData,
      status,
    };
  }

  get(url, data, isCors) {
    return this.request('GET', url, data, isCors);
  }

  post(url, data, isCors) {
    return this.request('POST', url, data, isCors);
  }

  patch(url, data, isCors) {
    return this.request('PATCH', url, data, isCors);
  }

  put(url, data, isCors) {
    return this.request('PUT', url, data, isCors);
  }

  delete(url, data, isCors) {
    return this.request('DELETE', url, data, isCors);
  }
}

const ApiInstance = new Api();

export {
  Api as ApiClass,
  ApiInstance as Api,
};
