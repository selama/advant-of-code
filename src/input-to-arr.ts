import axios from 'axios';

export const inputToArr = async url => {
  const result = await axios
    .get(url, {
      headers: {
        Cookie:
          '_ga=GA1.2.1109501824.1575216250; _gid=GA1.2.292694020.1575216250; session=53616c7465645f5fd9bf5c3127037b457a091ed14dd5cecc9127c26dc3a8f03eb2f0ed4ea55ebdf17eedd4119978c8ef',
      },
    })
    .then(({ data }) => data);

  return result.split('\n');
};
