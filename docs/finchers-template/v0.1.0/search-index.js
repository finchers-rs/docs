var N = null;var searchIndex = {};
searchIndex["finchers_template"]={"doc":"Template support for Finchers","items":[[3,"Renderer","finchers_template","The type representing a renderer using the specified template engine.",N,N],[3,"TemplateEndpoint","","The type of endpoint which renders a Tera template with the value of specified context type.",N,N],[5,"renderer","","Create a new `Renderer` from the specified template engine and template name.",N,N],[0,"askama","","Components for supporting askama.",N,N],[3,"RenderEndpoint","finchers_template::askama","An endpoint which renders the output of inner endpoint and convert it into an HTTP response.",N,N],[3,"Renderer","","The type for modifying the result rendered by Askama to an HTTP response.",N,N],[5,"renderer","","Create a `Renderer` for rendering the value of context type which implements `askama::Template`.",N,[[],["renderer"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"content_type","","Sets the content type of generated HTTP response.",0,[[["self"],["mime"]],["renderer"]]],[11,"wrap","","",0,N],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"apply","","",1,[[["self"],["applycontext"]],["applyresult"]]],[11,"fmt","finchers_template","",2,[[["self"],["formatter"]],["result"]]],[11,"clone","","",2,[[["self"]],["renderer"]]],[11,"content_type","","Set the content-type of generated content.",2,[[["self"],["mime"]],["renderer"]]],[11,"into_endpoint","","",2,N],[11,"wrap","","",2,N],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"apply","","",3,[[["self"],["applycontext"]],["applyresult"]]],[8,"TemplateEngine","","A trait representing template engine used in `Renderer`.",N,N],[16,"Body","","",4,N],[16,"Error","","",4,N],[10,"render","","",4,[[["self"],["str"],["t"]],["result"]]]],"paths":[[3,"Renderer"],[3,"RenderEndpoint"],[3,"Renderer"],[3,"TemplateEndpoint"],[8,"TemplateEngine"]]};
initSearch(searchIndex);