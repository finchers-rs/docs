var N = null;var searchIndex = {};
searchIndex["finchers"]={"doc":"A combinator library for building asynchronous HTTP services.","items":[[5,"launch","finchers","Create an instance of `Launcher` from the specified endpoint.",N,[[["e"]],["launcher"]]],[0,"endpoint","","Components for constructing `Endpoint`.",N,N],[3,"EndpointObj","finchers::endpoint","",N,N],[3,"LocalEndpointObj","","",N,N],[3,"Context","","An iterator over the remaining path segments.",N,N],[3,"And","","",N,N],[3,"Or","","",N,N],[3,"OrStrict","","",N,N],[3,"ApplyFn","","",N,N],[3,"Unit","","",N,N],[3,"Value","","",N,N],[3,"SendEndpoint","","A wrapper struct which wraps a value whose type implements `IsSendEndpoint` and provides the implementations of `Endpoint<'a>`.",N,N],[5,"apply_fn","","Create an endpoint from a function.",N,[[["f"]],["applyfn"]]],[5,"unit","","Create an endpoint which simply returns an unit (`()`).",N,[[],["unit"]]],[5,"value","","Create an endpoint which simply clones the specified value.",N,[[["t"]],["value"]]],[11,"new","","",0,[[["e"]],["endpointobj"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"apply","","",0,[[["self"],["context"]],["endpointresult"]]],[11,"new","","",1,[[["e"]],["localendpointobj"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"apply","","",1,[[["self"],["context"]],["endpointresult"]]],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"input","","Returns the pinned reference to the value of `Input`.",2,[[["self"]],["input"]]],[11,"remaining_path","","Returns the remaining path in this segments",2,[[["self"]],["encodedstr"]]],[11,"next_segment","","Advances the cursor and returns the next segment.",2,[[["self"]],["option",["encodedstr"]]]],[0,"error","","Definition of `EndpointError` and supplemental components.",N,N],[3,"EndpointError","finchers::endpoint::error","A type representing error values returned from `Endpoint::apply()`.",N,N],[6,"EndpointResult","","A type alias of `Result<T, E>` with the error type fixed at `EndpointError`.",N,N],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"not_matched","","Create a value of `EndpointError` with an annotation that the current endpoint does not match to the provided request.",3,[[],["endpointerror"]]],[11,"method_not_allowed","","Create a value of `EndpointError` with an annotation that the current endpoint does not matche to the provided HTTP method.",3,[[["verbs"]],["endpointerror"]]],[11,"custom","","Create a value of `EndpointError` from the custom error value.",3,N],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"status_code","","",3,[[["self"]],["statuscode"]]],[11,"cause","","",3,[[["self"]],["option",["fail"]]]],[0,"syntax","finchers::endpoint","Components for building endpoints which matches to a specific HTTP path.",N,N],[3,"MatchSegment","finchers::endpoint::syntax","",N,N],[3,"MatchEos","","",N,N],[3,"Param","","",N,N],[3,"Remains","","",N,N],[5,"segment","","Create an endpoint which validates a path segment.",N,N],[5,"eos","","Create an endpoint which checks if the current context is reached the end of segments.",N,[[],["matcheos"]]],[5,"param","","Create an endpoint which parses a path segment into the specified type.",N,[[],["param"]]],[5,"remains","","Create an endpoint which parses the remaining path segments into the specified type.",N,[[],["remains"]]],[0,"verb","","",N,N],[3,"MatchVerbs","finchers::endpoint::syntax::verb","",N,N],[3,"MatchVerbGet","","",N,N],[3,"MatchVerbPost","","",N,N],[3,"MatchVerbPut","","",N,N],[3,"MatchVerbDelete","","",N,N],[3,"MatchVerbHead","","",N,N],[3,"MatchVerbOptions","","",N,N],[3,"MatchVerbConnect","","",N,N],[3,"MatchVerbPatch","","",N,N],[3,"MatchVerbTrace","","",N,N],[3,"Verbs","","A collection type which represents a set of allowed HTTP methods.",N,N],[3,"VerbsIter","","",N,N],[5,"verbs","","Create an endpoint which checks if the verb of current request is equal to the specified value.",N,[[["verbs"]],["matchverbs"]]],[5,"get","","",N,[[],["matchverbget"]]],[5,"post","","",N,[[],["matchverbpost"]]],[5,"put","","",N,[[],["matchverbput"]]],[5,"delete","","",N,[[],["matchverbdelete"]]],[5,"head","","",N,[[],["matchverbhead"]]],[5,"options","","",N,[[],["matchverboptions"]]],[5,"connect","","",N,[[],["matchverbconnect"]]],[5,"patch","","",N,[[],["matchverbpatch"]]],[5,"trace","","",N,[[],["matchverbtrace"]]],[11,"fmt","","",4,[[["self"],["formatter"]],["result"]]],[11,"clone","","",4,[[["self"]],["matchverbs"]]],[11,"apply","","",4,[[["self"],["context"]],["endpointresult"]]],[11,"fmt","","",5,[[["self"],["formatter"]],["result"]]],[11,"clone","","",5,[[["self"]],["matchverbget"]]],[11,"apply","","",5,[[["self"],["context"]],["endpointresult"]]],[11,"fmt","","",6,[[["self"],["formatter"]],["result"]]],[11,"clone","","",6,[[["self"]],["matchverbpost"]]],[11,"apply","","",6,[[["self"],["context"]],["endpointresult"]]],[11,"fmt","","",7,[[["self"],["formatter"]],["result"]]],[11,"clone","","",7,[[["self"]],["matchverbput"]]],[11,"apply","","",7,[[["self"],["context"]],["endpointresult"]]],[11,"fmt","","",8,[[["self"],["formatter"]],["result"]]],[11,"clone","","",8,[[["self"]],["matchverbdelete"]]],[11,"apply","","",8,[[["self"],["context"]],["endpointresult"]]],[11,"fmt","","",9,[[["self"],["formatter"]],["result"]]],[11,"clone","","",9,[[["self"]],["matchverbhead"]]],[11,"apply","","",9,[[["self"],["context"]],["endpointresult"]]],[11,"fmt","","",10,[[["self"],["formatter"]],["result"]]],[11,"clone","","",10,[[["self"]],["matchverboptions"]]],[11,"apply","","",10,[[["self"],["context"]],["endpointresult"]]],[11,"fmt","","",11,[[["self"],["formatter"]],["result"]]],[11,"clone","","",11,[[["self"]],["matchverbconnect"]]],[11,"apply","","",11,[[["self"],["context"]],["endpointresult"]]],[11,"fmt","","",12,[[["self"],["formatter"]],["result"]]],[11,"clone","","",12,[[["self"]],["matchverbpatch"]]],[11,"apply","","",12,[[["self"],["context"]],["endpointresult"]]],[11,"fmt","","",13,[[["self"],["formatter"]],["result"]]],[11,"clone","","",13,[[["self"]],["matchverbtrace"]]],[11,"apply","","",13,[[["self"],["context"]],["endpointresult"]]],[11,"fmt","","",14,[[["self"],["formatter"]],["result"]]],[11,"clone","","",14,[[["self"]],["verbs"]]],[18,"GET","","",14,N],[18,"POST","","",14,N],[18,"PUT","","",14,N],[18,"DELETE","","",14,N],[18,"HEAD","","",14,N],[18,"OPTIONS","","",14,N],[18,"CONNECT","","",14,N],[18,"PATCH","","",14,N],[18,"TRACE","","",14,N],[11,"single","","",14,[[["method"]],["option",["verbs"]]]],[11,"any","","",14,[[],["verbs"]]],[11,"bitor","","",14,N],[11,"bitor_assign","","",14,[[["self"],["verbs"]]]],[11,"into_iter","","",14,N],[11,"fmt","","",15,[[["self"],["formatter"]],["result"]]],[11,"next","","",15,[[["self"]],["option"]]],[11,"fmt","finchers::endpoint::syntax","",16,[[["self"],["formatter"]],["result"]]],[11,"clone","","",16,[[["self"]],["matchsegment"]]],[11,"apply","","",16,[[["self"],["context"]],["endpointresult"]]],[11,"fmt","","",17,[[["self"],["formatter"]],["result"]]],[11,"clone","","",17,[[["self"]],["matcheos"]]],[11,"apply","","",17,[[["self"],["context"]],["endpointresult"]]],[11,"clone","","",18,[[["self"]],["self"]]],[11,"fmt","","",18,[[["self"],["formatter"]],["result"]]],[11,"apply","","",18,[[["self"],["context"]],["endpointresult"]]],[11,"clone","","",19,[[["self"]],["self"]]],[11,"fmt","","",19,[[["self"],["formatter"]],["result"]]],[11,"apply","","",19,[[["self"],["context"]],["endpointresult"]]],[0,"wrapper","finchers::endpoint","Built-in wrappers.",N,N],[3,"AfterApply","finchers::endpoint::wrapper","",N,N],[3,"AndThen","","",N,N],[3,"BeforeApply","","",N,N],[3,"Map","","",N,N],[3,"OrReject","","",N,N],[3,"OrRejectWith","","",N,N],[3,"Recover","","",N,N],[5,"after_apply","","Creates a wrapper for creating an endpoint which runs the provided function after calling `Endpoint::apply()`.",N,[[["f"]],["afterapply"]]],[5,"and_then","","Create a wrapper for creating an endpoint which executes another future created by the specified function after the precedent future resolves.",N,[[["f"]],["andthen"]]],[5,"before_apply","","Creates a wrapper for creating an endpoint which runs the provided function before calling `Endpoint::apply()`.",N,[[["f"]],["beforeapply"]]],[5,"map","","Create a wrapper for creating an endpoint which maps the output to another type using the specified function.",N,[[["f"]],["map"]]],[5,"or_reject","","Creates a `Wrapper` for creating an endpoint which returns the error value returned from `Endpoint::apply()` as the return value from the associated `Future`.",N,[[],["orreject"]]],[5,"or_reject_with","","Creates a `Wrapper` for creating an endpoint which converts the error value returned from `Endpoint::apply()` to the specified type and returns it as the return value from the associated `Future`.",N,[[["f"]],["orrejectwith"]]],[5,"recover","","",N,[[["f"]],["recover"]]],[11,"fmt","","",20,[[["self"],["formatter"]],["result"]]],[11,"wrap","","",20,N],[11,"fmt","","",21,[[["self"],["formatter"]],["result"]]],[11,"wrap","","",21,N],[11,"fmt","","",22,[[["self"],["formatter"]],["result"]]],[11,"wrap","","",22,N],[11,"fmt","","",23,[[["self"],["formatter"]],["result"]]],[11,"wrap","","",23,N],[11,"fmt","","",24,[[["self"],["formatter"]],["result"]]],[11,"wrap","","",24,N],[11,"fmt","","",25,[[["self"],["formatter"]],["result"]]],[11,"wrap","","",25,N],[11,"fmt","","",26,[[["self"],["formatter"]],["result"]]],[11,"wrap","","",26,N],[8,"Wrapper","","A trait representing the conversion of an endpoint to another endpoint.",N,N],[16,"Output","","The inner type of converted `Endpoint`.",27,N],[16,"Endpoint","","The type of converted `Endpoint`.",27,N],[10,"wrap","","Performs conversion from the provided endpoint into `Self::Endpoint`.",27,N],[8,"EndpointWrapExt","","A set of extension methods for using built-in `Wrapper`s.",N,N],[11,"map","","",28,N],[11,"and_then","","",28,N],[11,"clone","finchers::endpoint","",29,[[["self"]],["and"]]],[11,"fmt","","",29,[[["self"],["formatter"]],["result"]]],[11,"apply","","",29,[[["self"],["context"]],["endpointresult"]]],[11,"fmt","","",30,[[["self"],["formatter"]],["result"]]],[11,"apply","","",30,[[["self"],["context"]],["endpointresult"]]],[11,"fmt","","",31,[[["self"],["formatter"]],["result"]]],[11,"clone","","",31,[[["self"]],["or"]]],[11,"apply","","",31,[[["self"],["context"]],["endpointresult"]]],[11,"fmt","","",32,[[["self"],["formatter"]],["result"]]],[11,"clone","","",32,[[["self"]],["orstrict"]]],[11,"apply","","",32,[[["self"],["context"]],["endpointresult"]]],[11,"fmt","","",33,[[["self"],["formatter"]],["result"]]],[11,"clone","","",33,[[["self"]],["unit"]]],[11,"apply","","",33,[[["self"],["context"]],["endpointresult"]]],[11,"fmt","","",34,[[["self"],["formatter"]],["result"]]],[11,"clone","","",34,[[["self"]],["value"]]],[11,"apply","","",34,[[["self"],["context"]],["endpointresult"]]],[8,"Endpoint","","Trait representing an endpoint.",N,N],[16,"Output","","The inner type associated with this endpoint.",35,N],[16,"Future","","The type of value which will be returned from `apply`.",35,N],[10,"apply","","Perform checking the incoming HTTP request and returns an instance of the associated Future if matched.",35,[[["self"],["context"]],["endpointresult"]]],[11,"with_output","","Add an annotation that the associated type `Output` is fixed to `T`.",35,[[["self"]],["self"]]],[11,"wrap","","Converts `self` using the provided `Wrapper`.",35,N],[8,"IsSendEndpoint","","A trait representing an endpoint with a constraint that the returned \"Future\" to be transferred across thread boundaries.",N,N],[8,"IntoEndpoint","","Trait representing the transformation into an `Endpoint`.",N,N],[16,"Output","","The inner type of associated `Endpoint`.",36,N],[16,"Endpoint","","The type of transformed `Endpoint`.",36,N],[10,"into_endpoint","","Consume itself and transform into an `Endpoint`.",36,N],[8,"IntoEndpointExt","","A set of extension methods for composing multiple endpoints.",N,N],[11,"and","","Create an endpoint which evaluates `self` and `e` and returns a pair of their tasks.",37,[[["self"],["e"]],["and"]]],[11,"or","","Create an endpoint which evaluates `self` and `e` sequentially.",37,[[["self"],["e"]],["or"]]],[11,"or_strict","","Create an endpoint which evaluates `self` and `e` sequentially.",37,[[["self"],["e"]],["orstrict"]]],[11,"fmt","","",38,[[["self"],["formatter"]],["result"]]],[11,"clone","","",38,[[["self"]],["sendendpoint"]]],[11,"from","","",38,[[["e"]],["self"]]],[11,"apply","","",38,[[["self"],["context"]],["endpointresult"]]],[0,"endpoints","finchers","Built-in endpoints.",N,N],[0,"body","finchers::endpoints","Endpoints for parsing the message body.",N,N],[3,"Raw","finchers::endpoints::body","",N,N],[3,"ReceiveAll","","",N,N],[3,"Text","","",N,N],[3,"Json","","",N,N],[3,"UrlEncoded","","",N,N],[5,"raw","","Creates an endpoint which takes the instance of `Payload` from the context.",N,[[],["raw"]]],[5,"receive_all","","Creates an endpoint which receives all of request body.",N,[[],["receiveall"]]],[5,"text","","Create an endpoint which parses a request body into `String`.",N,[[],["text"]]],[5,"json","","Create an endpoint which parses a request body into a JSON data.",N,[[],["json"]]],[5,"urlencoded","","Create an endpoint which parses an urlencoded data.",N,[[],["urlencoded"]]],[11,"clone","","",39,[[["self"]],["raw"]]],[11,"fmt","","",39,[[["self"],["formatter"]],["result"]]],[11,"apply","","",39,[[["self"],["context"]],["endpointresult"]]],[11,"fmt","","",40,[[["self"],["formatter"]],["result"]]],[11,"clone","","",40,[[["self"]],["receiveall"]]],[11,"apply","","",40,[[["self"],["context"]],["endpointresult"]]],[11,"fmt","","",41,[[["self"],["formatter"]],["result"]]],[11,"clone","","",41,[[["self"]],["text"]]],[11,"apply","","",41,[[["self"],["context"]],["endpointresult"]]],[11,"fmt","","",42,[[["self"],["formatter"]],["result"]]],[11,"apply","","",42,[[["self"],["context"]],["endpointresult"]]],[11,"fmt","","",43,[[["self"],["formatter"]],["result"]]],[11,"apply","","",43,[[["self"],["context"]],["endpointresult"]]],[0,"cookie","finchers::endpoints","Endpoints for managing Cookie values.",N,N],[3,"Required","finchers::endpoints::cookie","",N,N],[3,"Optional","","",N,N],[5,"required","","Create an endpoint which extracts a Cookie value.",N,N],[5,"optional","","Create an endpoint which extracts a Cookie value.",N,N],[11,"fmt","","",44,[[["self"],["formatter"]],["result"]]],[11,"clone","","",44,[[["self"]],["required"]]],[11,"signed","","",44,[[["self"],["key"]],["required"]]],[11,"private","","",44,[[["self"],["key"]],["required"]]],[11,"apply","","",44,[[["self"],["context"]],["endpointresult"]]],[11,"fmt","","",45,[[["self"],["formatter"]],["result"]]],[11,"clone","","",45,[[["self"]],["optional"]]],[11,"signed","","",45,[[["self"],["key"]],["optional"]]],[11,"private","","",45,[[["self"],["key"]],["optional"]]],[11,"apply","","",45,[[["self"],["context"]],["endpointresult"]]],[0,"fs","finchers::endpoints","Endpoints for serving static contents on the file system.",N,N],[3,"File","finchers::endpoints::fs","",N,N],[3,"Dir","","",N,N],[5,"file","","Create an endpoint which serves a specified file on the file system.",N,N],[5,"dir","","Create an endpoint which serves files in the specified directory.",N,N],[11,"fmt","","",46,[[["self"],["formatter"]],["result"]]],[11,"clone","","",46,[[["self"]],["file"]]],[11,"apply","","",46,[[["self"],["context"]],["endpointresult"]]],[11,"fmt","","",47,[[["self"],["formatter"]],["result"]]],[11,"clone","","",47,[[["self"]],["dir"]]],[11,"apply","","",47,[[["self"],["context"]],["endpointresult"]]],[0,"header","finchers::endpoints","Components for parsing the HTTP headers.",N,N],[3,"Parse","finchers::endpoints::header","",N,N],[3,"Optional","","",N,N],[3,"Matches","","",N,N],[3,"Raw","","",N,N],[5,"parse","","Create an endpoint which parses an entry in the HTTP header.",N,[[["str"]],["parse"]]],[5,"optional","","Create an endpoint which parses an entry in the HTTP header.",N,[[["str"]],["optional"]]],[5,"matches","","Create an endpoint which checks if a header entry with the specified name is equal to the specified value.",N,[[["k"],["v"]],["matches"]]],[5,"raw","","Create an endpoint which retrieves the value of a header with the specified name.",N,[[["h"]],["raw"]]],[11,"fmt","","",48,[[["self"],["formatter"]],["result"]]],[11,"apply","","",48,[[["self"],["context"]],["endpointresult"]]],[11,"fmt","","",49,[[["self"],["formatter"]],["result"]]],[11,"apply","","",49,[[["self"],["context"]],["endpointresult"]]],[11,"fmt","","",50,[[["self"],["formatter"]],["result"]]],[11,"clone","","",50,[[["self"]],["matches"]]],[11,"apply","","",50,[[["self"],["context"]],["endpointresult"]]],[11,"fmt","","",51,[[["self"],["formatter"]],["result"]]],[11,"apply","","",51,[[["self"],["context"]],["endpointresult"]]],[0,"logging","finchers::endpoints","Wrapper for logging.",N,N],[3,"Logging","finchers::endpoints::logging","",N,N],[3,"Info","","",N,N],[12,"status","","",52,N],[12,"start","","",52,N],[12,"input","","",52,N],[5,"logging","","Create a wrapper for creating an endpoint which dumps log after resolving the future.",N,[[],["logging",[""]]]],[5,"logging_fn","","Create a wrapper for creating an endpoint which dumps a log using the specified function.",N,[[["f"]],["logging"]]],[11,"fmt","","",53,[[["self"],["formatter"]],["result"]]],[11,"wrap","","",53,N],[11,"fmt","","",52,[[["self"],["formatter"]],["result"]]],[0,"query","finchers::endpoints","Endpoints for parsing query strings.",N,N],[3,"Required","finchers::endpoints::query","",N,N],[3,"Optional","","",N,N],[3,"Raw","","",N,N],[5,"required","","Create an endpoint which parses the query string to the specified type.",N,[[],["required"]]],[5,"optional","","Create an endpoint which parses the query string to the specified type.",N,[[],["optional"]]],[5,"raw","","Create an endpoint which extracts the query string from a request.",N,[[],["raw"]]],[11,"clone","","",54,[[["self"]],["self"]]],[11,"fmt","","",54,[[["self"],["formatter"]],["result"]]],[11,"apply","","",54,[[["self"],["context"]],["endpointresult"]]],[11,"clone","","",55,[[["self"]],["self"]]],[11,"fmt","","",55,[[["self"],["formatter"]],["result"]]],[11,"apply","","",55,[[["self"],["context"]],["endpointresult"]]],[11,"clone","","",56,[[["self"]],["raw"]]],[11,"fmt","","",56,[[["self"],["formatter"]],["result"]]],[11,"apply","","",56,[[["self"],["context"]],["endpointresult"]]],[0,"error","finchers","Error primitives.",N,N],[3,"Error","finchers::error","A type which holds a value of `HttpError` in a type-erased form.",N,N],[4,"Never","","A type which has no possible values.",N,N],[5,"fail","","",N,N],[5,"bad_request","","",N,N],[5,"err_msg","","",N,N],[11,"fmt","","",57,[[["self"],["formatter"]],["result"]]],[11,"clone","","",57,[[["self"]],["never"]]],[11,"eq","","",57,[[["self"],["never"]],["bool"]]],[11,"partial_cmp","","",57,[[["self"],["never"]],["option",["ordering"]]]],[11,"cmp","","",57,[[["self"],["never"]],["ordering"]]],[11,"never_into","","Consume itself and transform into an arbitrary type.",57,[[["self"]],["t"]]],[11,"fmt","","",57,[[["self"],["formatter"]],["result"]]],[11,"description","","",57,[[["self"]],["str"]]],[11,"cause","","",57,[[["self"]],["option",["error"]]]],[8,"HttpError","","Trait representing error values from endpoints.",N,N],[11,"status_code","","Return the HTTP status code associated with this error type.",58,[[["self"]],["statuscode"]]],[11,"headers","","Append a set of header values to the header map.",58,[[["self"],["headermap"]]]],[11,"cause","","",58,[[["self"]],["option",["fail"]]]],[11,"fmt","","",59,[[["self"],["formatter"]],["result"]]],[11,"from","","",59,[[["e"]],["self"]]],[11,"as_ref","","",59,[[["self"]],["httperror"]]],[11,"fmt","","",59,[[["self"],["formatter"]],["result"]]],[11,"is","","Returns `true` if the type of contained value is the same as `T`.",59,[[["self"]],["bool"]]],[11,"downcast_ref","","Attempts to downcast the boxed value to a conrete type by reference.",59,[[["self"]],["option"]]],[11,"downcast_mut","","Attempts to downcast the boxed value to a conrete type by mutable reference.",59,[[["self"]],["option"]]],[11,"downcast","","Attempts to downcast the boxed value to a conrete type.",59,[[["self"]],["result",["error"]]]],[11,"status_code","","Return the HTTP status code associated with contained value.",59,[[["self"]],["statuscode"]]],[11,"headers","","Append a set of header values to the header map.",59,[[["self"],["headermap"]]]],[11,"cause","","Returns a reference to the underlying cause of contained error value.",59,[[["self"]],["option",["fail"]]]],[11,"serialize","","",59,[[["self"],["s"]],["result"]]],[0,"input","finchers","Components for parsing the incoming HTTP request.",N,N],[3,"ReqBody","finchers::input","A type holding the instance of request body.",N,N],[3,"EncodedStr","","A percent-encoded string.",N,N],[3,"Input","","The contextual information with an incoming HTTP request.",N,N],[5,"with_get_cx","","Acquires a pinned reference to `Input` from the task context and executes the provided function using its value.",N,N],[11,"fmt","","",60,[[["self"],["formatter"]],["result"]]],[11,"from_hyp","","Create an instance of `RequestBody` from `hyper::Body`.",60,[[["body"]],["reqbody"]]],[11,"payload","","",60,[[["self"]],["option",["body"]]]],[11,"is_gone","","",60,[[["self"]],["bool"]]],[11,"fmt","","",61,[[["self"],["formatter"]],["result"]]],[11,"as_ref","","",61,N],[11,"eq","","",61,[[["self"],["str"]],["bool"]]],[11,"eq","","",61,[[["self"],["string"]],["bool"]]],[11,"new_unchecked","","Create a new instance of `EncodedStr` from an encoded `str`.",61,N],[11,"as_bytes","","Return the reference to the underling `[u8]` of this value.",61,N],[11,"percent_decode","","Decode this encoded string as an UTF-8 string.",61,[[["self"]],["result",["cow","utf8error"]]]],[11,"percent_decode_lossy","","Decode this encoded string as an UTF-8 string.",61,[[["self"]],["cow",["str"]]]],[11,"url_decode","","Decode this encoded string as an UTF-8 string.",61,[[["self"]],["result",["cow","utf8error"]]]],[8,"FromEncodedStr","","Trait representing the conversion from an encoded string.",N,N],[16,"Error","","The error type which will be returned from `from_encoded_str`.",62,N],[10,"from_encoded_str","","Converts an `EncodedStr` to a value of `Self`.",62,[[["encodedstr"]],["result"]]],[8,"FromHeaderValue","","Trait representing the conversion from a header value.",N,N],[16,"Error","","The error type which will be returned from `from_header_value()`.",63,N],[10,"from_header_value","","Perform conversion from a header value to `Self`.",63,[[["headervalue"]],["result"]]],[11,"fmt","","",64,[[["self"],["formatter"]],["result"]]],[11,"request","","Return a shared reference to the value of raw HTTP request without the message body.",64,[[["self"]],["request"]]],[11,"payload","","Takes the instance of `RequestBody` from this value.",64,[[["self"]],["option",["body"]]]],[11,"content_type","","Attempts to get the entry of `Content-type` and parse its value.",64,[[["self"]],["result",["option","error"]]]],[11,"cookies","","Returns a `Cookies<'_>` or initialize the internal Cookie jar.",64,[[["self"]],["result",["cookiejar","error"]]]],[11,"response_headers","","Returns a mutable reference to a `HeaderMap` which contains the entries of response headers.",64,[[["self"]],["headermap"]]],[11,"deref","","",64,N],[0,"launcher","finchers","Components for managing HTTP server.",N,N],[3,"Launcher","finchers::launcher","A launcher of HTTP server which contains an endpoint and some configurations.",N,N],[5,"launch","","Create an instance of `Launcher` from the specified endpoint.",N,[[["e"]],["launcher"]]],[8,"LaunchEndpoint","","A trait representing a constraint used in the definition of `Launcher<E>`.",N,N],[11,"fmt","","",65,[[["self"],["formatter"]],["result"]]],[11,"http","","Sets the protocol-level configuration.",65,[[["self"],["http"]],["self"]]],[11,"runtime","","Sets the instance of configured Tokio runtime.",65,[[["self"],["runtime"]],["self"]]],[11,"start","","Start the server with binding the specified listener address.",65,N],[0,"local","finchers","Utilities for testing endpoints.",N,N],[3,"LocalRequest","finchers::local","A builder of dummy HTTP request.",N,N],[3,"ResBody","","",N,N],[5,"get","","Create a dummy `GET` request with given URI.",N,[[["u"]],["localrequest"]]],[5,"post","","Create a dummy `POST` request with given URI.",N,[[["u"]],["localrequest"]]],[5,"put","","Create a dummy `PUT` request with given URI.",N,[[["u"]],["localrequest"]]],[5,"head","","Create a dummy `HEAD` request with given URI.",N,[[["u"]],["localrequest"]]],[5,"delete","","Create a dummy `DELETE` request with given URI.",N,[[["u"]],["localrequest"]]],[5,"patch","","Create a dummy `PATCH` request with given URI.",N,[[["u"]],["localrequest"]]],[5,"options","","Create a dummy `OPTIONS` request with given URI.",N,[[["u"]],["localrequest"]]],[11,"fmt","","",66,[[["self"],["formatter"]],["result"]]],[11,"method","","Overwrite the HTTP method of this dummy request with given value.",66,[[["self"],["m"]],["self"]]],[11,"uri","","Overwrite the URI of this dummy request with given value.",66,[[["self"],["u"]],["self"]]],[11,"header","","Append the given header entry into this dummy request.",66,[[["self"],["k"],["v"]],["self"]]],[11,"body","","Overwrite the message body of this dummy request with given instance.",66,N],[11,"apply","","Apply this dummy request to the associated endpoint and get its response.",66,[[["self"],["e"]],["result",["error"]]]],[11,"respond","","",66,[[["self"],["e"]],["response",["resbody"]]]],[11,"fmt","","",67,[[["self"],["formatter"]],["result"]]],[11,"into_chunks","","",67,[[["self"]],["vec",["bytes"]]]],[11,"is_chunked","","",67,[[["self"]],["bool"]]],[11,"trailers","","",67,[[["self"]],["option",["headermap"]]]],[11,"content_length","","",67,[[["self"]],["option",["u64"]]]],[11,"to_bytes","","",67,[[["self"]],["cow"]]],[11,"to_utf8","","",67,[[["self"]],["cow",["str"]]]],[0,"output","finchers","Components for constructing HTTP responses.",N,N],[3,"Debug","finchers::output","An instance of `Responder` representing text responses with debug output.",N,N],[12,"0","","",68,N],[3,"Json","","An instance of `Responder` representing statically typed JSON responses.",N,N],[12,"0","","",69,N],[3,"OutputContext","","Contextual information at applying `Output::respond`.",N,N],[3,"Pretty","","A wrapper type to use pretty output for the internal value.",N,N],[12,"0","","",70,N],[0,"body","","The definition of `ResBody` and implementors of `Payload`.",N,N],[3,"Payload","finchers::output::body","A wrapper struct for providing the implementation of `ResBody` for `T: Payload`.",N,N],[3,"Empty","","An instance of `Payload` representing a sized, empty message body.",N,N],[3,"Once","","A `Payload` representing a sized data.",N,N],[3,"Optional","","An instance of `Payload` which acts either a certain data or an empty bytes.",N,N],[3,"EitherPayload","","",N,N],[8,"ResBody","","The trait representing the message body in an HTTP response.",N,N],[16,"Data","","A buffer of bytes representing a single chunk of a message body.",71,N],[16,"Error","","The error type of `Self::Payload`.",71,N],[16,"Payload","","The type of `Payload` to be convert from itself.",71,N],[10,"into_payload","","Converts itself into a `Payload`.",71,N],[11,"fmt","","",72,[[["self"],["formatter"]],["result"]]],[11,"from","","",72,[[["t"]],["self"]]],[11,"into_payload","","",72,N],[11,"fmt","","",73,[[["self"],["formatter"]],["result"]]],[11,"poll_data","","",73,[[["self"]],["poll",["option"]]]],[11,"content_length","","",73,[[["self"]],["option",["u64"]]]],[11,"fmt","","",74,[[["self"],["formatter"]],["result"]]],[11,"new","","Creates an `Once` from the specified data.",74,[[["t"]],["once"]]],[11,"poll_data","","",74,[[["self"]],["poll",["option"]]]],[11,"is_end_stream","","",74,[[["self"]],["bool"]]],[11,"content_length","","",74,[[["self"]],["option",["u64"]]]],[11,"fmt","","",75,[[["self"],["formatter"]],["result"]]],[11,"from","","",75,[[["t"]],["optional"]]],[11,"from","","",75,[[["option"]],["optional"]]],[11,"empty","","Create an empty `Optional<T>`.",75,[[],["optional"]]],[11,"new","","Create an `Optional<T>` from a value of `T`.",75,[[["t"]],["optional"]]],[11,"poll_data","","",75,[[["self"]],["poll",["option"]]]],[11,"poll_trailers","","",75,[[["self"]],["poll",["option"]]]],[11,"is_end_stream","","",75,[[["self"]],["bool"]]],[11,"content_length","","",75,[[["self"]],["option",["u64"]]]],[11,"fmt","","",76,[[["self"],["formatter"]],["result"]]],[11,"from","","",76,[[["either"]],["self"]]],[11,"left","","",76,[[["l"]],["eitherpayload"]]],[11,"right","","",76,[[["r"]],["eitherpayload"]]],[11,"poll_data","","",76,[[["self"]],["poll",["option"]]]],[11,"poll_trailers","","",76,[[["self"]],["poll",["option"]]]],[11,"is_end_stream","","",76,[[["self"]],["bool"]]],[11,"content_length","","",76,[[["self"]],["option",["u64"]]]],[0,"fs","finchers::output","",N,N],[3,"NamedFile","finchers::output::fs","An instance of `Responder` representing a file on the file system.",N,N],[3,"OpenNamedFile","","",N,N],[3,"FileStream","","",N,N],[11,"fmt","","",77,[[["self"],["formatter"]],["result"]]],[11,"open","","",77,[[["pathbuf"]],["opennamedfile"]]],[11,"fmt","","",78,[[["self"],["formatter"]],["result"]]],[11,"poll","","",78,[[["self"]],["poll"]]],[11,"respond","","",77,[[["self"],["outputcontext"]],["result",["response"]]]],[11,"fmt","","",79,[[["self"],["formatter"]],["result"]]],[11,"poll_data","","",79,[[["self"]],["result",["async"]]]],[0,"status","finchers::output","",N,N],[3,"Created","finchers::output::status","",N,N],[12,"0","","",80,N],[3,"NoContent","","",N,N],[3,"Status","","",N,N],[12,"value","","",81,N],[12,"status","","",81,N],[11,"fmt","","",80,[[["self"],["formatter"]],["result"]]],[11,"respond","","",80,[[["self"],["outputcontext"]],["result",["response"]]]],[11,"fmt","","",82,[[["self"],["formatter"]],["result"]]],[11,"respond","","",82,[[["self"],["outputcontext"]],["result",["response"]]]],[11,"fmt","","",81,[[["self"],["formatter"]],["result"]]],[11,"respond","","",81,[[["self"],["outputcontext"]],["result",["response"]]]],[11,"fmt","finchers::output","",68,[[["self"],["formatter"]],["result"]]],[11,"respond","","",68,[[["self"],["outputcontext"]],["result",["response"]]]],[11,"fmt","","",69,[[["self"],["formatter"]],["result"]]],[11,"from","","",69,[[["t"]],["self"]]],[11,"respond","","",69,[[["self"],["outputcontext"]],["result",["response"]]]],[8,"Output","","A trait representing the value to be converted into an HTTP response.",N,N],[16,"Body","","The type of response body.",83,N],[16,"Error","","The error type of `respond()`.",83,N],[10,"respond","","Converts `self` into an HTTP response.",83,[[["self"],["outputcontext"]],["result",["response"]]]],[11,"fmt","","",84,[[["self"],["formatter"]],["result"]]],[11,"input","","Returns a pinned reference to `Input` stored on the task context.",84,[[["self"]],["input"]]],[11,"pretty","","Creates a clone of `OutputContext` with setting the mode to \"pretty\".",84,[[["self"]],["outputcontext"]]],[11,"is_pretty","","Returns `true` if the current mode is set to \"pretty\".",84,[[["self"]],["bool"]]],[11,"fmt","","",70,[[["self"],["formatter"]],["result"]]],[11,"respond","","",70,[[["self"],["outputcontext"]],["result",["response"]]]],[0,"prelude","finchers","A prelude for crates using the `finchers` crate.",N,N],[14,"path","","A helper macro for creating an endpoint which matches to the specified HTTP path.",N,N],[14,"routes","","A helper macro for creating the instance of`Endpoint` from multiple routes.",N,N],[14,"impl_endpoint","","",N,N]],"paths":[[3,"EndpointObj"],[3,"LocalEndpointObj"],[3,"Context"],[3,"EndpointError"],[3,"MatchVerbs"],[3,"MatchVerbGet"],[3,"MatchVerbPost"],[3,"MatchVerbPut"],[3,"MatchVerbDelete"],[3,"MatchVerbHead"],[3,"MatchVerbOptions"],[3,"MatchVerbConnect"],[3,"MatchVerbPatch"],[3,"MatchVerbTrace"],[3,"Verbs"],[3,"VerbsIter"],[3,"MatchSegment"],[3,"MatchEos"],[3,"Param"],[3,"Remains"],[3,"AfterApply"],[3,"AndThen"],[3,"BeforeApply"],[3,"Map"],[3,"OrReject"],[3,"OrRejectWith"],[3,"Recover"],[8,"Wrapper"],[8,"EndpointWrapExt"],[3,"And"],[3,"ApplyFn"],[3,"Or"],[3,"OrStrict"],[3,"Unit"],[3,"Value"],[8,"Endpoint"],[8,"IntoEndpoint"],[8,"IntoEndpointExt"],[3,"SendEndpoint"],[3,"Raw"],[3,"ReceiveAll"],[3,"Text"],[3,"Json"],[3,"UrlEncoded"],[3,"Required"],[3,"Optional"],[3,"File"],[3,"Dir"],[3,"Parse"],[3,"Optional"],[3,"Matches"],[3,"Raw"],[3,"Info"],[3,"Logging"],[3,"Required"],[3,"Optional"],[3,"Raw"],[4,"Never"],[8,"HttpError"],[3,"Error"],[3,"ReqBody"],[3,"EncodedStr"],[8,"FromEncodedStr"],[8,"FromHeaderValue"],[3,"Input"],[3,"Launcher"],[3,"LocalRequest"],[3,"ResBody"],[3,"Debug"],[3,"Json"],[3,"Pretty"],[8,"ResBody"],[3,"Payload"],[3,"Empty"],[3,"Once"],[3,"Optional"],[3,"EitherPayload"],[3,"NamedFile"],[3,"OpenNamedFile"],[3,"FileStream"],[3,"Created"],[3,"Status"],[3,"NoContent"],[8,"Output"],[3,"OutputContext"]]};
initSearch(searchIndex);