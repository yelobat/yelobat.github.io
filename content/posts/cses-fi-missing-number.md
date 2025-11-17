+++
title = "cses.fi - Missing Number"
author = ["yelobat"]
date = 2025-11-17
tags = ["algorithms", "rust"]
draft = false
+++

<div class="ox-hugo-toc toc">

<div class="heading">Table of Contents</div>

- [Introduction](#introduction)
- [The problem](#the-problem)
- [Side Note](#side-note)

</div>
<!--endtoc-->

{{< katex >}}


## Introduction {#introduction}

Welcome back to the series on the cses.fi problem set. A series that goes
through all of the problems on cses.fi! If you are new here, I am working my way
through all of the problems in the order they are presented on the site, so you
can go back to see the solution to the [weird algorthm](/posts/cses-fi-weird-algorithm) problem.


## The problem {#the-problem}

"You are given all numbers between \\(1, 2, ..., n\\) except one. Your task is to find
the missing number."

This is also relatively trivial to solve with something like a Set, but let's
try and be more creative with our solution. First, let's look at some examples
of inputs to see if we can come up with a solution from there:

```rust
fn solve(n: u32, v: Vec<u32>) {
    // ???
}

fn main() {
    solve(5, vec![1, 2, 3, 5]); // => 4
    solve(10, vec![1, 2, 3, 4, 6, 7, 8, 9, 10]); // => 5
    solve(7, vec![2, 3, 4, 5, 6, 7]); // => 1
}
```

We are quite lucky that we only have to find one number, because of this we can
take advantage of the following property to solve this problem:

\begin{align}
\text{solve}(n, v) = \frac{n(1 + n)}{2} - \sum\_{i = 1}^{n - 1} v\_{i - 1}
\end{align}

But what does this equation mean? Let's break it down into it's concrete parts
first and talk about each part one at a time, the first part is this:

\begin{align}
\frac{n(1 + n)}{2}
\end{align}

This is the equation, which is a function of \\(n\\), which will tell you what
the sum of all of the numbers in \\(v = \\{1, 2, ... n\\}\\) is. It's equivalent to the
following:

\begin{align}
\frac{n(1 + n)}{2} \equiv \sum\_{1}^{n} v\_{i - 1}
\end{align}

Let's look at an example, for \\(v = \\{1, 2, 3, 4, 5\\}\\):

\begin{align}
1 + 2 + 3 + 4 + 5 = 15
\end{align}

And with the equation we get:

\begin{align}
\frac{5(5 + 1)}{2} = \frac{5 \times 6}{2} = \frac{30}{2} = 15
\end{align}

The same value! The trick of the equation is that there are \\(\frac{n}{2}\\)
instances of \\(n + 1\\). So in the previous example, there are \\(2.5\\) instances
of \\(6\\), and this is true since we have \\(1, 2, 3, 4, 5\\), but we can rewrite this
as:

\begin{align}
1 + 5, 2 + 4, 3 \equiv 6, 6, 3
\end{align}

Which is exactly two and half copies of \\(6\\).

The next part is this:

\begin{align}
\sum\_{i = 1}^{n - 1} v\_{i - 1}
\end{align}

This just describes the sum of all of the elements that we receive as part of
our input. So if had \\(v = \\{1, 2, 3, 5\\}\\), then we have:

\begin{align}
\sum\_{i = 1}^{n - 1} v\_{i - 1} = 1 + 2 + 3 + 5 = 11
\end{align}

Have you noticed how this solution works now? By subtracting the sum of our
input, from the sum of all the numbers from \\(1\\) to \\(n\\), we get the missing
number!

With the example of \\(v = \\{1, 2, 3, 5\\}\\), we get:

\begin{align}
\text{solve}(5, \\{1, 2, 3, 5\\}) &= \frac{5(5 + 1)}{2} - (1 + 2 + 3 + 5) \\\\
&= 15 - 11 \\\\
&= 4 \\\\
\end{align}

And \\(4\\) is exactly the missing element. Let's implement this:

```rust
use std::io;

fn main() {
    let mut input = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Failed to read a line");
    let n: u64 = input
        .trim()
        .parse()
        .expect("The input was not a valid number");

    input.clear();

    io::stdin()
        .read_line(&mut input)
        .expect("Failed to read a line");

    let v: Vec<u64> = input
        .split(" ")
        .filter(|&s| s != " ")
        .map(|s| s.trim().parse().unwrap())
        .collect();

    let first_part: u64 = (1..n + 1).sum();
    let second_part: u64 = v.iter().sum();
    println!("{}", first_part - second_part);
}
```

This solution is probably rather convoluted and there are most likely libraries
that I can use to simplify the code a little bit with regards to the parsing
of the problem input, but I digress. This is the solution, and it passes all of
the test cases!


## Side Note {#side-note}

If you are solving a problem, it's important to consider the input constraints,
for this problem we see that the problem has the following input constraints:

\begin{align}
1 \leq n \leq 2 \times 10^{5}
\end{align}

We preferably want to avoid the problem we faced when solving the first problem
[weird algorthm](/posts/cses-fi-weird-algorithm) where we used `u32` instead of `u64`, which resulted in an overflow
in our chosen type.

We can be paranoid and choose to use `u64` for every problem that we do, but
this isn't always good since we will have memory constraints for some problems,
perhaps not for cses, but other platforms like codeforces imposes these
restrictions, and is good habit as we don't have unlimited memory.

To determine whether using `u64` is necessary for our program, we can check to
see if the largest possible input will fit in a `u32` in the worst case. So
for \\(n = 2 \times 10^5\\) we can check to see how many bits this consumes with
the following formula:

\begin{align}
\text{bits}(n) = \lceil {\text{log}(n, 2)} \rceil
\end{align}

So \\(\text{bits}(2 \times 10^5) = 18 \\; \text{bits}\\) required to store this number.
Great so `u32` is good, right? No, we also perform a summation, and in the worst
case this will be from \\(1, 2, ... 2 \times 10^5\\). This summation is:

\begin{align}
\frac{(2 \times 10^{5})(1 + 2 \times 10^{5})}{2} = 20000100000
\end{align}

Now this number requires \\(\text{bits}(20000100000) = 35 \\; \text{bits}\\). So, if we
were to use `u32`, we would have suffered the same fate.
