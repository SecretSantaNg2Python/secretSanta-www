export interface DeleteParams {
    uri: string, 
    successActionType: string,
    errorActionType: string
}

export interface GetParams {
  url: string,
  auth: boolean,
  successActionType: string,
  errorActionType: string
}

export interface PostParams {
    uri: string, // the api endpoint
    payload: {}, // what you're sending on the http request, should be data from a form
    auth: boolean, // on true, then the token will be on the header
    succesActionType: string, // If the http responce is a success, send this action type to the reducer, should be something like `ACTION_TYPES.ACTION_TYPE.SUCCESS`
    responseObject: string, // this should be a property on the success resposonse body object
    errorActionType: string, // the failure action, should look something like `ACTION_TYPES.ACTION_TYPE.FAILURE`
}

export interface PutParams {
  url: string, 
  payload: {},
}

export interface HttpParams {
	DeleteParams: {
		uri: string, 
		successActionType: string,
		errorActionType: string
	},
	GetParams: {
		url: string,
		auth: boolean,
		successActionType: string,
		errorActionType: string
	},
	PostParams: {
		uri: string, // the api endpoint
		payload: {}, // what you're sending on the http request, should be data from a form
		auth: boolean, // on true, then the token will be on the header
		succesActionType: string, // If the http responce is a success, send this action type to the reducer, should be something like `ACTION_TYPES.ACTION_TYPE.SUCCESS`
		responseObject: string, // this should be a property on the success resposonse body object
		errorActionType: string, // the failure action, should look something like `ACTION_TYPES.ACTION_TYPE.FAILURE`
	},
	PutParams: {
		url: string, 
		payload: {},
	}
}