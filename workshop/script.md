Hello Everyone,
I hope you are all having a great day.

Welcome to my WebAssembly/Wasm Workshop. I'd like to thank you all for joining.

Let me first give you a brief introduction of what this workshop is all about, it's structure, the contents and the subject matter.

We are going to be talking about Web Assembly which is a fairly recent web technology that - among others things - allows the usage of other programming languages and their ecosystems for web development, and has the potential to drastically widen the definition of what a web application actually is.

We are going to go through a couple of slides in the beginning but after those we'll quickly reach the first interactive DIY module, where you the attendees will try out some of the stuff we introduce here on your own; Nothing too fancy or complicated, the modules are already prepared and most of them miss only a couple adjustments and there are instructions for most of them.

Now some of you might hear the term Web Assembly and take a look at the presenter and think "This has probably nothing to do with what I usually work with, I'm not sure if I'm in the right place" and to you I will say, there is something here for every kind of developer, yes we are going to talk about the front end a lot but there are also modules on backend and full-stack development, the latter I'm actually most excited to talk about.
So don't get scared off!

The keen eye has probably also noticed Ferris the crab being all jolly, this is because we are also going to talk a fair amount about rust, what does rust have to do with Web Assembly? We'll get to that in a bit.

Right so let's get right into it.

> Slide 2

So here is the end goals of the entire talk,

We are going to thoroughly examine each one of these questions and answer them one by one.

Question one is what in the world even is WASM / Web Assembly. Turns out WASM is actually a lot of things. There is a lot more into this question than it might seem.

Question two and honestly why we are all probably here:
Can I already make Web Apps with WASM that **work** and not have to jump through hurdles along the way. Can I ship WASM, is it a viable choice, does it make sense to use it at all? IS IT READY?

Question three kind of spoils the answer to that one,
How can I do that?
It was answering this question that roped Rust into this talk, and believe it or not, it's not because of Rust's performance that I chose Rust (although rust is pretty fast) it was actually the fact that it is the easiest way to make apps using WASM at the moment.

> Slide 3

Without any dilly or dally let's start tackling the first question shall we?

Now just what is Web Assembly?

"Web Assembly (abbreviated WASM) is a binary instruction format. WASM is designed as a portable compilation target for programming languages, enabling deployment on the web for client and server applications."

This would probably be the first result if you searched it on google, because it is how the creators define WASM, which would be Mozilla.

You might still be scratching your head after reading that so let's dissect this definition into smaller chunks.

WASM is a binary instruction format. It is a very low level way of communicating intent and interfacing with the hardware to get it to do what we want, which is done using a set of commands and instructions. So it is very similar to plain Assembly, except its portable. With assembly you'd need a different flavor for every kind of CPU there is out there. With WASM you only have one that works on any hardware. It's because WASM code does not run directly on the CPU. There is a relatively human readable textual format of WASM and then there is the binary format, <Explain what an abstraction is> I am going to show you what the textual format looks like.

WASM is a compilation target. This basically means WASM is not intended to be programmed in directly. That would be plain insane it's 2024 for heavens sake.
But rather, WASM is supposed to be used as a target to compile your favorite languages to. In this sense WASM is an intermediary between a higher level language, and the bare metal. Its basically an Abstraction.

Deployment on the web for client and server applications, there are some benefits to run WASM on the backend. Standardization and portability is one of them. As long as there is a WASM runtime on your target machine, the same WASM binary can run on it. "Write once, run everywhere" sound familiar to you? Any Java fans? in principle this has the potential to replace containerization.

> Slide 4

So here is what WASM's textual format looks like.

As you can see it's drastically different than any ASM flavor. No `mov` instructions, no registers, an import statement? functions?
And is all of this in a module? That is right. Although WASM is a low level instruction set, it's still a lot more high level than ASM. It is designed to be able to interop with the environment it is embedded in. In this case the browser and the JavaScript runtime in it.

The code imports the console object and the log so it can print output to the console,

Defines a static string with the content of "Hello World from Web Assembly"

Defines and exports a function named `helloWorld`, in it passes a pointer to the beginning of the data section and another one to the end of the string, to the log function and calls it.

> Slide 5

(Explain generally what these tables are and why there are there)

Which languages can I use to write Web Apps using WASM then, is my favorite language supported?

Most language already have ecosystems around compiling to WASM. There most probably is a toolchain/compiler for most languages that allows the compilation of that language to WASM.
The better suited languages for this job are the ones that support WASM compilation officially and out of the box. That would make Rust and Go.

For interpreted languages like python, the solution is as easy as compiling the interpreter to WASM and having it run the host language. Can't say I advocate for it, but it exists.

Traditionally the most used languages to target WASM were C and C++ using `EmScripten` but there is a new kid on the block, and he is pretty cool.

> Slide 6

(Explain generally what these tables are and why there are there)

You might have heard me mention Web Assembly on the backend. Yes WASM can run pretty much everywhere there is a runtime for.

Here is a list of all the available WASM runtimes for different environments.

As you can see Chrome and Firefox support pretty much all WASM standard features plus a few ongoing proposals.
Classic Safari falling behind on adopting new technologies. On the backend side we have the usual JavaScript runtimes Node and DENO which support WASM, which allow writing hybrid apps that use JavaScript as a host and WASM as a guest. We'll be writing on such application in a hands-on module. And we have the pure WASM Runtimes like WASMER and WASMTIME. I'll have to point out WASMER is not just a runtime, it's also a package manager, a package registry and a whole toolchain for WASM development.

> Slide 7

Quick note on WASI,

Web Assembly System Interface or WASI, is a standard way for WASM modules to interact with the operating system, breaking WASM out of the browser and allowing it to run back-end applications. So WASI modules is how WASM can interop with the OS and run on any platform. In a future module we are going to publish a library in WASI and use it on both the frontend side and the backend side.

WASI also provides it's own encapsulated environment with its own memory and filesystem - very much like a container.

This exact feature of WASI was probably what Solomon Hykes thought of when he tweeted this:

> Read Tweet

> Slide 8

Now that we have a fair knowledge of **What** WASM is, let's explore **Why** one would use WASM in their project.

If you went on the internet looking for an answer, you'd most probably encounter these buzz words,

It's performant! Brings near-native performance to web interfaces.

It's language agnostic! Down with JavaScript.

It's safe and secure!

An these are valid arguments, but let's dig deep into what each one really brings to the table.

> Slide 9

The fact that WASM can be targeted by any language, and it's incomparable performance, opens the door to so many opportunities. Web apps could benefit from the accumulative ecosystem of all the existing languages of the world and without the need to interface over communication protocol.
The safety aspect of WASM is it's own topic to be discussed.

> Slide 10

But how broad are the possibilities?

Let's look at a few examples

Exhibit number 1: Figma

The collaborative design tool that has found his way into every designer and developers heart, one way or another.
It's a crucial part of many companies' workflows and certainly ours too.

Figma's workbench (i.e. the editor area) is entirely handled by WASM, while the rest of the UI is traditional React.

Figma made a big bet on WASM and made it even bigger, beating Sketch and Adobe.

> Slide 11

Autodesk has also hopped on the WASM bandwagon and has chosen to migrate their classic CAD tool AutoCAD to the web. There are very few engineers who have not heard of AutoCAD, the industry standard platform for designing and documenting build plans and projects.

> Slide 12

And my favorite out of all, We have Doom 3 running on 60fps fully inside the browser.

Graphic intensive applications like video games is also something the WASM toolchain is good at which is made possible through the direct access to low level graphics APIs using WebGL.

> Slide 13

WASM bein language agnostic allows for any package out of the ecosystem of any language to be used in the same project without the need to interface with something like a Web API.

This allows for "Best of Both Worlds" scenarios where each language is used where it shines.

A higher level, less efficient language may be used to use the driver code while the implementation behind the performance critical operations can be done in a more efficient and possibly lower level language.

We'll see an example of this in an upcoming module.

> Slide 14

Safety is an ever-growing concern of web applications.
Safety has various aspects, all of which can benefit from the introduction of WASM.

JavaScript misses a type system, which leaves the room for a lot of type related issues and bugs that are only seen on runtime. This is why transpilers like TypeScript and Flow exist. In a WASM project, a language with better type safety features can be used to mitigate this issue at compile time.

In computation intensive scenarios where memory efficiency is the bottleneck, low level languages that provide the developer with full control on memory are without doubt the way to go and is why most software in general are written in C and C++. With great power does come great responsibility though, as C and C++ do make it very easy to leave memory related vulnerabilities in the code. With WASM, developers are not bound to use C or C++ anymore. These issues are the key focus of a myriad of new low-level programming languages with high level features like Go, Zig and Rust.

> Slide 15

Quick disclaimer before we proceed with the next slide.

The performance and security benefits of WASM do not come inherently with using WASM in your project alone. Just the fact that the app runs on WASM does not guarantee any adittional efficiency or safety, it rather permits it, it introduces the potential for such benefits.

Leaky unefficient programs can exist in WASM and it is still possible to leave vulnerabilities throughout a WASM app that compromise security. It is not that WASM eliminates them by it's nature, it rather allows for the correct tools and set of conventions and rules
to be used to minimize such deficits.

WASM like many other technologies is of course not a silver bullet, there are projects where it makes more sense to use WASM and there are ones where it doesn't.

There are various ways to build up a WASM stack - a set of tools and technologies that work on the premise of WASM;  which ones to choose is highly subjective to the kind of project they are being used to build and its requirements and focuses.

> Slide 16

In this part of the presentation, we'll get to know the easiest way to get started with WASM, and already start building apps without worrying too much about the lower-level details of how WASM works and having to deal with all the hurdles to get it to actually work.

Introducing Rust.

Rust is a low-level programming language with high-level language features that make the life of developers like us a whole lot easier when dealing with system code. Rust is of course not known for how easy it is, but surprisingly enough, it is currently the language
with the most support for WASM, with WASM being officially supported as a compile target and huge community and ecosystem around making rust work with WASM. It is clear this is the to-go language for getting started with WASM today.

> Slide 17

Let's have a quick crash course in Rust,

Rust is classified as a systems programming language and deals with low level complexities all the time, but it does a great job at hiding those complexities under a set of abstractions, rules and patterns.

Rust strictly follows the RAII pattern, RAII stands for Resource Acquisition is Initialization, and is a pattern generaly thought to be good practice to follow espacially when writing low level programs like operating systems and mission critical software where safety and security are absolutely crucial.
Rust likes this pattern so much, that it has it built into the compiler. If the code you write does not follow these patterns, you'll simply get compiler errors. And that is how Rust ensures safety, by not allowing unsafe programs to compile at all.

The syntax of Rust is very familiar and supports a lot of the techniques seen in higher level languages like C# and python, including pattern matching and generics to name a few.

> Slide 18

What makes Rust itself so suitable for WASM, disregarding all the ecosystem advantages mentioned before, is the fact that rust has no garbage collector. This is a huge benefit, as garbage collectors to take up space and bloat the bundle size.
There are also other complications why using a non garbage-collected langauge is benefitial, including lack of support for garbage collection on browsers, and the fact that the garbage collector of the JS runtme would have to sync up with the garbage collector of the
target language. A lot of memory copying would have to be done, which ultimately nullifies the benefit of using WASM in the first place.

And we already talked about how the support for WASM in the rust space is top-notch.

> Slide 19

Now, this is where the fun begins.

I've been talking on and on for a while now, but let's get our hands dirty now. Let's see some actual coding for a change.

> Slide 20

So here is the plan,

To demonstrate how language-agnostic WASM is, and how easily it can interop with other languages in their own environments, we'll be creating a library using rust and then compile it to WASM.

We'll then setup a server-side backend project in nodejs that serves an endpoint that uses the library underneath.

We'll also do a similar thin on the frontend, where we create a traditional frontend app using a lightweight javascript framework and utilize the same library on the client side.

I will demonstrate how such a library can be created and upload it to the registry, however using the library on the frontend side and the backend side are going to be a hands-on module each.

> Slide 21

Here is the overall plan of the steps I will go through to create the library.

I'll make a new rust project, define an interface file that is used to generate glue code on both the rust side and the Javascript side to make the library embeddable, I'll implement the interface and I'll then upload the library to the wasmer.io package registry
which is where the library will reside and can be depended on by other projects.

> Live Demo

```shell

cd package/
cargo init --lib 

```

Cargo.toml
```toml

[package]
name = "universal_lib"
version = "0.1.4"
edition = "2021"
description = "Universal cargo library"

[lib]
crate-type = ["cdylib", "rlib"]

[dependencies]
wai-bindgen-rust = "0.2.3"

[package.metadata.wasmer]
namespace = "sadramoh"                                              # same as your wasmer.io account handle
abi = "wasi"                                                        # choose "wasi" for both javascript and python bindings
bindings = { wai-version = "0.1.0", exports = "universal-lib.wai" } # should not contain `_` underscores

```

universal-lib.wai
```wai

// say hello to the user
hello: func(user: string) -> string

```

lib.rs
```rust

wai_bindgen_rust::export!("universal-lib.wai");


```

lib.rs
```rust

pub struct UniversalLib;

impl universal_lib::UniversalLib for UniversalLib {
    // we'll implement the modules functions here
}

```

lib.rs
```rust

pub struct UniversalLib;

impl universal_lib::UniversalLib for UniversalLib {
    fn hello(user: String) -> String {
        format!("Hello {user}")
    }
}

```

> Slide 22

So now we have a library that can be hosted in Javascript and Python applications.

> Slide 23

This is the beginning of the first hands-on module.

It is now your turn to create the applications that consume the library we just created, and implement some sort of functionality.

Don't even flinch, it is way easier than you think.

> Slide 24

Using the WASM library in Javascript projects involves these general steps regardless of whether it is a backend or a frotned project.

You will want to initialize a nodejs project, or just clone the repository from github and install the dependencies,

You will want to use the command on wasmer.io to add the library as a dependency,

And lastly you will want to import the functionality from the library and use it in the project.

> Decide on breakout teams or everyone on their own

> Slide 25

The end goal of the backend module is of course to serve an endpoint that calls into the library and responds with a string generated by that library.

If you ever felt lost in the middle of the process, here is each step you'll need to take to make this work, if you have any questions at any point feel free to just open your mic and ask them and we'll have a look at it together.

> Slide 26

Here is the second module where we use the same library on a frontend project, the steps are fairly similar to the previous module, except you'll have to initialize a frontend project instead of a plain node package.

> Slide 27

We did it!

I hope the modules helped nail down the fact that WASM is already usable in projects an with rather ease at that.

Using WASM libraries is one of the most risk-free and low-comittment ways to include WASM into any project.

But what if you wanted to go full out on WASM?

> Slide 28

The prospect of having all of your codebase in one language that can run both on the server and the client is sure charming, which is why here are already quite a lot of WASM based fullstack libraries out there.

> Name the frameworks one by one

Today we'll be exploring one of the most mature full stack frameworks for web development using WASM.

It's called Leptos.

> Slide 29

Leptos is a Rust framework for fullstack web development based on WASM.
It allows both the backend and the frontend to be written in Rust, which allows for features such as RPC and server functions.

It draws heavy inspiration from modern fullstack frameworks like solid-start and nextjs, and uses the most popular web technologies in the Rust ecosystem underneath.

This part of the workshop was originally made out to be interactive and I have reserved time for it, however due to the high setup requirements of getting rust to run on a windows laptop without the need to install Visual Studio,
I'll demonstarte live how to setup a basic leptos project and use some of it's awesome features, and after the keynote of the presentation, if anyone was still interested and we still have some time, we will setup all the requirements together so that everyone can try this framework on their own.

> Slide 30

> Make cargo leptos project and showcase the component based UI layout, the view macro, server functions, and SSR

> Slide 31

so, We are nearing the end of our a-WASM journey. I'm sure each of us has some sort of an answer to the three questions from the beginning of the presentation, here is one last question we'll be trying to answer from what we learned just now. Should I be using Wasm in my project? Is Wasm the way to go?
Well we learned throughout the presentation what Wasm really is, we learned how rapidly growing and sometimes unstable it is, so you should be expecting breaking changes if you decide in favor of Wasm.
We learned how WASM focuses on safety and performance, so if runtime stability and efficiency are crucial requirements of your application, you can trust Wasm.
We learned tht WASM makes developing whole new types of appliations on the web possible, so if your project is of such peculiarity, Wasm is probably a good bet.
Last but not least we learned WASM is definitely ready for production. It's been like that actually. Remember Figma?

> Slide 32

Thank you everyone for attending this workshop, I hope I was able to provide you with valuable information in exchange for your precious time.

If you decided to dabble in some Wasm or Rust projects of your own, I would be glad to know about them and help if I can, I am a WASM and Rust enthusiast myself.

> Check if there is at least 15 min of time left

At this rate we have reached the end of the workshop, but if anyone is intrested in trying out Leptos or Rust on their own, we can try and implement the Leptos app I wrote up on the last module together.
