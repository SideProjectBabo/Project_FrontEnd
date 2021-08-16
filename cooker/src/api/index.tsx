import GLOBALS from '../commons/endpoints/index'

//전체 맛집 정보를 요청한다.
 export function getAllRestaurant() {
    const url = `${GLOBALS.API_ENDPOINT}/stores`;
    return fetch(url);
  }
  
