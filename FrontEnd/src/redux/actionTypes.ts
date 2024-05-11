export const fetch_request = "fetch_request"
export const fetch_success = "fetch_success"
export const fetch_failure = "fetch_failure"

export const FETCH_REQUEST = "FETCH_REQUEST"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAILURE = "FETCH_FAILURE"

export const Fetch_Request = "Fetch_Request"
export const Fetch_Success = "Fetch_Success"
export const Fetch_Failure = "Fetch_Failure"

export interface FetchRequestAction {
    type: typeof fetch_request;
  }
  
  export interface FetchSuccessAction {
    type: typeof fetch_success;
    payload: any[]; // Update the type of payload as per your data structure
  }
  
  export interface FetchFailureAction {
    type: typeof fetch_failure;
  }
  
  export type ActionTypes = FetchRequestAction | FetchSuccessAction| FetchFailureAction;

  export interface FETCH_REQUESTACTION{
    type : typeof FETCH_REQUEST;
  }

  export interface FETCH_SUCCESSACTION{
    type : typeof FETCH_SUCCESS;
    payload : any[]
  }
  
  export interface FETCH_FAILUREACTION{
    type: typeof FETCH_FAILURE;
  }
  
  export type ACTIONS = FETCH_REQUESTACTION | FETCH_SUCCESSACTION | FETCH_FAILUREACTION
  
  export interface Fetch_RequestACTION{
    type : typeof Fetch_Request
  }
  
  export interface Fetch_SuccessACTION{
    type : typeof Fetch_Success
    payload : any[]
}

export interface Fetch_FailureACTION{
  type : typeof Fetch_Failure
}

export type ACTION = Fetch_RequestACTION | Fetch_SuccessACTION | Fetch_FailureACTION