(function() {var implementors = {};
implementors["finchers_template"] = [{text:"impl&lt;'a, E, CtxT&gt; <a class=\"trait\" href=\"https://finchers-rs.github.io/docs/finchers/v0.12.0/finchers/endpoint/trait.Endpoint.html\" title=\"trait finchers::endpoint::Endpoint\">Endpoint</a>&lt;'a&gt; for <a class=\"struct\" href=\"finchers_template/askama/struct.RenderEndpoint.html\" title=\"struct finchers_template::askama::RenderEndpoint\">RenderEndpoint</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://finchers-rs.github.io/docs/finchers/v0.12.0/finchers/endpoint/trait.Endpoint.html\" title=\"trait finchers::endpoint::Endpoint\">Endpoint</a>&lt;'a, Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>CtxT<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">,)</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;CtxT: Template,&nbsp;</span>",synthetic:false,types:["finchers_template::askama::imp::RenderEndpoint"]},{text:"impl&lt;'a, T, E, CtxT&gt; <a class=\"trait\" href=\"https://finchers-rs.github.io/docs/finchers/v0.12.0/finchers/endpoint/trait.Endpoint.html\" title=\"trait finchers::endpoint::Endpoint\">Endpoint</a>&lt;'a&gt; for <a class=\"struct\" href=\"finchers_template/struct.TemplateEndpoint.html\" title=\"struct finchers_template::TemplateEndpoint\">TemplateEndpoint</a>&lt;T, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"finchers_template/trait.TemplateEngine.html\" title=\"trait finchers_template::TemplateEngine\">TemplateEngine</a> + 'a,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://finchers-rs.github.io/docs/finchers/v0.12.0/finchers/endpoint/trait.Endpoint.html\" title=\"trait finchers::endpoint::Endpoint\">Endpoint</a>&lt;'a, Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>CtxT<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">,)</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;CtxT: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.79/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>",synthetic:false,types:["finchers_template::imp::TemplateEndpoint"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()