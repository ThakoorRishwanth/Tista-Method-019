export const fetch_request = "fetch_request"
export const fetch_success = "fetch_success"
export const fetch_failure = "fetch_failure"

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
  