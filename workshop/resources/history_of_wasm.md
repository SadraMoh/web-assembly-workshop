# Brief history of wasm

WebAssembly draws its name from the idea of assembly language, a term originating in the 1950s. The nomenclature implies the integration of assembly-like programming into the web environment, enabling execution on the client-side – specifically, by the user's computer through their web browser. To achieve this, WebAssembly must exhibit a higher degree of hardware independence than traditional assembly languages.

Initially unveiled in 2015, WebAssembly showcased its capabilities by running Unity's Angry Bots in browsers such as Firefox, Google Chrome, and Microsoft Edge. This technology builds upon earlier developments like Mozilla's asm.js and Google Native Client, with the initial implementation leveraging asm.js's feature set. Asm.js already offers nearly native code execution speeds, serving as a feasible alternative for browsers lacking WebAssembly support or disabling it for security reasons.

By March 2017, the design of the minimum viable product (MVP) was declared complete, marking the end of the preview phase. Safari 11, released in late September 2017, included support for WebAssembly. Subsequent to this, in February 2018, the WebAssembly Working Group issued three public working drafts covering the Core Specification, JavaScript Interface, and Web API.

In June 2019, Chrome 75 introduced WebAssembly threads as a default feature. As of April 2022, WebAssembly 2.0 is in draft status, incorporating numerous SIMD-related instructions, a new v128 datatype, the ability for functions to return multiple values, and enhanced capabilities for memory initialization and copying.

# Wasm frameworks

WebAssembly has seen a number of frameworks developed around it since its inception. Here are some notable ones:

- Blazor: Developed by Microsoft, Blazor is a client-side framework for building interactive web UIs with .NET. It's based on a .NET web application model, and it lets developers write client-side web UI using C# instead of JavaScript. Blazor WebAssembly is the framework for building client-side web apps with .NET and WebAssembly. It's a relatively new framework, having been released just a year ago, but it's gaining traction due to its strong backing by Microsoft.

- Vugu: Vugu is a framework written in Go that supports components and is modeled after Vue.js syntax. It's still in the experimental phase but shows promise for developing web applications with Go and WebAssembly.

- Spin: Spin is a WebAssembly framework for microservices, web apps, and other server-based applications. Developers can use Spin to write WebAssembly for the cloud. It currently supports languages including Rust, Go, Python, Ruby, AssemblyScript, Grain, C/C++, and others.

- Yew: Yew is a modern Rust framework for creating multi-threaded front-end web apps with WebAssembly. It's inspired by Elm and ReactJS and supports a component-based architecture. Yew's design allows developers to write high-performing concurrent applications that scale well.

- Dioxus is a Rust-based framework for building user interfaces. It draws inspiration from React, with hooks for state management, a virtual DOM, and JSX-like syntax. Dioxus supports various platforms including web, desktop, and mobile, and is known for its performance, being more performant than many other Rust UI libraries and significantly more performant than React. However, it's important to note that Dioxus is a library for declaring interactive user interfaces, not a dedicated renderer.

- Leptos: Leptos is a Rust and WebAssembly full-stack framework that enables the construction of fast and reactive UIs. It leverages Rust's safety and performance benefits and Wasm's near-native speed and portability. Leptos supports both server-side and client-side rendering, and its "isomorphic" server functions simplify interactions with server services. This makes Leptos a compelling choice for developers seeking to harness the strengths of Rust and Wasm in their web applications.

Each of these frameworks brings unique advantages and capabilities, contributing to the growing ecosystem of WebAssembly applications.

# Developer Adoption

People may be hesitant to adopt WebAssembly (Wasm) due to a few reasons:

- Learning Curve: Wasm is a low-level language, and understanding and using it effectively requires a different mindset compared to higher-level languages like JavaScript, Python, or Ruby. This can make it harder to learn and use effectively.

- Compilation Process: The process of compiling high-level languages into Wasm can be complex and error-prone. This complexity can be a barrier for developers who are not familiar with the intricacies of low-level languages.

- Lack of Standardization: Although Wasm is being developed as a web standard by the W3C, some parts of the specification are still being finalized. This lack of standardization can make it difficult to develop and deploy Wasm applications, potentially slowing down their adoption.

- Internal Conflicts and Disputes: The Wasm ecosystem has seen some internal conflicts and disputes. For instance, AssemblyScript, a language designed specifically for using Wasm in the browser, recently withdrew its support for WASI, the Wasm system interface, citing disagreements with the WASI project's proposals. This kind of instability can create uncertainty and hesitation among developers who are considering adopting Wasm.

Despite these challenges, Wasm is making progress towards readiness for prime-time. Major browser vendors are implementing support for Wasm, and several frameworks and libraries are being developed to make it easier to use. Furthermore, the growing demand for high-performance web applications is driving the adoption of Wasm.
