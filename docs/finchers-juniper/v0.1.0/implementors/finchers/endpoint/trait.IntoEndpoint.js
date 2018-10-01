(function() {var implementors = {};
implementors["finchers_juniper"] = [{text:"impl&lt;'a, QueryT, MutationT&gt; <a class=\"trait\" href=\"https://finchers-rs.github.io/docs/finchers/v0.12.0/finchers/endpoint/trait.IntoEndpoint.html\" title=\"trait finchers::endpoint::IntoEndpoint\">IntoEndpoint</a>&lt;'a&gt; for <a class=\"struct\" href=\"finchers_juniper/execute/struct.CurrentThread.html\" title=\"struct finchers_juniper::execute::CurrentThread\">CurrentThread</a>&lt;QueryT, MutationT&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;QueryT: GraphQLType&lt;Context = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; + 'a,<br>&nbsp;&nbsp;&nbsp;&nbsp;MutationT: GraphQLType&lt;Context = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; + 'a,&nbsp;</span>",synthetic:false,types:["finchers_juniper::execute::current_thread::CurrentThread"]},{text:"impl&lt;'a, QueryT, MutationT&gt; <a class=\"trait\" href=\"https://finchers-rs.github.io/docs/finchers/v0.12.0/finchers/endpoint/trait.IntoEndpoint.html\" title=\"trait finchers::endpoint::IntoEndpoint\">IntoEndpoint</a>&lt;'a&gt; for <a class=\"struct\" href=\"finchers_juniper/execute/struct.Nonblocking.html\" title=\"struct finchers_juniper::execute::Nonblocking\">Nonblocking</a>&lt;QueryT, MutationT&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;QueryT: GraphQLType&lt;Context = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;QueryT::TypeInfo: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;MutationT: GraphQLType&lt;Context = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;MutationT::TypeInfo: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,&nbsp;</span>",synthetic:false,types:["finchers_juniper::execute::nonblocking::Nonblocking"]},{text:"impl&lt;'a, QueryT, MutationT, Sp&gt; <a class=\"trait\" href=\"https://finchers-rs.github.io/docs/finchers/v0.12.0/finchers/endpoint/trait.IntoEndpoint.html\" title=\"trait finchers::endpoint::IntoEndpoint\">IntoEndpoint</a>&lt;'a&gt; for <a class=\"struct\" href=\"finchers_juniper/execute/struct.WithSpawner.html\" title=\"struct finchers_juniper::execute::WithSpawner\">WithSpawner</a>&lt;QueryT, MutationT, Sp&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;QueryT: GraphQLType&lt;Context = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;QueryT::TypeInfo: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;MutationT: GraphQLType&lt;Context = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;MutationT::TypeInfo: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;Sp: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Executor.html\" title=\"trait futures::future::Executor\">Executor</a>&lt;<a class=\"struct\" href=\"https://docs.rs/futures/0.1/futures/sync/oneshot/struct.Execute.html\" title=\"struct futures::sync::oneshot::Execute\">Execute</a>&lt;GraphQLTask&lt;QueryT, MutationT, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;&gt;&gt; + 'a,&nbsp;</span>",synthetic:false,types:["finchers_juniper::execute::with_spawner::WithSpawner"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
