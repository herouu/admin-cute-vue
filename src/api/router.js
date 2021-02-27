import request from '@/utils/request';

export function getRouterList(params) {
  return request({
    url: 'getRouters',
    method: 'get',
    params,
  });
}
